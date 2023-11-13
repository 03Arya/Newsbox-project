export default (function () {
  if (!window.location.pathname.includes("index.html")) return; // guard clause

        
        // Your API key
        const apiKey = 'R6JswxR2AtoZ4AIEMyGPr0Z4oGATvNsL';

        // Function to fetch articles
        async function fetchNYTHealthArticles() {
            try {
                const response = await fetch('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=' + apiKey);
                const data = await response.json();
                
                // Update the content in HTML
                const articles = data.results.slice(0, 5); // Fetching the first 5 articles
                const articleContent = articles.map(article => `
                    <div>
                        <h3>${article.title}</h3>
                        <p>${article.abstract}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    </div>
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