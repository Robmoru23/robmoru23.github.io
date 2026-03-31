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
            text1: "Doctor en Bioingeniería con formación interdisciplinar en biología, neurociencias, robótica y visión artificial, estudiando el comportamiento y la percepción visual durante la estimulación cerebral. Realidad virtual, modelos 3D y arquitecturas deep learning en sistemas autónomos, con aplicaciones en tecnología y salud. Cuatro años de experiencia contratada en investigación, con financiación competitiva y publicaciones en el campo de prótesis visuales corticales. Busco incorporarme a proyectos de I+D en el sector académico o empresarial, tecnológico o biomédico en Alicante.",
            text2: "Apasionado por la intersección entre biología, neurociencia, robótica y comportamiento, desarrollo soluciones que conectan la tecnología con el potencial humano para restaurar capacidades sensoriales perdidas.",
            text3: "Durante los últimos años, en el Laboratorio de Neuroprótesis Visuales de la Universidad Miguel Hernández, he desarrollado el análisis comportamental para prótesis visuales corticales, explorando cómo la neurociencia y la ingeniería pueden converger para restaurar la percepción visual en personas ciegas.",
            text4: "Mi investigación combina análisis de datos (Python, MATLAB, C++), neuroimagen, electrofisiología, modelos computacionales y deep learning. Colaboro activamente en equipos multidisciplinares, presentando regularmente mis hallazgos en conferencias internacionales."
        },
        // Campos de Investigación
        researchFields: {
            title: "Campos de Investigación",
            subtitle: "Intersección de disciplinas para la innovación - Convergencia de saberes - Un enfoque multidisciplinar integrador",
            biology: {
                title: "Biología",
                items: ["Biología", "Ciencias biológicas", "Biofísica", "Biotecnología", "Óptica", "Ciencias médicas", "Rehabilitación"]
            },
            neuroscience: {
                title: "Neurociencias",
                items: ["Neurobiología", "Neurociencias", "Neuroimagen", "Neuropsicología", "Neurorehabilitación", "Ciencias cognitivas", "Comportamiento"]
            },
            engineering: {
                title: "Ingeniería",
                items: ["Bioingeniería", "Ingeniería informática", "Ciencias informáticas", "Cibernética", "Realidad Virtual", "Inteligencia artificial", "Visión artificial"]
            }
        },
        // Habilidades Técnicas
        skills: {
            title: "Habilidades Técnicas",
            subtitle: "Tecnologías, herramientas y metodologías que domino en mi investigación",
            programming: "Programación & Análisis de Datos",
            experimental: "Técnicas Experimentales",
            tools: "Herramientas & Desarrollo",
            devices: "Dispositivos y Hardware",
            softSkills: "Habilidades Transversales",
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
            unpublishedTitle: "Proyectos no publicados",
            fundedTitle: "Participación en Proyectos con Financiación Competitiva",
            phd: {
                title: "Evaluación del Comportamiento en Prótesis Visuales Corticales",
                role: "Tesis Doctoral - Doctorado en Bioingeniería - UMH",
                desc: "Desarrollo de protocolos comportamentales y algoritmos de análisis para evaluar la percepción visual inducida por estimulación intracortical. Integración de datos electrofisiológicos y de comportamiento para optimizar estrategias de estimulación.",
                institution: "Biomedical Neuroengineering Group · Instituto de Bioingeniería · Universidad Miguel Hernández (2020 - 2026)"
            },
            semg: {
                title: "Reconocimiento de patrones musculares con el sensor sEMG y Deep Learning",
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
            },
            // Proyectos no publicados
            kinect: {
                title: "Desarrollo de software de registro, almacenamiento y análisis de datos biomecánicos con Azure Kinect",
                desc: "Desarrollo de una herramienta completa para la captura, almacenamiento y análisis de datos de movimiento corporal usando la cámara de profundidad Azure Kinect."
            },
            unrealVR: {
                title: "Desarrollo de entornos virtuales en Realidad Virtual con Unreal Engine",
                desc: "Creación de entornos inmersivos de realidad virtual para la evaluación y rehabilitación de personas con discapacidad visual, incluyendo simulación de patologías y fosfenos."
            },
            sync: {
                title: "Sincronización de body-tracking entre Azure Kinect y Unreal Engine",
                desc: "Integración en tiempo real de datos de seguimiento corporal del sensor Azure Kinect dentro de entornos virtuales de Unreal Engine."
            },
            arSimulator: {
                title: "Desarrollo de un simulador de patologías visuales y fosfenos portátil en Realidad Aumentada",
                desc: "Prototipo de dispositivo portátil para la simulación de diversas patologías visuales y la visualización de fosfenos, como herramienta de evaluación y divulgación."
            },
            // Proyectos con financiación
            nextgen: {
                title: "Desarrollo de una nueva generación de prótesis visuales intracorticales",
                role: "I+D+i Retos de la Sociedad - Ministerio de Ciencia e Innovación · IP: Eduardo Fernández · 2019–2022",
                desc: "Investigación orientada al desarrollo de nuevas estrategias de estimulación y dispositivos de próxima generación para prótesis visuales corticales."
            },
            prometeo: {
                title: "Development and validation of a cortical visual neuroprosthesis for the blind",
                role: "Proyecto PROMETEO - Generalitat Valenciana · IP: Eduardo Fernández · 2019–2021",
                desc: "Proyecto de excelencia para el desarrollo y validación clínica de una neuroprótesis visual cortical en pacientes con ceguera profunda."
            },
            h2020: {
                title: "Neural active visual prosthetics for restoring function",
                role: "H2020 FET Open - European Commission · IP: Eduardo Fernández · 2019–2023",
                desc: "Proyecto europeo de investigación de frontera para el desarrollo de prótesis visuales activas neurales orientadas a la restauración funcional de la visión."
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
            emailDirect: "Puedes contactarme directamente en:",
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
            text1: "PhD in Bioengineering with interdisciplinary training in biology, neurosciences, robotics and computer vision, studying behavior and visual perception during brain stimulation. Virtual reality, 3D models and deep learning architectures in autonomous systems, with applications in technology and health. Four years of contracted research experience with competitive funding and publications in the field of cortical visual prostheses. Looking to join R&D projects in academia or industry, in the technological or biomedical sector in Alicante.",
            text2: "Passionate about the intersection of biology, neuroscience, robotics and behavior, I develop solutions that connect technology with human potential to restore lost sensory capabilities.",
            text3: "In recent years, at the Visual Neuroprosthesis Laboratory of Miguel Hernández University, I have developed behavioral analysis for cortical visual prostheses, exploring how neuroscience and engineering can converge to restore visual perception in blind individuals.",
            text4: "My research combines data analysis (Python, MATLAB, C++), neuroimaging, electrophysiology, computational models and deep learning. I actively collaborate in multidisciplinary teams, regularly presenting my findings at international conferences."
        },
        // Research Fields
        researchFields: {
            title: "Research Fields",
            subtitle: "Intersection of disciplines for innovation - Convergence of knowledge - A multidisciplinary integrative approach",
            biology: {
                title: "Biology",
                items: ["Biology", "Biological Sciences", "Biophysics", "Biotechnology", "Optics", "Medical Sciences", "Rehabilitation"]
            },
            neuroscience: {
                title: "Neurosciences",
                items: ["Neurobiology", "Neurosciences", "Neuroimaging", "Neuroinformatics", "Neuropsychology", "Neurorehabilitation", "Cognitive Sciences", "Psychological Sciences", "Behavior", "Visual Science"]
            },
            engineering: {
                title: "Engineering",
                items: ["Bioengineering", "Computer Engineering", "Computer Sciences", "Cybernetics", "Virtual Reality", "Artificial Intelligence", "Computer Vision"]
            }
        },
        // Skills
        skills: {
            title: "Technical Skills",
            subtitle: "Technologies, tools, and methodologies I master in my research",
            programming: "Programming & Data Analysis",
            experimental: "Experimental Techniques",
            tools: "Tools & Development",
            devices: "Devices & Hardware",
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
            unpublishedTitle: "Unpublished Projects",
            fundedTitle: "Competitively Funded Projects Participation",
            phd: {
                title: "Behavioral Assessment in Cortical Visual Prostheses",
                role: "PhD Thesis - PhD in Bioengineering - UMH",
                desc: "Development of behavioral protocols and analysis algorithms to evaluate visual perception induced by intracortical stimulation. Integration of electrophysiological and behavioral data to optimize stimulation strategies.",
                institution: "Biomedical Neuroengineering Group · Institute of Bioengineering · Miguel Hernández University (2020 - 2026)"
            },
            semg: {
                title: "Muscle Pattern Recognition with sEMG Sensor and Deep Learning",
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
            },
            // Unpublished projects
            kinect: {
                title: "Software Development for Recording, Storage and Analysis of Biomechanical Data with Azure Kinect",
                desc: "Development of a complete tool for capturing, storing and analyzing body motion data using the Azure Kinect depth camera."
            },
            unrealVR: {
                title: "Development of Virtual Environments in Virtual Reality with Unreal Engine",
                desc: "Creation of immersive virtual reality environments for evaluation and rehabilitation of visually impaired individuals, including simulation of visual pathologies and phosphenes."
            },
            sync: {
                title: "Body-tracking Synchronization between Azure Kinect and Unreal Engine",
                desc: "Real-time integration of body tracking data from the Azure Kinect sensor into Unreal Engine virtual environments."
            },
            arSimulator: {
                title: "Development of a Portable Visual Pathology and Phosphene Simulator in Augmented Reality",
                desc: "Prototype of a portable device for simulating various visual pathologies and phosphene visualization, as an evaluation and outreach tool."
            },
            // Funded projects
            nextgen: {
                title: "Development of a New Generation of Intracortical Visual Prostheses",
                role: "R&D Societal Challenges - Ministry of Science and Innovation · PI: Eduardo Fernández · 2019–2022",
                desc: "Research aimed at developing new stimulation strategies and next-generation devices for cortical visual prostheses."
            },
            prometeo: {
                title: "Development and Validation of a Cortical Visual Neuroprosthesis for the Blind",
                role: "PROMETEO Project - Generalitat Valenciana · PI: Eduardo Fernández · 2019–2021",
                desc: "Excellence project for the development and clinical validation of a cortical visual neuroprosthesis in patients with profound blindness."
            },
            h2020: {
                title: "Neural Active Visual Prosthetics for Restoring Function",
                role: "H2020 FET Open - European Commission · PI: Eduardo Fernández · 2019–2023",
                desc: "European frontier research project for the development of active neural visual prostheses aimed at the functional restoration of vision."
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
            emailDirect: "You can contact me directly at:",
            emailNote: "Click to open your email client"
        },
        // Footer
        footer: {
            rights: "All rights reserved"
        }
    }
};

// ===== ESTADO =====
let currentLang = 'es';

// ===== UTILIDADES =====

/** Aplica texto a un elemento si existe */
function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
}

/** Aplica HTML a un elemento si existe */
function setHTML(selector, html) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
}

/** Aplica texto a un elemento de un NodeList si existe */
function setNodeText(nodes, index, text) {
    if (nodes[index]) nodes[index].textContent = text;
}

// ===== CAMBIO DE IDIOMA =====

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updatePageContent();
    updateLanguageButton();
}

function toggleLanguage() {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
}

function updateLanguageButton() {
    const langFlag = document.getElementById('lang-flag');
    const langText = document.getElementById('lang-text');
    if (!langFlag || !langText) return;

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

// ===== ACTUALIZACIÓN DE CONTENIDO =====

function updatePageContent() {
    const t = translations[currentLang];

    _updateNav(t);
    _updateHero(t);
    _updateAbout(t);
    _updateResearchFields(t);
    _updateSkills(t);
    _updatePublications(t);
    _updateConferences(t);
    _updateProjects(t);
    _updateTFMs(t);
    _updateContact(t);
    _updateFooter(t);
}

function _updateNav(t) {
    const links = document.querySelectorAll('.nav-menu li a:not(.lang-toggle-btn)');
    const keys = ['inicio', 'habilidades', 'publicaciones', 'proyectos', 'contacto'];
    keys.forEach((key, i) => setNodeText(links, i, t.nav[key]));
}

function _updateHero(t) {
    setText('#inicio h1', t.hero.title);
    setText('#inicio .subtitle', t.hero.subtitle);

    const affiliations = document.querySelectorAll('#inicio .affiliation');
    ['lab', 'group', 'institute', 'university'].forEach((key, i) => {
        setNodeText(affiliations, i, t.hero[key]);
    });

    const keywordSpans = document.querySelectorAll('#inicio .keywords span');
    t.hero.keywords.forEach((kw, i) => setNodeText(keywordSpans, i, kw));

    const cvBtn = document.querySelector('#inicio .cv-button');
    if (cvBtn) cvBtn.innerHTML = `<span class="button-icon">📄</span> ${t.hero.cvButton}`;
}

function _updateAbout(t) {
    setText('#sobre-mi h2', t.about.title);
    const paras = document.querySelectorAll('#sobre-mi .about-text p');
    ['text1', 'text2', 'text3', 'text4'].forEach((key, i) => setNodeText(paras, i, t.about[key]));
}

function _updateResearchFields(t) {
    setText('#campos-investigacion h2', t.researchFields.title);
    setText('#campos-investigacion .section-subtitle', t.researchFields.subtitle);

    const cards = document.querySelectorAll('#campos-investigacion .field-card');
    const fieldKeys = ['biology', 'neuroscience', 'engineering'];

    fieldKeys.forEach((key, i) => {
        const card = cards[i];
        if (!card) return;
        const field = t.researchFields[key];
        card.querySelector('h3').textContent = field.title;
        const listItems = card.querySelectorAll('.field-list li');
        field.items.forEach((item, j) => setNodeText(listItems, j, item));
    });
}

function _updateSkills(t) {
    setText('#habilidades h2', t.skills.title);
    setText('#habilidades .section-subtitle', t.skills.subtitle);

    const catTitles = document.querySelectorAll('#habilidades .category-title');
    const catDefs = [
        { icon: '💻', key: 'programming' },
        { icon: '🔬', key: 'experimental' },
        { icon: '🛠️', key: 'tools' },
        { icon: '🎮', key: 'devices' },
        { icon: '🤝', key: 'softSkills' },
        { icon: '🌐', key: 'languages' }
    ];
    catDefs.forEach(({ icon, key }, i) => {
        if (catTitles[i]) {
            catTitles[i].innerHTML = `<span class="category-icon">${icon}</span> ${t.skills[key]}`;
        }
    });
}

function _updatePublications(t) {
    setText('#publicaciones h2', t.publications.title);
}

function _updateConferences(t) {
    setText('#congresos h2', t.conferences.title);
    setText('#congresos .section-subtitle', t.conferences.subtitle);

    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterKeys = ['all', '2025', '2024', '2023', '2022'];
    filterKeys.forEach((key, i) => setNodeText(filterBtns, i, t.conferences.filters[key]));

    // Actualizar contador si está visible
    const counter = document.querySelector('.conference-counter');
    if (counter) {
        const visible = document.getElementById('visible-count')?.textContent || '0';
        const total = document.getElementById('total-count')?.textContent || '0';
        counter.innerHTML = `${t.conferences.counter} <span id="visible-count">${visible}</span> ${t.conferences.of} <span id="total-count">${total}</span> ${t.conferences.communications}`;
    }
}

function _updateProjects(t) {
    setText('#investigacion h2', t.projects.title);

    // Subtítulos de subsecciones
    const subsectionTitles = document.querySelectorAll('#investigacion .subsection-title');
    if (subsectionTitles[0]) subsectionTitles[0].textContent = t.projects.unpublishedTitle;
    if (subsectionTitles[1]) subsectionTitles[1].textContent = t.projects.fundedTitle;

    // Helper para actualizar una project-card por índice
    function updateProjectCard(card, data) {
        if (!card || !data) return;
        const h3 = card.querySelector('h3');
        const role = card.querySelector('.project-role');
        const descs = card.querySelectorAll('.project-desc');
        const institution = card.querySelector('.project-institution');

        if (h3) h3.textContent = data.title;
        if (role && data.role) {
            const parts = data.role.split(' - ');
            role.innerHTML = `<strong>${parts[0]}</strong>${parts.length > 1 ? ' - ' + parts.slice(1).join(' - ') : ''}`;
        }
        if (descs[0] && data.desc) descs[0].textContent = data.desc;
        if (institution && data.institution) institution.textContent = data.institution;
    }

    const cards = document.querySelectorAll('#investigacion .project-card');
    const cardMap = [
        t.projects.phd,
        t.projects.semg,
        t.projects.iit,
        t.projects.sharks,
        t.projects.kinect,
        t.projects.unrealVR,
        t.projects.sync,
        t.projects.arSimulator,
        t.projects.nextgen,
        t.projects.prometeo,
        t.projects.h2020
    ];
    cards.forEach((card, i) => updateProjectCard(card, cardMap[i]));
}

function _updateTFMs(t) {
    setText('#tfms h2', t.tfms.title);
    setText('#tfms .section-subtitle', t.tfms.subtitle);

    const noteEl = document.querySelector('#tfms .summary-note');
    if (noteEl) noteEl.innerHTML = `<span class="note-icon">🎓</span> ${t.tfms.summary}`;

    const statLabels = document.querySelectorAll('#tfms .summary-stat .stat-label');
    ['tfms', 'years', 'international'].forEach((key, i) => setNodeText(statLabels, i, t.tfms.stats[key]));
}

function _updateContact(t) {
    setText('#contacto h2', t.contact.title);

    const emailBlock = document.querySelector('.contact-email');
    if (emailBlock) {
        const p = emailBlock.querySelector('p');
        if (p) p.textContent = t.contact.emailDirect;
    }
}

function _updateFooter(t) {
    const footerP = document.querySelector('footer p');
    if (footerP) footerP.innerHTML = `&copy; 2026 Roberto Morollón. ${t.footer.rights}`;
}

// ===== INICIALIZACIÓN =====

document.addEventListener('DOMContentLoaded', function () {
    // Restaurar idioma guardado o usar español por defecto
    const savedLang = localStorage.getItem('language');
    setLanguage(savedLang === 'en' ? 'en' : 'es');

    // Evento del botón de idioma
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', toggleLanguage);
});
