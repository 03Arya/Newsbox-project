if (window.location.pathname.includes("settings")) return; // guard clause


function clickHandler(dropdownSelector, articleClass) {
    //const DROPDOWN = document.querySelector(dropdownSelector);
    const ARTICLE = document.querySelector(`.${articleClass}`);
    // Toggle visibility of the article
    ARTICLE.classList.toggle("hidden");

    // Toggle arrow icon based on the visibility of .newsArticle
    if (ARTICLE.classList.contains("hidden")) {
        //DROPDOWN.classList.remove("fa-chevron-down");
        //DROPDOWN.classList.add("fa-chevron-right");
    } else {
        //DROPDOWN.classList.remove("fa-chevron-right");
        //DROPDOWN.classList.add("fa-chevron-down");
    }
}

// Add click event listeners for each dropdown
document.querySelector('#businessDropdown').addEventListener("click", () => clickHandler('#businessDropdown', 'ArticleBusiness'));
document.querySelector('#healthDropdown').addEventListener("click", () => clickHandler('#healthDropdown', 'ArticleHealth'));
document.querySelector('#sportDropdown').addEventListener("click", () => clickHandler('#sportDropdown', 'ArticleSport'));
document.querySelector('#travelDropdown').addEventListener("click", () => clickHandler('#travelDropdown', 'ArticleTravel'));
document.querySelector('#europeDropdown').addEventListener("click", () => clickHandler('#europeDropdown', 'ArticleEurope'));
