const hamburger = document.querySelector('.header .container .hamburger');
const mobile_menu = document.querySelector('.header .container .navbar ul');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.querySelectorAll('.header .container .navbar ul li a').forEach(n => 
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active');
    }));
