// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');
const heroButtons = document.querySelectorAll('.hero-buttons .btn');
const featureCards = document.querySelectorAll('.feature-card');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const pricingCards = document.querySelectorAll('.pricing-card');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    mobileMenuBtn.innerHTML = nav.style.display === 'block' ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.style.display === 'block') {
                nav.style.display = 'none';
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Smooth Scrolling for Hero Buttons
heroButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = button.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .step, .testimonial-card, .pricing-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
const setInitialAnimationState = () => {
    const elements = document.querySelectorAll('.feature-card, .step, .testimonial-card, .pricing-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
};

// Initialize animations
setInitialAnimationState();
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form Validation (if we had forms)
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#ced4da';
        }
    });
    
    return isValid;
};

// Add animation to feature cards on hover
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add animation to testimonial cards on hover
testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add animation to pricing cards on hover
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'translateY(-10px)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'translateY(0)';
        }
    });
});

// Testimonial Slider (if needed in future)
const initTestimonialSlider = () => {
    // This would be implemented if we had more testimonials than could fit on screen
    // For now, we'll leave it as a placeholder for future enhancement
};

// Pricing Card Selection
pricingCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove featured class from all cards
        pricingCards.forEach(c => c.classList.remove('featured'));
        
        // Add featured class to clicked card
        card.classList.add('featured');
    });
});

// Dynamic Year in Footer
const yearSpan = document.querySelector('.footer-bottom p');
if (yearSpan) {
    yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} All-in-One PC Optimizer. All rights reserved.`;
}

// Watermark Positioning
const watermark = document.querySelector('.watermark');
if (watermark) {
    // Ensure watermark is visible but not intrusive
    watermark.style.fontSize = '1.2rem';
    watermark.style.opacity = '0.3';
}

// Performance Monitoring
const reportPerformance = () => {
    // This would be used to report performance metrics in a real application
    // For now, we'll just log to console for demonstration
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
            }, 0);
        });
    }
};

// Initialize Performance Monitoring
reportPerformance();

// Add scroll to top button functionality
const createScrollToTopButton = () => {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.setAttribute('id', 'scrollToTop');
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '20px';
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.width = '50px';
    scrollToTopBtn.style.height = '50px';
    scrollToTopBtn.style.borderRadius = '50%';
    scrollToTopBtn.style.backgroundColor = '#00bfff';
    scrollToTopBtn.style.color = '#1a1a1a';
    scrollToTopBtn.style.border = 'none';
    scrollToTopBtn.style.cursor = 'pointer';
    scrollToTopBtn.style.display = 'none';
    scrollToTopBtn.style.zIndex = '1000';
    scrollToTopBtn.style.fontSize = '1.2rem';
    scrollToTopBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    scrollToTopBtn.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Initialize Scroll to Top Button
createScrollToTopButton();

// Add subtle animations to elements when they come into view
const addIntersectionObserver = () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    document.querySelectorAll('.feature-card, .step, .testimonial-card, .pricing-card').forEach(el => {
        observer.observe(el);
    });
};

// Add CSS for animation classes
const addAnimationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
};

// Initialize animations
addAnimationStyles();
addIntersectionObserver();

console.log('All-in-One PC Optimizer website loaded successfully!');