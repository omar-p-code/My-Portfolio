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
  age: (birth.getMonth() + 1) >= 10 ? age: age - 1,
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
    link: '/images/me2.png',
  }
}

export const hero = {
  title: "Hi, I'm Omar",
  role: about.role,
  subtitle: "I build modern, responsive, and interactive web experiences using React, TypeScript, and scalable backend systems.",
  ctaText: "See My Work",
  ctaLink: "/projects",
  bgVideo: 'https://res.cloudinary.com/dpilabjgd/video/upload/v1772131665/bg-1_xcv0m4.mp4',
};