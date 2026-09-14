import { useState } from 'react';
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

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <PageContainer>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl"
          >
            <span className="text-accent">{profile.name.split(' ')[0]}</span>
            <span className="hidden sm:inline text-muted">.</span>
            <span className="hidden sm:inline text-foreground">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="nav-link" aria-current="false">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <AnchorButton
              href={profile.resumeUrl}
              variant="ghost"
              size="sm"
              download
              className="hidden sm:inline-flex"
            >
              Resume
            </AnchorButton>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
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
        className={cn('border-t border-border bg-background md:hidden', open ? 'block' : 'hidden')}
        aria-hidden={!open}
      >
        <div className="space-y-1 px-5 py-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav-link"
              aria-current="false"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
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
