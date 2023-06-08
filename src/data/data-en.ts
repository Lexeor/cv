export const data = {
  skills: {
    primary: [
      {
        id: 0,
        name: "Googling",
        svg: "google",
      },
      {
        id: 1,
        name: "JavaScript",
        svg: "javascript",
      },
      {
        id: 2,
        name: "TypeScript",
        svg: "typescript",
      },
      { id: 3, name: "HTML", icon: "fa-brands fa-html5", color: "orangeHtml" },
      { id: 4, name: "CSS", icon: "fa-brands fa-css3", color: "blue" },
      { id: 5, name: "Sass", icon: "fa-brands fa-sass", color: "violet" },
      { id: 6, name: "React", icon: "fa-brands fa-react", color: "react-blue" },
      { id: 7, name: "git", svg: "git" },
    ],
    secondary: [
      {
        id: 0,
        name: "MS SQL",
        icon: "fa-solid fa-database",
        color: "orange",
      },
      {
        id: 1,
        name: "C#",
        svg: "cSharp",
      },
      {
        id: 2,
        name: "Python",
        svg: "python",
      },
      {
        id: 3,
        name: "Photoshop",
        svg: "photoshop",
      },
      {
        id: 4,
        name: "Illustrator",
        svg: "illustrator",
      },
    ],
    third: [
      {
        id: 0,
        name: "Figma",
        svg: "figma",
      },
      {
        id: 1,
        name: "Adobe XD",
        svg: "adobeXD",
      },
      {
        id: 2,
        name: "Docker",
        svg: "docker",
      },
    ],
  },

  certifications: [
    {
      id: 0,
      logo: "images/misis-logo.png",
      name: "Moscow Instutute of Steel and Alloys (MISA)",
      specialization: "Automation of technological processes and production",
      graduationDate: "16.06.2010",
      url: "files/misis.pdf",
    },
    {
      id: 1,
      logo: "images/scrimba-logo.png",
      name: "Scrimba.com",
      specialization: "The Front-End Developer Career Path",
      graduationDate: "08.09.2022",
      url: "files/scrimba.pdf",
    },
  ],

  links: [
    {
      id: 0,
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/Lexeor",
      color: "black",
      str: "Lexeor",
    },
    {
      id: 1,
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/alexander-tarasov-react/",
      color: "linkedinBlue",
      str: "alexander-tarasov-react",
    },
  ],

  projects: [
    {
      id: 0,
      images: [
        "images/projects/itinfo_1.png",
        "images/projects/itinfo_2.png",
        "images/projects/itinfo_3.png",
        "images/projects/itinfo_4.png",
      ],
      name: "IT Info Portal",
      desc: "A project to collect, analyze and conveniently display corporate information about equipment and networks in my previous position as an IT infrastructure manager.",
      stack: [
        { id: 0, name: "HTML", color: "bg-html" },
        { id: 1, name: "CSS", color: "bg-blue" },
        { id: 2, name: "JavaScript", color: "bg-yellow" },
        { id: 3, name: "jQuery", color: "bg-blue" },
        { id: 4, name: ".NET C#", color: "bg-violet" },
        { id: 5, name: "MS SQL", color: "bg-orange" },
        { id: 6, name: "Python", color: "bg-python" },
      ],
      goal: [
        "Monitor the current state and location of equipment (computers, printers, network equipment), link it to Active Directory users.",
        "Keep up to date with the phone book with the ability to edit the database of phone numbers.",
        "Create an interface for IT employees to record working time, which is then uploaded once a month in a given format to a common corporate system.",
      ],
      solution: [
        "- (Python) Scheduled data collection by a script on Windows Server from Active Directory, SCCM, Cisco equipment and, God forgive me, 1C, after which the data is added to the server in the form of CSV files.",
        "- (C# Backend) Updating data from uploaded CSV to MS SQL DB according to schedule.",
        "- (jQuery) The portal is built with jQuery and the DevExtreme framework.",
        "- (C# Backend) Automatic authorization for users from the Active Directory domain, special access rights are regulated by a separate SQL table.",
        "- (MS SQL) Architecture and implementation of the database with all the necessary links.",
        "- Interface for recording the working time of IT employees with the ability to upload to CSV for the head of the department.",
        "- Interface for editing phone book entries with the ability to disable automatic updating from Active Directory of a separate entry if necessary.",
      ],
      gitUrl: null,
    },
    {
      id: 1,
      images: [
        "images/projects/extension_1.png",
        "images/projects/extension_2.gif",
        "images/projects/extension_3.png",
        "images/projects/extension_4.png",
      ],
      name: "New tab Chrome extension",
      desc: "Chrome extension with direct YouTube and Google searches, customizable favorites, and a small weather widget.",
      stack: [
        { id: 0, name: "HTML", color: "bg-html" },
        { id: 1, name: "CSS", color: "bg-blue" },
        { id: 2, name: "JavaScript", color: "bg-yellow" },
        { id: 3, name: "React", color: "bg-react-blue" },
        { id: 4, name: "GitHub", color: "bg-black" },
      ],
      goal: [
        "The standard New Tab page in Chrome is, of course, wonderful, but after so many years it has already become boring, which is why the idea came up to make it more customized, and at the same time practice collecting data from a third-party API. And, of course, a direct search on YouTube will save you a whole click! And with the number of clicks we make per day, it's a lifetime :)",
      ],
      solution: [
        "- Search bar with YouTube/Google search engine toggle.",
        "- Widget for adding favorites with the ability to save user data both in local.storage (in development) and in chrome.storage (in production build).",
        "- Weather widget with data from OpenWeather API.",
        "- Settings menu with the ability to disable any of the widgets (also stored in local.storage/chrome.storage depending on the environment).",
        "- Changing the background color depending on the time of day. (A programmer should at least sometimes have an idea of ​​what is happening outside the window)",
      ],
      gitUrl: "https://github.com/Lexeor/ntb-extension",
    },
    {
      id: 2,
      images: [
        "images/projects/cadence_1.png",
        "images/projects/cadence_2.gif",
      ],
      name: "Cadence Assistant",
      desc: "A small tool that helps maintain a set rhythm during cardio training.",
      stack: [
        { id: 0, name: "HTML", color: "bg-html" },
        { id: 1, name: "CSS", color: "bg-blue" },
        { id: 2, name: "JavaScript", color: "bg-yellow" },
        { id: 3, name: "React", color: "bg-react-blue" },
        { id: 4, name: "GitHub", color: "bg-black" },
      ],
      goal: [
        "Create a rhythm machine that doesn't depend on playing music, and also has at least minimal monitoring of training progress.",
        "Without this, it is quite difficult to spin the exercise bike in a given rhythm, especially if you want to watch a TV series in the background :)",
      ],
      solution: [
        "- Standard metronome with training time setting. Rhythm and volume settings are available during operation.",
        "- Functionality of pause, continue and reset training.",
        "- During a workout, the Progress Bar is displayed, designed for standard interfaces of sports simulators.",
      ],
      gitUrl: "https://github.com/Lexeor/cadence-assistant",
      gitPagesUrl: "https://lexeor.github.io/cadence-assistant/",
    },
    {
      id: 3,
      images: ["images/projects/tanner_1.png", "images/projects/cadence_2.gif"],
      name: "Tanner",
      desc: "Tanning assistance mobile web-application.",
      stack: [
        { id: 0, name: "HTML", color: "bg-html" },
        { id: 1, name: "CSS", color: "bg-blue" },
        { id: 2, name: "Sass", color: "bg-sass" },
        { id: 3, name: "JavaScript", color: "bg-yellow" },
        { id: 4, name: "TypeScript", color: "bg-typescript" },
        { id: 5, name: "React", color: "bg-react-blue" },
        { id: 6, name: "GitHub", color: "bg-black" },
      ],
      goal: ["Create an app to assist with tanning process."],
      solution: [
        "- Standard metronome with training time setting. Rhythm and volume settings are available during operation.",
      ],
      gitUrl: "https://github.com/Lexeor/tanner-reborn",
      gitPagesUrl: "https://lexeor.github.io/tanner-reborn/",
    },
  ],

  references: [
    {
      id: 0,
      name: "Igor Baklashov",
      position: "IT Country Manager",
      company: "Sandvik Mining and Construction CIS",
      email: "igor.baklashov@sandvik.com",
    },
    {
      id: 1,
      name: "Frank Siebenmorgen",
      position: "Head of IT Infrastructure and Country Services",
      company: "Sandvik AB, Sweden",
      email: "frank.siebenmorgen@sandvik.com",
    },
    {
      id: 2,
      name: "Ivan Furov",
      position: "Senior Software Developer",
      company: "Yandex",
      email: "ifurov@yandex.ru",
    },
  ],
};