"use strict";

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
        items: [
            "Python, C#, C++ y Java.",
            "JavaScript y TypeScript.",
            "SQL y Bash.",
        ],
    },
    {
        container: "skills-tools",
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
        items: [
            "MATLAB.",
            "Microsoft Office 365: Excel, Word y PowerPoint.",
            "Doxygen.",
        ],
    },
    {
        container: "skills-soft",
        items: [
            "Liderazgo y gestión de equipos.",
            "Comunicación clara y asertiva.",
            "Pensamiento crítico.",
            "Adaptabilidad.",
            "Aprendizaje autónomo y autogestión.",
        ],
    },
];

function createElement(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

function appendListItems(container, items) {
    items.forEach((text) => {
        container.append(createElement("li", text));
    });
}

function renderEducation() {
    const container = document.getElementById("education-list");

    education.forEach((program) => {
        const row = document.createElement("tr");
        const institution = createElement("th", program.institution);
        institution.scope = "row";

        const period = document.createElement("td");
        const startYear = createElement("time", program.startYear);
        startYear.dateTime = program.startYear;
        period.append(startYear, " - Actualidad");

        row.append(institution, createElement("td", program.degree), period);
        container.append(row);
    });
}

function renderArticles(containerId, items) {
    const container = document.getElementById(containerId);

    items.forEach((element) => {
        const article = document.createElement("article");
        const period = createElement("p", element.context);
        const date = createElement("time", element.date);
        date.dateTime = element.date;
        period.append(date);
        article.append(createElement("h3", element.title), period);

        if (element.technologies) {
            const technologies = document.createElement("p");
            technologies.append(
                createElement("strong", "Tecnologías: "),
                element.technologies,
            );
            article.append(technologies);
        }

        const list = document.createElement("ul");
        appendListItems(list, element.achievements);
        article.append(list);
        container.append(article);
    });
}

function renderSkills() {
    skills.forEach((group) => {
        appendListItems(document.getElementById(group.container), group.items);
    });
}

function initializeTheme() {
    const themeKey = "cv-theme";
    const button = document.getElementById("theme-toggle");
    let theme = "light";

    try {
        if (localStorage.getItem(themeKey) === "dark") {
            theme = "dark";
        }
    } catch {
        theme = "light";
    }

    function applyTheme() {
        document.documentElement.dataset.theme = theme;
        button.setAttribute("aria-pressed", String(theme === "dark"));
        button.title = theme === "dark" ? "Activar modo claro" : "Activar modo oscuro";
    }

    applyTheme();
    button.addEventListener("click", () => {
        theme = theme === "light" ? "dark" : "light";
        applyTheme();

        try {
            localStorage.setItem(themeKey, theme);
        } catch {
            return;
        }
    });
    button.hidden = false;
}

initializeTheme();
renderEducation();
renderArticles("projects-list", projects);
renderArticles("experience-list", experience);
renderSkills();
