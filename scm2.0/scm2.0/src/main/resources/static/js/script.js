// Log a message to the console to confirm the script has loaded
console.log("Script loaded");

// Get the current theme from localStorage or set to "light" if not available
let currentTheme = getTheme();

// Add an event listener to the DOMContentLoaded event to initialize the theme
document.addEventListener("DOMContentLoaded", () => {
  changeTheme();
});

// Function to change the theme of the page
function changeTheme() {
  // Apply the current theme to the page
  changePageTheme(currentTheme, "");
  
  // Get the theme change button from the DOM
  const changeThemeButton = document.querySelector("#theme_change_button");

  // Add an event listener to the button to handle theme changes on click
  changeThemeButton.addEventListener("click", (event) => {
    // Store the old theme before changing
    let oldTheme = currentTheme;
    console.log("Change theme button clicked");
    
    // Toggle the theme between "dark" and "light"
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    console.log(currentTheme);
    
    // Apply the new theme to the page
    changePageTheme(currentTheme, oldTheme);
  });
}

// Function to save the current theme to localStorage
function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

// Function to get the current theme from localStorage
function getTheme() {
  let theme = localStorage.getItem("theme");
  return theme ? theme : "light"; // Default to "light" if no theme is set
}

// Function to change the page's theme
function changePageTheme(theme, oldTheme) {
  // Update the theme in localStorage
  setTheme(currentTheme);

  // If there was an old theme, remove its class from the HTML element
  if (oldTheme) {
    document.querySelector("html").classList.remove(oldTheme);
  }

  // Add the new theme class to the HTML element
  document.querySelector("html").classList.add(theme);

  // Update the text of the theme change button to reflect the new theme
  document
    .querySelector("#theme_change_button")
    .querySelector("span").textContent = theme == "light" ? "Dark" : "Light";
}
