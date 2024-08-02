/* -- SHOW MENU -- */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When clicking a link, the show-menu class is removed.
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* SHADOW HEADER */
const shadowHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50vh, the shadow-header class is added.
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

/* EMAIL JS */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_hucjskx', 'template_f7kch6a', '#contact-form', 'r5vNQDvaxivyrR-Zd').then(() => {
        // Message sent confirmation.
        contactMessage.textContent = 'Message sent successfully! ✅';

        // Remove confirmation message after 5 seconds.
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Clear input fields.
        contactForm.reset();
    }, () => {
        // Show error message.
        contactMessage.textContent = 'Message not sent - service error! ❌';
    });
}

contactForm.addEventListener('submit', sendEmail);