const sendButton = document.getElementById("send-message-btn");
const emailInput = document.getElementById("email-input");
const fullNameInput = document.getElementById("full-name-input");
const messageInput = document.getElementById("message-input");

sendButton.addEventListener("click", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const fullNameValue = fullNameInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (fullNameValue === "") {
    alert("Please enter your full name.");
  } else if (emailValue === "" || !emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
  } else if (messageValue === "") {
    alert("Please enter your message.");
  } else {
    alert("Thank you for contacting us! We will get back to you soon.");
    fullNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});

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
