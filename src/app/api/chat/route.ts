import { NextRequest, NextResponse } from 'next/server';

// Only import OpenAI if API key is available
let openai: any = null;
if (process.env.OPENAI_API_KEY) {
  const { default: OpenAI } = require('openai');
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

const SYSTEM_PROMPT = `You are the Keep Pets Alive info assistant. Be concise, warm, and action-oriented.

Prioritize local context: fostering steps, zero-cost fosters (rescue covers food/medical), BFAS affiliation, urgent "last chance" focus, donate placeholder status, contact email, newsletter, trivia page, adoptables directory.

When unsure, ask a brief follow-up and offer to open relevant page.

Never claim to process payments; route to /donate.

Provide links as relative site paths (e.g., /apply-to-foster).

Key information:
- Fostering is free - rescues cover all costs
- Most foster periods last 2-8 weeks
- Contact: info@keeppetsalive.org
- Donations are tax-deductible (501c3)
- We work with rescue partners, not direct intake
- Focus on connecting foster families with rescue pets`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    if (!openai) {
      return NextResponse.json(
        { error: 'AI chat is not available. Please contact us directly.' },
        { status: 503 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 750,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
