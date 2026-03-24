// ===== FILTRO DE CONGRESOS POR AÑO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - iniciando filtros');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const conferenceLinks = document.querySelectorAll('.conference-card-link');
    
    console.log('Botones encontrados:', filterButtons.length);
    console.log('Tarjetas encontradas:', conferenceLinks.length);
    
    const totalCountSpan = document.getElementById('total-count');
    const visibleCountSpan = document.getElementById('visible-count');
    
    if (totalCountSpan) {
        totalCountSpan.textContent = conferenceLinks.length;
    }
    
    function updateVisibleCount() {
        if (visibleCountSpan) {
            const visibleLinks = Array.from(conferenceLinks).filter(link => {
                return link.style.display !== 'none';
            });
            visibleCountSpan.textContent = visibleLinks.length;
        }
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Botón clickeado:', this.textContent);
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            console.log('Filtrando por:', filterValue);
            
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
        }, index * 50);
    });
});

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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const summarySection = document.querySelector('.supervision-summary');
    if (summarySection) {
        observer.observe(summarySection);
    }
});

// ===== MENÚ HAMBURGUESA Y SCROLL SUAVE (TODO EN UNO) =====
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del menú
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (!menuToggle || !navMenu) {
        console.error('❌ Error: No se encontraron elementos del menú');
        return;
    }
    
    console.log('✅ Menú hamburguesa inicializado');
    
    // Crear overlay
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
        console.log('Menú cerrado');
    }
    
    function openMenu() {
        menuToggle.classList.add('active');
        navMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Menú abierto');
    }
    
    // Toggle del menú
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Click hamburguesa');
        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Cerrar al hacer clic en enlaces del menú
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            closeMenu();
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    // Cerrar al hacer clic en overlay
    overlay.addEventListener('click', closeMenu);
    
    // Cerrar al redimensionar a desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});

// ===== SCROLL SUAVE PARA EL RESTO DE ENLACES (no duplicado) =====
// Nota: Los enlaces del menú ya tienen scroll suave arriba.
// Esto solo cubre otros enlaces como el logo si tuviera href="#"
document.querySelectorAll('.nav-brand a, .cv-button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});