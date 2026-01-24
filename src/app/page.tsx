import GlitchTitle from '@/components/glitch-title';
import LandingForm from '@/components/landing-form';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-2xl w-full">
          <GlitchTitle className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
            Will It Trend?
          </GlitchTitle>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Stop guessing. Start knowing. Get an AI-powered virality audit of your video idea for just $1.
          </p>
          <LandingForm />
        </div>
      </main>
      <footer className="py-6 px-4 text-center text-muted-foreground">
        <div className="space-x-4">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
        <p className="mt-2 text-sm">© {new Date().getFullYear()} Trend Oracle. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
