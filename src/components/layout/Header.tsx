import { useEffect, useState } from 'react';
import { profile } from '@/data/personal';
import { AnchorButton, Button } from '@/components/ui/Button';
import { PageContainer } from '@/components/ui/PageContainer';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/cn';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'publication', label: 'Publication' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let frameId: number | null = null;

    const updateActiveSection = () => {
      frameId = null;
      const activationLine = 120;
      let nextActiveSection: string | null = null;

      for (const link of navLinks) {
        const heading = document
          .getElementById(link.id)
          ?.querySelector<HTMLElement>('.section-heading');
        if (heading && heading.getBoundingClientRect().top <= activationLine) {
          nextActiveSection = link.id;
        }
      }

      const reachedPageEnd =
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (reachedPageEnd) nextActiveSection = navLinks[navLinks.length - 1].id;

      setActiveSection((current) => (current === nextActiveSection ? current : nextActiveSection));
    };

    const scheduleUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <PageContainer>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl"
          >
            <span>{profile.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link"
                aria-current={activeSection === link.id ? 'location' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <AccountLinks className="hidden items-center gap-1 xl:flex" />
            <ThemeToggle />
            <AnchorButton
              href={profile.resumeUrl}
              variant="ghost"
              size="sm"
              download
              className="hidden xl:inline-flex"
            >
              Resume
            </AnchorButton>
            <Button
              variant="ghost"
              size="sm"
              className="xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle menu</span>
              {open ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </PageContainer>

      <div
        id="mobile-nav"
        className={cn('border-t border-border bg-background xl:hidden', open ? 'block' : 'hidden')}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-1 px-5 py-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav-link block w-full text-left"
              aria-current={activeSection === link.id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
            <AccountLinks className="items-center gap-1" />
            <ThemeToggle />
            <AnchorButton
              href={profile.resumeUrl}
              variant="primary"
              size="sm"
              download
              className="flex-1"
            >
              Resume
            </AnchorButton>
          </div>
        </div>
      </div>
    </header>
  );
}

function AccountLinks({ className }: { className?: string }) {
  const accounts = [
    profile.social.find((social) => social.type === 'github'),
    profile.social.find((social) => social.type === 'linkedin'),
    profile.social.find((social) => social.type === 'email'),
  ].filter((social) => social !== undefined);

  return (
    <nav aria-label="Account links" className={cn('flex', className)}>
      {accounts.map((account) => (
        <a
          key={account.type}
          href={account.href}
          aria-label={account.label}
          title={account.label}
          target={account.type === 'email' ? undefined : '_blank'}
          rel={account.type === 'email' ? undefined : 'noreferrer'}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          <AccountIcon type={account.type} />
        </a>
      ))}
    </nav>
  );
}

function AccountIcon({ type }: { type: string }) {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.6 2.13 3.1 1.53.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9.02h2.97v9.43ZM6.45 7.73a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.72h-2.96v-4.59c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41v4.67H9.26V9.02h2.84v1.29h.04c.4-.74 1.36-1.52 2.8-1.52 3 0 3.55 1.97 3.55 4.53v5.13Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
