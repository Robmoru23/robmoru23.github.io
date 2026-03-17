// Contador animado para estadísticas (opcional)
function animateStats() {
    const statNumbers = document.querySelectorAll('.summary-stat .stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 30; // 30 pasos
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

// Activar cuando la sección sea visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const summarySection = document.querySelector('.supervision-summary');
if (summarySection) {
    observer.observe(summarySection);
}

// FILTRO DE CONGRESOS POR AÑO
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const conferenceCards = document.querySelectorAll('.conference-card');
    const visibleCountSpan = document.getElementById('visible-count');
    const totalCountSpan = document.getElementById('total-count');
    
    // Mostrar total inicial
    if (totalCountSpan) {
        totalCountSpan.textContent = conferenceCards.length;
    }
    
    // Función para actualizar contador visible
    function updateVisibleCount() {
        if (visibleCountSpan) {
            const visibleCards = document.querySelectorAll('.conference-card[style="display: flex;"]');
            visibleCountSpan.textContent = visibleCards.length;
        }
    }
    
    // Añadir evento a cada botón de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Obtener el año a filtrar
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrar tarjetas
            conferenceCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                } else {
                    const cardYear = card.getAttribute('data-year');
                    if (cardYear === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
            
            // Actualizar contador
            updateVisibleCount();
        });
    });
    
    // Inicializar contador
    updateVisibleCount();
    
    // Animación de entrada para las tarjetas
    conferenceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
});