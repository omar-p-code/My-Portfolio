import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


/*
/=================================================/
                      ABOUT                   
/================================================/
*/
export const bio = `
I’m Omar, a Fullstack Web Developer with a passion for creating modern, responsive, and interactive web experiences. 
I specialize in building complete web systems, from dynamic frontend interfaces using React and TypeScript, 
to robust backend APIs and storage solutions. I enjoy solving complex problems, optimizing performance, and 
bringing ideas to life with clean, maintainable code.  

While I love designing smooth animations and intuitive user interfaces, my work goes beyond visuals — 
I focus on the logic, architecture, and scalability of the applications I build. 
I continuously expand my skillset to master more areas of web development, aiming to integrate AI, automation, 
and advanced systems in the future.  

My goal is to deliver high-quality, full-featured websites and applications that are both functional and enjoyable to use, 
while learning and growing as a versatile Web Engineer ready to tackle any challenge.  
`;

const birth = new Date('Oct 23 2007');
const age = new Date().getFullYear() - birth.getFullYear();
export const about = {
  name: 'omar',
  bio: bio,
  role: 'Fullstack Web Developer',
  roles: [
    'Fullstack Web Developer',
    'Frontend Engineer',
    'Backend Developer',
    'React Developer',
    'Web Application Developer',
    'UI Engineer',
    'API Developer',
    'SaaS Developer',
    'Web Performance Optimizer',
    'JavaScript / TypeScript Developer'
  ],
  subtitle: ' Passionate about building modern, responsive, and interactive web experiences using React, TypeScript, and creative animations.',
  age: (birth.getMonth() + 1) >= 10 ? age : age - 1,
}


/*
/=================================================/
                    CONTACT                   
/================================================/
*/

export const contact = {
  email: {
    title: 'Email',
    value: 'omraldyb2020@gmail.com',
    link: 'mailto:omraldyb2020@gmail.com',
    icon: MailIcon,
  },
  github: {
    title: 'GitHub',
    value: 'omar-p-code',
    link: 'https://github.com/omar-p-code',
    icon: GitHubIcon,
  },
  facebook: {
    title: 'Facebook',
    value: 'omar al-dyb',
    link: 'https://www.facebook.com/yama00zz/',
    icon: FacebookIcon,
  },
  whatsapp: {
    title: 'WhatsApp',
    value: '01067466894',
    link: 'https://wa.me/201067466894',
    icon: WhatsAppIcon,
  },
};

/*
/=================================================/
                    GENERAL                   
/================================================/
*/
export const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
]


export const themes = [
  {
    name: "Dark",
    value: "dark",
    description: "Default dark theme with modern violet accents.",
  },
  {
    name: "Light",
    value: "light",
    description: "Clean and minimal light interface.",
  },
  {
    name: "Royal",
    value: "royal",
    description: "Deep purple luxury vibe.",
  },
  {
    name: "Neon",
    value: "neon",
    description: "Cyberpunk neon glow style.",
  },
];


interface Images {
  name: string;
  link: string;
  description?: string;
  title?: string;
}

export const images: Record<string, Images> = {
  me: {
    name: 'My Photo',
    link: '/images/me-removedbg.png',
  },
  me2: {
    name: 'My Photo',
    link: '/images/me2-removedbg.png',
  },
  icon: {
    name: 'icon',
    link: '/icons/icon.png',
  },

}

export const hero = {
  title: "Hi, I'm Omar",
  role: about.role,
  subtitle: "I build modern, responsive, and interactive web experiences using React, TypeScript, and scalable backend systems.",
  ctaText: "See My Work",
  ctaLink: "/projects",
  bgVideo: 'https://res.cloudinary.com/dpilabjgd/video/upload/v1772131665/bg-1_xcv0m4.mp4',
};


export interface Skill {
  name: string,
  icon: string,
}

export interface Skills {
  frontend: Skill[],
  backend: Skill[],
  tools: Skill[],
}


export const skills: Skills = {
  frontend: [
    { name: 'React', icon: '/icons/react.png' },
    { name: 'TypeScript', icon: '/icons/typescript.png' },
    { name: 'Sass', icon: '/icons/sass.png' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
    { name: 'Framer Motion', icon: '/icons/framer-motion.png' },
    // { name: 'Next.js', icon: '/icons/nextjs.png' },
    { name: 'Zustand', icon: '/icons/zustand.png' },
    { name: 'Gsap', icon: '/icons/gsap.png' },
    { name: 'JavaScript', icon: '/icons/javascript.png' },
    { name: 'HTML5', icon: '/icons/html5.png' },
    { name: 'CSS3', icon: '/icons/css3.png' },
    { name: 'Responsive Design', icon: '/icons/responsive.png' },
    { name: 'UI/UX Design', icon: '/icons/ui-ux.png' },
    { name: 'Three.js', icon: '/icons/threejs.png' }
  ],
  backend: [
    { name: 'Node.js', icon: '/icons/nodejs.png' },
    { name: 'Express', icon: '/icons/express.png' },
    { name: 'MongoDB', icon: '/icons/mongodb.png' },
    { name: 'MySQL', icon: '/icons/mysql.png' },
  ],
  tools: [
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'postman', icon: '/icons/postman.png' },
    { name: 'Vite', icon: '/icons/vite.png' },
    { name: 'capacitor', icon: '/icons/capacitor.png' },
    { name: 'Cloudinary', icon: '/icons/cloudinary.png' },
    { name: 'VS Code', icon: '/icons/vscode.png' },
    { name: 'Figma', icon: '/icons/figma.png' },
    { name: 'EmailJS', icon: '/icons/emailjs.png' },
    { name: 'Vercel', icon: '/icons/vercel.png' },
  ]
}


/*
/=================================================/
                    PROJECTS                   
/================================================/
*/

export interface Project {
  title: string,
  cover: string,
  status: string,
  repo?: string,
  techs?: Skill[],
  slider?: {
    src: string,
    title?: string,
  }[],
  description?: string,
  demo?: string,
  video?: {
    src: string,
    title?: string,
  }[],
  client?: string,
}

export const projects: Project[] = [
  {
    title: '3D T-shirt shop',
    cover: '/images/shirt-shop.png',
    status: 'completed',
    techs: [
      { name: 'React', icon: '/icons/react.png' },
      { name: 'TypeScript', icon: '/icons/typescript.png' },
      { name: 'Tailwind', icon: '/icons/tailwind.png' },
      { name: 'ThreeJS', icon: '/icons/threejs.png' },
      { name: 'NodeJS', icon: '/icons/nodejs.png' },
      { name: 'Vite', icon: '/icons/vite.png' },
      { name: 'Zustand', icon: '/icons/zustand.png' },
    ],
    description: '3D T-shirt shop built with React, TypeScript, Tailwind CSS, and Three.js for an interactive shopping experience.',
    demo: 'https://3-d-t-shirt-shop.vercel.app/',
    repo: 'https://github.com/omar-p-code/3D-T-shirt-Shop',
    client: 'personal project'

  },
  {
    title: 'Felucca',
    cover: '/images/felucca-profile.png',
    status: 'MVP',
    techs: [
      { name: 'React', icon: '/icons/react.png' },
      { name: 'TypeScript', icon: '/icons/typescript.png' },
      { name: 'Tailwind', icon: '/icons/tailwind.png' },
      // { name: 'ThreeJS', icon: '/icons/threejs.png' },
      // { name: 'NodeJS', icon: '/icons/nodejs.png' },
      { name: 'Vite', icon: '/icons/vite.png' },
      { name: 'Zustand', icon: '/icons/zustand.png' },
    ],
    description: 'Random Chat App built with React, TypeScript, and Tailwind CSS.',
    demo: 'https://felucca.vercel.app',
    repo: 'https://github.com/omar-p-code/felucca',
    client: 'personal project'

  },
  {
    title: 'Chat App',
    cover: '/images/chat-app.png',
    status: 'hosting unavailable',
    techs: [
      { name: 'React', icon: '/icons/react.png' },
      { name: 'TypeScript', icon: '/icons/typescript.png' },
      { name: 'Tailwind', icon: '/icons/tailwind.png' },
      // { name: 'ThreeJS', icon: '/icons/threejs.png' },
      { name: 'NodeJS', icon: '/icons/nodejs.png' },
      { name: 'Express', icon: '/icons/express.png' },
      { name: 'Vite', icon: '/icons/vite.png' },
      { name: 'Zustand', icon: '/icons/zustand.png' },
    ],
    description: "Real-time chat application built with React, TypeScript, Tailwind CSS, Node.js, and Express for seamless communication - unfortunately, there is no hosting available for this project due to the host free tier reached its limits, but you can check the repo for details or contact me for a live demo, currently only login page is available on the demo link since the backend is not hosted, but the full project is available in the repo and i will provide a live demo if you contact me",
    demo: 'https://chat-app-eight-tau-86.vercel.app',
    repo: 'https://github.com/omar-p-code/chat-app',
    client: 'personal project'

  },
  {
    title: '3D Apple Website',
    cover: '/images/macbook-landing-page.png',
    status: 'completed',
    techs: [
      { name: 'React', icon: '/icons/react.png' },
      { name: 'TypeScript', icon: '/icons/typescript.png' },
      { name: 'Tailwind', icon: '/icons/tailwind.png' },
      { name: 'ThreeJS', icon: '/icons/threejs.png' },
      { name: 'Gsap', icon: '/icons/gsap.png' },
      // { name: 'NodeJS', icon: '/icons/nodejs.png' },
      // { name: 'Express', icon: '/icons/express.png' },
      { name: 'Vite', icon: '/icons/vite.png' },
      { name: 'Zustand', icon: '/icons/zustand.png' },
    ],
    description: "3D Apple Website built with React, TypeScript, Tailwind CSS, Three.js, and GSAP for an immersive product showcase experience.",
    demo: 'https://3d-apple-website-hazel.vercel.app',
    repo: 'https://github.com/omar-p-code/3d_apple_website',
    client: 'personal project'
  },
  {
    title: 'developer portfolio',
    cover: '/images/developer-portfolio.png',
    status: 'completed',
    techs: [
      { name: 'React', icon: '/icons/react.png' },
      { name: 'TypeScript', icon: '/icons/typescript.png' },
      { name: 'Tailwind', icon: '/icons/tailwind.png' },
      { name: 'ThreeJS', icon: '/icons/threejs.png' },
      { name: 'Gsap', icon: '/icons/gsap.png' },
      // { name: 'NodeJS', icon: '/icoimns/nodejs.png' },
      // { name: 'Express', icon: '/icons/express.png' },
      { name: 'Vite', icon: '/icons/vite.png' },
      { name: 'Zustand', icon: '/icons/zustand.png' },
    ],
    description: "3D Developer Portfolio built with React, TypeScript, Tailwind CSS, Three.js, and GSAP for a visually stunning showcase of my work and skills.",
    demo: 'https://3d-developer-portfolio-pi.vercel.app/',
    repo: 'https://github.com/omar-p-code/3d_developer_portfolio',
    client: 'Tutorial Project'
  },
  {
    title: 'Browser Extensions Manager',
    cover: '/images/browser-extensions.png',
    status: 'completed',
    techs: [
      { name: 'JavaScript', icon: '/icons/javascript.png' },
      { name: 'sass', icon: '/icons/sass.png' },
      { name: 'HTML5', icon: '/icons/html5.png' },
      { name: 'Figma', icon: '/icons/figma.png' },
    ],
    description: "client-side browser extension manager built with JavaScript, Sass, and HTML5 for a user-friendly interface to organize and control browser extensions.",
    demo: 'https://omar-p-code.github.io/browser-extensions-manager',
    repo: 'https://github.com/omar-p-code/browser-extensions-manager',
    client: 'Challenge project from frontendmentor.io'
  },
  {
    title: 'Node Api',
    cover: '/images/me.png',
    status: 'completed',
    techs: [
      { name: 'Node.js', icon: '/icons/nodejs.png' },
      { name: 'Express', icon: '/icons/express.png' },
      { name: 'MongoDB', icon: '/icons/mongodb.png' },
      { name: 'MySQL', icon: '/icons/mysql.png' },
      { name: 'Postman', icon: '/icons/postman.png' },
    ],
    description: "A RESTful API built with Node.js, Express, MongoDB, and MySQL for efficient data management and seamless integration with frontend applications.",
    repo: 'https://github.com/omar-p-code/node_api',
    client: 'learning project'
  },
  {
    title: 'Study Sum',
    cover: '/images/study-sum.png',
    status: 'delayed',
    techs: [
      { name: 'React', icon: '/icons/react.png' },
      { name: 'TypeScript', icon: '/icons/typescript.png' },
      { name: 'Vite', icon: '/icons/vite.png' },
      { name: 'Zustand', icon: '/icons/zustand.png' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
    ],
    description: "Study Sum is a web application that allows users to create and manage their study notes in a simple and organized way. Built with React, TypeScript, Vite, Zustand, and Tailwind CSS for a seamless and efficient note-taking experience.",
    repo: 'https://github.com/omar-p-code/study_sum',
    demo: 'https://study-sum.vercel.app',
    client: 'learning project'
  },
]