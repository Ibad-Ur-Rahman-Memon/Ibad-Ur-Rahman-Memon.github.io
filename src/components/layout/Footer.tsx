import { profile } from '@/data/personal';
import { AnchorButton } from '@/components/ui/Button';
import { PageContainer } from '@/components/ui/PageContainer';

/**
 * App footer.
 *
 * Compact, clean sign-off using only verified identity and contact
 * data. No phone number, address, or unverified information.
 */
export function Footer() {
  const github = profile.social.find((s) => s.type === 'github');
  const linkedin = profile.social.find((s) => s.type === 'linkedin');
  const email = profile.social.find((s) => s.type === 'email');

  return (
    <footer className="border-t border-border">
      <PageContainer>
        <div className="flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:py-6">
          <div>
            <p className="text-sm font-medium text-foreground">{profile.name}</p>
            <p className="text-xs text-muted-foreground">{profile.title}</p>
          </div>

          <nav aria-label="Footer" className="flex items-center gap-2">
            {email ? (
              <AnchorButton
                href={email.href}
                variant="ghost"
                size="sm"
                aria-label={`Email ${email.value}`}
              >
                Email
              </AnchorButton>
            ) : null}
            {github ? (
              <AnchorButton
                href={github.href}
                variant="ghost"
                size="sm"
                target="_blank"
                rel="noreferrer"
                aria-label={`GitHub (${github.value})`}
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
                aria-label={`LinkedIn (${linkedin.value})`}
              >
                LinkedIn
              </AnchorButton>
            ) : null}
            {profile.resumeUrl ? (
              <AnchorButton
                href={profile.resumeUrl}
                variant="ghost"
                size="sm"
                download
                aria-label="Download resume"
              >
                Resume
              </AnchorButton>
            ) : null}
          </nav>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
