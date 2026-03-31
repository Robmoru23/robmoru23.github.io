// ===== FILTRO DE CONGRESOS POR AÑO =====
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const conferenceLinks = document.querySelectorAll('.conference-card-link');
    const totalCountSpan = document.getElementById('total-count');
    const visibleCountSpan = document.getElementById('visible-count');

    if (totalCountSpan) totalCountSpan.textContent = conferenceLinks.length;

    function updateVisibleCount() {
        if (visibleCountSpan) {
            const visibleLinks = Array.from(conferenceLinks).filter(l => l.style.display !== 'none');
            const t = (typeof translations !== 'undefined' && typeof currentLang !== 'undefined') ? translations[currentLang] : null;
            visibleCountSpan.textContent = visibleLinks.length;
            const counterDiv = document.querySelector('.conference-counter');
            if (counterDiv && t) {
                counterDiv.innerHTML = `${t.conferences.counter} <span id="visible-count">${visibleLinks.length}</span> ${t.conferences.of} <span id="total-count">${conferenceLinks.length}</span> ${t.conferences.communications}`;
            }
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');

            conferenceLinks.forEach(link => {
                const card = link.querySelector('.conference-card');
                if (!card) return;
                const cardYear = card.getAttribute('data-year');
                if (filterValue === 'all') {
                    link.style.display = 'block';
                } else {
                    link.style.display = cardYear === filterValue ? 'block' : 'none';
                }
            });
            updateVisibleCount();
        });
    });

    updateVisibleCount();

    conferenceLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, index * 40);
    });
});

// ===== NAVBAR: EFECTO SCROLL (glassmorphism) =====
(function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
})();

// ===== ANIMACIONES DE ENTRADA CON INTERSECTION OBSERVER =====
(function() {
    const revealEls = document.querySelectorAll(
        'section, .project-card, .skill-card, .field-card, .thesis-card, .conference-card-link, .about-stat'
    );

    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'visible');
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => {
        el.classList.add('reveal');
        revealObs.observe(el);
    });
})();

// ===== ANIMACIÓN DE BARRAS DE PROGRESO =====
(function() {
    const progressBars = document.querySelectorAll('.progress-fill');
    if (!progressBars.length) return;

    const progressObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const targetWidth = fill.style.width;
                fill.style.width = '0';
                setTimeout(() => {
                    fill.style.width = targetWidth;
                }, 100);
                progressObs.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    progressBars.forEach(bar => progressObs.observe(bar));
})();

// ===== ANIMACIÓN DE ESTADÍSTICAS =====
function animateStats() {
    const statNumbers = document.querySelectorAll('.summary-stat .stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (isNaN(target)) return;
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 30);
    });
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const summarySection = document.querySelector('.supervision-summary');
    if (summarySection) statsObserver.observe(summarySection);
});

// ===== MENÚ HAMBURGUESA =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (!menuToggle || !navMenu) return;

    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        menuToggle.classList.add('active');
        navMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.contains('active') ? closeMenu() : openMenu();
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            closeMenu();
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    overlay.addEventListener('click', closeMenu);

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) closeMenu();
    });
});

// ===== SCROLL SUAVE PARA OTROS ENLACES =====
document.querySelectorAll('.nav-brand a, .cv-button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== RESALTAR ENLACE ACTIVO AL HACER SCROLL =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 110;
        if (scrollY >= sectionTop) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
}, { passive: true });

// ===== SCROLL PROGRESS BAR =====
(function() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
    }, { passive: true });
})();

// ===== BACK TO TOP =====
(function() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', function() {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
