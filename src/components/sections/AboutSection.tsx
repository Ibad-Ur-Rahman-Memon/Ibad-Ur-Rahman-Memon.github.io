import { profile } from '@/data/personal';
import { PageContainer } from '@/components/ui/PageContainer';
import { Reveal } from '@/components/motion/Reveal';

/**
 * Concise professional About section.
 *
 * Uses only the verified summary, additional context, and identity
 * from src/data/personal.ts. No new claims are introduced.
 *
 * Entrance motion: heading and content group reveal on viewport entry.
 */
export function AboutSection() {
  return (
    <section id="about" className="section border-t border-border">
      <PageContainer>
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">01</span>
            <h2>About</h2>
          </div>
        </Reveal>

        <Reveal delay={80} distance={16}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:items-start">
            <div>
              <p className="text-lg font-medium text-foreground sm:text-xl">{profile.name}</p>
              <p className="mt-1 text-muted-foreground">{profile.title}</p>
              {profile.location ? (
                <p className="mt-1 text-sm text-muted-foreground/80">{profile.location}</p>
              ) : null}
            </div>

            <div className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.additionalContext ? <p>{profile.additionalContext}</p> : null}
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
