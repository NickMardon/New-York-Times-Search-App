// grab IDs from html
var searchTerm = $("searchTerm");
var numOfRecs = $("numOfRecs");
var startYear = $("startYear");
var endYear = $("endYear");
var searchBtn = $("searchBtn");
var topArticles = $("topArticles");

// array to push found articles into
var articlesArray = []

// when search button clicked, input values taken and used to search api
searchBtn.on("click", function(event) {
    event.preventDefault();
    // take value from searchInput
    searchTerm = searchTerm.val().trim()
    // take number of articles

})










// When 
function displayArticles() {
    // clear articles prior to adding new articles
    topArticles.empty();
    // loop through array of found articles
    for (let i = 0; i < articlesArray.length; i++) {
        var article = articlesArray[i];
        
    }

}

