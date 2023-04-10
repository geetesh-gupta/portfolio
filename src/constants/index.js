import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  upbringo,
  superpro,
  mit,
  yodlee,
  tcs,
  threejs,
  mongodbbrowser,
  jsonbrowser,
  reactnativeawesomecomponents,
  federaml,
  crdt,
  ignus,
  cfd2017,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "React Native App Developer",
    company_name: "UpbringO",
    icon: upbringo,
    iconBg: "#383E56",
    date: "Dec 2019 - Jan 2020",
    points: [
      "Spearheaded the development of a cutting-edge React Native application for remote education management of children.",
      "Collaborated closely with a talented team of 4 developers to ensure seamless functionality and user experience.",
      "Designed and implemented intuitive user interfaces utilizing my own npm library of lightweight UI components for React Native which garnered 275 downloads.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Joynt",
    icon: superpro,
    iconBg: "#E6DEDD",
    date: "April 2020 - July 2022",
    points: [
      "Versatile role-player in the entertainment startup space, with hands-on experience in diverse areas.",
      "Engineered a cutting-edge React-based video calling platform that dazzled over 100 celebrities and other users alike.",
      "Streamlined day-to-day tasks by creating automation scripts that saved time and boosted efficiency.",
      "Pioneered a Facebook bot that provided seamless user engagement on a website.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Massachusetts Institute of Technology (MIT)",
    icon: mit,
    iconBg: "#383E56",
    date: "April 2020 - Dec 2020",
    points: [
      "Developed an innovative front-end solution for MIT's block-based programming language Scratch, using React to add collaborative support to the platform.",
      "Restructured the codebase to follow a single UI library system, streamlining the development process and reducing the project size by 50%.",
      "Implemented TypeScript support, boosting code quality and developer experience using a robust type system.",
      "Proven ability to streamline and optimize code, delivering top-quality results and meeting project requirements.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Envestnet Yodlee",
    icon: yodlee,
    iconBg: "#E6DEDD",
    date: "July 2021 - Nov 2022",
    points: [
      "Versatile team player with a wide range of expertise, excelling in product development, bug resolution, and workflow automation.",
      "Streamlined existing manual workflows, reducing activity time from 5 days to mere minutes, and delivering exceptional results.",
      "Successfully designed and implemented 3 new workflows from scratch to meet client needs, showcasing a strong ability to deliver results and exceed expectations.",
      "Proven ability to set up microservices systems and create comprehensive documentation, enabling teammates to quickly get up and running.",
      "Delivered assigned user stories on time and to the highest quality, showcasing a strong work ethic and attention to detail.",
      "Developed top-of-the-line automation testing logic for primary microservices, ensuring a seamless user experience.",
      "Collaborated effectively with multiple teams to implement features and fix bugs, displaying excellent teamwork and communication skills.",
      "Leveraged previous front-end experience to assist colleagues with questions, demonstrating adaptability and a willingness to share knowledge.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Tata Consultancy Services (TCS)",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Seasoned software engineer with a proven track record of success, currently employed at Envestnet.",
      "Worked with Envestnet through a partnership with Yodlee, gaining valuable experience and expertise in the field.",
      "Successfully transitioned to TCS due to a strategic partnership between Envestnet and TCS, while continuing to work with the same client and responsibilities at Envestnet.",
      "Committed to supporting and contributing to the success of our client, delivering top-quality results and exceeding expectations.",
      "Demonstrated excellence in the field, with a strong focus on continued growth and development in this role.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "MongoDB Browser",
    description:
      "Introducing my game-changing JetBrains IDE Plugin - the ultimate MongoDB Browser and Editor! With a whopping 900 downloads within the first month of launch. Designed to streamline the development process, this plugin offers unparalleled functionality, including the ability to add Mongo DB Browser and Editor functionality, console runner, pagination support, import/export collections/databases, and even SQL query support. Say goodbye to clunky, time-consuming database management and hello to seamless, efficient MongoDB management within the IDE.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "kotlin",
        color: "green-text-gradient",
      },
      {
        name: "jetbrains",
        color: "pink-text-gradient",
      },
      {
        name: "java",
        color: "orange-text-gradient",
      },
    ],
    image: mongodbbrowser,
    source_code_link: "https://github.com/geetesh-gupta/Mongo-DB-Browser",
    downloads_source:
      "https://img.shields.io/jetbrains/plugin/d/20002-mongo-db-browser.svg?logo=docusign",
    downloads_link:
      "https://plugins.jetbrains.com/plugin/20002-mongo-db-browser",
  },

  {
    name: "JSON Browser",
    description:
      "Introducing my game-changing JetBrains IDE Plugin - the ultimate JSON Browser! With over 300 downloads and counting, this all-in-one solution allows developers to work with JSON objects directly within the IDE. Designed with simplicity and efficiency in mind, this plugin streamlines the development process, saving valuable time and resources. Say goodbye to switching between applications and hello to seamless JSON object management within the IDE. This plugin was created with a single goal in mind: to offer developers an unparalleled experience for managing JSON objects all in one place.",
    tags: [
      {
        name: "json",
        color: "blue-text-gradient",
      },
      {
        name: "kotlin",
        color: "green-text-gradient",
      },
      {
        name: "jetbrains",
        color: "pink-text-gradient",
      },
      {
        name: "java",
        color: "orange-text-gradient",
      },
    ],
    image: jsonbrowser,
    source_code_link: "https://github.com/geetesh-gupta/JSON-Browser",
    downloads_source:
      "https://img.shields.io/jetbrains/plugin/d/20013-json-browser.svg?logo=docusign",
    downloads_link: "https://plugins.jetbrains.com/plugin/20013-json-browser",
  },

  {
    name: "React Native Awesome Components",
    description:
      "Introducing my very own npm library of Awesome, Lightweight UI Components for React Native! Designed with simplicity and efficiency in mind, these components are the perfect solution for anyone looking to streamline their React Native development process.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "npm",
        color: "pink-text-gradient",
      },
    ],
    image: reactnativeawesomecomponents,
    source_code_link:
      "https://github.com/geetesh-gupta/react-native-awesome-components",
    downloads_source:
      "https://img.shields.io/npm/dt/react-native-awesome-components.svg?logo=docusign",
    downloads_link:
      "https://www.npmjs.com/package/react-native-awesome-components",
  },
  {
    name: "Python3-CRDT",
    description:
      "Proposed a built-in storage system ideally suited for Fog computing in my college research project, which was presented at the prestigious International Symposium on Reliable Distributed Systems (Core-A) and published in IEEE. To further demonstrate the potential of my concept, Developed a robust Python library that supports CRDTs, serving as a powerful proof of concept for the industry.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "crdt",
        color: "green-text-gradient",
      },
      {
        name: "ieee",
        color: "pink-text-gradient",
      },
    ],
    image: crdt,
    source_code_link: "https://github.com/anshulahuja98/python3-crdt",
    downloads_source:
      "https://img.shields.io/github/stars/anshulahuja98/python3-crdt?logo=github",
    downloads_link: "https://doi.org/10.1109/SRDS47363.2019.00047",
  },
  {
    name: "FederaML",
    description:
      "Developed a cutting-edge distributed ML framework based on TensorFlow federated, revolutionizing the capabilities of low power Edge devices. My work was presented at the prestigious AAAI Conference on Artificial Intelligence and published in AAAI, showcasing my expertise and passion for innovation. To further demonstrate the power of my framework, I also created a sleek React Native app to showcase the proof of concept.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "federated",
        color: "green-text-gradient",
      },
      {
        name: "ml",
        color: "pink-text-gradient",
      },
      {
        name: "tensorflow",
        color: "orange-text-gradient",
      },
    ],
    image: federaml,
    source_code_link: "https://github.com/geetesh-gupta/FederaML",
    other_link: "https://ojs.aaai.org/index.php/AAAI/article/view/17870",
  },
  {
    name: "Ignus - College Fest",
    description:
      "As the web development head among the core team of the festival organizers, I with a team of 3 developers created a stunning website for our IIT college's annual cultural festival, Ignus. Using only bare essentials like HTML, CSS, and Javascript, we developed an eye-catching website that captured the essence of the event and provided an unparalleled user experience. Through our collective efforts, we were able to deliver a website that was used by over 2000+ event participants, showcasing our ability to deliver top-quality results and exceed expectations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ignus,
  },
  {
    name: "CodeFunDo - Microsoft",
    description:
      "In 2017, I and my team participated in the highly competitive Microsoft CodeFunDo Hackathon and emerged as one of the top 3 finalist teams out of 53 teams! Our innovative project involved developing a bot and an IoT project using Raspberry Pi, Azure Bot Builder, and RFID technology. We created a bot for the folks of IIT Jodhpur to provide them with basic day-to-day info like Mess menu, timetable, and even a payment system. Our payment module was RFID-based and made on Raspberry Pi, enabling both students and merchants to check balances and make payments directly within the bot itself.",
    tags: [
      {
        name: "rfid",
        color: "blue-text-gradient",
      },
      {
        name: "raspberry-pi",
        color: "green-text-gradient",
      },
      {
        name: "iot",
        color: "pink-text-gradient",
      },
      {
        name: "hackathon",
        color: "orange-text-gradient",
      },
    ],
    image: cfd2017,
  },
];

export { services, technologies, experiences, testimonials, projects };
