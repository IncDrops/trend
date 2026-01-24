'use server';

/**
 * @fileOverview Predicts the virality of a social media video idea, providing a score,
 * critique, and optimized hook suggestion.
 *
 * - predictVirality - The main function to predict virality.
 * - PredictViralityInput - The input type for the predictVirality function.
 * - PredictViralityOutput - The return type for the predictVirality function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictViralityInputSchema = z.object({
  idea: z.string().describe('The social media video idea description.'),
});
export type PredictViralityInput = z.infer<typeof PredictViralityInputSchema>;

const PredictViralityOutputSchema = z.object({
  score: z
    .number()
    .min(0)
    .max(100)
    .describe('The virality score of the video idea (0-100).'),
  critique: z.string().describe('The algorithm critique of the video idea.'),
  hook_script: z
    .string()
    .describe('An optimized hook script for the first 3 seconds of the video.'),
});
export type PredictViralityOutput = z.infer<typeof PredictViralityOutputSchema>;

export async function predictVirality(input: PredictViralityInput): Promise<PredictViralityOutput> {
  return predictViralityFlow(input);
}

const predictViralityPrompt = ai.definePrompt({
  name: 'predictViralityPrompt',
  input: {schema: PredictViralityInputSchema},
  output: {schema: PredictViralityOutputSchema},
  prompt: `You are The Algorithm. A ruthless Gen Z social media strategist.

  Score (0-100): Be harsh. Average ideas get 40-60. Only bangers get 90+.

  Critique: Analyze the retention potential. Use slang like 'brainrot,' 'mid,' 'cooked,' 'W,' 'L,' 'retention killer.' Be mean but helpful.

  The Hook: Write a specific, punchy opening line (0-3 seconds) to save the video.

  Video Idea: {{{idea}}}

  Output in JSON format:
  `,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
});

const predictViralityFlow = ai.defineFlow(
  {
    name: 'predictViralityFlow',
    inputSchema: PredictViralityInputSchema,
    outputSchema: PredictViralityOutputSchema,
  },
  async input => {
    const {output} = await predictViralityPrompt(input);
    return output!;
  }
);
