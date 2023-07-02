// Scroll animation for home section
window.addEventListener('scroll', () => {
    const homeSection = document.querySelector('.home');
    const homeTitle = document.querySelector('.home h1');
    const homeSubtitle = document.querySelector('.home p');
    const homeButton = document.querySelector('.home .btn-box');
    const homeIllustration = document.querySelector('.home .illustration');
    const homePosition = homeSection.getBoundingClientRect().top;
  
    const windowHeight = window.innerHeight;
  
    if (homePosition < windowHeight / 1.5) {
      homeTitle.style.animation = 'fade-in 1s forwards';
      homeSubtitle.style.animation = 'fade-in 1s forwards';
      homeButton.style.animation = 'fade-in 1s forwards';
      homeIllustration.style.animation = 'fade-in 1s forwards';
    }
  });
  
  // Rotate animation for skills icons
  const skillIcons = document.querySelectorAll('.skills .icon');
  skillIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      icon.style.animation = 'spin 1s infinite linear';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.animation = '';
    });
  });
  
  // Form submission
  const contactForm = document.querySelector('.contact form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission logic here
  });
  