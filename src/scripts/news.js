export default (function () {
  if (!window.location.pathname.includes("index.html")) return; // guard clause

  const DROPDOWN = document.querySelector("#dropDown");
  DROPDOWN.addEventListener("click", clickHandler);


  function clickHandler() {
    var x = document.querySelector(".newsArticle");
    var arrow = document.getElementById("dropDown");

    // Toggle visibility of the article
    x.classList.toggle("hidden");

    // Toggle arrow icon based on the visibility of .newsArticle
    if (x.classList.contains("hidden")) {
      arrow.classList.remove("fa-chevron-down");
      arrow.classList.add("fa-chevron-right");
    } else {
      arrow.classList.remove("fa-chevron-right");
      arrow.classList.add("fa-chevron-down");
    }
  }



})();
