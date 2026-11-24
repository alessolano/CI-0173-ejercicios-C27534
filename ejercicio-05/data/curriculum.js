const education = [
    {
        institution: "Universidad de Costa Rica (UCR)",
        degree: "Bachillerato en Ingeniería de Software",
        startYear: "2022",
    },
    {
        institution: "Instituto Tecnológico de Costa Rica (ITCR)",
        degree: "Licenciatura en Ingeniería Física",
        startYear: "2023",
    },
];

const projects = [
    {
        title: "Plataforma de recetas con personalización mediante IA",
        date: "2025",
        context: "Año: ",
        technologies: "Python, Flask, API REST, DeepSeek AI, JWT y Docker.",
        achievements: [
            "Desarrollo de un backend modular para registro de usuarios, autenticación mediante tokens y control de acceso por roles.",
            "Integración de inteligencia artificial para recomendar sustituciones de ingredientes y personalizar recetas según preferencias alimentarias, alergias e historial.",
        ],
    },
    {
        title: "Servidor web concurrente con cómputo distribuido",
        date: "2024",
        context: "Año: ",
        technologies: "C++, multihilos, Make, cómputo distribuido y WebSockets.",
        achievements: [
            "Implementación de un servidor web con concurrencia de tareas y datos mediante el patrón productor-consumidor para atender solicitudes simultáneas.",
            "Desarrollo de aplicaciones para resolver problemas matemáticos mediante procesamiento multihilo y ejecución distribuida.",
        ],
    },
    {
        title: "Algoritmo genético para optimización a gran escala",
        date: "2024",
        context: "Año: ",
        technologies: "Python, PyTorch, metaheurísticas y optimización.",
        achievements: [
            "Diseño de un algoritmo genético para resolver problemas de optimización combinatoria mediante selección, cruce y mutación.",
            "Desarrollo de representaciones de cromosomas y estrategias de evaluación adaptables a distintos problemas.",
            "Implementación de ciclos evolutivos configurables con elitismo, mutación adaptativa e inicialización guiada por heurísticas.",
        ],
    },
    {
        title: "Liderazgo de proyecto: juego de estrategia Battleship",
        date: "2024",
        context: "Proyecto académico independiente | ",
        achievements: [
            "Coordinación de un equipo de cuatro estudiantes para diseñar e implementar un juego de estrategia con estructuras de datos y operaciones algorítmicas.",
            "Planificación técnica, distribución de tareas y seguimiento del desarrollo para cumplir los plazos del proyecto.",
        ],
    },
];

const experience = [
    {
        title: "Asistente de investigación en análisis de datos",
        date: "2025",
        context: "Escuela de Física, ITCR | ",
        achievements: [
            "Desarrollo de un script de MATLAB para procesar y analizar datos experimentales de una investigación universitaria.",
            "Automatización del manejo y preprocesamiento de datos para facilitar la interpretación de resultados y reducir el trabajo manual.",
        ],
    },
];

const skills = [
    {
        container: "skills-languages",
        title: "Lenguajes de programación y consulta",
        items: [
            "Python, C#, C++ y Java.",
            "JavaScript y TypeScript.",
            "SQL y Bash.",
        ],
    },
    {
        container: "skills-tools",
        title: "Herramientas y frameworks",
        items: [
            "Git, GitHub y GitLab CI.",
            "Docker.",
            "Django y Flask.",
            "Node.js, Nest.js y Vue.js.",
            "API REST y GraphQL.",
            "PostgreSQL.",
            "PyTorch.",
        ],
    },
    {
        container: "skills-analysis",
        title: "Análisis de datos y documentación",
        items: [
            "MATLAB.",
            "Microsoft Office 365: Excel, Word y PowerPoint.",
            "Doxygen.",
        ],
    },
    {
        container: "skills-soft",
        title: "Habilidades blandas",
        items: [
            "Liderazgo y gestión de equipos.",
            "Comunicación clara y asertiva.",
            "Pensamiento crítico.",
            "Adaptabilidad.",
            "Aprendizaje autónomo y autogestión.",
        ],
    },
];

const curriculum = {
    name: "Alejandro Solano Barboza",
    headline: "Estudiante de Ingeniería de Software e Ingeniería Física",
    photo: "/img/profile.jpg",
    links: [
        {
            label: "Correo",
            href: "mailto:alejandro.solanobarboza@gmail.com",
            text: "alejandro.solanobarboza@gmail.com",
        },
        {
            label: "Teléfono",
            href: "tel:+50687943461",
            text: "+506 8794 3461",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/alessolano/",
            text: "Perfil de LinkedIn",
            external: true,
        },
        {
            label: "GitHub",
            href: "https://github.com/alessolano",
            text: "Perfil de GitHub",
            external: true,
        },
    ],
    profile: {
        introduction: "Estudiante con experiencia académica en ",
        emphasis: "desarrollo de software",
        description: " con Python, C++ y JavaScript, desarrollo backend e integración de inteligencia artificial. Cuento con conocimientos de programación de sistemas y optimización computacional. He fortalecido mis habilidades de liderazgo, trabajo en equipo y comunicación mediante proyectos grupales y más de cinco años de tutorías en programación, matemáticas y física.",
    },
    education,
    projects,
    experience,
    skills,
    volunteering: [
        {
            title: "Mentor estudiantil",
            institution: "Escuela de Ciencias de la Computación e Informática (ECCI)",
            startDate: "2023-01",
            startLabel: "Enero de 2023",
            endDate: "2023-06",
            endLabel: "Junio de 2023",
            description: "Acompañamiento a estudiantes de primer ingreso en planificación académica, estrategias de estudio y adaptación a la vida universitaria.",
        },
    ],
    awards: [
        {
            description: "Reconocimiento por liderazgo y coordinación de equipos en proyectos académicos",
            startDate: "2024-02",
            startLabel: "febrero de 2024",
            endDate: "2024-12",
            endLabel: "diciembre de 2024",
        },
    ],
    languages: ["Español.", "Inglés."],
};

export default curriculum;

