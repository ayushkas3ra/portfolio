export const portfolio = {
  profile: {
    name: 'Ayush Kasera',
    title: 'Full-stack & AI Developer',
    introduction:
      'Building software, exploring AI, and turning ideas into reality.',
    image: '/profile-picture.webp',
    imageAlt: 'Portrait of the portfolio owner, photographed from behind',
  },
  resumeUrl:
    'https://docs.google.com/document/d/1_yD4ClHAMmV_9ndsfjtEFL7lT9UFWbQsWe6ikSHDIuY/edit?tab=t.0#heading=h.1xisp1lkgxy',
  projects: {
    heading: 'Featured projects',
    items: [
      {
        name: 'IBDB',
        description: 'Full stack book library with AI chatbot support.',
        technologies: [
          'Javascript',
          'Reactjs',
          'Python',
          'Django',
          'Groq LLM',
          'PostgreSQL',
        ],
        status: 'completed',
        repositoryUrl: 'https://github.com/ayushkas3ra/IBDB',
        demoUrl: 'https://ibdb-ayush.vercel.app/',
      },
      {
        name: 'ChatPersona',
        description:
          'AI chatbot that learns conversation styles from imported chat history.',
        technologies: [
          'Javascript',
          'ReactJS',
          'Python',
          'Django',
          'Sqlite',
          'Ollama',
        ],
        status: 'In development',
        repositoryUrl: 'https://github.com/ayushkas3ra/chatpersona',
        demoUrl: null,
      },
      // {
      //   name: 'Countdown to Secret Wars',
      //   description: 'A cinematic countdown experience for marvel fans',
      //   technologies: ['React', 'Javascript', 'CSS'],
      //   status: 'In development',
      //   repositoryUrl: 'https://github.com/ayushkas3ra/countdowntosecretwars',
      //   demoUrl: null,
      // },
    ],
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/ayushkas3ra', icon: 'github' },
    { label: 'X', href: 'https://x.com/ayushkas3ra', icon: 'x' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayushkas3ra/',
      icon: 'linkedin',
    },
  ],
  contact: {
    heading: 'Get in touch',
    email: 'ayushkasera710@gmail.com',
  },
  footer: {
    note: 'Thanks for stopping by.',
  },
}
