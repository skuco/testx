// Translations object (exact copy from Next.js version)
const translations = {
    en: {
        // Navigation
        nav: {
            services: "Services",
            technology: "Technology",
            contact: "Contact",
            about: "About",
            getStarted: "Get Started",
        },
        // Hero
        hero: {
            title: "Software quality begins with thorough testing.",
            description: "We specialize in QA consulting and automated testing. Help optimize your testing processes, increase efficiency and support the growth of your QA team.",
            cta: "Consult Now",
        },
        // Services
        services: {
            title: "Our Services",
            description: "We offer top-notch IT advice and consulting focused on QA and software testing.",
            items: [
                {
                    title: "Quality Software Testing",
                    desc: "We provide comprehensive solutions for quality software testing. We design testing procedures for both manual testing and automation, customized to the needs of small and large projects.",
                },
                {
                    title: "Testing Strategies",
                    desc: "We design effective testing strategies aimed at optimizing software development. We use our experience with modern tools such as Playwright, Cypress, K6 and others to ensure reliability, performance and quality of your applications.",
                },
                {
                    title: "Testing & Automation Training",
                    desc: "We offer technical and general training in the field of software testing and automation. We provide training individually or in groups, tailored to your specific needs.",
                },
                {
                    title: "QA Consulting",
                    desc: "We offer expert consulting aimed at improving software quality and testing process efficiency. We help identify weaknesses, optimize procedures and implement proven strategies to achieve higher reliability and performance of your applications.",
                },
            ],
        },
        // Tech Stack
        tech: {
            title: "Our Tech Stack",
            description: "We have extensive experience testing projects from various fields such as e-commerce, insurance, banking, industry, automotive and others.",
        },
        // Contact
        contact: {
            title: "Order IT Consulting Today",
            description: "Book an individual consultation regarding QA and software testing and drive your business to perfection.",
            name: "Name",
            email: "Email",
            message: "Message",
            namePlaceholder: "Your name",
            emailPlaceholder: "your@email.com",
            messagePlaceholder: "Tell us about your project...",
            send: "Send Message",
        },
        // Footer
        footer: {
            contactTitle: "Contact",
            aboutTitle: "About",
            hoursTitle: "Hours",
            address: "Na Dielnici 953/23",
            city: "976 32 Badín, Slovakia",
            aboutText: "I am the founder and owner of TestX s.r.o., a company specializing in QA automation, testing and consulting. I have extensive experience with test development in modern tools, focusing on web application testing and data validation.",
            mondayFriday: "Monday - Friday: 9:00 - 17:00",
            weekend: "Saturday - Sunday: Closed",
            available: "Available by request outside hours.",
            copyright: "© 2025 TESTX s.r.o. All rights reserved.",
        },
    },
    sk: {
        // Navigation
        nav: {
            services: "Služby",
            technology: "Technológie",
            contact: "Kontakt",
            about: "O nás",
            getStarted: "Začať",
        },
        // Hero
        hero: {
            title: "Kvalita softvéru začína dôkladným testovaním",
            description: "Špecializujeme sa na konzultácie v oblasti QA a automatizovaného testovania. Pomáhame optimalizovať testovacie procesy, zvyšovať efektivitu a podporujeme rast vášho QA tímu.",
            cta: "Konzultujte teraz",
        },
        // Services
        services: {
            title: "Naše služby",
            description: "Ponúkame špičkové IT poradenstvo a konzultácie zamerané na QA a softvérový testing.",
            items: [
                {
                    title: "Kvalitný softvérový testing",
                    desc: "Poskytujeme komplexné riešenia pre kvalitný softvérový testing. Navrhujeme testovacie postupy na manuálne testovanie aj automatizáciu, prispôsobené potrebám malých aj veľkých projektov.",
                },
                {
                    title: "Testovacie stratégie",
                    desc: "Navrhujeme efektívne testovacie stratégie zamerané na optimalizáciu vývoja softvéru. Využívame naše skúsenosti s modernými nástrojmi, ako sú Playwright, Cypress, K6 a pod., aby sme zabezpečili spoľahlivosť, výkon a kvalitu vašich aplikácií.",
                },
                {
                    title: "Školenia testovania a automatizácie",
                    desc: "Ponúkame realizáciu technických aj všeobecných školení z oblasti softvérového testovania a automatizácie. Školenia poskytujeme individuálne aj skupinovo, prispôsobené vašim konkrétnym potrebám.",
                },
                {
                    title: "Konzultácie QA",
                    desc: "Ponúkame odborné konzultácie zamerané na zlepšenie kvality softvéru a efektivitu testovacích procesov. Pomáhame identifikovať slabé miesta, optimalizovať postupy a zavádzať osvedčené stratégie na dosiahnutie vyššej spoľahlivosti a výkonu vašich aplikácií.",
                },
            ],
        },
        // Tech Stack
        tech: {
            title: "Náš tech stack",
            description: "Máme bohaté skúsenosti s testovaním projektov z rôznych oblastí, ako sú e-commerce, poisťovníctvo, bankovníctvo, priemysel, automotive a ďalšie.",
        },
        // Contact
        contact: {
            title: "Objednajte si IT konzultácie ešte dnes",
            description: "Zarezervujte si individuálnu poradňu ohľadom QA a softvérového testingu a povzbuďte svoj biznis k dokonalosti.",
            name: "Meno",
            email: "Email",
            message: "Správa",
            namePlaceholder: "Vaše meno",
            emailPlaceholder: "vasa@emailova-adresa.com",
            messagePlaceholder: "Povedzte nám niečo o vašom projekte…",
            send: "Poslať správu",
        },
        // Footer
        footer: {
            contactTitle: "Kontakt",
            aboutTitle: "O nás",
            hoursTitle: "Otváracie hodiny",
            address: "Na Dielnici 953/23",
            city: "976 32 Badín, Slovensko",
            aboutText: "Som zakladateľ a majiteľ TestX s.r.o., spoločnosti špecializujúcej sa na QA automatizáciu, testovanie a konzultácie. Mám bohaté skúsenosti s vývojom testov v moderných tooloch, kde sa zameriavam na testovanie webových aplikácií a validáciu dát.",
            mondayFriday: "Pondelok – piatok: 9:00 – 17:00",
            weekend: "Sobota – nedeľa: Zatvorené",
            available: "Dostupní na požiadavku mimo pracovnej doby.",
            copyright: "© 2025 TESTX s.r.o. Všetky práva vyhradené.",
        },
    },
};

// Global state
let currentLanguage = 'en';
let currentTheme = 'light';

// Helper function to get nested object value by string path
function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
        if (current && current[key] !== undefined) {
            return current[key];
        }
        return undefined;
    }, obj);
}

// Translation function
function updateTranslations() {
    const currentTranslations = translations[currentLanguage];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const path = element.getAttribute('data-translate');
        const value = getNestedValue(currentTranslations, path);
        if (value !== undefined) {
            element.textContent = value;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const path = element.getAttribute('data-translate-placeholder');
        const value = getNestedValue(currentTranslations, path);
        if (value !== undefined) {
            element.placeholder = value;
        }
    });
    
    // Update service items (which are indexed)
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        if (currentTranslations.services.items[index]) {
            title.textContent = currentTranslations.services.items[index].title;
            desc.textContent = currentTranslations.services.items[index].desc;
        }
    });
    
    // Update language toggle buttons
    const langButtons = document.querySelectorAll('#language-toggle, #mobile-language-toggle');
    langButtons.forEach(button => {
        button.textContent = currentLanguage === 'en' ? 'SK' : 'EN';
    });
    
    // Update document lang attribute
    document.documentElement.lang = currentLanguage;
}

// Theme management
function updateTheme() {
    document.documentElement.className = currentTheme;
    localStorage.setItem('theme', currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    updateTheme();
}

// Language management
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'sk' : 'en';
    localStorage.setItem('language', currentLanguage);
    updateTranslations();
}

// Form handling
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create mailto link
    const subject = encodeURIComponent(`Consultation Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:testx.skuci@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Lucide icons
function initializeIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Load saved preferences
function loadSavedPreferences() {
    const savedLanguage = localStorage.getItem('language');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        currentTheme = savedTheme;
    } else {
        // Detect system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = 'dark';
        }
    }
}

// Handle system theme changes
function setupSystemThemeListener() {
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener((e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                currentTheme = e.matches ? 'dark' : 'light';
                updateTheme();
            }
        });
    }
}

// Add loading states and error handling for images
function setupImageHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading state
        img.style.opacity = '0.5';
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
            // Fallback for broken images
            img.style.opacity = '0.3';
            console.warn(`Failed to load image: ${img.src}`);
        });
    });
}

// Add intersection observer for animations
function setupIntersectionObserver() {
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
    
    // Observe service cards and tech cards
    document.querySelectorAll('.service-card, .tech-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load saved preferences first
    loadSavedPreferences();
    
    // Apply initial theme and translations
    updateTheme();
    updateTranslations();
    
    // Initialize Lucide icons
    initializeIcons();
    
    // Setup event listeners
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const mobileLanguageToggle = document.getElementById('mobile-language-toggle');
    const contactForm = document.getElementById('contact-form');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
    
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
    
    if (mobileLanguageToggle) {
        mobileLanguageToggle.addEventListener('click', toggleLanguage);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Setup additional features
    setupSmoothScrolling();
    setupSystemThemeListener();
    setupImageHandling();
    setupIntersectionObserver();
    
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Toggle theme with Ctrl/Cmd + Shift + T
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            toggleTheme();
        }
        
        // Toggle language with Ctrl/Cmd + Shift + L
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
            e.preventDefault();
            toggleLanguage();
        }
    });
    
    // Add focus management for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
});

// Add CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--color-cyan-600) !important;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// Export functions for potential use in other scripts
window.TestXApp = {
    toggleTheme,
    toggleLanguage,
    updateTranslations,
    updateTheme,
    currentLanguage: () => currentLanguage,
    currentTheme: () => currentTheme
};