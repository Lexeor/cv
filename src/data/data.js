export const skills = {
  primary: [
    {
      id: 0,
      name: "Googling",
      icon: null,
      svg: "google",
      color: null,
    },
    {
      id: 1,
      name: "JavaScript",
      icon: "fa-brands fa-square-js",
      color: "yellow",
    },
    { id: 2, name: "HTML", icon: "fa-brands fa-html5", color: "yellow" },
    { id: 3, name: "CSS", icon: "fa-brands fa-css3", color: "blue" },
    { id: 4, name: "SCSS", icon: "fa-brands fa-sass", color: "violet" },
    { id: 5, name: "React", icon: "fa-brands fa-react", color: "react-blue" },
    { id: 6, name: "git", icon: "fa-brands fa-github", color: "black" },
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
      icon: null,
      svg: "cSharp",
      color: null,
    },
    {
      id: 2,
      name: "Python",
      icon: "fa-brands fa-python",
      color: "python",
    },
    {
      id: 3,
      name: "Photoshop",
      icon: null,
      svg: "photoshop",
      color: null,
    },
    {
      id: 4,
      name: "Illustrator",
      icon: null,
      svg: "illustrator",
      color: null,
    },
  ],
};

export const certifications = [
  {
    id: 0,
    logo: "misis-logo.png",
    name: "Московский Институт Стали и Сплавов (МИСиС)",
    specialization: "Автоматизация технологических процессов и производств",
    graduationDate: "16.06.2010",
    url: "misis.pdf",
  },
  {
    id: 1,
    logo: "scrimba-logo.png",
    name: "Scrimba.com",
    specialization: "The Front-End Developer Career Path",
    graduationDate: "08.09.2022",
    url: "scrimba.pdf",
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
    image: "ITInfo.png",
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
    goal: [
      "Компании было необходимо оперативно мониторить текущее состояние и местонахождение оборудования (компьютеры, принтеры, сетевое оборудование), привязывать его к пользователям Active Directory.",
      "Отдельно для пользователей необходимо поддерживать в актуальном состояниии телефонную книгу.",
    ],
    solution: [
      "- (Python) Сбор данных скриптом по расписанию на Windows Server из Active Directory, SCCM и, прости господи, 1С, после чего данные складываются на сервер в виде CSV файла.",
      "- (C# Backend) Несколько раз в день по расписанию данные обновляются из выгруженных CSV в БД MS SQL.",
      "- (jQuery) Портал построен с помощью jQuery и фреймворка DevExtreme.",
      "- (C# Backend) Авторизация настроена по пользователям из домена Acive Directory, от отдельными таблицами по специальным правам доступа.",
    ],
    gitUrl: null,
  },
  {
    id: 1,
    image: "cadence.png",
    name: "Cadence Assistant",
    desc: "Небольшой инструмент, помогающий поддерживать заданный ритм при кардиотренировках.",
    stack: [
      { id: 0, name: "HTML", color: "bg-yellow" },
      { id: 1, name: "CSS", color: "bg-blue" },
      { id: 2, name: "JavaScript", color: "bg-yellow" },
      { id: 3, name: "React", color: "bg-react-blue" },
      { id: 4, name: "GitHub", color: "bg-black" },
    ],
    goal: [
      "Достаточно сложно крутить велотренажёр в заданном ритме, особенно если на фоне хочется посмотреть сериальчик :) Потому я подумал, что было бы неплохо иметь ритм-машину, не зависящую от играющей музыки, также имеющую хотя бы минимальный мониторинг прогресса тренировки.",
    ],
    solution: [
      "- Стандартный метроном с настройкой времени тренировки. Настройки ритма и громкости доступны во время работы.",
      "- Функционал паузы, продолжения и сброса тренировки.",
      "- Во время тренировки отображается Progress Bar, оформленный под стандартные интерфейсы спортивных тренажёров.",
    ],
    gitUrl: "https://github.com/Lexeor/cadence-assistant",
  },
  {
    id: 2,
    image: "ntb-extension.png",
    name: "New tab Chrome browser extension",
    desc: "Расширение к Chrome с прямым поиском в YouTube и Google, настраиваемым избранным, а также небольшим виджетом погоды.",
    stack: [
      { id: 0, name: "HTML", color: "bg-yellow" },
      { id: 1, name: "CSS", color: "bg-blue" },
      { id: 2, name: "JavaScript", color: "bg-yellow" },
      { id: 3, name: "React", color: "bg-react-blue" },
      { id: 4, name: "GitHub", color: "bg-black" },
    ],
    goal: [
      "Стандартная заглушка у новой старницы в Chrome, конечно, замечательная, но за столько лет уже поднадоела, потому и пришла идея сделать её более кастомизированной, а заодно потренироваться в заборе данных со стороннего API. Ну и, конечно же, прямой поиск на YouTube сэкономит целый клик! А с количеством кликов, которые мы делаем в день - это целая жизнь :)",
    ],
    solution: [
      "- Строка поиска с переключателем поисковика YouTube/Google.",
      "- Виджет по добавлению избранного с возможностью сохранять данные пользователя как в local.storage (при разработке), так и в chrome.storage (в рабочем билде).",
      "- Виджет отображения погоды с данными из OpenWeather API.",
      "- Меню настроек с возможностью отключения любого из виджетов (также сохраняются в local.storage/chrome.storage в зависимости от среды).",
    ],
    gitUrl: "https://github.com/Lexeor/ntb-extension",
  },
];

export const references = [
  {
    id: 0,
    name: "Игорь Баклашов",
    position: "Директор по ИТ",
    company: "Sandvik Mining and Construction CIS",
    email: "igor.baklashov@sandvik.com",
  },
  {
    id: 1,
    name: "Frank Siebenmorgen",
    position: "IT Manager",
    company: "Sandvik AB, Sweden",
    email: "frank.siebenmorgen@sandvik.com",
  },
  {
    id: 2,
    name: "Иван Фуров",
    position: "Senior Software Developer",
    company: "Yandex",
    email: "ifurov@yandex.ru",
  },
];
