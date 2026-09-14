import { profile } from '@/data/personal';
import { PageContainer } from '@/components/ui/PageContainer';

/**
 * Concise professional About section.
 *
 * Uses only the verified summary, additional context, and identity
 * from src/data/personal.ts. No new claims are introduced.
 */
export function AboutSection() {
  return (
    <section id="about" className="section border-t border-border">
      <PageContainer>
        <div className="section-heading">
          <span className="eyebrow">01</span>
          <h2>About</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="text-lg font-medium text-foreground sm:text-xl">{profile.name}</p>
            <p className="mt-1 text-muted-foreground">{profile.title}</p>
            {profile.location ? (
              <p className="mt-1 text-sm text-muted-foreground/80">{profile.location}</p>
            ) : null}
          </div>

          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>{profile.summary}</p>
            {profile.additionalContext ? (
              <p className="text-muted-foreground/90">{profile.additionalContext}</p>
            ) : null}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
