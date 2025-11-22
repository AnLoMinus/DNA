// Navigation Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Fade-in Animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .event-card, .pricing-card, .location-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contact Form Handler - Send to WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const contactPerson = document.getElementById('contactPerson').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Validate contact person selection
        if (!contactPerson) {
            alert('אנא בחר איש קשר');
            return;
        }
        
        // Phone numbers
        const phoneNumbers = {
            'adir': '972525818799',
            'elin': '972527726987'
        };
        
        // Contact names
        const contactNames = {
            'adir': 'אדיר',
            'elin': '~אלין'
        };
        
        const selectedPhone = phoneNumbers[contactPerson];
        const selectedName = contactNames[contactPerson];
        
        // Create WhatsApp message
        const whatsappMessage = `שלום ${selectedName} DNA! 👋\n\n` +
            `*פרטי הפונה:*\n` +
            `שם: ${name}\n` +
            `אימייל: ${email}\n` +
            `טלפון: ${phone}\n\n` +
            `*הודעה:*\n${message}\n\n` +
            `---\n` +
            `נשלח מאתר DNA חולון`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${selectedPhone}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        alert('פותח וואטסאפ... שלח את ההודעה!');
        
        // Reset form after a short delay
        setTimeout(() => {
            contactForm.reset();
        }, 1000);
    });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const particles = document.querySelector('.particles');
    
    if (heroContent && particles && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        particles.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Spark Zone Code Animation
const sparkCode = document.querySelector('.spark-code');
if (sparkCode) {
    sparkCode.addEventListener('mouseenter', () => {
        sparkCode.style.transform = 'scale(1.05)';
        sparkCode.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.5)';
    });
    
    sparkCode.addEventListener('mouseleave', () => {
        sparkCode.style.transform = 'scale(1)';
        sparkCode.style.boxShadow = 'none';
    });
    
    // Click to copy functionality
    sparkCode.addEventListener('click', () => {
        const text = sparkCode.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = sparkCode.textContent;
            sparkCode.textContent = 'הועתק! ✓';
            setTimeout(() => {
                sparkCode.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text:', err);
        });
    });
    
    sparkCode.style.cursor = 'pointer';
    sparkCode.title = 'לחץ להעתקה';
}

// Event Card Hover Effects
const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic Year in Footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2025', currentYear);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Counter Animation for Numbers (if needed)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// DNA Symbol Rotation on Hover
const dnaSymbols = document.querySelectorAll('.dna-symbol');
dnaSymbols.forEach(symbol => {
    symbol.addEventListener('mouseenter', () => {
        symbol.style.animationDuration = '0.5s';
    });
    
    symbol.addEventListener('mouseleave', () => {
        symbol.style.animationDuration = '3s';
    });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

