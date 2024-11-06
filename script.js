// Toggle Navigation Menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  }
  
  // Form Submission
  function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    document.getElementById("contact-form").reset();
  }

  // JavaScript function to toggle the navigation menu
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("open");
  }
  