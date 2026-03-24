// ===== DICCIONARIO DE IDIOMAS =====
const translations = {
    es: {
        // Navegación
        nav: {
            inicio: "Inicio",
            habilidades: "Habilidades",
            publicaciones: "Publicaciones",
            proyectos: "Proyectos",
            contacto: "Contacto"
        },
        // Hero
        hero: {
            title: "Roberto Morollón",
            subtitle: "Doctor en Bioingeniería",
            lab: "Laboratorio de Neuroprótesis Visuales",
            group: "Grupo de Neuroingeniería Biomédica",
            institute: "Instituto de Bioingeniería",
            university: "Universidad Miguel Hernández",
            keywords: ["Bioingeniería", "Neurociencias", "Prótesis Visuales", "Visión Artificial", "Comportamiento", "Realidad Virtual"],
            cvButton: "Descargar CV"
        },
        // Sobre Mí
        about: {
            title: "Sobre Mí",
            text1: "Doctor en Bioingeniería con formación interdisciplinar en neurociencia, robótica y visión artificial. Cuatro años de experiencia contratada en investigación, con financiación competitiva y publicaciones en el campo de prótesis visuales corticales. Busco incorporarme a proyectos de I+D en el sector académico o empresarial, aportando un perfil híbrido que combina conocimiento biológico con herramientas de deep learning, visión por computadora y robótica.",
            text2: "Apasionado por la intersección entre biología, neurociencia, robótica y comportamiento, desarrollo soluciones que conectan la tecnología con el potencial humano para restaurar capacidades sensoriales perdidas.",
            text3: "Durante los últimos años, en el Laboratorio de Neuroprótesis Visuales de la Universidad Miguel Hernández, he desarrollado el análisis comportamental para prótesis visuales corticales, explorando cómo la neurociencia y la ingeniería pueden converger para restaurar la percepción visual en personas ciegas.",
            text4: "Mi investigación combina análisis de datos (Python, MATLAB, C++), neuroimagen, electrofisiología, modelos computacionales y deep learning. Colaboro activamente en equipos multidisciplinares, presentando regularmente mis hallazgos en conferencias internacionales."
        },
        // Campos de Investigación
        researchFields: {
            title: "Campos de Investigación",
            subtitle: "Intersección de disciplinas para la innovación - Un enfoque multidisciplinar integrador",
            biology: {
                title: "Biología",
                items: ["Ciencias de la vida", "Ciencias de la salud", "Biofísica", "Biología celular", "Óptica", "Electrofisiología"]
            },
            neuroscience: {
                title: "Neurociencias",
                items: ["Neurobiología", "Cognición", "Percepción", "Psicología", "Neuropsicología", "Comportamiento"]
            },
            engineering: {
                title: "Ingeniería",
                items: ["Bioingeniería", "Robótica", "Cibernética", "Realidad Virtual", "Inteligencia artificial", "Visión artificial"]
            }
        },
        // Habilidades Técnicas
        skills: {
            title: "Habilidades Técnicas",
            subtitle: "Tecnologías, herramientas y metodologías que domino en mi investigación",
            programming: "Programación & Análisis de Datos",
            experimental: "Técnicas Experimentales",
            tools: "Herramientas & Desarrollo",
            softSkills: "Soft Skills",
            languages: "Idiomas"
        },
        // Publicaciones
        publications: {
            title: "Publicaciones en Revistas Científicas"
        },
        // Congresos
        conferences: {
            title: "Comunicaciones en Congresos",
            subtitle: "Participaciones en conferencias nacionales e internacionales",
            filters: {
                all: "Todos",
                "2025": "2025",
                "2024": "2024",
                "2023": "2023",
                "2022": "2022"
            },
            counter: "Mostrando",
            of: "de",
            communications: "comunicaciones"
        },
        // Proyectos
        projects: {
            title: "Proyectos de Investigación",
            phd: {
                title: "Evaluación del Comportamiento en Prótesis Visuales Corticales",
                role: "Tesis Doctoral - Doctorado en Bioingeniería - UMH",
                desc: "Desarrollo de protocolos comportamentales y algoritmos de análisis para evaluar la percepción visual inducida por estimulación intracortical en modelos animales. Integración de datos electrophysiológicos y de comportamiento para optimizar estrategias de estimulación.",
                institution: "Biomedical Neuroengineering Group · Instituto de Bioingeniería · Universidad Miguel Hernández (2020 - 2026)"
            },
            semg: {
                title: "Reconocimiento de patrones musculares con el sensor sEMG de bajo coste Myo y Deep Learning",
                role: "TFM - Máster en Robótica - UA",
                desc: "Implementación de redes neuronales profundas (Deep Learning) para clasificar patrones de activación muscular mediante sensores de electromiografía superficial (sEMG), con aplicaciones en control de prótesis robóticas.",
                institution: "RoViT Lab · Escuela Politécnica Superior · Universidad de Alicante (2020)"
            },
            iit: {
                title: "Análisis Causal de Redes Neuronales: una taxonomía basada en la Información Integrada (Φ)",
                role: "TFM - Máster en Neurociencias - UMH",
                desc: "Desarrollo de una taxonomía sistemática y un análisis de sistemas discretos (redes de 2 y 3 nodos) para estudiar los fundamentos de la causalidad desde la perspectiva de la Teoría de la Información Integrada (IIT) usando Φ (Phi).",
                institution: "Comportamiento de los organismos · Instituto de Neurociencias · CSIC · Universidad Miguel Hernández (2019)"
            },
            sharks: {
                title: "Estudio de la Jerarquía en la Alimentación de una Población de Carcharhíniformes en el Zoo Aquarium de Madrid",
                role: "TFG - Grado en Biología - UA",
                desc: "Investigación de las dinámicas sociales y las estructuras jerárquicas en una población de dos especies de tiburones.",
                institution: "Zoo Aquarium de Madrid · Universidad Complutense de Madrid · Universidad de Alicante (2017)"
            }
        },
        // TFMs
        tfms: {
            title: "TFMs Co-dirigidos",
            subtitle: "Trabajos de Fin de Máster supervisados en el Laboratorio de Neuroprótesis Visuales",
            summary: "Todos los trabajos desarrollados en el Laboratorio de Neuroprótesis Visuales, Instituto de Neurociencias, UMH, abordando temas de rehabilitación, realidad virtual, visión artificial y tecnologías asistivas.",
            stats: {
                tfms: "TFMs co-dirigidos",
                years: "años consecutivos",
                international: "estudiantes internacionales"
            }
        },
        // Contacto
        contact: {
            title: "Contacto",
            name: "Nombre",
            email: "Email",
            message: "Mensaje",
            send: "Enviar Mensaje",
            emailDirect: "📧 También puedes contactarme directamente en:",
            emailNote: "Haz clic para abrir tu cliente de correo"
        },
        // Footer
        footer: {
            rights: "Todos los derechos reservados"
        }
    },
    en: {
        // Navigation
        nav: {
            inicio: "Home",
            habilidades: "Skills",
            publicaciones: "Publications",
            proyectos: "Projects",
            contacto: "Contact"
        },
        // Hero
        hero: {
            title: "Roberto Morollón",
            subtitle: "PhD in Bioengineering",
            lab: "Visual Neuroprosthesis Laboratory",
            group: "Biomedical Neuroengineering Group",
            institute: "Institute of Bioengineering",
            university: "Miguel Hernández University",
            keywords: ["Bioengineering", "Neurosciences", "Visual Prostheses", "Computer Vision", "Behavior", "Virtual Reality"],
            cvButton: "Download CV"
        },
        // About
        about: {
            title: "About Me",
            text1: "PhD in Bioengineering with interdisciplinary training in neuroscience, robotics, and computer vision. Four years of contracted research experience with competitive funding and publications in the field of cortical visual prostheses. Seeking to join R&D projects in academia or industry, bringing a hybrid profile that combines biological knowledge with deep learning, computer vision, and robotics tools.",
            text2: "Passionate about the intersection of biology, neuroscience, robotics, and behavior, I develop solutions that connect technology with human potential to restore lost sensory capabilities.",
            text3: "In recent years, at the Visual Neuroprosthesis Laboratory of Miguel Hernández University, I have developed behavioral analysis for cortical visual prostheses, exploring how neuroscience and engineering can converge to restore visual perception in blind individuals.",
            text4: "My research combines data analysis (Python, MATLAB, C++), neuroimaging, electrophysiology, computational models, and deep learning. I actively collaborate in multidisciplinary teams, regularly presenting my findings at international conferences."
        },
        // Research Fields
        researchFields: {
            title: "Research Fields",
            subtitle: "Intersection of disciplines for innovation - A multidisciplinary integrative approach",
            biology: {
                title: "Biology",
                items: ["Life Sciences", "Health Sciences", "Biophysics", "Cell Biology", "Optics", "Electrophysiology"]
            },
            neuroscience: {
                title: "Neurosciences",
                items: ["Neurobiology", "Cognition", "Perception", "Psychology", "Neuropsychology", "Behavior"]
            },
            engineering: {
                title: "Engineering",
                items: ["Bioengineering", "Robotics", "Cybernetics", "Virtual Reality", "Artificial Intelligence", "Computer Vision"]
            }
        },
        // Skills
        skills: {
            title: "Technical Skills",
            subtitle: "Technologies, tools, and methodologies I master in my research",
            programming: "Programming & Data Analysis",
            experimental: "Experimental Techniques",
            tools: "Tools & Development",
            softSkills: "Soft Skills",
            languages: "Languages"
        },
        // Publications
        publications: {
            title: "Publications in Scientific Journals"
        },
        // Conferences
        conferences: {
            title: "Conference Communications",
            subtitle: "Participation in national and international conferences",
            filters: {
                all: "All",
                "2025": "2025",
                "2024": "2024",
                "2023": "2023",
                "2022": "2022"
            },
            counter: "Showing",
            of: "of",
            communications: "communications"
        },
        // Projects
        projects: {
            title: "Research Projects",
            phd: {
                title: "Behavioral Assessment in Cortical Visual Prostheses",
                role: "PhD Thesis - PhD in Bioengineering - UMH",
                desc: "Development of behavioral protocols and analysis algorithms to evaluate visual perception induced by intracortical stimulation in animal models. Integration of electrophysiological and behavioral data to optimize stimulation strategies.",
                institution: "Biomedical Neuroengineering Group · Institute of Bioengineering · Miguel Hernández University (2020 - 2026)"
            },
            semg: {
                title: "Muscle Pattern Recognition with Low-Cost sEMG Sensor Myo and Deep Learning",
                role: "Master's Thesis - Master in Robotics - UA",
                desc: "Implementation of deep neural networks to classify muscle activation patterns using surface electromyography (sEMG) sensors, with applications in robotic prosthesis control.",
                institution: "RoViT Lab · Polytechnic School · University of Alicante (2020)"
            },
            iit: {
                title: "Causal Analysis of Neural Networks: a taxonomy based on Integrated Information (Φ)",
                role: "Master's Thesis - Master in Neurosciences - UMH",
                desc: "Development of a systematic taxonomy and analysis of discrete systems (2 and 3 node networks) to study the fundamentals of causality from the perspective of Integrated Information Theory (IIT) using Φ (Phi).",
                institution: "Organism Behavior · Institute of Neurosciences · CSIC · Miguel Hernández University (2019)"
            },
            sharks: {
                title: "Study of Feeding Hierarchy in a Population of Carcharhiniformes at the Madrid Zoo Aquarium",
                role: "Bachelor's Thesis - Biology Degree - UA",
                desc: "Investigation of social dynamics and hierarchical structures in a population of two shark species in captivity.",
                institution: "Madrid Zoo Aquarium · Complutense University of Madrid · University of Alicante (2017)"
            }
        },
        // TFMs
        tfms: {
            title: "Co-supervised Master's Theses",
            subtitle: "Master's Theses supervised at the Visual Neuroprosthesis Laboratory",
            summary: "All works developed at the Visual Neuroprosthesis Laboratory, Institute of Neurosciences, UMH, addressing topics of rehabilitation, virtual reality, computer vision, and assistive technologies.",
            stats: {
                tfms: "Co-supervised Master's Theses",
                years: "consecutive years",
                international: "international students"
            }
        },
        // Contact
        contact: {
            title: "Contact",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            emailDirect: "📧 You can also contact me directly at:",
            emailNote: "Click to open your email client"
        },
        // Footer
        footer: {
            rights: "All rights reserved"
        }
    }
};

// Idioma actual
let currentLang = 'es';

// Función para cambiar el idioma
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updatePageContent();
    updateLanguageButton();
}

// Función para actualizar el botón de idioma
function updateLanguageButton() {
    const langBtn = document.getElementById('lang-toggle');
    const langFlag = document.getElementById('lang-flag');
    const langText = document.getElementById('lang-text');
    
    if (langBtn) {
        if (currentLang === 'es') {
            langFlag.src = 'assets/icons/spain_flag.png';
            langFlag.alt = 'Español';
            langText.textContent = 'ES';
        } else {
            langFlag.src = 'assets/icons/uk_flag.png';
            langFlag.alt = 'English';
            langText.textContent = 'EN';
        }
    }
}

// Función para actualizar todo el contenido de la página
function updatePageContent() {
    const t = translations[currentLang];
    
    // Actualizar navegación
    const navLinks = document.querySelectorAll('.nav-menu li a:not(.lang-toggle-btn)');
    if (navLinks.length >= 5) {
        navLinks[0].textContent = t.nav.inicio;
        navLinks[1].textContent = t.nav.habilidades;
        navLinks[2].textContent = t.nav.publicaciones;
        navLinks[3].textContent = t.nav.proyectos;
        navLinks[4].textContent = t.nav.contacto;
    }
    
    // Actualizar Hero
    const heroTitle = document.querySelector('#inicio h1');
    const heroSubtitle = document.querySelector('#inicio .subtitle');
    const affiliations = document.querySelectorAll('#inicio .affiliation');
    if (heroTitle) heroTitle.textContent = t.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    if (affiliations[0]) affiliations[0].textContent = t.hero.lab;
    if (affiliations[1]) affiliations[1].textContent = t.hero.group;
    if (affiliations[2]) affiliations[2].textContent = t.hero.institute;
    if (affiliations[3]) affiliations[3].textContent = t.hero.university;
    
    const keywordSpans = document.querySelectorAll('#inicio .keywords span');
    t.hero.keywords.forEach((kw, i) => {
        if (keywordSpans[i]) keywordSpans[i].textContent = kw;
    });
    
    const cvButton = document.querySelector('#inicio .cv-button');
    if (cvButton) cvButton.innerHTML = `<span class="button-icon">📄</span> ${t.hero.cvButton}`;
    
    // Actualizar Sobre Mí
    const aboutTitle = document.querySelector('#sobre-mi h2');
    if (aboutTitle) aboutTitle.textContent = t.about.title;
    const aboutTexts = document.querySelectorAll('#sobre-mi .about-text p');
    if (aboutTexts[0]) aboutTexts[0].textContent = t.about.text1;
    if (aboutTexts[1]) aboutTexts[1].textContent = t.about.text2;
    if (aboutTexts[2]) aboutTexts[2].textContent = t.about.text3;
    if (aboutTexts[3]) aboutTexts[3].textContent = t.about.text4;
    
    // Actualizar Campos de Investigación
    const fieldsTitle = document.querySelector('#campos-investigacion h2');
    if (fieldsTitle) fieldsTitle.textContent = t.researchFields.title;
    const fieldsSubtitle = document.querySelector('#campos-investigacion .section-subtitle');
    if (fieldsSubtitle) fieldsSubtitle.textContent = t.researchFields.subtitle;
    
    const fieldCards = document.querySelectorAll('#campos-investigacion .field-card');
    if (fieldCards[0]) {
        fieldCards[0].querySelector('h3').textContent = t.researchFields.biology.title;
        const biologyItems = fieldCards[0].querySelectorAll('.field-list li');
        t.researchFields.biology.items.forEach((item, i) => {
            if (biologyItems[i]) biologyItems[i].textContent = item;
        });
    }
    
    if (fieldCards[1]) {
        fieldCards[1].querySelector('h3').textContent = t.researchFields.neuroscience.title;
        const neuroscienceItems = fieldCards[1].querySelectorAll('.field-list li');
        t.researchFields.neuroscience.items.forEach((item, i) => {
            if (neuroscienceItems[i]) neuroscienceItems[i].textContent = item;
        });
    }
    
    if (fieldCards[2]) {
        fieldCards[2].querySelector('h3').textContent = t.researchFields.engineering.title;
        const engineeringItems = fieldCards[2].querySelectorAll('.field-list li');
        t.researchFields.engineering.items.forEach((item, i) => {
            if (engineeringItems[i]) engineeringItems[i].textContent = item;
        });
    }
    
    // Actualizar Habilidades
    const skillsTitle = document.querySelector('#habilidades h2');
    if (skillsTitle) skillsTitle.textContent = t.skills.title;
    const skillsSubtitle = document.querySelector('#habilidades .section-subtitle');
    if (skillsSubtitle) skillsSubtitle.textContent = t.skills.subtitle;
    
    const categoryTitles = document.querySelectorAll('#habilidades .category-title');
    if (categoryTitles[0]) categoryTitles[0].innerHTML = `<span class="category-icon">💻</span> ${t.skills.programming}`;
    if (categoryTitles[1]) categoryTitles[1].innerHTML = `<span class="category-icon">🔬</span> ${t.skills.experimental}`;
    if (categoryTitles[2]) categoryTitles[2].innerHTML = `<span class="category-icon">🛠️</span> ${t.skills.tools}`;
    if (categoryTitles[3]) categoryTitles[3].innerHTML = `<span class="category-icon">🤝</span> ${t.skills.softSkills}`;
    if (categoryTitles[4]) categoryTitles[4].innerHTML = `<span class="category-icon">🌐</span> ${t.skills.languages}`;
    
    // Actualizar Publicaciones
    const pubsTitle = document.querySelector('#publicaciones h2');
    if (pubsTitle) pubsTitle.textContent = t.publications.title;
    
    // Actualizar Congresos
    const confTitle = document.querySelector('#congresos h2');
    if (confTitle) confTitle.textContent = t.conferences.title;
    const confSubtitle = document.querySelector('#congresos .section-subtitle');
    if (confSubtitle) confSubtitle.textContent = t.conferences.subtitle;
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns[0]) filterBtns[0].textContent = t.conferences.filters.all;
    if (filterBtns[1]) filterBtns[1].textContent = t.conferences.filters["2025"];
    if (filterBtns[2]) filterBtns[2].textContent = t.conferences.filters["2024"];
    if (filterBtns[3]) filterBtns[3].textContent = t.conferences.filters["2023"];
    if (filterBtns[4]) filterBtns[4].textContent = t.conferences.filters["2022"];
    
    // Actualizar Proyectos
    const projectsTitle = document.querySelector('#investigacion h2');
    if (projectsTitle) projectsTitle.textContent = t.projects.title;
    const projectCards = document.querySelectorAll('#investigacion .project-card');
    if (projectCards[0]) {
        projectCards[0].querySelector('h3').textContent = t.projects.phd.title;
        projectCards[0].querySelector('.project-role').innerHTML = `<strong>${t.projects.phd.role.split(' - ')[0]}</strong> - ${t.projects.phd.role.split(' - ').slice(1).join(' - ')}`;
        projectCards[0].querySelector('.project-desc').textContent = t.projects.phd.desc;
        projectCards[0].querySelector('.project-institution').textContent = t.projects.phd.institution;
    }
    
    if (projectCards[1]) {
        projectCards[1].querySelector('h3').textContent = t.projects.semg.title;
        projectCards[1].querySelector('.project-role').innerHTML = `<strong>${t.projects.semg.role.split(' - ')[0]}</strong> - ${t.projects.semg.role.split(' - ').slice(1).join(' - ')}`;
        projectCards[1].querySelector('.project-desc').textContent = t.projects.semg.desc;
        projectCards[1].querySelector('.project-institution').textContent = t.projects.semg.institution;
    }
    
    if (projectCards[2]) {
        projectCards[2].querySelector('h3').textContent = t.projects.iit.title;
        projectCards[2].querySelector('.project-role').innerHTML = `<strong>${t.projects.iit.role.split(' - ')[0]}</strong> - ${t.projects.iit.role.split(' - ').slice(1).join(' - ')}`;
        projectCards[2].querySelector('.project-desc').textContent = t.projects.iit.desc;
        projectCards[2].querySelector('.project-institution').textContent = t.projects.iit.institution;
    }
    
    if (projectCards[3]) {
        projectCards[3].querySelector('h3').textContent = t.projects.sharks.title;
        projectCards[3].querySelector('.project-role').innerHTML = `<strong>${t.projects.sharks.role.split(' - ')[0]}</strong> - ${t.projects.sharks.role.split(' - ').slice(1).join(' - ')}`;
        projectCards[3].querySelector('.project-desc').textContent = t.projects.sharks.desc;
        projectCards[3].querySelector('.project-institution').textContent = t.projects.sharks.institution;
    }
    
    // Actualizar TFMs
    const tfmsTitle = document.querySelector('#tfms h2');
    if (tfmsTitle) tfmsTitle.textContent = t.tfms.title;
    const tfmsSubtitle = document.querySelector('#tfms .section-subtitle');
    if (tfmsSubtitle) tfmsSubtitle.textContent = t.tfms.subtitle;
    const tfmsNote = document.querySelector('#tfms .summary-note');
    if (tfmsNote) tfmsNote.innerHTML = `<span class="note-icon">🎓</span> ${t.tfms.summary}`;
    
    const tfmStats = document.querySelectorAll('#tfms .summary-stat .stat-label');
    if (tfmStats[0]) tfmStats[0].textContent = t.tfms.stats.tfms;
    if (tfmStats[1]) tfmStats[1].textContent = t.tfms.stats.years;
    if (tfmStats[2]) tfmStats[2].textContent = t.tfms.stats.international;
    
    // Actualizar Contacto
    const contactTitle = document.querySelector('#contacto h2');
    if (contactTitle) contactTitle.textContent = t.contact.title;
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    if (formInputs[0]) formInputs[0].placeholder = t.contact.name;
    if (formInputs[1]) formInputs[1].placeholder = t.contact.email;
    if (formInputs[2]) formInputs[2].placeholder = t.contact.message;
    const sendBtn = document.querySelector('.contact-form button');
    if (sendBtn) sendBtn.textContent = t.contact.send;
    
    const emailBlock = document.querySelector('.contact-email');
    if (emailBlock) {
        const emailP = emailBlock.querySelector('p:first-child');
        const emailNote = emailBlock.querySelector('.email-note');
        if (emailP) emailP.textContent = t.contact.emailDirect;
        if (emailNote) emailNote.textContent = t.contact.emailNote;
    }
    
    // Actualizar Footer
    const footerP = document.querySelector('footer p');
    if (footerP) footerP.innerHTML = `&copy; 2026 Roberto Morollón. ${t.footer.rights}`;
}

// Función para alternar idioma
function toggleLanguage() {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        setLanguage(savedLang);
    } else {
        setLanguage('es');
    }
    
    // Añadir evento al botón de idioma
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
});