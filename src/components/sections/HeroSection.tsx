import { profile } from '@/data/personal';
import { AnchorButton } from '@/components/ui/Button';
import { PageContainer } from '@/components/ui/PageContainer';

/**
 * Premium Hero section.
 *
 * Uses only verified data from src/data/personal.ts. No invented
 * statistics, years of experience, or imagery.
 */
export function HeroSection() {
  const github = profile.social.find((s) => s.type === 'github');
  const linkedin = profile.social.find((s) => s.type === 'linkedin');

  return (
    <section id="top" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_srgb,var(--accent)_10%,transparent),transparent_70%)]"
      />
      <PageContainer className="relative">
        <div className="flex flex-col items-start gap-8 py-16 sm:py-20 lg:py-24">
          <span className="eyebrow">Portfolio</span>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">{profile.title}</p>
          </div>

          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>{profile.summary}</p>
            {profile.additionalContext ? (
              <p className="text-muted-foreground/90">{profile.additionalContext}</p>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <AnchorButton href="#projects" variant="primary" size="lg">
              View Projects
            </AnchorButton>
            <AnchorButton href={profile.resumeUrl} variant="secondary" size="lg" download>
              Download Resume
            </AnchorButton>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-muted-foreground">
            {github ? (
              <AnchorButton
                href={github.href}
                variant="ghost"
                size="sm"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </AnchorButton>
            ) : null}
            {linkedin ? (
              <AnchorButton
                href={linkedin.href}
                variant="ghost"
                size="sm"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </AnchorButton>
            ) : null}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
