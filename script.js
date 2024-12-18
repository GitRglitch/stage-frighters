document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    if (navLinks.classList.contains("mobile")) {
      navLinks.classList.add("slideUp");
      navLinks.classList.remove("slideDown");
      setTimeout(() => navLinks.classList.remove("mobile"), 500); // Remove after animation
    } else {
      navLinks.classList.add("mobile", "slideDown");
      navLinks.classList.remove("slideUp");
    }
    hamburger.classList.toggle("open");
  });
});
