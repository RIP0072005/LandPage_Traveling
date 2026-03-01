const navMenuBtn = document.getElementById("nav-menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = navMenuBtn.querySelector("i");
navMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuIcon.classList.toggle("ri-menu-line");
    menuIcon.classList.toggle("ri-close-line");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
        navLinks.classList.remove("open");
        menuIcon.classList.add("ri-menu-line");
        menuIcon.classList.remove("ri-close-line");
    });
});

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-img img", { 
    ...ScrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content h1", { 
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content p", { 
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-content form", { 
    ...ScrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header-content .bar", { 
    ...ScrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".header-img-card", {
    duration: 1000,
    interval: 500, 
    delay: 2500,
});