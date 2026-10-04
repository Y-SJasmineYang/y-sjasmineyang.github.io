// Dynamically load section content into index.html
document.addEventListener("DOMContentLoaded", () => {
  // Responsive menu toggle
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});


document.querySelectorAll('.js-animated-details summary').forEach((summary) => {
  summary.addEventListener('click', (e) => {
    e.preventDefault();
    const details = summary.parentElement;
    const content = details.querySelector('.content');

    if (details.open) {
      // Closing animation
      const startHeight = content.offsetHeight;
      content.style.height = `${startHeight}px`;
      
      requestAnimationFrame(() => {
        content.style.height = '0px';
        content.style.opacity = '0';
      });

      content.addEventListener('transitionend', function handler() {
        details.removeAttribute('open');
        content.style.height = '';
        content.style.opacity = '';
        content.removeEventListener('transitionend', handler);
      });
    } else {
      // Opening animation
      details.setAttribute('open', '');
      const endHeight = content.offsetHeight;
      
      content.style.height = '0px';
      content.style.opacity = '0';
      
      requestAnimationFrame(() => {
        content.style.height = `${endHeight}px`;
        content.style.opacity = '1';
      });

      content.addEventListener('transitionend', function handler() {
        content.style.height = '';
        content.style.opacity = '';
        content.removeEventListener('transitionend', handler);
      });
    }
  });
});