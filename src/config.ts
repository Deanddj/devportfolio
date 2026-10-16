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
    "I'm Dean Jaddoe, a Software Engineering student at The Hague University of Applied Sciences with a focus on backend and cloud development. I enjoy the parts of a system you don't see: APIs, databases and the infrastructure that keeps them running. I like taking projects all the way from idea to something live that people can actually use.",
  skills: ["Python", "Java", "C#", "Docker", "Linux"],
  projects: [
    {
      name: "Public Transport Reliability API",
      description: "Public API that checks how reliable Dutch trams, buses and metros really are by comparing the timetable with real-time KV6/KV17 data, trip by trip. Live for HTM, GVB, RET and U-OV, with recorders archiving every message so the past can always be reprocessed.",
      link: "https://github.com/Deanddj/ov-reliability",
      skills: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    },
    {
      name: "Real-time Multiplayer Card Game",
      description: "Cross-platform multiplayer version of the Dutch card game Bussen. A Node.js server owns the game logic and syncs state to clients in real time over Socket.IO, with PostgreSQL for persistent data, Redis for session and lobby state, and Capacitor for the native apps.",
      link: "https://onlinebussen.nl",
      skills: ["React", "Node.js", "Socket.IO", "PostgreSQL", "Redis", "Capacitor"],
    },
    {
      name: "Pathfinding Visualizer",
      description: "Interactive visualizer for 5 pathfinding algorithms (BFS, DFS, Dijkstra, Greedy Best-First, A*) racing on procedurally-generated grids, with per-algorithm terrain tuned to expose each strategy's strengths and weaknesses.",
      link: "https://pathfinding.deanj.dev",
      skills: ["React", "TypeScript", "Vite"],
    },
    {
      name: "CarAndAll Rental Platform",
      description: "Web platform for renting cars, caravans, and campers with real-time reservations, booking management, and approval tracking.",
      link: "https://github.com/Deanddj/CarAndAll-ASPReact",
      skills: ["React", "ASP.NET", "C#"],
    },
    {
      name: "ChatAI Desktop Application",
      description: "Java desktop app with tab-based interface for information search and conversations, featuring Elasticsearch integration.",
      link: "https://github.com/Deanddj/ApplicationAI",
      skills: ["Java", "JavaFX", "Elasticsearch", "JSON"],
    },
    {
      name: "Gender Prediction ML Model",
      description: "Machine learning model that predicts gender from facial images using TensorFlow and the UTKFace dataset.",
      link: "https://github.com/Deanddj/GeslachtAI",
      skills: ["Python", "TensorFlow", "Computer Vision", "Jupyter"],
    },
    {
      name: "Driver's License Slot Checker",
      description: "Python script that monitors driver's license appointment slots and sends Discord notifications when earlier times become available.",
      link: "https://github.com/Deanddj/RijbewijsBot",
      skills: ["Python", "Discord API", "Web Scraping", "Automation"],
    },
    {
      name: "Proxy Tester CLI Tool",
      description: "Multi-threaded command-line tool for testing proxy servers with customizable headers and timeout configurations.",
      link: "https://github.com/Deanddj/ProxyChecker",
      skills: ["Python", "Multi-threading", "CLI"],
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
