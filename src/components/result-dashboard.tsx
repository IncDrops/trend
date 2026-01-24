'use client';

import { useEffect, useState } from 'react';
import CircularProgress from '@/components/ui/circular-progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function AnimatedText({ text, speed = 15 }: { text: string, speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="whitespace-pre-wrap font-mono">{displayedText}</p>;
}

export default function ResultDashboard({ score, critique, hook_script }: { score: number, critique: string, hook_script: string }) {
  const getScoreColor = () => {
    if (score >= 80) return 'text-primary';
    if (score < 50) return 'text-destructive';
    return 'text-foreground';
  };

  const getScoreLabel = () => {
    if (score >= 90) return "Certified Banger";
    if (score >= 80) return "High Potential";
    if (score >= 60) return "Could Work";
    if (score >= 40) return "Mid";
    if (score < 40) return "Cooked";
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
       <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
          <ArrowLeft size={16} />
          Try Another Idea
        </Link>
      <div className="flex flex-col items-center justify-center">
        <CircularProgress value={score} size={200} strokeWidth={12} />
        <h2 className={`text-3xl font-bold mt-4 ${getScoreColor()}`}>{getScoreLabel()}</h2>
        <p className="text-muted-foreground">Virality Score</p>
      </div>

      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Bot />
            Algorithm's Critique
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-lg">
          <AnimatedText text={critique} />
        </CardContent>
      </Card>
      
      <Card className="border-primary/50 bg-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-primary">
            <Sparkles />
            Optimized Hook
          </CardTitle>
        </CardHeader>
        <CardContent className="text-primary-foreground text-lg">
           <AnimatedText text={hook_script} speed={30} />
        </CardContent>
      </Card>

    </div>
  );
}
