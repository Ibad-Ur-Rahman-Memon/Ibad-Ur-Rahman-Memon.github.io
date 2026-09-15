import type { Certification } from './types';

/**
 * Certifications and structured courses.
 * Distinct from subjects or areas of interest listed on the resume.
 *
 * Only verified certificate/course records are included. "Areas of
 * Interest" entries from the resume (e.g. Artificial Intelligence,
 * Machine Learning, Robotics, Cybersecurity, NLP, Software Engineering,
 * Computer Vision, HCI, Embedded Systems, Intelligent Systems, Research
 * & Innovation, Generative AI) are intentionally excluded — they are
 * fields of study, not credentials.
 *
 * Issuers, dates, credential IDs, and URLs are included only where the
 * source data verifies them.
 */
export const certifications: Certification[] = [
  {
    name: 'Cisco Networking Essentials',
    issuer: undefined,
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'course',
  },
  {
    name: 'Introduction to Ethical Hacking',
    issuer: 'Great Learning',
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'course',
  },
  {
    name: 'System Administration and IT Infrastructure Services',
    issuer: 'Google',
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'certification',
  },
  {
    name: 'IT Security: Defense against the Digital Dark Arts',
    issuer: 'Google',
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'certification',
  },
  {
    name: 'What is Generative AI',
    issuer: 'LinkedIn Learning',
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'course',
  },
  {
    name: 'Foundations of Cybersecurity',
    issuer: 'Google',
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'certification',
  },
  {
    name: 'Crash Course on Python',
    issuer: 'Google',
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'course',
  },
  {
    name: 'Introduction to AI',
    issuer: 'Google',
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'course',
  },
  {
    name: 'Operating Systems and You: Becoming a Power User',
    issuer: 'Google',
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'course',
  },
  {
    name: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'course',
  },
  {
    name: 'Foundations of Project Management',
    issuer: 'Google',
    date: undefined,
    credentialId: undefined,
    credentialUrl: undefined,
    type: 'course',
  },
];
