export interface MemoryItem {
  id: string;
  imagePath: string;
  tag: string;
  caption: string;
  altText: string;
  rotationDeg: number;
}

export interface NameLetterItem {
  letter: string;
  title: string;
  meaning: string;
  x: number;
  y: number;
}

export const MEMORIES: MemoryItem[] = [
  {
    id: 'memory-1',
    imagePath: '/images/01-campus-gate-smiles.jpg',
    tag: 'Memory 01 · Together at the Gate ✦',
    caption: '“Good company, brighter memories.”',
    altText: 'Group selfie of six friends smiling and giving thumbs up outside the campus gate',
    rotationDeg: -2.2,
  },
  {
    id: 'memory-2',
    imagePath: '/images/02-mirror-magic.jpg',
    tag: 'Memory 02 · Roadside Reflection ✨',
    caption: '“A little mirror magic ✨”',
    altText: 'Friends posing for a group reflection selfie in a convex roadside mirror',
    rotationDeg: 1.8,
  },
  {
    id: 'memory-3',
    imagePath: '/images/03-one-frame-smiles.jpg',
    tag: 'Memory 03 · Under the Canopy 🌿',
    caption: '“One frame, so many smiles.”',
    altText: 'Close-up group selfie of six friends smiling on a sunlit tree-lined road',
    rotationDeg: -1.4,
  },
  {
    id: 'memory-4',
    imagePath: '/images/04-pikachu-electric-day.jpg',
    tag: 'Memory 04 · Pikachu Squad ⚡',
    caption: '“The day got a little more electric ⚡”',
    altText: 'Seven friends wearing Pikachu visors standing in front of a giant inflatable Pikachu',
    rotationDeg: 2.1,
  },
  {
    id: 'memory-5',
    imagePath: '/images/05-lovely-chapter-walk.jpg',
    tag: 'Memory 05 · Strolling Along 🌸',
    caption: '“A lovely little chapter together.”',
    altText: 'Group selfie of friends walking together down a tree-lined street',
    rotationDeg: -1.6,
  },
];

export const NAME_LETTERS: NameLetterItem[] = [
  {
    letter: 'R',
    title: 'Radiant',
    meaning: 'You bring your own little sunshine.',
    x: 210,
    y: 230,
  },
  {
    letter: 'I',
    title: 'Inspiring',
    meaning: 'Keep being wonderfully you.',
    x: 275,
    y: 150,
  },
  {
    letter: 'T',
    title: 'Thoughtful',
    meaning: 'Little kindnesses make a big difference.',
    x: 355,
    y: 105,
  },
  {
    letter: 'U',
    title: 'Unique',
    meaning: 'There’s no second version of you.',
    x: 445,
    y: 105,
  },
  {
    letter: 'J',
    title: 'Joyful',
    meaning: 'May laughter find you every day.',
    x: 525,
    y: 150,
  },
  {
    letter: 'A',
    title: 'Amazing',
    meaning: 'Never forget how much you can achieve.',
    x: 590,
    y: 230,
  },
];
