export default (function () {
    if (!window.location.pathname.includes("index.html")) return; // guard clause

    const apiKey = 'R6JswxR2AtoZ4AIEMyGPr0Z4oGATvNsL';
    async function fetchNYTHealthArticles() {
        try {
            const response = await fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=' + apiKey);
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

            document.querySelector('.newsArticleTextSport').innerHTML = articleContent;
        } catch (error) {
            console.error('Error fetching articles:', error);
            document.querySelector('.newsArticleTextSport').innerText = 'Failed to fetch articles.';
        }
        
    }

    // Call the function to fetch articles
    fetchNYTHealthArticles();

    const DROPDOWN = document.querySelector("#sportDropdown");
    DROPDOWN.addEventListener("click", clickHandler);
  
  
    function clickHandler() {
      var ARTICLE = document.querySelector(".newsArticleSport");
  
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
})();

