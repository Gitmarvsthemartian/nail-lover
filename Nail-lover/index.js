function openNav() {
    if (window.innerWidth <= 768) { // Check if the window width is less than or equal to 768px (typical mobile size)
        document.getElementById("myNav").style.width = "100%"; // Set the width to 100% for mobile devices
    } else {
        document.getElementById("myNav").style.width = "26%"; // Set the width to 26% for desktop screens
    }
}

        
        function closeNav() {
          document.getElementById("myNav").style.width = "0%";
        }