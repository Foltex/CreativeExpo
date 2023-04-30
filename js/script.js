// toggle active 
const navbarNav = document.querySelector
('.navbar-nav');
//ketika hambruger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan nav
const hambruger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hambruger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');  
    }
});

