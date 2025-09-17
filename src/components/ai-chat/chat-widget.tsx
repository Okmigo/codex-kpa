"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! Need help with fostering, donating, or adoptables?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I\'m having trouble connecting right now. Please try again later or contact us directly.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content: string) => {
    // Simple link detection and formatting
    const linkRegex = /(\/[a-zA-Z0-9\-/]+)/g;
    return content.split(linkRegex).map((part, index) => {
      if (linkRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            className="text-brand hover:text-brand-hover underline"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = part;
            }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-strong z-50"
          size="icon"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-strong border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-brand" />
              </div>
              <div>
                <h3 className="font-semibold text-ink">Keep Pets Alive Assistant</h3>
                <p className="text-xs text-ink-muted">Ask me anything!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-3 w-3 text-brand" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    message.role === 'user'
                      ? 'bg-brand text-white'
                      : 'bg-bg-subtle text-ink'
                  }`}
                >
                  <div className="whitespace-pre-wrap">
                    {formatMessage(message.content)}
                  </div>
                  <div
                    className={`text-xs mt-1 ${
                      message.role === 'user' ? 'text-white/70' : 'text-ink-muted'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
                {message.role === 'user' && (
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="h-3 w-3 text-accent" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="h-3 w-3 text-brand" />
                </div>
                <div className="bg-bg-subtle rounded-lg px-3 py-2 text-sm text-ink">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-ink-muted rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-ink-muted rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-ink-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                size="icon"
                className="flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-ink-muted mt-2">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      )}
    </>
  );
}



