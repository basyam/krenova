// KRENOVA Landing Page - JavaScript

// ==========================================
// 0. Load Configuration from config.json
// ==========================================
let siteConfig = null;

async function loadConfig() {
    try {
        const response = await fetch('config.json');
        siteConfig = await response.json();
        console.log('✓ Configuration loaded:', siteConfig.name);
        
        // Apply configuration to the website
        applyConfig();
        
        return siteConfig;
    } catch (error) {
        console.error('✗ Error loading config.json:', error);
        return null;
    }
}

function applyConfig() {
    if (!siteConfig) return;
    
    // Apply theme colors
    applyThemeColors();
    
    // Update site title and meta
    updateSiteInfo();
    
    // Update hero section
    updateHeroSection();
    
    // Render dynamic sections
    renderRegistration();
    renderTimeline();
    renderContactInfo();
    renderSocialLinks();
}

function applyThemeColors() {
    const theme = siteConfig.website?.theme;
    if (theme) {
        const root = document.documentElement;
        if (theme.primaryColor) root.style.setProperty('--primary-color', theme.primaryColor);
        if (theme.secondaryColor) root.style.setProperty('--secondary-color', theme.secondaryColor);
        if (theme.darkColor) root.style.setProperty('--dark-color', theme.darkColor);
        if (theme.lightColor) root.style.setProperty('--light-color', theme.lightColor);
        if (theme.textColor) root.style.setProperty('--text-color', theme.textColor);
    }
}

function updateSiteInfo() {
    const settings = siteConfig.settings;
    if (settings) {
        document.title = `${settings.siteName} - ${settings.tagline}`;
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && siteConfig.seo?.description) {
            metaDesc.setAttribute('content', siteConfig.seo.description);
        }
    }
}

function updateHeroSection() {
    const settings = siteConfig.settings;
    const competition = siteConfig.competition;
    
    if (settings) {
        // Update hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) heroTitle.textContent = settings.siteName;
        
        // Update hero subtitle (tagline)
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = settings.tagline;
    }
    
    if (competition) {
        // Update hero description
        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) heroDescription.textContent = competition.description;
    }
}

function renderRegistration() {
    const registration = siteConfig.competition?.registration;
    if (!registration) return;
    
    const registrationGrid = document.querySelector('.registration-grid');
    if (!registrationGrid) return;
    
    registrationGrid.innerHTML = registration.map(item => `
        <div class="registration-card">
            <div class="registration-icon">${item.emoji}</div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="${item.link || '#'}" class="btn btn-primary">Daftar Sekarang</a>
        </div>
    `).join('');
}

function renderTimeline() {
    const timeline = [
        {
            title: 'Pendaftaran Dibuka',
            date: formatDateRange(siteConfig.competition?.registrationPeriod),
            description: 'Daftarkan tim Anda melalui platform online resmi KRENOVA.'
        },
        {
            title: 'Submission Karya',
            date: formatDateRange(siteConfig.competition?.submissionPeriod),
            description: 'Kumpulkan naskah dan dokumentasi penelitian Anda.'
        },
        {
            title: 'Review & Seleksi',
            date: '1 - 31 Mei 2026',
            description: 'Tim ahli mengevaluasi semua karya yang masuk.'
        },
        {
            title: 'Presentasi Final',
            date: '15 - 20 Juni 2026',
            description: 'Presentasi langsung peserta terpilih di hadapan juri.'
        },
        {
            title: 'Pengumuman Pemenang',
            date: '25 Juni 2026',
            description: 'Pengumuman resmi pemenang dan penutupan kompetisi.'
        }
    ];
    
    const timelineContainer = document.querySelector('.timeline-container');
    if (!timelineContainer) return;
    
    timelineContainer.innerHTML = timeline.map(item => `
        <div class="timeline-item">
            <div class="timeline-marker">
                <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p class="timeline-date">${item.date}</p>
                <p class="timeline-description">${item.description}</p>
            </div>
        </div>
    `).join('');
}


function renderContactInfo() {
    const contact = siteConfig.contact;
    if (!contact) return;
    
    // Update contact email
    const emailElements = document.querySelectorAll('.contact-box a[href^="mailto:"]');
    emailElements.forEach(el => {
        el.href = `mailto:${contact.email}`;
        el.textContent = contact.email;
    });
    
    // Update contact phone
    const phoneElements = document.querySelectorAll('.contact-box a[href^="tel:"]');
    phoneElements.forEach(el => {
        el.href = `tel:${contact.phone}`;
        el.textContent = contact.phone;
    });
}

function renderSocialLinks() {
    const social = siteConfig.social;
    if (!social) return;
    
    const socialContainer = document.querySelector('.social-links');
    if (!socialContainer) return;
    
    const socialData = [
        { icon: 'fab fa-facebook-f', url: social.facebook },
        { icon: 'fab fa-instagram', url: social.instagram },
        { icon: 'fab fa-twitter', url: social.twitter },
        { icon: 'fab fa-youtube', url: social.youtube },
        { icon: 'fab fa-linkedin-in', url: social.linkedin }
    ];
    
    socialContainer.innerHTML = socialData.map(item => `
        <a href="${item.url}" class="social-link" target="_blank" rel="noopener noreferrer">
            <i class="${item.icon}"></i>
        </a>
    `).join('');
}

function formatDateRange(period) {
    if (!period || !period.start || !period.end) return '';
    const start = new Date(period.start).toLocaleDateString('id-ID', { day: 'numeric', month: 'long' });
    const end = new Date(period.end).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    return `${start} - ${end}`;
}

function formatCurrency(amount) {
    if (!amount) return '0';
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// ==========================================
// 1. Mobile Navigation Toggle
// ==========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==========================================
// 2. Scroll to Top Button
// ==========================================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// 3. FAQ Accordion
// ==========================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ==========================================
// 4. Smooth Scroll for Internal Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href !== '#' && href !== '#' ) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==========================================
// 5. Intersection Observer for Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.about-box, .step-card, .contact-box').forEach(el => {
    observer.observe(el);
});

// ==========================================
// 6. Active Navigation Link Highlighting
// ==========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// 7. Form Validation (Future Implementation)
// ==========================================
const registerBtn = document.querySelector('.registration-button .btn-primary');

if (registerBtn) {
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Sistem pendaftaran akan segera dibuka. Terima kasih atas minat Anda!');
    });
}

// ==========================================
// 8. Lazy Loading Images (Future Implementation)
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// 9. Counter Animation (for statistics)
// ==========================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==========================================
// 10. Mobile Menu Close on Body Click
// ==========================================
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
    }
});

// ==========================================
// 11. Dark Mode Toggle (Optional)
// ==========================================
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
};

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ==========================================
// 12. Loading Animation
// ==========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==========================================
// 13. Print Functionality
// ==========================================
const printPage = () => {
    window.print();
};

// ==========================================
// 14. Share Functionality
// ==========================================
const shareContent = async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'KRENOVA 2026',
                text: 'Kompetisi Karya Ilmiah untuk SMA dan Mahasiswa',
                url: window.location.href,
            });
        } catch (err) {
            console.log('Error sharing:', err);
        }
    }
};

// ==========================================
// 15. Keyboard Navigation
// ==========================================
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
    
    // Keyboard shortcut for search (Ctrl/Cmd + K)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Search functionality placeholder
    }
});

// ==========================================
// 16. Smooth Page Load
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
    // Load configuration first
    await loadConfig();
    
    // Add loading class for animations
    document.body.classList.add('loaded');
    
    // Initialize all components
    initializeComponents();
});

function initializeComponents() {
    // Re-observe elements after dynamic content is loaded
    const dynamicElements = document.querySelectorAll('.about-box, .step-card, .contact-box, .timeline-item');
    dynamicElements.forEach(el => {
        if (observer) observer.observe(el);
    });
    
    console.log('✓ KRENOVA Website Loaded Successfully');
    if (siteConfig) {
        console.log(`✓ Site: ${siteConfig.settings?.siteName}`);
        console.log(`✓ Competition: ${siteConfig.competition?.name}`);
    }
}

// ==========================================
// 17. Performance Monitoring
// ==========================================
if (window.PerformanceObserver) {
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log('Performance:', entry.name, entry.duration);
            }
        });
        observer.observe({ entryTypes: ['navigation', 'resource'] });
    } catch (e) {
        console.log('Performance monitoring not supported');
    }
}

// ==========================================
// 18. Service Worker (PWA Support)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            console.log('Service Worker not available');
        });
    });
}

// ==========================================
// 19. Cookie Consent (Optional)
// ==========================================
const showCookieConsent = () => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
        // Show cookie consent banner
        console.log('Show cookie consent');
    }
};

// ==========================================
// 20. Analytics Tracking (Optional)
// ==========================================
const trackEvent = (eventName, eventData = {}) => {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
};

// Track page views
trackEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href
});

console.log('✓ KRENOVA JavaScript loaded and initialized');
