document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "Portafolio Personal",
            description: "Mi sitio web personal creado con HTML, CSS y JavaScript",
            image: "https://source.unsplash.com/random/400x300/?portfolio",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/ianmanfredi/portfolio"
        },
        {
            title: "Proyecto de Base de Datos",
            description: "Sistema de gestión de base de datos desarrollado en la universidad",
            image: "https://source.unsplash.com/random/400x300/?database",
            technologies: ["SQL", "C#"],
            link: "https://github.com/ianmanfredi/database-project"
        },
        {
            title: "Aplicación Python",
            description: "Aplicación de línea de comandos para procesamiento de datos",
            image: "https://source.unsplash.com/random/400x300/?python",
            technologies: ["Python"],
            link: "https://github.com/ianmanfredi/python-app"
        }
    ];

    const skills = ["C#", "Python", "HTML", "CSS", "SQL", "GitHub", "Docker", "Linux"];

    const translations = {
        es: {
            "nav.home": "Inicio",
            "nav.about": "Sobre Mí",
            "nav.projects": "Proyectos",
            "nav.skills": "Habilidades",
            "nav.contact": "Contacto",
            "hero.name": "Ian Manfredi",
            "hero.title": "Estudiante de Programación",
            "hero.cta": "Contáctame",
            "about.title": "Sobre Mí",
            "about.description": "Soy un estudiante de Programación en la Universidad Tecnológica Nacional (UTN) en Bahía Blanca, actualmente en mi primer año. Tengo 18 años y soy apasionado por el desarrollo de software. En la universidad, aprendí C# y Python, y actualmente estoy profundizando en todo lo relacionado con bases de datos. Además, por mi cuenta, completé un curso de HTML y CSS, y estoy comenzando a crear mi propio portafolio. También tengo conocimientos en GitHub, Docker y Linux. Siempre estoy buscando nuevas oportunidades para aprender y mejorar mis habilidades.",
            "projects.title": "Proyectos",
            "skills.title": "Habilidades Técnicas",
            "contact.title": "Contacto",
            "footer.copyright": "© 2023 Ian Manfredi. Todos los derechos reservados.",
            "project.viewProject": "Ver Proyecto"
        },
        en: {
            "nav.home": "Home",
            "nav.about": "About Me",
            "nav.projects": "Projects",
            "nav.skills": "Skills",
            "nav.contact": "Contact",
            "hero.name": "Ian Manfredi",
            "hero.title": "Programming Student",
            "hero.cta": "Contact Me",
            "about.title": "About Me",
            "about.description": "I am a Programming student at the National Technological University (UTN) in Bahía Blanca, currently in my first year. I am 18 years old and passionate about software development. In university, I learned C# and Python, and I am currently diving into everything related to databases. Additionally, on my own, I completed a course in HTML and CSS, and I am starting to create my own portfolio. I also have knowledge in GitHub, Docker, and Linux. I am always seeking new opportunities to learn and enhance my skills.",
            "projects.title": "Projects",
            "skills.title": "Technical Skills",
            "contact.title": "Contact",
            "footer.copyright": "© 2023 Ian Manfredi. All rights reserved.",
            "project.viewProject": "View Project"
        }
    };

    let currentLanguage = 'es';

    function loadProjects() {
        const projectGrid = document.querySelector('.project-grid');
        projectGrid.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <p>${project.technologies.join(', ')}</p>
                    <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer" data-i18n="project.viewProject">Ver Proyecto</a>
                </div>
            `;
            projectGrid.appendChild(projectCard);
        });
        updateLanguage();
    }

    function loadSkills() {
        const skillsContainer = document.querySelector('.skills-container');
        skillsContainer.innerHTML = '';
        skills.forEach(skill => {
            const skillBadge = document.createElement('span');
            skillBadge.classList.add('skill-badge');
            skillBadge.textContent = skill;
            skillsContainer.appendChild(skillBadge);
        });
    }

    function updateLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translations[currentLanguage][key] || key;
        });
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        updateLanguage();
        document.getElementById('languageToggle').textContent = currentLanguage === 'es' ? 'EN' : 'ES';
    }

    loadProjects();
    loadSkills();
    updateLanguage();

    // Language toggle button
    document.getElementById('languageToggle').addEventListener('click', toggleLanguage);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});