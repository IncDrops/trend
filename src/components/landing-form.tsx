
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { createCheckoutSession } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full text-lg font-bold group">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-6 w-6 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          Audit My Idea ($1.00)
          <Sparkles className="ml-2 h-5 w-5 group-hover:scale-125 transition-transform" />
        </>
      )}
    </Button>
  );
}

export default function LandingForm() {
  const initialState = { message: '', error: '' };
  const [state, formAction] = useFormState(createCheckoutSession, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: state.error,
      });
    } else if (state?.fieldErrors?.idea) {
        toast({
            variant: 'destructive',
            title: 'Invalid Input',
            description: state.fieldErrors.idea.join(', '),
        });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-4">
      <Textarea
        name="idea"
        placeholder="e.g., I want to film a day in the life of a raccoon who secretly runs a tiny coffee shop."
        className="min-h-[120px] text-base p-4"
        required
      />
      <SubmitButton />
    </form>
  );
}
