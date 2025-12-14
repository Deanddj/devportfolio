export const siteConfig = {
  name: "Dean Jaddoe",
  title: "Software Engineering Student",
  description: "Portfolio website of Dean Jaddoe",
  accentColor: "#1d4ed8",
  social: {
    email: "contact@deanj.dev",
    linkedin: "https://linkedin.com/in/deanjaddoe",
    github: "https://github.com/Deanddj",
  },
  aboutMe:
    "I'm Dean Jaddoe, a Software Engineering student at The Hague University of Applied Sciences specializing in full-stack development. I build user-friendly applications that solve real-world problems, from web apps to machine learning models.",
  skills: ["React", "Java", "ASP.NET", "Python", "C#", "Docker"],
  projects: [
    {
      name: "CarAndAll Rental Platform",
      description: "Web platform for renting cars, caravans, and campers with real-time reservations, booking management, and approval tracking.",
      // link: "https://github.com/yourusername/carandall",
      skills: ["React", "ASP.NET", "SQL Server", "Azure"],
    },
    {
      name: "ChatAI Desktop Application",
      description: "Java desktop app with tab-based interface for information search and conversations, featuring Elasticsearch integration.",
      // link: "https://github.com/yourusername/chatai",
      skills: ["Java", "JavaFX", "Elasticsearch", "JSON"],
    },
    {
      name: "Gender Prediction ML Model",
      description: "Machine learning model that predicts gender from facial images using TensorFlow and the UTKFace dataset.",
      link: "https://deanj.dev/geslacht-ai",
      skills: ["Python", "TensorFlow", "Computer Vision", "Jupyter"],
    },
    {
      name: "Proxy Tester CLI Tool",
      description: "Multi-threaded command-line tool for testing proxy servers with customizable headers and timeout configurations.",
      link: "https://github.com/Deanddj/ProxyChecker",
      skills: ["Python", "Multi-threading", "CLI"],
    },
    {
      name: "Bussen Multiplayer Game",
      description: "Online multiplayer card game where players can create or join lobbies and play together in real-time.",
      link: "https://deanj.dev/bussen",
      skills: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    },
    {
      name: "Driver's License Slot Checker",
      description: "Python script that monitors driver's license appointment slots and sends Discord notifications when earlier times become available.",
      link: "https://github.com/Deanddj/RijbewijsBot",
      skills: ["Python", "Discord API", "Web Scraping", "Automation"],
    },
  ],
  // experience: [
  //   {
  //     company: "Tech Company",
  //     title: "Senior Software Engineer",
  //     dateRange: "Jan 2022 - Present",
  //     bullets: [
  //       "Led development of microservices architecture serving 1M+ users",
  //       "Reduced API response times by 40% through optimization",
  //       "Mentored team of 5 junior developers",
  //     ],
  //   },
  //   {
  //     company: "Startup Inc",
  //     title: "Full Stack Developer",
  //     dateRange: "Jun 2020 - Dec 2021",
  //     bullets: [
  //       "Built and launched MVP product from scratch using React and Node.js",
  //       "Implemented CI/CD pipeline reducing deployment time by 60%",
  //       "Collaborated with product team to define technical requirements",
  //     ],
  //   },
  //   {
  //     company: "Digital Agency",
  //     title: "Frontend Developer",
  //     dateRange: "Aug 2018 - May 2020",
  //     bullets: [
  //       "Developed responsive web applications for 20+ clients",
  //       "Improved site performance scores by 35% on average",
  //       "Introduced modern JavaScript frameworks to legacy codebases",
  //     ],
  //   },
  // ],
  education: [
    {
      school: "The Hague University Of Applied Sciences",
      degree: "Bachelor Software Engineering",
      dateRange: "2023 - Present",
      achievements: [
        "Gained hands-on experience working in Agile Scrum methodology through university projects",
        "Successfully completed propedeuse (first-year diploma) in Software Engineering",
        "Passed all technical courses on first attempt with above-average grades",
      ],
    },
    {
      school: "Oranje Nassau College",
      degree: "NT Havo Diploma",
      dateRange: "2017 - 2023",
      achievements: [
        "Completed HAVO with informatica specialization, building IT foundation before university",
        "Scored high marks in mathematics and science subjects",
      ],
    },
  ],
};
