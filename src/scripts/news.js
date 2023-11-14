export default (function () {
  if (!window.location.pathname.includes("index.html")) return; // guard clause

  const DROPDOWN = document.querySelector("#dropDown");
  DROPDOWN.addEventListener("click", clickHandler);


  function clickHandler(id) {
    var ARTICLE = document.querySelector(".newsArticle");

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
