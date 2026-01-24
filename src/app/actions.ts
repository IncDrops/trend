
'use server';

import { predictVirality } from '@/ai/flows/predict-virality';
import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const formSchema = z.object({
  idea: z.string().min(10, { message: 'Please describe your idea in at least 10 characters.' }).max(1000, { message: 'Your idea is too long. Please keep it under 1000 characters.' }),
});

type State = {
  message?: string;
  error?: string;
  fieldErrors?: {
    idea?: string[];
  };
};

export async function createCheckoutSession(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = formSchema.safeParse({
    idea: formData.get('idea'),
  });

  if (!validatedFields.success) {
    return {
      error: "Validation failed.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { idea } = validatedFields.data;

  try {
    const viralityPrediction = await predictVirality({ idea });

    const metadata: { [key: string]: string } = {
      score: viralityPrediction.score.toString(),
      hook_script: viralityPrediction.hook_script,
    };

    // Chunk critique for Stripe metadata
    const critique = viralityPrediction.critique;
    const critiqueChunks = critique.match(/.{1,500}/g) || [];
    if (critiqueChunks.length > 10) { // Stripe metadata limit is generous, but let's be safe
        return { error: 'The generated critique is too long for processing.' };
    }
    critiqueChunks.forEach((chunk, index) => {
      metadata[`critique_${index}`] = chunk;
    });
    metadata['critique_chunks'] = critiqueChunks.length.toString();


    const domain = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:9002';

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Virality Score & Critique',
              description: idea.substring(0, 100) + (idea.length > 100 ? '...' : ''),
            },
            unit_amount: 100, // $1.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${domain}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/`,
      metadata,
    });
    
    if (!checkoutSession.url) {
        return { error: 'Could not create Stripe session.' };
    }
    
    redirect(checkoutSession.url);

  } catch (error: any) {
    console.error(error);
    return { error: error.message || 'An unexpected error occurred on our end. Please try again.' };
  }
}
