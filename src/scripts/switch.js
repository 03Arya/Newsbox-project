export default (function () {
    if (!window.location.pathname.includes("settings")) return; // guard clause

    // Get all checkboxes
    const checkboxes = document.querySelectorAll(".switch__checkbox");

    // Check if the user has visited the settings page before
    const hasVisitedSettingsBefore = localStorage.getItem("hasVisitedSettingsBefore");

    // If not visited before, set all switches to checked and store the information
    if (!hasVisitedSettingsBefore) {
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
            localStorage.setItem(checkbox.id, true);
        });

        localStorage.setItem("hasVisitedSettingsBefore", true);
    } else {
        // If visited before, retrieve the state from local storage and set the checkbox accordingly
        checkboxes.forEach(checkbox => {
            const savedState = localStorage.getItem(checkbox.id);
            if (savedState) {
                checkbox.checked = savedState === "true"; // Convert string to boolean
            }
        });
    }

    // Add event listeners to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            // Save the state in local storage
            localStorage.setItem(this.id, this.checked);
        });
    });
})();
