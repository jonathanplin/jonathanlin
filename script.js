document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    let isMenuOpen = false;

    menuButton.addEventListener('click', function() {
        if (!isMenuOpen) {
            navMenu.style.transform = 'translateX(0)';
            navMenu.style.visibility = 'visible';
            menuButton.setAttribute('aria-expanded', 'true');
            isMenuOpen = true;
        } else {
            navMenu.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                navMenu.style.visibility = 'hidden';
            }, 300);
            menuButton.setAttribute('aria-expanded', 'false');
            isMenuOpen = false;
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (isMenuOpen && !navMenu.contains(event.target) && !menuButton.contains(event.target)) {
            navMenu.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                navMenu.style.visibility = 'hidden';
            }, 300);
            isMenuOpen = false;
        }
    });
});

var navItems = [
    { name: 'Home', link: 'index.html' },
    { name: 'Portfolio/Works', link: 'portfolio.html' },
    { name: 'Resumes and CVs', link: 'resume.html' },
    { name: 'Certifications & Awards', link: 'certifications.html' },
    { name: 'About Me', link: 'about.html' },
    { name: 'Contact', link: 'contact.html' }
];

function handleSubmit(event) {
    event.preventDefault();
    alert("Your contact request form has been successfully submitted!");
    document.getElementById("contactForm").reset();
}