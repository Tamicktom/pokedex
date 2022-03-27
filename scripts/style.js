const main = document.querySelector("#main");
const search_div = document.querySelector("#search_div");

function showSearchResult() {
    if (main.classList.contains('invisible')) {
        main.classList.remove('invisible');
        main.style.width = '100%';
        search_div.style.width = '0%';
        search_div.style.display = 'none';
    }
    search_div.style.display = "none";
    //document.querySelector("#main").classList = "main";
}
showSearchResult();
