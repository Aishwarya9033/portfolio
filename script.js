
// Typing Animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "Final Year Computer Science Student",
    "Web Developer",
    "Aspiring Software Engineer"
];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (typedTextSpan) {
        const currentText = textArray[textArrayIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 100 : 150);
        }
    }
}

if (typedTextSpan) {
    setTimeout(type, 1000);
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Fade-in animations on scroll
const fadeElements = document.querySelectorAll('.skill-category-card, .project-card, .exp-card, .timeline-item');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Project Cards Expand/Collapse
const expandBtns = document.querySelectorAll('.project-card .expand-btn');

expandBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const projectCard = this.closest('.project-card');
        const details = projectCard.querySelector('.project-details');
        
        this.classList.toggle('active');
        
        if (details.classList.contains('show')) {
            details.classList.remove('show');
            this.querySelector('span').textContent = 'View Details';
        } else {
            details.classList.add('show');
            this.querySelector('span').textContent = 'Show Less';
        }
    });
});

// Experience Cards Expand/Collapse
const expExpandBtns = document.querySelectorAll('.exp-expand-btn');

expExpandBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const expCard = this.closest('.exp-card');
        const details = expCard.querySelector('.exp-details');
        
        this.classList.toggle('active');
        
        if (details.classList.contains('show')) {
            details.classList.remove('show');
            this.querySelector('span').textContent = 'View Details';
        } else {
            details.classList.add('show');
            this.querySelector('span').textContent = 'Show Less';
        }
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;
        let errorMessage = '';
        
        // Name validation
        if (!name.value.trim()) {
            isValid = false;
            errorMessage += 'Name is required.\n';
            name.style.borderColor = '#ff4444';
        } else {
            name.style.borderColor = '';
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            isValid = false;
            errorMessage += 'Email is required.\n';
            email.style.borderColor = '#ff4444';
        } else if (!emailRegex.test(email.value)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
            email.style.borderColor = '#ff4444';
        } else {
            email.style.borderColor = '';
        }
        
        // Message validation
        if (!message.value.trim()) {
            isValid = false;
            errorMessage += 'Message is required.\n';
            message.style.borderColor = '#ff4444';
        } else {
            message.style.borderColor = '';
        }
        
        if (isValid) {
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fix the following errors:\n' + errorMessage);
        }
    });
}

// Input field validation on typing
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.style.borderColor = '';
        }
    });
});

// Sticky Navigation Background Change
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Certificate links 
const certLinks = document.querySelectorAll('.cert-link');

certLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const certificateMap = {
            'InternPe': 'certificates/internpe-ai-ml.pdf',
            'Unified Mentor': 'certificates/unified-mentor-webdev.pdf'
        };
        
        const expCard = this.closest('.exp-card');
        const company = expCard?.querySelector('.exp-title h4')?.textContent;
        
        if (company && certificateMap[company]) {
            alert(`${company} certificate will be available soon!`);
        } else {
            alert('Certificate will be available soon!');
        }
    });
});

// Project links
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectName = this.closest('.project-card')?.querySelector('h3')?.textContent || 'Project';
        alert(`${projectName} details will be available on GitHub soon!`);
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    fadeInOnScroll();
});