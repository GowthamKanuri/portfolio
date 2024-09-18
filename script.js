"use strict";
/****************************************/
/* Nav links */
/****************************************/
// Define offsets for each section
const offsets = {
  "about-me": 110, // Offset for 'About Me' section
  skills: 50, // Offset for 'Skills' section (different)
  portfolio: 30, // Offset for 'Portfolio' section
  contact: -100, // Offset for 'Contact' section
};

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Get the target section by using the link's href attribute
    const targetSectionId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
      // Get the section's position and apply the custom offset
      const offset = offsets[targetSectionId] || 0; // Default to 0 if not found
      const sectionPosition =
        targetSection.getBoundingClientRect().top + window.scrollY;

      // Scroll with custom offset and smooth behavior
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
    }
  });
});
/****************************************/
/* hamburger */
/****************************************/
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    // Toggle 'active' class on hamburger for icon change
    hamburger.classList.toggle("active");

    // Toggle 'active' class on navLinks for menu visibility
    navLinks.classList.toggle("active");
    // Close hamburger menu on click
    hamburger.classList.remove("active");
    navLinksContainer.classList.remove("active");
  });
});
/****************************************/
/* calendly embed */
/****************************************/
document.addEventListener("DOMContentLoaded", function () {
  const scheduleLink = document.getElementById("schedule-link");

  if (scheduleLink) {
    scheduleLink.addEventListener("click", (event) => {
      // No additional JavaScript needed here
    });
  }
});
/****************************************/
/* functional tabs */
/****************************************/

// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  // Get all the tab links and tab panes
  const tabLinks = document.querySelectorAll(".tab-links li");
  const tabPanes = document.querySelectorAll(".tab-pane");

  // Function to handle tab switching
  function handleTabClick(event) {
    // Prevent default behavior
    event.preventDefault();

    // Remove 'active' class from all tab links and panes
    tabLinks.forEach((tabLink) => tabLink.classList.remove("active"));
    tabPanes.forEach((tabPane) => tabPane.classList.remove("active"));

    // Add 'active' class to the clicked tab link
    event.currentTarget.classList.add("active");

    // Get the target tab pane's ID from the clicked link's href attribute
    const targetTab = event.currentTarget
      .querySelector("a")
      .getAttribute("href");

    // Show the target tab pane
    document.querySelector(targetTab).classList.add("active");
  }

  // Add click event listener to all tab links
  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", handleTabClick);
  });
});
