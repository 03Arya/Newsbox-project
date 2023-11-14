export default (function () {
    if (!window.location.pathname.includes("index.html")) return; // guard clause

    const apiKey = 'R6JswxR2AtoZ4AIEMyGPr0Z4oGATvNsL';
    async function fetchNYTHealthArticles() {
        try {
            const response = await fetch('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=' + apiKey);
            const data = await response.json();

            const articles = data.results.slice(1, 5);
            const articleContent = articles.map(article => `
            <a href="${article.url}" target="_blank">
                    <div class="articleContainer">
                        <h3 class="articleHeader">${article.title}</h3>
                        <p class="articleText">${article.abstract}</p>
                    </div>
                    </a>
                `).join('');

            document.querySelector('.newsArticleText').innerHTML = articleContent;
        } catch (error) {
            console.error('Error fetching articles:', error);
            document.querySelector('.newsArticleText').innerText = 'Failed to fetch articles.';
        }
    }

    // Call the function to fetch articles
    fetchNYTHealthArticles();
})();
