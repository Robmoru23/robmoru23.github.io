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