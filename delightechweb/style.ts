const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = "<div></div>";
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      if (targetId) {
        const targetElement = document.querySelector(targetId) as HTMLElement;
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Add scroll effect to header
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe sections for animations
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Add click handlers for buttons
  const readMoreBtns = document.querySelectorAll('.btn-primary, .read-more');
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Button clicked:', btn.textContent);
      // You can add actual functionality here
    });
  });

  console.log('Delightech website loaded successfully!');
});
