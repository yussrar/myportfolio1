window.onload = function(){

    //hamburger menu
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
        menu.style.left = menu.style.left === '0px' ? '-250px' : '0px';
    });

    //transition home
    const home = document.querySelector('.home');
    console.log(home);
    home.classList.add('appear');


    //scrolling 
     // Select all navigation links
     const navLinks = document.querySelectorAll('nav a');

     // Attach click event listeners to navigation links
     navLinks.forEach(link => {
         link.addEventListener('click', smoothScroll);
     });
 
     // Smooth scroll function
     function smoothScroll(event) {
         event.preventDefault();
 
         const targetId = this.getAttribute('href');
         const targetSection = document.querySelector(targetId);
         const targetOffsetTop = targetSection.offsetTop;
 
         window.scrollTo({
             top: targetOffsetTop,
             behavior: 'smooth'
         });
     }
}    