import type { Publication } from './types';

/**
 * Academic and industry publications.
 *
 * Single entry, verified from the resume data. No DOI, URL, authors,
 * journal ranking, citation count, or dataset name are included —
 * none were verified.
 */
export const publications: Publication[] = [
  {
    title: 'Gastrointestinal Tract Lesion Classification Using Deep Involution Neural Networks',
    venue: 'Pakistan Journal of Medical & Cardiological Review',
    date: '12/03/2026',
    description:
      'Co-authored a lightweight four-layer Deep Involution Neural Network for gastrointestinal tract lesion classification, distinguishing between Normal, Ulcerative Colitis, Polyps, and Esophagitis.',
    methodology: 'Lightweight four-layer Deep Involution Neural Network',
    result: '91.13% accuracy',
    dataset: '6,000-image public dataset',
  },
];
