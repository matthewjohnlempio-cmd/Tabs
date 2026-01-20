// Select all tab buttons
const tabButtons = document.querySelectorAll(".tab-btn");

// Select all tab content divs
const tabContents = document.querySelectorAll(".tab-content");

// Loop through each tab button
tabButtons.forEach(button => {

    // Add click event listener to each button
    button.addEventListener("click", () => {

        // Remove 'active' class from all buttons
        tabButtons.forEach(btn => btn.classList.remove("active"));

        // Remove 'active' class from all contents
        tabContents.forEach(content => content.classList.remove("active"));

        // Add 'active' class to clicked button
        button.classList.add("active");

        // Get the target tab id from data-tab attribute
        const target = button.getAttribute("data-tab");

        // Show the correct tab content
        document.getElementById(target).classList.add("active");

    });
});