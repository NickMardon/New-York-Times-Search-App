var apiKey = "&api-key=BTV4AEVqb6YHHAIKOXbs8F1mCjwk3xIA";
var searchUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var searchTerm = "Ben Carson";

var exampleURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&facet_fields=source&facet=true&begin_date=20120101&end_date=20121231&api-key=BTV4AEVqb6YHHAIKOXbs8F1mCjwk3xIA"

queryUrl = searchUrl + searchTerm + apiKey;
console.log(queryUrl);
