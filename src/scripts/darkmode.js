export default (function () {
    if (!window.location.pathname.includes("settings.html")) return; // guard clause
    const CTA_BUTTON = document.querySelector(".darkmodeSwitch");

    if (!localStorage.getItem("theme")) {
        // If the theme is not set, set it based on the user's preference
        localStorage.setItem(
            "theme",
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "darkmode"
                : ""
        );
    }

    // Set the initial theme based on localStorage
    document.body.classList.add(localStorage.getItem("theme"));

    CTA_BUTTON.addEventListener("click", clickHandler);

    function clickHandler() {
        const CLASS_LIST = document.body.classList;
        CLASS_LIST.toggle("darkmode");
        localStorage.setItem(
            "theme",
            CLASS_LIST.contains("darkmode") ? "darkmode" : ""
        );
        
    }

    // Check if the theme is initially set to darkmode and simulate a click
    if (localStorage.getItem("theme") === "darkmode") {
        CTA_BUTTON.click();
    }
    console.log(CTA_BUTTON)

})();
