// Dynamically load section content into index.html
document.addEventListener("DOMContentLoaded", () => {
  const sections = ["about", "research", "teaching"];

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

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});