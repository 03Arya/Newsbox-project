export default (function () {
    if (!window.location.pathname.includes("index.html")) return // guard clause

    const DROPDOWN = document.querySelector("#dropDown")

    DROPDOWN.addEventListener("click", clickHandler)

    function clickHandler() {
        var x = document.querySelector(".newsArticle");
        if (x.style.display === "none") {
          x.style.display = "grid";
        } else {
          x.style.display = "none";
        }
    }
})()