const menuToggle = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");
const backdrop = document.getElementById("backdrop");

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
     navList.classList.toggle("active");
     backdrop.classList.toggle("active"); // Toggle the blur effect
});

// Close menu and blur when backdrop is clicked
backdrop.addEventListener("click", () => {
     navList.classList.remove("active"); // Close the menu
     backdrop.classList.remove("active"); // Remove blur effect
});