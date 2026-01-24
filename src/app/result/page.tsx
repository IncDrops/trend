import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import ResultDashboard from '@/components/result-dashboard';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

async function getResultData(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== 'paid') {
      throw new Error('Payment not completed.');
    }

    const metadata = session.metadata;
    if (!metadata || !metadata.score || !metadata.hook_script || !metadata.critique_chunks) {
      throw new Error('Result metadata not found.');
    }

    const score = parseInt(metadata.score, 10);
    const hook_script = metadata.hook_script;
    const critique_chunks_count = parseInt(metadata.critique_chunks, 10);
    
    let critique = '';
    for (let i = 0; i < critique_chunks_count; i++) {
      critique += metadata[`critique_${i}`] || '';
    }

    return { score, critique, hook_script };
  } catch (error) {
    console.error('Error fetching result data:', error);
    return null;
  }
}

function ResultSkeleton() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8">
            <div className="flex flex-col items-center justify-center">
                <Skeleton className="h-48 w-48 rounded-full" />
                <Skeleton className="h-8 w-48 mt-4" />
            </div>
            <div className="space-y-6">
                <Skeleton className="h-10 w-1/3" />
                <Skeleton className="h-24 w-full" />
            </div>
            <div className="space-y-6">
                <Skeleton className="h-10 w-1/3" />
                <Skeleton className="h-16 w-full" />
            </div>
        </div>
    )
}

function ErrorDisplay({ message }: { message: string }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <Alert variant="destructive" className="max-w-md">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {message}
                </AlertDescription>
            </Alert>
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mt-8">
                <ArrowLeft size={16} />
                Return to Home
            </Link>
        </div>
    );
}

export default async function ResultPage({ searchParams }: { searchParams: { session_id?: string } }) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    redirect('/');
  }

  const data = await getResultData(sessionId);

  return (
    <div className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto py-8">
            <Suspense fallback={<ResultSkeleton />}>
                {data ? (
                    <ResultDashboard score={data.score} critique={data.critique} hook_script={data.hook_script} />
                ) : (
                    <ErrorDisplay message="Could not retrieve your result. Please check if your payment was successful or try again." />
                )}
            </Suspense>
        </main>
    </div>
  );
}
