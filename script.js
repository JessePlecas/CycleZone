const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
});

const menu = document.getElementById("menu");

menu.onclick = function(e) {
    e.preventDefault();
    menu.classList.toggle("open-menu");
}


const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

const observerOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const observerOne = new IntersectionObserver
(function(
    entries, 
    observerOne
    ) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navbar.classList.add("nav-scrolled");
        } else {
            navbar.classList.remove("nav-scrolled");
        }
    });
}, 
observerOneOptions);

observerOne.observe(hero);