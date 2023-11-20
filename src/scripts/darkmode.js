export default (function () {
    if (!window.location.pathname.includes("settings.html")) return; // guard clause
    /**
* Utility function to calculate the current theme setting.
* Look for a local storage value.
* Fall back to system setting.
* Fall back to light mode.
*/
    function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
        if (localStorageTheme !== null) {
            return localStorageTheme;
        }

        if (systemSettingDark.matches) {
            return "dark";
        }

        return "light";
    }

    /**
    * Utility function to update the button text and aria-label.
    */
    function updateButton({ buttonEl, isDark }) {
        const newCta = isDark ? "TOGGLE DARK MODE" : "TOGGLE DARK MODE";
        // use an aria-label if you are omitting text on the button
        // and using a sun/moon icon, for example
        buttonEl.setAttribute("aria-label", newCta);
        buttonEl.innerText = newCta;
    }

    /**
    * Utility function to update the theme setting on the html tag
    */
    function updateThemeOnBody({ theme }) {
        document.querySelector("body").setAttribute("data-theme", theme);
    }


    /**
    * On page load:
    */

    /**
    * 1. Grab what we need from the DOM and system settings on page load
    */
    const button = document.querySelector("[data-theme-toggle]");
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

    /**
    * 2. Work out the current site settings
    */
    let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

    /**
    * 3. Update the theme setting and button text accoridng to current settings
    */
    updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
    updateThemeOnBody({ theme: currentThemeSetting });

    /**
    * 4. Add an event listener to toggle the theme
    */
    button.addEventListener("click", (event) => {
        const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

        localStorage.setItem("theme", newTheme);
        updateButton({ buttonEl: button, isDark: newTheme === "dark" });
        updateThemeOnBody({ theme: newTheme });

        currentThemeSetting = newTheme;
    });
})()