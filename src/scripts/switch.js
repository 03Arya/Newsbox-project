export default (function () {
    if (!window.location.pathname.includes("settings.html")) return; // guard clause
    // Get all checkboxes
    const checkboxes = document.querySelectorAll(".switch__checkbox");

    // Add event listeners to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            // Save the state in local storage
            localStorage.setItem(this.id, this.checked);
        });

        // Retrieve the state from local storage and set the checkbox accordingly
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState) {
            checkbox.checked = savedState === "true"; // Convert string to boolean
        }
        
    });
})()
