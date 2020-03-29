const navSlide = () => {
  const navButton = document.querySelector('.mobile-nav-button');
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list li');

  navButton.addEventListener('click', () => {
    nav.style.transition = "transform 0.5s ease-in";
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade ease forwards ${index/5 +1.5}s`;
      }


    });

    navButton.classList.toggle('toggle');

  });




}



navSlide();
