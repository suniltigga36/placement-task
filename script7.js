// Send message validation
document.getElementById("sendMessageButton").addEventListener("click", function () {
  // Get input values
  const fullNameInput = document.getElementById("fullNameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  const fullNameValue = fullNameInput.value.trim(); // Remove unnecessary spaces
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate inputs
  if (fullNameValue === "") {
      alert("Please enter your full name.");
      fullNameInput.focus(); // Set focus on the empty field
  } else if (emailValue === "" || !emailRegex.test(emailValue)) {
      alert("Please enter a valid email address.");
      emailInput.focus(); // Set focus on the invalid email field
  } else if (messageValue === "") {
      alert("Please enter your message.");
      messageInput.focus(); // Set focus on the empty message field
  } else {
      alert("Thank you for contacting us! We will get back to you soon.");

      // Clear input fields after successful submission
      fullNameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
  }
});

// Subscribe Button Logic
const subscribeBtn = document.getElementById("subscribe-btn");
const emailinputsub = document.getElementById("email-input-sub");

subscribeBtn.addEventListener("click", () => {
  const emailValue = emailinputsub.value.trim(); // Trim

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    alert("Please enter your email before subscribing.");
  } else if (!emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
  } else {
    alert(`Thank you for subscribing with: ${emailValue}`);
    emailinputsub.value = ""; // Clear the input field
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
