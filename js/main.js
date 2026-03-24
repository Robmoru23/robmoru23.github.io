// FILTRO DE CONGRESOS POR AÑO
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - iniciando filtros'); // Para debug
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    // IMPORTANTE: Buscar los enlaces que contienen las tarjetas, no las tarjetas directamente
    const conferenceLinks = document.querySelectorAll('.conference-card-link');
    
    console.log('Botones encontrados:', filterButtons.length);
    console.log('Tarjetas encontradas:', conferenceLinks.length);
    
    // Mostrar total inicial en el contador
    const totalCountSpan = document.getElementById('total-count');
    const visibleCountSpan = document.getElementById('visible-count');
    
    if (totalCountSpan) {
        totalCountSpan.textContent = conferenceLinks.length;
    }
    
    // Función para actualizar contador visible
    function updateVisibleCount() {
        if (visibleCountSpan) {
            // Contar solo los enlaces que están visibles
            const visibleLinks = Array.from(conferenceLinks).filter(link => {
                return link.style.display !== 'none';
            });
            visibleCountSpan.textContent = visibleLinks.length;
        }
    }
    
    // Añadir evento a cada botón de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Botón clickeado:', this.textContent); // Para debug
            
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Obtener el año a filtrar
            const filterValue = this.getAttribute('data-filter');
            console.log('Filtrando por:', filterValue); // Para debug
            
            // Filtrar tarjetas - iterar sobre los enlaces
            conferenceLinks.forEach(link => {
                // Buscar la tarjeta dentro del enlace para obtener el data-year
                const card = link.querySelector('.conference-card');
                if (!card) return;
                
                const cardYear = card.getAttribute('data-year');
                
                if (filterValue === 'all') {
                    link.style.display = 'block';
                } else {
                    if (cardYear === filterValue) {
                        link.style.display = 'block';
                    } else {
                        link.style.display = 'none';
                    }
                }
            });
            
            // Actualizar contador
            updateVisibleCount();
        });
    });
    
    // Inicializar contador
    updateVisibleCount();
    
    // ANIMACIÓN DE ENTRADA (OPCIONAL)
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

// ANIMACIÓN DE ESTADÍSTICAS (para la sección de TFMs)
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

// Activar animación cuando la sección sea visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const summarySection = document.querySelector('.supervision-summary');
    if (summarySection) {
        observer.observe(summarySection);
    }
});

// ===== MENÚ HAMBURGUESA =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    // Crear overlay oscuro
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    // Función para cerrar el menú
    function closeMenu() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }
    
    // Función para abrir el menú
    function openMenu() {
        menuToggle.classList.add('active');
        navMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evitar scroll del body
    }
    
    // Toggle del menú al hacer clic en hamburguesa
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            closeMenu();
            
            // Scroll suave al hacer clic
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Cerrar menú al hacer clic en el overlay
    overlay.addEventListener('click', closeMenu);
    
    // Cerrar menú al redimensionar a desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Prevenir que el clic dentro del menú cierre el overlay
    navMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// ===== SCROLL SUAVE PARA TODOS LOS ENLACES DEL MENÚ =====
document.querySelectorAll('.nav-menu a, .nav-brand a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});