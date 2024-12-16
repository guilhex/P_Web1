document.addEventListener('DOMContentLoaded', () => {
    // Função para animar os itens da lista de projetos com fade-in
    const animateProjectItems = () => {
        const projectItems = document.querySelectorAll('.projeto-item');

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

        projectItems.forEach((item, index) => {
            // Adicionar um pequeno delay entre os itens para efeito de sequência
            item.style.transitionDelay = `${index * 0.2}s`;
            observer.observe(item);
        });
    };

    // Função para aplicar animação de fade-in nas seções da página
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

    // Executa as animações
    addFadeInEffect();
    animateProjectItems();
});
