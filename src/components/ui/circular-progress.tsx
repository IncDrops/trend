'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

type CircularProgressProps = {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function CircularProgress({
  value = 0,
  size = 120,
  strokeWidth = 8,
  className,
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress on mount
    const animationTimeout = setTimeout(() => setProgress(value), 100);
    return () => clearTimeout(animationTimeout);
  }, [value]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const scoreColorClass = 
    value >= 80 ? 'stroke-primary' : 
    value < 50 ? 'stroke-destructive' : 
    'stroke-foreground';

  return (
    <div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="stroke-muted/30"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={cn('transition-all duration-1000 ease-out', scoreColorClass)}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="absolute text-4xl font-bold">{Math.round(progress)}</span>
    </div>
  );
}
