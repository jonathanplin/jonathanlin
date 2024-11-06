// Function to toggle the navigation menu when the hamburger icon is clicked
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    const menuIcon = document.getElementById("menuIcon");
    
    // Toggle the "open" class to show/hide the menu
    navMenu.classList.toggle("open");
  
    // Change the hamburger icon to an "X" when the menu is open
    if (navMenu.classList.contains("open")) {
      menuIcon.innerHTML = "&#10005;";  // "X" icon when menu is open
    } else {
      menuIcon.innerHTML = "&#9776;";  // Hamburger icon when menu is closed
    }
  }