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

// Subscribe Button Logic
const subscribeBtn = document.getElementById("subscribe-btn");
const emailInput = document.getElementById("email-input");

subscribeBtn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim(); // Trim

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    alert("Please enter your email before subscribing.");
  } else if (!emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
  } else {
    alert(`Thank you for subscribing with: ${emailValue}`);
    emailInput.value = ""; // Clear the input field
  }
});
