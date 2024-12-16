document.addEventListener('DOMContentLoaded', () => {
    // Função para inicializar o slider de imagens
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    let index = 0;

    function showNextSlide() {
        index++;
        if (index >= slide.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    // Muda automaticamente os slides a cada 3 segundos
    setInterval(showNextSlide, 3000);

    // Função para adicionar classe de fade-in nas seções
    const addFadeInEffect = () => {
        const sections = document.querySelectorAll('section');

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

    // Função para enviar formulário de contato
    const handleContactForm = () => {
        const form = document.querySelector('form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Mensagem enviada com sucesso!');
            form.reset();
        });
    };

    // Chama as funções de inicialização
    addFadeInEffect();
    handleContactForm();
});
