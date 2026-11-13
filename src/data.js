// Edit this file to personalise the whole site.
export const profile = {
name: 'Paras Patil',  role: 'Front-end developer',
  email: 'paraspatil578@gmail.com',
  github: 'https://github.com/paraspatil578-byte',
  linkedin: 'https://www.linkedin.com/in/paras-patil-b9460243b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  location: 'Mumbai, India',
  intro: 'I build fast, accessible web interfaces with React.',
  about: [
    'I am a front-end developer with three years of experience turning product ideas into interfaces people use every day.',
    'I care about performance budgets, keyboard access and code that the next developer can read. Outside work I contribute to open-source docs and mentor first-time developers.'
  ]
};

export const projects = [
  { title: 'Trackr', image: 'project-1.svg', alt: 'Trackr expense dashboard',
    text: 'Expense tracker with category charts and CSV export. Loads in under a second on 3G.',
    stack: ['React', 'Vite', 'Recharts'], live: '#', code: '#' },
  { title: 'Hola Chat', image: 'project-2.svg', alt: 'Hola Chat messaging app',
    text: 'Real-time chat with typing indicators and offline message queueing.',
    stack: ['React', 'Node', 'WebSocket'], live: '#', code: '#' },
  { title: 'Foodmap', image: 'project-3.svg', alt: 'Foodmap restaurant finder',
    text: 'Restaurant finder with map clustering and saved lists.',
    stack: ['React', 'Leaflet', 'REST API'], live: '#', code: '#' },
  { title: 'Docs Kit', image: 'project-4.svg', alt: 'Docs Kit component library',
    text: 'Accessible component library with 24 components and a documentation site.',
    stack: ['TypeScript', 'Storybook', 'CSS'], live: '#', code: '#' }
];

export const skills = [
  { group: 'Languages', items: ['JavaScript (ES2023)', 'TypeScript', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['React', 'Next.js', 'Vite', 'Node.js'] },
  { group: 'Tooling', items: ['Git', 'GitHub Actions', 'Jest', 'Lighthouse'] },
  { group: 'Practice', items: ['Accessibility', 'Responsive design', 'Performance tuning'] }
];

export const resume = {
  file: 'resume.pdf', // place your PDF in /public
  jobs: [
    { when: '2024 – now', title: 'Front-end developer, Northwind Labs', text: 'Led the migration of a legacy dashboard to React, cutting load time by 42%.' },
    { when: '2022 – 2024', title: 'Junior developer, Pixel & Co.', text: 'Built marketing sites and a reusable component library used by six teams.' },
    { when: '2018 – 2022', title: 'B.E. Computer Engineering, University of Mumbai', text: 'Graduated with distinction.' }
  ]
};
