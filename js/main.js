// Theme Toggle
const themeToggle = document.querySelector('.fa-sun');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeToggle.classList.toggle('fa-moon');
    themeToggle.classList.toggle('fa-sun');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        };
        // You can add your form submission logic here
        console.log('Form submitted:', formData);
        // Reset form
        this.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
}

// Skill bars animation
const skillBars = document.querySelectorAll('.result');
const skillPercentages = [95, 80, 78, 13]; // Matches your HTML percentages

function animateSkills() {
    skillBars.forEach((bar, index) => {
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = skillPercentages[index] + '%';
            bar.style.transition = 'width 1s ease-in-out';
        }, 500);
    });
}

// Run animation when skills section is in view
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);