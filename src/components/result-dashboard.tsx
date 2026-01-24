'use client';

import CircularProgress from '@/components/ui/circular-progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function useTypingAnimation(text: string, speed: number = 15) {
  const [animatedText, setAnimatedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!text) {
        setIsDone(true);
        return;
    };

    setAnimatedText('');
    setIsDone(false);

    let index = 0;
    const intervalId = setInterval(() => {
      setAnimatedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(intervalId);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return { animatedText, isDone };
}


export default function ResultDashboard({ score, critique, hook_script }: { score: number, critique: string, hook_script: string }) {
  
  const { animatedText: animatedCritique, isDone: critiqueDone } = useTypingAnimation(critique, 10);
  const { animatedText: animatedHook, isDone: hookDone } = useTypingAnimation(hook_script, 20);

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
        <CardContent className="text-muted-foreground text-lg min-h-[100px]">
          <p className="whitespace-pre-wrap font-mono">
            {animatedCritique}
            {!critiqueDone && <span className="inline-block w-2 h-5 bg-muted-foreground animate-ping ml-1" aria-hidden="true" />}
          </p>
        </CardContent>
      </Card>
      
      <Card className="border-primary/50 bg-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-primary">
            <Sparkles />
            Optimized Hook
          </CardTitle>
        </CardHeader>
        <CardContent className="text-primary-foreground text-lg min-h-[70px]">
           <p className="whitespace-pre-wrap font-mono">
            {animatedHook}
            {!hookDone && <span className="inline-block w-2 h-5 bg-primary-foreground animate-ping ml-1" aria-hidden="true" />}
           </p>
        </CardContent>
      </Card>

    </div>
  );
}
