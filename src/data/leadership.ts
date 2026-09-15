import type { LeadershipExperience } from './types';

/**
 * Leadership and extracurricular roles, kept separate from employment history.
 *
 * Entries are taken from the verified resume data. Dates, organizations,
 * and descriptions are preserved as supplied; fields not verified in the
 * source are left undefined rather than guessed.
 */
export const leadership: LeadershipExperience[] = [
  {
    organization: "IBA University Students' Council",
    role: 'Council Member',
    event: undefined,
    location: undefined,
    startDate: '2023',
    endDate: '2024',
    description:
      "Served as Coordinator of the Computer Systems Engineering Society, organizing SIBA Fest'24 and other technical events.",
  },
  {
    organization: 'Computer Systems Engineering Society (SISC)',
    role: 'Coordinator',
    event: undefined,
    location: 'Sukkur IBA University',
    startDate: '2023',
    endDate: '2024',
    description: undefined,
  },
  {
    organization: 'Pakistan Literature Festival 2023',
    role: 'Team Lead',
    event: 'Pakistan Literature Festival 2023',
    location: 'Sukkur IBA University',
    startDate: undefined,
    endDate: undefined,
    description:
      'Led the Disciplinary team at a two-day literature event at Sukkur IBA University.',
  },
  {
    organization: "IBA University Students' Council",
    role: 'Student Volunteer',
    event: 'Career Fair 2024',
    location: undefined,
    startDate: undefined,
    endDate: undefined,
    description:
      'Assisted in organizing Career Fair 2024 as part of the Students’ Council Disciplinary Team.',
  },
  {
    organization: "Sukkur IBA University Students' Council",
    role: 'Event Coordinator',
    event: undefined,
    location: 'Sukkur IBA University',
    startDate: undefined,
    endDate: undefined,
    description:
      'Organized farewell parties, project exhibitions, and technical seminars at Sukkur IBA University.',
  },
  {
    organization: 'Sukkur IBA University',
    role: 'Student Volunteer',
    event: '5th International Conference on Business, Economics & Management',
    location: 'Sukkur IBA University',
    startDate: '03/2024',
    endDate: undefined,
    description:
      'Assisted in the 5th International Conference on Business, Economics & Management at Sukkur IBA University.',
  },
  {
    organization: 'CSE Department, Sukkur IBA University',
    role: 'Participant',
    event: 'Project Exhibition',
    location: 'Sukkur IBA University',
    startDate: undefined,
    endDate: undefined,
    description: 'Presented a project under the Engineering Workshop domain.',
  },
];
