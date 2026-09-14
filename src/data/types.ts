/**
 * Shared portfolio data types.
 *
 * All data files under `src/data/` conform to these interfaces so the
 * future React components can consume the data without any hardcoded
 * portfolio content.
 */

/** A single skill entry. `category` groups skills in the UI. */
export interface Skill {
  readonly name: string;
  readonly level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

/** A category of related skills. */
export interface SkillCategory {
  readonly id: string;
  readonly label: string;
  readonly skills: readonly Skill[];
}

/** One professional role / internship. `roles` supports multiple roles at one organization. */
export interface Experience {
  readonly organization: string;
  readonly role: string;
  readonly roles?: readonly string[];
  readonly location?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly current?: boolean;
  readonly responsibilities: readonly string[];
  readonly technologies?: readonly string[];
  readonly projects?: readonly string[];
}

/** One educational credential. */
export interface Education {
  readonly institution: string;
  readonly degree?: string;
  readonly fieldOfStudy?: string;
  readonly location?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly description?: string;
}

/** One portfolio project. Designed to support future case-study pages. */
export interface Project {
  readonly title: string;
  readonly slug: string;
  readonly shortDescription: string;
  readonly description?: string;
  readonly category: string;
  readonly technologies: readonly string[];
  readonly featured: boolean;
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly image?: string;
  readonly highlights?: readonly string[];
  readonly status?: 'completed' | 'ongoing' | 'archived';
}

/** One academic or industry publication. */
export interface Publication {
  readonly title: string;
  readonly venue?: string;
  readonly date?: string;
  readonly description?: string;
  readonly methodology?: string;
  readonly result?: string;
  readonly dataset?: string;
}

/** One award, prize, or recognition. */
export interface Achievement {
  readonly title: string;
  readonly organization?: string;
  readonly event?: string;
  readonly date?: string;
  readonly description?: string;
}

/** One academic scholarship or financial support award. */
export interface Scholarship {
  readonly name: string;
  readonly coverage: string;
  readonly institution?: string;
  readonly period?: string;
}

/** One leadership or extracurricular role (kept separate from employment history). */
export interface LeadershipExperience {
  readonly organization: string;
  readonly role: string;
  readonly event?: string;
  readonly location?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly description?: string;
}

/** One certification or structured course. Distinct from subjects/courses of interest. */
export interface Certification {
  readonly name: string;
  readonly issuer?: string;
  readonly date?: string;
  readonly credentialId?: string;
  readonly credentialUrl?: string;
  readonly type?: 'certification' | 'course' | 'workshop';
}

/** Contact channel. */
export interface ContactChannel {
  readonly type: 'email' | 'phone' | 'linkedin' | 'github' | 'website' | 'location';
  readonly label: string;
  readonly value: string;
  readonly href?: string;
}

/** The single source of truth for personal identity. */
export interface Profile {
  readonly name: string;
  readonly title: string;
  readonly summary: string;
  readonly additionalContext?: string;
  readonly location?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly avatar?: string;
  readonly resumeUrl?: string;
  readonly social: readonly ContactChannel[];
  readonly interests?: readonly string[];
  readonly languages?: readonly string[];
}
