function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 123, 255, 1)';
    } else {
        header.style.background = 'rgba(0, 123, 255, 0.8)';
    }

    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > services.offsetTop) {
        services.classList.add('visible');
    }
    if (scrollPosition > contact.offsetTop) {
        contact.classList.add('visible');
    }
});

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}