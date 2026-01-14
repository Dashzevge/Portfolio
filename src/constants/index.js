import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import { RiReactjsLine, RiAngularjsLine, RiHtml5Fill, RiCss3Fill, RiBootstrapFill } from 'react-icons/ri'
import { SiApachekafka, SiAxios, SiBitbucket, SiCucumber, SiDocker, SiGit, SiGithubactions, SiGraphql, SiHibernate, SiJavascript, SiJenkins, SiJira, SiJquery, SiJunit5, SiKubernetes, SiMongodb, SiMongoose, SiMysql, SiPostgresql, SiPostman, SiRedis, SiRedux, SiSelenium, SiSpring, SiSpringsecurity, SiSqlalchemy, SiTypescript } from 'react-icons/si'
import { FaNodeJs, FaJava, FaAws } from 'react-icons/fa'

export const HERO_CONTENT = `I am a full stack developer with 8+ years of experience building reliable, scalable, and user-focused web applications. I specialize in modern front end work with Angular and React, and back end development using Java, Node.js, MySQL, PostgreSQL, and MongoDB. I enjoy owning solutions end to end, translating business goals into clean architectures, resilient APIs, and polished interfaces. I thrive in fast moving teams, especially in FinTech and Entertainment, where performance, security, and UX matter most.`;

export const GROUP_NAMES = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Cloud & Tools",
];

// Updated group names in SKILLS
export const SKILLS = [
  // Programming Languages
  {
    Icon: FaJava,
    color: 'text-red-500',
    label: 'Java',
    years: 5,
    description: 'Developed enterprise-grade applications with Java 8+ and STREAM API',
    group: 'Backend'
  },
  {
    Icon: SiJavascript,
    color: 'text-yellow-500',
    label: 'JavaScript',
    years: 4,
    description: 'Built dynamic web applications with ES6+ features',
    group: 'Frontend'
  },
  {
    Icon: SiTypescript,
    color: 'text-blue-500',
    label: 'TypeScript',
    years: 3,
    description: 'Enhanced type safety and scalability in large-scale projects',
    group: 'Frontend'
  },
  {
    Icon: SiMysql,
    color: 'text-blue-700',
    label: 'MySQL',
    years: 4,
    description: 'Wrote complex SQL queries, triggers, and views',
    group: 'Database'
  },
  {
    Icon: SiPostgresql,
    color: 'text-blue-700',
    label: 'PostgreSQL',
    years: 4,
    description: 'Wrote complex SQL queries, triggers, and views',
    group: 'Database'
  },

  // Web Development
  {
    Icon: RiHtml5Fill,
    color: 'text-orange-500',
    label: 'HTML5',
    years: 5,
    description: 'Built semantic and accessible web pages',
    group: 'Frontend'
  },
  {
    Icon: RiCss3Fill,
    color: 'text-blue-400',
    label: 'CSS3 (SASS)',
    years: 5,
    description: 'Styled responsive and modern UIs with SASS and CSS3',
    group: 'Frontend'
  },
  {
    Icon: RiBootstrapFill,
    color: 'text-purple-500',
    label: 'Bootstrap',
    years: 4,
    description: 'Created responsive layouts using Bootstrap components',
    group: 'Frontend'
  },
  {
    Icon: SiJquery,
    color: 'text-blue-600',
    label: 'jQuery',
    years: 3,
    description: 'Enhanced interactivity with DOM manipulation and AJAX',
    group: 'Frontend'
  },
  {
    Icon: SiAxios,
    color: 'text-green-500',
    label: 'Axios',
    years: 3,
    description: 'Handled HTTP requests and API integrations',
    group: 'Frontend'
  },
  {
    Icon: RiReactjsLine,
    color: 'text-cyan-400',
    label: 'React',
    years: 4,
    description: 'Developed SPAs with hooks, Redux, and component libraries',
    group: 'Frontend'
  },
  {
    Icon: RiAngularjsLine,
    color: 'text-red-500',
    label: 'Angular',
    years: 3,
    description: 'Built reactive UIs using Angular 14+ and RxJS',
    group: 'Frontend'
  },
  {
    Icon: SiRedux,
    color: 'text-purple-500',
    label: 'Redux',
    years: 3,
    description: 'Managed application state with Redux and middleware',
    group: 'Frontend'
  },
  {
    Icon: SiSpring,
    color: 'text-green-700',
    label: 'Spring Boot',
    years: 4,
    description: 'Built secure microservices with Spring Boot and Spring Security',
    group: 'Backend'
  },
  {
    Icon: SiSpringsecurity,
    color: 'text-green-700',
    label: 'Spring Security',
    years: 3,
    description: 'Implemented authentication and authorization with OAuth2 and JWT',
    group: 'Backend'
  },
  {
    Icon: FaNodeJs,
    color: 'text-green-500',
    label: 'Node.js',
    years: 4,
    description: 'Built RESTful APIs and backend logic with Express.js',
    group: 'Backend'
  },

  // Database Management
  {
    Icon: SiMongodb,
    color: 'text-green-700',
    label: 'MongoDB',
    years: 3,
    description: 'Designed schemas and optimized queries for NoSQL databases',
    group: 'Database'
  },
  {
    Icon: SiSqlalchemy,
    color: 'text-blue-600',
    label: 'SQL Server',
    years: 3,
    description: 'Handled enterprise-level database management',
    group: 'Database'
  },
  {
    Icon: SiMongoose,
    color: 'text-green-500',
    label: 'Mongoose',
    years: 3,
    description: 'Simplified MongoDB interactions with Mongoose ORM',
    group: 'Database'
  },
  {
    Icon: SiHibernate,
    color: 'text-orange-500',
    label: 'JPA & Hibernate',
    years: 3,
    description: 'Implemented ORM solutions for relational databases',
    group: 'Database'
  },

  // Cloud Platforms
  {
    Icon: FaAws,
    color: 'text-orange-500',
    label: 'AWS',
    years: 3,
    description: 'Deployed scalable applications using EC2, Lambda, S3, and RDS',
    group: 'Cloud & Tools'
  },
  {
    Icon: FaAws,
    color: 'text-blue-500',
    label: 'Microsoft Azure',
    years: 2,
    description: 'Managed cloud services with MySQL Flexible Server and App Service',
    group: 'Cloud & Tools'
  },

  // Caching & Messaging Systems
  {
    Icon: SiApachekafka,
    color: 'text-purple-500',
    label: 'Kafka',
    years: 2,
    description: 'Implemented messaging systems for distributed applications',
    group: 'Cloud & Tools'
  },
  {
    Icon: SiRedis,
    color: 'text-red-500',
    label: 'Redis',
    years: 2,
    description: 'Used Redis for caching and session management',
    group: 'Cloud & Tools'
  },

  // DevOps & CI/CD
  {
    Icon: SiGit,
    color: 'text-orange-500',
    label: 'Git',
    years: 5,
    description: 'Version control and collaboration with Git',
    group: 'DevOps'
  },
  {
    Icon: SiGithubactions,
    color: 'text-green-500',
    label: 'GitHub Actions',
    years: 2,
    description: 'Automated CI/CD pipelines with GitHub Actions',
    group: 'DevOps'
  },
  {
    Icon: SiDocker,
    color: 'text-blue-500',
    label: 'Docker',
    years: 3,
    description: 'Containerized applications for consistent environments',
    group: 'DevOps'
  },
  {
    Icon: SiJenkins,
    color: 'text-purple-500',
    label: 'Jenkins',
    years: 2,
    description: 'Set up CI/CD pipelines for automated builds and deployments',
    group: 'DevOps'
  },
  {
    Icon: SiKubernetes,
    color: 'text-blue-600',
    label: 'Kubernetes',
    years: 2,
    description: 'Orchestrated containerized applications with Kubernetes',
    group: 'DevOps'
  },

  // Testing & Automation Tools
  {
    Icon: SiSelenium,
    color: 'text-green-500',
    label: 'Selenium WebDriver',
    years: 3,
    description: 'Automated UI testing for web applications',
    group: 'Cloud & Tools'
  },
  {
    Icon: SiCucumber,
    color: 'text-pink-500',
    label: 'Cucumber',
    years: 2,
    description: 'Implemented BDD testing with Cucumber',
    group: 'Cloud & Tools'
  },
  {
    Icon: SiJunit5,
    color: 'text-red-500',
    label: 'JUnit 5',
    years: 4,
    description: 'Wrote unit tests for Java applications',
    group: 'Cloud & Tools'
  },
  {
    Icon: FaAws,
    color: 'text-orange-500',
    label: 'RestAssured',
    years: 2,
    description: 'Tested RESTful APIs with RestAssured',
    group: 'Cloud & Tools'
  },
  {
    Icon: SiPostman,
    color: 'text-blue-500',
    label: 'Postman',
    years: 3,
    description: 'Tested and documented APIs with Postman',
    group: 'Cloud & Tools'
  },

  // Project Management & SDLC Tools
  {
    Icon: SiJira,
    color: 'text-blue-500',
    label: 'JIRA',
    years: 3,
    description: 'Managed agile projects with JIRA',
    group: 'Cloud & Tools'
  },
  {
    Icon: SiBitbucket,
    color: 'text-purple-500',
    label: 'Bitbucket',
    years: 3,
    description: 'Collaborated on code repositories with Bitbucket',
    group: 'Cloud & Tools'
  },
  {
    Icon: FaAws,
    color: 'text-green-500',
    label: 'Agile (Scrum)',
    years: 3,
    description: 'Worked in agile teams following Scrum methodologies',
    group: 'Cloud & Tools'
  }
];

export const ACHIEVEMENTS = [
  {
    period: "May 2015 - Dec 2016",
    duration: "1 yr 8 mos",
    title: "Junior Software Developer",
    company: "Ministry of Finance of Mongolia",
    employmentType: "Contract",
    location: "Chingeltei, Ulaanbaatar, Mongolia",
    workMode: "On-site",
  },
  {
    period: "Dec 2016 - Mar 2020",
    duration: "3 yrs 4 mos",
    title: "Full Stack Developer",
    company: "Interactive LLC",
    employmentType: "Full-time",
    location: "Ulaanbaatar, Mongolia",
    workMode: "On-site",
  },
  {
    period: "Mar 2020 - Dec 2025",
    duration: "5 yrs 10 mos",
    title: "Senior Full Stack Developer",
    company: "MongolSat Networks LLC",
    employmentType: "Full-time",
    location: "Chingeltei, Ulaanbaatar, Mongolia",
    workMode: "Remote",
  }
];

export const PROJECTS = [
  {
    title: "MongolSat Customer & Service Management Platform",
    image: project1,
    description:
      "Led end-to-end development of customer-facing and internal enterprise systems, delivering scalable web apps, secure payments, and cloud-native services supporting thousands of users across satellite, media, and telecom domains.",
    technologies: ["Java", "Spring Boot", "RESTful APIs", "React", "MySQL"],
    link: "https://www.mongolsat.mn",
  },
  {
    title: "Satellite",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "IIS"],
  },
  {
    title: "Inventory Management System",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Kinder Garden WebSite",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];
