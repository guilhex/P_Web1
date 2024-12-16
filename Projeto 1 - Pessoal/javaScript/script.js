document.addEventListener('DOMContentLoaded', () => {
    // Função para adicionar classe de fade-in nas seções
    const addFadeInEffect = () => {
        const sections = document.querySelectorAll('main section');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        sections.forEach(section => {
            section.classList.add('fade-in');
            observer.observe(section);
        });
    };

    // Função para adicionar efeito de hover nos ícones de redes sociais
    const addHoverEffect = () => {
        const socialIcons = document.querySelectorAll('.contato figure a img');
        
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                icon.style.transform = 'scale(1.2)';
            });

            icon.addEventListener('mouseout', () => {
                icon.style.transform = 'scale(1)';
            });

            icon.style.transition = 'transform 0.3s ease';
        });
    };

    // Chama as funções para adicionar os efeitos
    addFadeInEffect();
    addHoverEffect();
});
