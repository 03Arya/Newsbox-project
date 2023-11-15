export default (function () {
  if (!window.location.pathname.includes("index.html")) return; // guard clause

  const apiKey = 'R6JswxR2AtoZ4AIEMyGPr0Z4oGATvNsL';

  // Function to fetch articles
  async function fetchArticles(endpoint, containerSelector, dropdownSelector, articleClass) {
      try {
          const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${endpoint}.json?api-key=${apiKey}`);
          const data = await response.json();

          const articles = data.results.slice(1, 6);
          const articleContent = articles.map(article => `
              <a href="${article.url}" target="_blank">
                  <div class="articleContainer">
                      <h3 class="articleHeader">${article.title}</h3>
                      <p class="articleText">${article.abstract}</p>
                  </div>
              </a>
          `).join('');

          document.querySelector(containerSelector).innerHTML = articleContent;
      } catch (error) {
          console.error('Error fetching articles:', error);
          document.querySelector(containerSelector).innerText = 'Failed to fetch articles.';
      }
  }

  // Fetch articles for Business
  fetchArticles('business', '.newsArticleTextBusiness', '#businessDropdown', 'newsArticleBusiness');

  // Fetch articles for Health
  fetchArticles('health', '.newsArticleTextHealth', '#healthDropdown', 'newsArticleHealth');

  // Fetch articles for Sports
  fetchArticles('sports', '.newsArticleTextSport', '#sportDropdown', 'newsArticleSport');

  // Fetch articles for Travel
  fetchArticles('travel', '.newsArticleTextTravel', '#travelDropdown', 'newsArticleTravel');

  function clickHandler(dropdownSelector, articleClass) {
    const DROPDOWN = document.querySelector(dropdownSelector);
    const ARTICLE = document.querySelector(`.${articleClass}`);

    // Toggle visibility of the article
    ARTICLE.classList.toggle("hidden");

    // Toggle arrow icon based on the visibility of .newsArticle
    if (ARTICLE.classList.contains("hidden")) {
        DROPDOWN.classList.remove("fa-chevron-down");
        DROPDOWN.classList.add("fa-chevron-right");
    } else {
        DROPDOWN.classList.remove("fa-chevron-right");
        DROPDOWN.classList.add("fa-chevron-down");
    }
}


  // Add click event listeners for each dropdown
  document.querySelector('#businessDropdown').addEventListener("click", () => clickHandler('#businessDropdown', 'newsArticleBusiness'));
  document.querySelector('#healthDropdown').addEventListener("click", () => clickHandler('#healthDropdown', 'newsArticleHealth'));
  document.querySelector('#sportDropdown').addEventListener("click", () => clickHandler('#sportDropdown', 'newsArticleSport'));
  document.querySelector('#travelDropdown').addEventListener("click", () => clickHandler('#travelDropdown', 'newsArticleTravel'));
})();
