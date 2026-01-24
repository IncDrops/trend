import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-6">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
          <p><strong>Last Updated:</strong> 1/24/2026</p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">1. The Service</h2>
          <p>
              WillItTrend.com provides an AI-powered analysis of social media content ideas. The feedback is delivered by a fictional "Algorithm Persona" and is intended for <strong>entertainment and educational purposes</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">2. No Guarantees of Virality</h2>
          <ul>
              <li><strong>Predictive Nature:</strong> Social media algorithms (TikTok, YouTube, Instagram) are volatile and unpredictable. Our "Virality Score" is a simulation based on common engagement metrics, not a guarantee of future performance.</li>
              <li><strong>Limitation:</strong> We are not responsible if content rated highly by our tool fails to perform, or if content rated poorly goes viral. You are responsible for your own creative execution.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground pt-4">3. Payments & Refunds</h2>
          <ul>
              <li><strong>Price:</strong> $1.00 USD per audit.</li>
              <li><strong>Final Sale:</strong> Due to the immediate costs of AI processing, <strong>all sales are final</strong>. We do not offer refunds based on the outcome of the analysis (e.g., getting a low score or a harsh critique).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground pt-4">4. Intellectual Property</h2>
          <ul>
              <li><strong>Your IP:</strong> You retain full ownership of the video ideas and scripts you submit.</li>
              <li><strong>Our IP:</strong> We own the "WillItTrend" brand, the UI assets, and the proprietary system prompts used to generate the analysis.</li>
              <li><strong>License:</strong> You are free to share screenshots of your Audit Results on social media.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground pt-4">5. Prohibited Content</h2>
          <p>You agree NOT to submit ideas involving:</p>
          <ul>
              <li>Illegal acts or dangerous challenges.</li>
              <li>Hate speech, harassment, or explicit violence.</li>
              <li>Non-consensual sexual content.</li>
              <li>We reserve the right to block access to users attempting to generate such content.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground pt-4">6. Limitation of Liability</h2>
          <p>
              To the maximum extent permitted by law, WillItTrend.com is not liable for any direct, indirect, or consequential damages (including loss of views, revenue, or reputation) arising from your use of this Service. Our liability is limited to the purchase price (<strong>$1.00</strong>).
          </p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">7. Governing Law</h2>
          <p>
              These Terms are governed by the laws of the United States.
          </p>

          <h2 className="text-2xl font-semibold text-foreground pt-4">8. Contact</h2>
          <p>
              Support: <strong>support@willittrend.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
