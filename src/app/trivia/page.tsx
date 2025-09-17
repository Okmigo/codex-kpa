"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, Share2, Twitter, Facebook, Copy, Trophy, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRIVIA_CONFIG } from "@/lib/constants";
import { copyToClipboard, generateShareText } from "@/lib/utils";
import questionsData from "@/data/trivia/questions.json";
import mascotData from "@/data/trivia/mascot.json";

type Question = typeof questionsData[0];

export default function Trivia() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showShare, setShowShare] = useState(false);

  const currentQuestion = questionsData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionsData.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    if (answerIndex === currentQuestion.answerIndex) {
      setScore(score + 1);
    }
    
    setAnswers([...answers, answerIndex]);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
    setAnswers([]);
    setShowShare(false);
  };

  const getScoreMessage = () => {
    if (score >= 4) return { message: "Pawsome!", emoji: "🏆", color: "text-yellow-600" };
    if (score >= 3) return { message: "Great job!", emoji: "⭐", color: "text-blue-600" };
    if (score >= 2) return { message: "Good effort!", emoji: "👍", color: "text-green-600" };
    return { message: "Thanks for playing!", emoji: "🐾", color: "text-brand" };
  };

  const getShareText = () => {
    const scoreMessage = getScoreMessage();
    return `I just scored ${score}/${questionsData.length} on the Weekly Wag Trivia! ${scoreMessage.message} 🐾 Test your pet knowledge at keeppetsalive.org/trivia`;
  };

  const handleShare = async (platform: string) => {
    const shareText = getShareText();
    const url = window.location.href;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        try {
          await copyToClipboard(`${shareText} ${url}`);
          setShowShare(false);
        } catch (error) {
          console.error('Failed to copy:', error);
        }
        break;
    }
  };

  if (showResults) {
    const scoreMessage = getScoreMessage();
    const earnedBadge = score >= TRIVIA_CONFIG.passingScore;

    return (
      <div className="min-h-screen bg-gradient-to-br from-brand/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="py-12">
                {/* Mascot Animation Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-brand/20 to-accent/20 rounded-full flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">{scoreMessage.emoji}</div>
                    <p className="text-xs text-ink-muted">{mascotData.name}</p>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-ink mb-4">
                  {scoreMessage.message}
                </h1>
                
                <div className="text-6xl font-bold text-brand mb-4">
                  {score}/{questionsData.length}
                </div>
                
                <p className="text-xl text-ink-muted mb-6">
                  You got {score} out of {questionsData.length} questions correct!
                </p>

                {earnedBadge && (
                  <div className="mb-6">
                    <Badge variant="accent" className="text-lg px-4 py-2">
                      <Trophy className="h-5 w-5 mr-2" />
                      Gold Paw Badge Earned!
                    </Badge>
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/apply-to-foster">
                      {earnedBadge ? "Start Your Foster Journey" : "Learn About Fostering"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setShowShare(!showShare)}
                      className="flex-1"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Score
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleRestart}
                      className="flex-1"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Play Again
                    </Button>
                  </div>
                </div>

                {/* Share Options */}
                {showShare && (
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-ink mb-4">Share your score!</h3>
                    <div className="flex gap-3 justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare('twitter')}
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare('facebook')}
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare('copy')}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Link
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Weekly Wag Trivia
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Test your knowledge about pet care, fostering, and rescue! 
              Meet {mascotData.name}, our friendly {mascotData.breed} mascot.
            </p>
            
            {/* Mascot */}
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-brand/20 to-accent/20 rounded-full flex items-center justify-center">
              <div className="text-center space-y-1">
                <Heart className="h-8 w-8 text-brand mx-auto" />
                <p className="text-xs text-ink-muted">{mascotData.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <CardTitle className="text-2xl">Question {currentQuestionIndex + 1} of {questionsData.length}</CardTitle>
                    <CardDescription>Test your pet knowledge!</CardDescription>
                  </div>
                  <Badge variant="outline">
                    Score: {score}/{currentQuestionIndex}
                  </Badge>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-brand h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questionsData.length) * 100}%` }}
                  />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <h2 className="text-xl font-semibold text-ink">
                  {currentQuestion.question}
                </h2>
                
                <div className="space-y-3">
                  {currentQuestion.choices.map((choice, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentQuestion.answerIndex;
                    const isWrong = isSelected && !isCorrect;
                    
                    let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-colors ";
                    
                    if (isAnswered) {
                      if (isCorrect) {
                        buttonClass += "border-accent bg-accent/10 text-accent";
                      } else if (isWrong) {
                        buttonClass += "border-warn bg-warn/10 text-warn";
                      } else {
                        buttonClass += "border-gray-200 bg-gray-50 text-ink-muted";
                      }
                    } else {
                      buttonClass += isSelected 
                        ? "border-brand bg-brand/10 text-brand" 
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
                    }
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={isAnswered}
                        className={buttonClass}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            isAnswered && isCorrect 
                              ? "border-accent bg-accent text-white" 
                              : isAnswered && isWrong
                              ? "border-warn bg-warn text-white"
                              : isSelected
                              ? "border-brand bg-brand text-white"
                              : "border-gray-300"
                          }`}>
                            {isAnswered && isCorrect && <Star className="h-3 w-3" />}
                            {isAnswered && isWrong && <span className="text-xs">✕</span>}
                            {!isAnswered && isSelected && <span className="text-xs">✓</span>}
                          </div>
                          <span>{choice}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                
                {isAnswered && (
                  <div className="p-4 bg-bg-subtle rounded-lg">
                    <h3 className="font-semibold text-ink mb-2">Explanation:</h3>
                    <p className="text-ink-muted">{currentQuestion.explanation}</p>
                  </div>
                )}
                
                {isAnswered && (
                  <Button 
                    onClick={handleNext}
                    className="w-full"
                    size="lg"
                  >
                    {isLastQuestion ? "See Results" : "Next Question"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Ready to Make a Real Difference?</h2>
            <p className="text-xl opacity-90">
              Now that you've tested your knowledge, put it into action! 
              Become a foster parent and help save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="xl" className="text-lg">
                <Link href="/apply-to-foster">
                  Become a Foster
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="text-lg border-white text-white hover:bg-white hover:text-brand">
                <Link href="/adoptables">View Available Pets</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



