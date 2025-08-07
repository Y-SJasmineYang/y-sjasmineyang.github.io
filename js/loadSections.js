// Dynamically load section content into index.html
document.addEventListener("DOMContentLoaded", () => {
  const sections = ["about", "cv", "research", "teaching", "contact"];

  sections.forEach(section => {
    fetch(`sections/${section}.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementById(section).innerHTML = data;
      })
      .catch(error => {
        console.error(`Error loading ${section}:`, error);
      });
  });

  // Responsive menu toggle
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});