// Select all images (vertical) and textboxes (horizontal)
const verticalElements = document.querySelectorAll(".vertical");
const horizontalElements = document.querySelectorAll(".horizontal");

// Function to add animation classes
const animateOnScroll = () => {
  verticalElements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight * 0.8) {
      element.classList.add("show-left");
    }
  });

  horizontalElements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight * 0.8) {
      element.classList.add("show-right");
    }
  });
};

// Add event listener for scrolling
window.addEventListener("scroll", animateOnScroll);
