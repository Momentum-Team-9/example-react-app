import axios from 'axios'

export const developers = [
  {
    id: 1,
    name: 'Andrea Vaughan',
    githubName: 'andreavaughan',
    expertise: null,
    isAvailable: true,
    isFavorited: false,
    interests: ['Backpacking'],
  },
  {
    id: 2,
    name: 'Sarah Wines',
    githubName: 'sarah-wines',
    expertise: ['Front-end', 'React'],
    isAvailable: false,
    isFavorited: false,
    interests: 'Miniatures',
  },
  {
    id: 3,
    name: 'Mike Biener',
    githubName: 'mjbiener',
    expertise: ['Front-end', 'React'],
    isAvailable: true,
    isFavorited: true,
    interests: 'Extreme Couponing',
  },
  {
    id: 4,
    name: 'Brian Harrison',
    githubName: 'brianharrison3',
    expertise: ['Front-end', 'Angular'],
    isAvailable: true,
    isFavorited: false,
    interests: 'Music production',
  },
]
