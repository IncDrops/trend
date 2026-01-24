# **App Name**: Trend Oracle

## Core Features:

- Landing Page: Show a Hero section with the app's core value proposition, input text area for video idea description, and a CTA button to start the virality prediction.
- Virality Prediction: Accept user input (video idea description), call the Genkit flow for virality prediction, and return a JSON object containing the virality score, critique, and optimized hook.
- Payment Processing: Implement Stripe integration to handle payments for virality predictions. This will be triggered when users click on the 'Audit My Idea' button.
- Results Dashboard: Display a dashboard with the virality score (using a circular progress gauge), the algorithm's critique (text stream), and the optimized hook.
- Algorithm's Critique Tool: The 'Algorithm' uses reasoning as a tool in a server-side Genkit flow to determine the virality score, provide a critique, and generate an optimized hook script.

## Style Guidelines:

- Background color: Almost black (#050505) to establish a dark mode, high-energy, 'influencer' aesthetic.
- Primary color: TikTok Cyan (#00f2ea) for high scores/accents to give a futuristic look.
- Secondary color: TikTok Pink (#ff0050) for low scores/warnings, conveying an alert for average ideas.
- Font: 'Inter' (sans-serif) for text to provide a clean and modern reading experience.
- Main Title Font: A heavy, bold font with a 'Glitch' CSS effect (if possible) to make it high-energy.
- Favicon: Use a fire emoji SVG Data URI: data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔥</text></svg>
- The Result Page must follow a dashboard-style layout.
- Animate the Circular Progress Gauge to draw the eye.