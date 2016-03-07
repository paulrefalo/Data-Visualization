$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=chess+magnus+carlsen&sort=oldest&begin_date=20120101&end_date=20160101&api-key=dcbf57a91da4a4ec813b65b3a4bcf648:13:29096433", function(result){

            $("p").append("Success ");
            
            console.log(result)
        });
    });
});