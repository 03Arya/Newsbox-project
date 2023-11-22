if (!window.location.pathname.includes("index.html")) return; // guard clause

function hideCategory() {
    var switchHealth = localStorage.getItem("switchHealth");

    if (switchHealth === "false") {
        document.querySelector("#healthArticle").style.display = "none";
    }

    var switchHealth = localStorage.getItem("switchTravel");

    if (switchHealth === "false") {
        document.querySelector("#travelArticle").style.display = "none";
    }

    var switchSport = localStorage.getItem("switchSport");

    if (switchSport === "false") {
        document.querySelector("#sportArticle").style.display = "none";
    }

    var switchEurope = localStorage.getItem("switchEurope");

    if (switchEurope === "false") {
        document.querySelector("#europeArticle").style.display = "none";
    }

    var switchBusiness = localStorage.getItem("switchBusiness");

    if (switchBusiness === "false") {
        document.querySelector("#businessArticle").style.display = "none";
    }

}
document.addEventListener("DOMContentLoaded", hideCategory);

