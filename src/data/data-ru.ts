import { data as dataEn } from "./data-en";

export const data = {
  skills: dataEn.skills,
  certifications: [
    {
      id: 0,
      logo: "images/misis-logo.png",
      name: "Московский Институт Стали и Сплавов (МИСиС)",
      specialization: "Автоматизация технологических процессов и производств",
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
    {
      id: 2,
      logo: "images/freecodecamp-logo.png",
      name: "FreeCodeCamp.org",
      specialization: "JavaScript Algorithms and Data Structures",
      graduationDate: "22.06.2022",
      url: "files/freecodecamp_algorithms.pdf",
    },
  ],
  links: dataEn.links,
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
      desc: "Проект по сбору, анализу и удобному отображению корпоративной информации об оборудовании и сетях на моей прошлой должности IT координатора инфраструктуры.",
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
        "Мониторить текущее состояние и местонахождение оборудования (компьютеры, принтеры, сетевое оборудование), привязывать его к пользователям Active Directory.",
        "Поддерживать в актуальном состояниии телефонную книгу с возможностью редактирования базы телефонных номеров.",
        "Создать интерфейс для сотрудников IT для учёта рабочего времени, который потом в заданном формате раз в месяц загружать в общую корпоративную систему.",
      ],
      solution: [
        "- (Python) Сбор данных скриптом по расписанию на Windows Server из Active Directory, SCCM, оборудования Cisco и, прости господи, 1С, после чего данные складываются на сервер в виде CSV файлов.",
        "- (C# Backend) Обновление данных из выгруженных CSV в БД MS SQL по расписанию.",
        "- (jQuery) Портал построен с помощью jQuery и фреймворка DevExtreme.",
        "- (C# Backend) Автоматическая авторизация по пользователям из домена Acive Directory, особые права доступа регулируются по отдельной SQL таблице.",
        "- (MS SQL) Архитектура и реализации БД со всеми необходимыми связями.",
        "- Интерфейс учёта рабочего времени сотрудников IT с возможностью выгрузки в CSV для руководителя отдела.",
        "- Интерфейс редактирования записей телефонной книги с возможностью отключить автоматическое обновление из Active Directory отдельной записи при необходимости.",
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
      desc: "Расширение к Chrome с прямым поиском в YouTube и Google, настраиваемым избранным, а также небольшим виджетом погоды.",
      stack: [
        { id: 0, name: "HTML", color: "bg-html" },
        { id: 1, name: "CSS", color: "bg-blue" },
        { id: 2, name: "JavaScript", color: "bg-yellow" },
        { id: 3, name: "React", color: "bg-react-blue" },
        { id: 4, name: "Git", color: "bg-black" },
      ],
      goal: [
        "Стандартная заглушка у новой старницы в Chrome, конечно, замечательная, но за столько лет уже поднадоела, потому и пришла идея сделать её более кастомизированной, а заодно потренироваться в заборе данных со стороннего API. Ну и, конечно же, прямой поиск на YouTube сэкономит целый клик! А с количеством кликов, которые мы делаем в день - это целая жизнь :)",
      ],
      solution: [
        "- Строка поиска с переключателем поисковика YouTube/Google.",
        "- Виджет по добавлению избранного с возможностью сохранять данные пользователя как в local.storage (при разработке), так и в chrome.storage (в рабочем билде).",
        "- Виджет отображения погоды с данными из OpenWeather API.",
        "- Меню настроек с возможностью отключения любого из виджетов (также сохраняются в local.storage/chrome.storage в зависимости от среды).",
        "- Смена цвета фона в зависимости от времени суток. (Должен же программист хоть иногда иметь представление, что там происходит за окном)",
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
      desc: "Небольшой инструмент, помогающий поддерживать заданный ритм при кардиотренировках.",
      stack: [
        { id: 0, name: "HTML", color: "bg-html" },
        { id: 1, name: "CSS", color: "bg-blue" },
        { id: 2, name: "JavaScript", color: "bg-yellow" },
        { id: 3, name: "React", color: "bg-react-blue" },
        { id: 4, name: "Git", color: "bg-black" },
      ],
      goal: [
        "Создать ритм-машину, не зависящую от играющей музыки, а также имеющую хотя бы минимальный мониторинг прогресса тренировки.",
        "Без этого достаточно сложно крутить велотренажёр в заданном ритме, особенно если на фоне хочется посмотреть сериальчик :)",
      ],
      solution: [
        "- Стандартный метроном с настройкой времени тренировки. Настройки ритма и громкости доступны во время работы.",
        "- Функционал паузы, продолжения и сброса тренировки.",
        "- Во время тренировки отображается Progress Bar, оформленный под стандартные интерфейсы спортивных тренажёров.",
      ],
      gitUrl: "https://github.com/Lexeor/cadence-assistant",
      gitPagesUrl: "https://lexeor.github.io/cadence-assistant/",
    },
    {
      id: 3,
      images: [
        "images/projects/tanner_1.png",
        "images/projects/tanner_2.gif",
        "images/projects/tanner_3.png",
        "images/projects/tanner_4.png",
      ],
      name: "Tanner",
      desc: "Мобильное веб-приложение для быстрого и безопасного загара по системе Голтиса.",
      stack: [
        { id: 0, name: "HTML", color: "bg-html" },
        { id: 1, name: "CSS", color: "bg-blue" },
        { id: 2, name: "Sass", color: "bg-sass" },
        { id: 3, name: "JavaScript", color: "bg-yellow" },
        { id: 4, name: "TypeScript", color: "bg-typescript" },
        { id: 5, name: "React", color: "bg-react-blue" },
        { id: 6, name: "Git", color: "bg-black" },
      ],
      goal: [
        "Создать приложение помогающее получить быстрый и безопасный загар по системе Голтиса.",
      ],
      solution: [
        "- Таймер со звуковым оповещением о необходимости смены стороны загарания/ухода в тень.",
        "- Автоматическое переключение стадии загарания на следующий день в зависимости от выбранного стиля.",
        "- Текущие показатели погоды и UV индекса для выбранного в настройках города.",
      ],
      gitUrl: "https://github.com/Lexeor/tanner-reborn",
      serverUrl: "http://62.84.125.174/",
    },
    {
      id: 4,
      images: ["images/projects/cv_1.png", "images/projects/cv_2.png"],
      name: "CV / Portfolio site",
      desc: "Ах да! Этот сайт тоже входит в портфолио по очевидным причинам :)",
      stack: [
        { id: 0, name: "HTML", color: "bg-html" },
        { id: 1, name: "CSS", color: "bg-blue" },
        { id: 2, name: "Sass", color: "bg-sass" },
        { id: 3, name: "JavaScript", color: "bg-yellow" },
        { id: 4, name: "TypeScript", color: "bg-typescript" },
        { id: 5, name: "React", color: "bg-react-blue" },
        { id: 6, name: "Git", color: "bg-black" },
      ],
      goal: [
        "Создать сайт-портфолио. Мне кажется, что это лучший способ сразу показать свои скиллы.",
      ],
      solution: [
        "- Изначально сайт написан на JavaScript с последующей миграцией на TypeScript.",
        "- Адаптивный дизайн.",
        "- Печатная форма резюме. Для HR важно иметь возможность распечатать всю информацию на одном листе.",
        "- Перевод на русский и английский языки.",
        "- Размещение на Github Pages.",
      ],
      gitUrl: "https://github.com/Lexeor/cv",
      gitPagesUrl: "https://lexeor.github.io/cv/",
    },
  ],
  references: [
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
      position: "Head of IT Infrastructure and Country Services",
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
  ],

  employment: [
    {
      id: 0,
      name: "Sandvik Mining and Contsruction",
      position: "IT Infrastructure Manager",
      from: "Oct 2011",
      to: "Apr 2023",
      description: "",
    },
  ],

  projectsPrint: [
    {
      id: 0,
      name: "Personal Portfolio/CV site",
      date: "May 2023",
      description: [
        "Written with JavaScript and migrated to TypeScript. Responsive web design included.",
        "Stack: React, JavaScript, TypeScript, CSS, SASS, Git",
      ],
    },
    {
      id: 1,
      name: "Tanner Web App",
      date: "Jun 2023",
      description: [
        "Tanning assistance application designed for mobile, deployed on personal server.",
        "Weather and UV index data gathered from free API's and consolidated on backend to bypass the limit on the number of free calls.",
        "Stack: React, JavaScript, TypeScript, CSS, SASS, Git, API",
      ],
    },
    {
      id: 2,
      name: "Tanner Web App",
      date: "Aug 2022",
      description: [
        'Educational Chrome "New Tab" extension with changeable background depending on time of day, weather widget, custom favorites and switchable searchbar for Google/Youtube.',
        "Stack: React, JavaScript, CSS, Git",
      ],
    },
  ],
};
