export default (function () {
    if (!window.location.pathname.includes("archive.html")) return; // guard clause

    function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
        if (localStorageTheme !== null) {
            return localStorageTheme;
        }

        if (systemSettingDark.matches) {
            return "dark";
        }

        return "light";
    }

    function updateButton({ buttonEl, isDark }) {
        const newCta = isDark ? "TOGGLE DARK MODE" : "TOGGLE DARK MODE";
    }

    /**
    * Utility function to update the theme setting on the body tag
    */
    function updateThemeOnBody({ theme }) {
        document.querySelector("body").setAttribute("data-theme", theme);
    }

    const button = document.querySelector("[data-settings-theme-toggle]");
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
})()