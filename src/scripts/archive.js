export default (function () {
    if (!window.location.pathname.includes("archive")) return; // guard clause

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
    * 3. Update the theme setting and button text according to current settings
    */
    updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
    updateThemeOnBody({ theme: currentThemeSetting });

    function displaySavedArticles() {
        const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
        console.log(savedArticles)
        // Use a map to pre-calculate the section for each article
        const sectionMap = {
            'Health': '.ArticleTextHealth',
            'Travel': '.ArticleTextTravel',
            'Sport': '.ArticleTextSport',
            'Europe': '.ArticleTextEurope',
            'Business': '.ArticleTextBusiness',
        };

        savedArticles.forEach((articleIndex) => {
            const [title, abstract, imageUrl] = articleIndex.split(' - ');

            const savedArticleHTML = `
                <div class="articleContainer">
                    <img src="${imageUrl}" alt="Article Image" class="articleImage">
                    <div class="articleTexts">
                        <h3 class="articleHeader">${title}</h3>
                        <p class="articleText">${abstract}</p>
                    </div>
                </div>
            `;

            // Determine the section based on the article title
            const sectionSelector = determineSectionSelector(title, sectionMap);

            // Append the saved article to the respective section
            const section = document.querySelector(sectionSelector);
            section.innerHTML += savedArticleHTML;
        });
    }

    // Function to determine the section selector based on the article title
    function determineSectionSelector(title, sectionMap) {
        for (const [section, selector] of Object.entries(sectionMap)) {
            if (title.toLowerCase().includes(section.toLowerCase())) {
                return selector;
            }
        }

        // Default to the health section if no match is found
        return '.ArticleTextHealth';
    }
    // Call the function to display saved articles when the page loads
    displaySavedArticles();
})();
