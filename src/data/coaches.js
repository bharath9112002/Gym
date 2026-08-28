import johnSnowPhoto from '../assets/coach-john-snow-2.png'
import aliciaKanePhoto from '../assets/coach-alicia-kane.png'
import marcusReidPhoto from '../assets/coach-marcus-reid.png'
import dianaCruzPhoto from '../assets/coach-diana-cruz.png'

const coaches = [
  {
    slug: 'john-snow',
    name: 'John Snow',
    role: 'Body Building Coach',
    seed: 'beast-coach-john',
    image: johnSnowPhoto,
    age: 29,
    experience: '5 Years',
    phone: '+1 9876543210',
    email: 'john@beast.com',
    certifications: ['IFPASA', 'NASM Master Trainer', 'ISSA'],
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    skillsText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: [
      { label: 'Body Building', percent: 92 },
      { label: 'Cardio', percent: 74 },
      { label: 'Weight Training', percent: 83 },
    ],
  },
  {
    slug: 'alicia-kane',
    name: 'Alicia Kane',
    role: 'Yoga Coach',
    seed: 'beast-coach-1',
    image: aliciaKanePhoto,
    age: 27,
    experience: '4 Years',
    phone: '+1 9876543211',
    email: 'alicia@beast.com',
    certifications: ['IFPASA', 'NASM Master Trainer', 'ISSA'],
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    skillsText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: [
      { label: 'Flexibility', percent: 95 },
      { label: 'Breathing', percent: 88 },
      { label: 'Balance', percent: 80 },
    ],
  },
  {
    slug: 'marcus-reid',
    name: 'Marcus Reid',
    role: 'Strength Coach',
    seed: 'beast-coach-2',
    image: marcusReidPhoto,
    age: 33,
    experience: '8 Years',
    phone: '+1 9876543212',
    email: 'marcus@beast.com',
    certifications: ['IFPASA', 'NASM Master Trainer', 'ISSA'],
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    skillsText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: [
      { label: 'Powerlifting', percent: 90 },
      { label: 'Cardio', percent: 65 },
      { label: 'Weight Training', percent: 94 },
    ],
  },
  {
    slug: 'diana-cruz',
    name: 'Diana Cruz',
    role: 'Cardio Coach',
    seed: 'beast-coach-3',
    image: dianaCruzPhoto,
    age: 26,
    experience: '3 Years',
    phone: '+1 9876543213',
    email: 'diana@beast.com',
    certifications: ['IFPASA', 'NASM Master Trainer', 'ISSA'],
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    skillsText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: [
      { label: 'Endurance', percent: 93 },
      { label: 'HIIT', percent: 89 },
      { label: 'Flexibility', percent: 70 },
    ],
  },
]

export default coaches
