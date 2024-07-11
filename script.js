document.addEventListener("DOMContentLoaded", function() {
    // Simulate a loading delay
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById("loading-screen").style.display = "none";
        // Show the main content
        document.getElementById("main-content").style.display = "block";
    }, 2000); // 2 seconds delay for demonstration
});
