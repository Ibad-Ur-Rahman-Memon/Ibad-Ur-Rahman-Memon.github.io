import { profile } from '@/data/personal';
import { AnchorButton } from '@/components/ui/Button';
import { PageContainer } from '@/components/ui/PageContainer';

/**
 * Contact section.
 *
 * Uses only verified contact data from src/data/personal.ts: email,
 * GitHub, LinkedIn, and the resume download. Phone number and detailed
 * location are intentionally excluded. No URLs or addresses are
 * invented.
 */
export function ContactSection() {
  const email = profile.social.find((s) => s.type === 'email');
  const github = profile.social.find((s) => s.type === 'github');
  const linkedin = profile.social.find((s) => s.type === 'linkedin');

  return (
    <section id="contact" className="section border-t border-border">
      <PageContainer>
        <div className="section-heading">
          <span className="eyebrow">09</span>
          <h2>Contact</h2>
          <p>Get in touch or download a copy of my resume.</p>
        </div>

        <div className="card card-hover max-w-3xl p-6 sm:p-8">
          <p className="text-base text-foreground sm:text-lg">
            Interested in collaboration, research, or engineering roles? Reach out.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {email ? (
              <AnchorButton href={email.href} variant="primary" size="lg">
                Email Me
              </AnchorButton>
            ) : null}
            {profile.resumeUrl ? (
              <AnchorButton href={profile.resumeUrl} variant="secondary" size="lg" download>
                Download Resume
              </AnchorButton>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
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
            {email ? (
              <a href={email.href} className="btn btn-ghost sm" aria-label={`Email ${email.value}`}>
                {email.value}
              </a>
            ) : null}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
