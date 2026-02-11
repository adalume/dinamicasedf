// Data atual no top bar
function updateCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    dateElement.textContent = formattedDate;
}

// Countdown Timer
function initCountdown() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!hoursEl) return;

    // Define o tempo final (23:59:59 do dia atual)
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

    function updateCountdown() {
        const now = new Date();
        const diff = endOfDay - now;

        if (diff <= 0) {
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Pricing Countdown (15 horas fixas regressivas)
function initPricingCountdown() {
    const hEl = document.getElementById('p-hours');
    const mEl = document.getElementById('p-minutes');
    const sEl = document.getElementById('p-seconds');

    if (!hEl) return;

    // Simulação de 15 horas a partir do carregamento
    let totalSeconds = 15 * 60 * 60;

    function update() {
        if (totalSeconds <= 0) return;

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        hEl.textContent = String(hours).padStart(2, '0');
        mEl.textContent = String(minutes).padStart(2, '0');
        sEl.textContent = String(seconds).padStart(2, '0');

        totalSeconds--;
    }

    update();
    setInterval(update, 1000);
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Abre o item clicado se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Smooth scroll para âncoras
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offsetTop = target.offsetTop - 60; // Ajuste para o top bar fixo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animação de entrada dos elementos ao scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animatedElements = document.querySelectorAll(`
        .content-card,
        .benefit-card,
        .bonus-card,
        .testimonial-card,
        .pricing-card,
        .faq-item
    `);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Gerar imagens placeholder
function generatePlaceholderImages() {
    // Mockup do produto (Removido pois agora usamos imagem real)
    /*
    const productMockup = document.getElementById('product-mockup');
    if (productMockup && !productMockup.src.includes('http')) {
        productMockup.src = 'data:image/svg+xml,' + encodeURIComponent(`
            <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:rgb(34,197,94);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(22,163,74);stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="600" height="400" fill="url(#grad1)" rx="20"/>
                <text x="50%" y="40%" text-anchor="middle" fill="white" font-size="48" font-weight="bold" font-family="Inter, sans-serif">150 DINÂMICAS</text>
                <text x="50%" y="55%" text-anchor="middle" fill="white" font-size="32" font-family="Inter, sans-serif">Educação Física</text>
                <text x="50%" y="70%" text-anchor="middle" fill="white" font-size="20" font-family="Inter, sans-serif">Material Completo e Prático</text>
            </svg>
        `);
    }
    */

    // Bônus (Removido pois agora usamos imagens reais)
    /*
    const bonusImages = [
        { id: 'bonus1-img', title: 'Planner de Aulas', icon: '📅' },
        { id: 'bonus2-img', title: 'Jogos Cooperativos', icon: '🤝' },
        { id: 'bonus3-img', title: 'Guia BNCC', icon: '📋' }
    ];

    bonusImages.forEach((bonus, index) => {
        const img = document.getElementById(bonus.id);
        if (img && !img.src.includes('http')) {
            const colors = [
                { bg: 'rgb(34,197,94)', light: 'rgb(220,252,231)' },
                { bg: 'rgb(37,99,235)', light: 'rgb(219,234,254)' },
                { bg: 'rgb(139,92,246)', light: 'rgb(237,233,254)' }
            ];
            img.src = 'data:image/svg+xml,' + encodeURIComponent(`
                <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:${colors[index].bg};stop-opacity:1" />
                            <stop offset="100%" style="stop-color:${colors[index].light};stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <rect width="300" height="200" fill="url(#grad${index})" rx="12"/>
                    <text x="50%" y="40%" text-anchor="middle" fill="white" font-size="60" font-family="Inter, sans-serif">${bonus.icon}</text>
                    <text x="50%" y="70%" text-anchor="middle" fill="white" font-size="20" font-weight="bold" font-family="Inter, sans-serif">${bonus.title}</text>
                </svg>
            `);
        }
    });

    // Mockup Premium
    const premiumMockup = document.getElementById('premium-mockup');
    if (premiumMockup && !premiumMockup.src.includes('http')) {
        premiumMockup.src = 'data:image/svg+xml,' + encodeURIComponent(`
            <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="premiumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:rgb(250,204,21);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(234,179,8);stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="75" cy="75" r="70" fill="url(#premiumGrad)"/>
                <text x="50%" y="50%" text-anchor="middle" fill="rgb(15,23,42)" font-size="50" font-weight="bold" font-family="Inter, sans-serif" dy=".35em">⭐</text>
            </svg>
        `);
    }
    */

    // Avatares de depoimentos
    const avatars = [
        { id: 'avatar1', color: 'rgb(239,68,68)', initial: 'MS' },
        { id: 'avatar2', color: 'rgb(34,197,94)', initial: 'JS' },
        { id: 'avatar3', color: 'rgb(37,99,235)', initial: 'AC' }
    ];

    avatars.forEach(avatar => {
        const img = document.getElementById(avatar.id);
        if (img && !img.src.includes('http')) {
            img.src = 'data:image/svg+xml,' + encodeURIComponent(`
                <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="${avatar.color}"/>
                    <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="32" font-weight="bold" font-family="Inter, sans-serif" dy=".35em">${avatar.initial}</text>
                </svg>
            `);
        }
    });

    // Imagem do autor (Removido pois agora usamos imagem real)
    /*
    const authorImg = document.getElementById('author-img');
    if (authorImg && !authorImg.src.includes('http')) {
        authorImg.src = 'data:image/svg+xml,' + encodeURIComponent(`
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="authorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:rgb(15,23,42);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(71,85,105);stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="300" height="300" fill="url(#authorGrad)" rx="10"/>
                <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="48" font-weight="bold" font-family="Inter, sans-serif">Prof.</text>
                <text x="50%" y="60%" text-anchor="middle" fill="white" font-size="32" font-family="Inter, sans-serif">Carlos Eduardo</text>
            </svg>
        `);
    }
    */
}

// Tracking de cliques nos CTAs (para analytics)
function initCTATracking() {
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = button.textContent.trim();
            console.log('CTA Clicked:', buttonText);

            // Aqui você pode adicionar código para enviar eventos para Google Analytics, Facebook Pixel, etc.
            // Exemplo: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': buttonText });
        });
    });
}

// Adicionar efeito de pulso nos botões principais
function addPulseEffect() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }

        .cta-primary {
            animation: pulse 2s ease-in-out infinite;
        }

        .cta-primary:hover {
            animation: none;
        }
    `;
    document.head.appendChild(style);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    initCountdown();
    initPricingCountdown();
    initFAQ();
    initSmoothScroll();
    initScrollAnimations();
    // generatePlaceholderImages(); (Desativado para não interferir nas imagens reais)
    initCTATracking();
    addPulseEffect();

    console.log('🚀 Landing Page carregada com sucesso!');
});

// Atualizar data a cada minuto
setInterval(updateCurrentDate, 60000);
