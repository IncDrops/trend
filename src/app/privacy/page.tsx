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
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to Trend Oracle ("we", "our", "us"). We are committed to
            protecting your privacy. This Privacy Policy explains how your
            personal information is collected, used, and disclosed by Trend
            Oracle.
          </p>
          <h2 className="text-2xl font-semibold text-foreground pt-4">Information We Collect</h2>
          <p>
            We collect information you provide directly to us. When you submit a
            video idea, we process that text to provide our service. We do not
            store your video ideas after the analysis is complete. For payment
            processing, we use Stripe, a third-party payment processor. We do
            not collect or store your payment card details. That information is
            provided directly to Stripe, whose use of your personal information
            is governed by their Privacy Policy.
          </p>
          <h2 className="text-2xl font-semibold text-foreground pt-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to operate, maintain, and provide
            you with the features and functionality of the service, and to
            process transactions. We do not use your video ideas for any other
            purpose.
          </p>
          <h2 className="text-2xl font-semibold text-foreground pt-4">Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties except
            as described in this Privacy Policy. We may share your information
            with third-party vendors and service providers that perform services
            on our behalf, such as payment processing (Stripe) and AI model
            providers (Google).
          </p>
          <h2 className="text-2xl font-semibold text-foreground pt-4">Data Retention</h2>
          <p>
            This is a stateless application. We do not maintain a database and do not
            retain your video idea or the results of the analysis. Information
            related to your transaction is stored by Stripe according to their
            data retention policies.
          </p>
          <h2 className="text-2xl font-semibold text-foreground pt-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>
    </div>
  );
}
