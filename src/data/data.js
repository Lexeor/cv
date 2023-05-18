export const skills = {
  primary: [
    {
      id: 0,
      name: "JavaScript",
      icon: "fa-brands fa-square-js",
      color: "yellow",
    },
    { id: 1, name: "HTML", icon: "fa-brands fa-html5", color: "yellow" },
    { id: 2, name: "CSS", icon: "fa-brands fa-css3", color: "blue" },
    { id: 3, name: "SCSS", icon: "fa-brands fa-sass", color: "violet" },
    { id: 4, name: "React", icon: "fa-brands fa-react", color: "react-blue" },
    { id: 5, name: "git", icon: "fa-brands fa-github", color: "black" },
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
      icon: "fa-brands fa-square-js",
      color: "green",
    },
    {
      id: 2,
      name: "Python",
      icon: "fa-brands fa-python",
      color: "python",
    },
  ],
};

export const certifications = [
  {
    id: 0,
    logo: "/images/misis-logo.png",
    name: "Московский Университет Стали и Сплавов",
    specialization: "Автоматизация технологических процессов и производств",
    graduationDate: "16.06.2010",
    url: "/certificates/misis.pdf",
  },
  {
    id: 1,
    logo: "/images/scrimba-logo.png",
    name: "Scrimba.com",
    specialization: "The Front-End Developer Career Path",
    graduationDate: "08.09.2022",
    url: "/certificates/scrimba.pdf",
  },
];

export const links = [
  {
    id: 0,
    name: "GitHub",
    icon: "fa-brands fa-github",
    url: "https://github.com/Lexeor",
    color: "black",
  },
  {
    id: 1,
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    url: "https://www.linkedin.com/in/alexander-tarasov-react/",
    color: "linkedinBlue",
  },
];

export const projects = [
  {
    id: 0,
    image: "/images/projects/ITInfo.png",
    name: "IT Info Portal",
    desc: "Проект по сбору, анализу и удобномуотображению корпоративной информации об оборудовании и сетях на моей прошлой должности IT координатора инфраструктуры.",
    stack: [
      { id: 0, name: "HTML", color: "bg-yellow" },
      { id: 1, name: "CSS", color: "bg-blue" },
      { id: 2, name: "JavaScript", color: "bg-yellow" },
      { id: 3, name: "jQuery", color: "bg-blue" },
      { id: 4, name: ".NET C#", color: "bg-violet" },
      { id: 5, name: "MS SQL", color: "bg-orange" },
      { id: 6, name: "Python", color: "bg-python" },
    ],
    goal: "Goal 1",
    solution: "Solution 1",
    gitUrl: null,
  },
  {
    id: 1,
    image: "/images/cadence.png",
    name: "Cadence Assistant",
    desc: "Небольшой инструмент, помогающий поддерживать заданный ритм при кардиотренировках.",
    stack: [
      { id: 0, name: "HTML", color: "bg-yellow" },
      { id: 1, name: "CSS", color: "bg-blue" },
      { id: 2, name: "JavaScript", color: "bg-yellow" },
      { id: 3, name: "React", color: "bg-react-blue" },
      { id: 4, name: "GitHub", color: "bg-black" },
    ],
    goal: "Достаточно сложно крутить велотренажёр в заданном ритме, особенно если на фоне хочется посмотреть сериальчик :) Потому я подумал, что было бы неплохо иметь ритм-машину, не зависящую от играющей музыки, также имеющую хотя бы минимальный мониторинг прогресса тренировки.",
    solution: "В этом проекте/nя научился",
    gitUrl: "https://github.com/Lexeor/cadence-assistant",
  },
  {
    id: 2,
    image: "/images/projects/ntb-extension.png",
    name: "New tab Chrome browser extension",
    desc: "Расширение к Chrome с прямым поиском в YouTube и Google, настраиваемым избранным, а также небольшим виджетом погоды.",
    stack: [
      { id: 0, name: "HTML", color: "bg-yellow" },
      { id: 1, name: "CSS", color: "bg-blue" },
      { id: 2, name: "JavaScript", color: "bg-yellow" },
      { id: 3, name: "React", color: "bg-react-blue" },
      { id: 4, name: "GitHub", color: "bg-black" },
    ],
    goal: "Goal 3",
    solution: "Solution 3",
    gitUrl: "https://github.com/Lexeor/ntb-extension",
  },
];
