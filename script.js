const landingBtn = document.querySelector('.landingbtn');
const homeNav = document.querySelector('.home-link');
const aboutNav = document.querySelector('.about-link');
const projectsNav = document.querySelector('.projects-link');
const contactNav = document.querySelector('.contact-link');

// Landing Page Button
landingBtn.addEventListener('click', () => {
    document.querySelector('.navBar').scrollIntoView();
});

// Nav Bar Links
homeNav.addEventListener('click', () => {
    document.querySelector('.landing').scrollIntoView();
});

aboutNav.addEventListener('click', () => {
    document.querySelector('.navBar').scrollIntoView();
});

projectsNav.addEventListener('click', () => {
    document.querySelector('#projects').scrollIntoView();
});

contactNav.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView();
});

