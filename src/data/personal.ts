import type { Profile } from './types';

/**
 * Single source of truth for personal identity.
 *
 * Content intentionally left undefined until verified portfolio data is supplied.
 */
export const profile: Profile = {
  name: '',
  title: '',
  summary: '',
  location: undefined,
  email: undefined,
  phone: undefined,
  avatar: '/images/profile.jpg',
  resumeUrl: '/resume/Ibad-Ur-Rahman-Detailed-Resume.pdf',
  social: [],
  interests: [],
};
