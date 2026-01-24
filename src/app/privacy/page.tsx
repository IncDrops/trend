import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-6">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
          <p>Last updated: 1/24/2026</p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">1. Introduction</h2>
          <p>
            WillItTrend.com ("we," "us," or "the Service") respects the creative integrity of your content. We understand that your video ideas and scripts are your Intellectual Property (IP).
          </p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">2. Information We Collect</h2>
          <ul>
            <li><strong>Content Ideas:</strong> The text descriptions, scripts, or hooks you enter into the analysis tool.</li>
            <li><strong>Transaction Data:</strong> Payment processing is handled entirely by Stripe. We do not access or store your full credit card information.</li>
            <li><strong>Usage Data:</strong> Anonymous metrics on site traffic and generation frequency to improve our service.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground pt-4">3. How We Handle Your Ideas (The "No Theft" Clause)</h2>
          <ul>
            <li><strong>Transient Processing:</strong> Your video ideas are sent to our AI provider (Google Gemini) <strong>solely</strong> to generate the critique and score.</li>
            <li><strong>No Retention:</strong> We do not build a database of user video ideas. Once the analysis is delivered to your screen, the text of your idea is discarded from our immediate application memory.</li>
            <li><strong>No Training:</strong> We do not use your specific content ideas to train our own AI models.</li>
            <li><strong>No Reuse:</strong> We will not take your submitted ideas and use them for our own social media channels.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground pt-4">4. Third-Party Sharing</h2>
          <p>We share data only with essential infrastructure providers:</p>
          <ul>
            <li><strong>Stripe:</strong> For secure payment processing.</li>
            <li><strong>Google AI:</strong> For text generation (subject to Google's Enterprise Data Privacy standards).</li>
            <li><strong>Legal Authorities:</strong> Only if compelled by a valid court order.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-foreground pt-4">5. Security</h2>
          <p>
            We use industry-standard SSL/TLS encryption to protect data in transit. However, no internet transmission is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">6. Contact</h2>
          <p>
            For privacy concerns: <strong>privacy@willittrend.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
