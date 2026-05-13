// ===== CORRECCIÓN SEMÁNTICA: card-conference h3 → p =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('h3.card-conference').forEach(el => {
        const p = document.createElement('p');
        p.className = el.className;
        p.innerHTML = el.innerHTML;
        el.parentNode.replaceChild(p, el);
    });
});

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

    filterButtons.forEach(btn => btn.setAttribute('aria-pressed', btn.dataset.filter === 'all' ? 'true' : 'false'));

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            filterButtons.forEach(btn => { btn.classList.remove('active'); btn.setAttribute('aria-pressed', 'false'); });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
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
    document.querySelectorAll('.supervision-summary').forEach(el => statsObserver.observe(el));
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
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
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
document.querySelectorAll('.cv-button').forEach(anchor => {
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

// ===== COPIAR EMAIL AL PORTAPAPELES =====
document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copyEmailBtn');
    const toast = document.getElementById('copyToast');
    
    if (copyBtn) {
        copyBtn.addEventListener('click', async function() {
            const email = 'robmoru23@gmail.com';
            
            try {
                // Método moderno usando Clipboard API
                await navigator.clipboard.writeText(email);
                showToast();
            } catch (err) {
                // Fallback para navegadores antiguos
                const textarea = document.createElement('textarea');
                textarea.value = email;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                showToast();
            }
        });
    }
    
    function showToast() {
        if (toast) {
            const t = (typeof translations !== 'undefined' && typeof currentLang !== 'undefined')
                ? translations[currentLang] : null;
            toast.textContent = t?.contact?.copySuccess || '📋 Correo copiado al portapapeles';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
    }
});

// ===== MODO OSCURO =====
(function() {
    const btn = document.getElementById('darkmode-toggle');
    if (!btn) return;

    function updateLabel() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const t = (typeof translations !== 'undefined' && typeof currentLang !== 'undefined')
            ? translations[currentLang] : null;
        btn.setAttribute('aria-label',
            isDark ? (t?.ui?.darkModeOff || 'Activar modo claro')
                   : (t?.ui?.darkModeOn  || 'Activar modo oscuro'));
    }

    btn.addEventListener('click', function() {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateLabel();
    });

    document.addEventListener('DOMContentLoaded', updateLabel);
})();

// ===== FILTRO DE HABILIDADES =====
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('skills-filter');
    const clearBtn = document.getElementById('skills-filter-clear');
    const icon = document.getElementById('skills-filter-icon');
    const noResults = document.getElementById('skills-no-results');
    if (!input) return;

    input.addEventListener('input', function() {
        const q = this.value.toLowerCase().trim();
        clearBtn.style.display = q ? 'flex' : 'none';
        icon.style.display = q ? 'none' : 'block';

        const cards = document.querySelectorAll('.skill-card');
        let anyVisible = false;

        cards.forEach(card => {
            const name = card.querySelector('.skill-name')?.textContent.toLowerCase() || '';
            const tags = Array.from(card.querySelectorAll('.skill-tags span'))
                .map(s => s.textContent.toLowerCase()).join(' ');
            const match = !q || name.includes(q) || tags.includes(q);
            card.style.display = match ? '' : 'none';
            if (match) anyVisible = true;
        });

        document.querySelectorAll('.skill-category').forEach(cat => {
            const hasVisible = Array.from(cat.querySelectorAll('.skill-card'))
                .some(c => c.style.display !== 'none');
            cat.style.display = (q && !hasVisible) ? 'none' : '';
        });

        if (noResults) {
            const t = (typeof translations !== 'undefined' && typeof currentLang !== 'undefined')
                ? translations[currentLang] : null;
            const msg = t?.skills?.noResults
                ? t.skills.noResults.replace('{q}', q)
                : `Sin resultados para "${q}"`;
            noResults.textContent = (!anyVisible && q) ? msg : '';
            noResults.style.display = (!anyVisible && q) ? 'block' : 'none';
        }
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            input.value = '';
            input.dispatchEvent(new Event('input'));
            input.focus();
        });
    }
});