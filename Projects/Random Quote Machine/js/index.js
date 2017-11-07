function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        var randomRed = Math.floor((Math.random() * 255) + 1);
        var randomGreen = Math.floor((Math.random() * 255) + 1);
        var randomBlue = Math.floor((Math.random() * 255) + 1);
        
        
        $("#Data").html("<strong>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</strong>")
          .css("color","rgb("+randomRed+","+ randomGreen+","+ randomBlue+")");

        document.body.style.background = "rgb("+randomRed+","+ randomGreen+","+ randomBlue+")";
        
        $("h3").css("color","rgb("+randomRed+","+ randomGreen+","+ randomBlue+")");
        $(".newQuoteButton").css("background-color","rgb("+randomRed+","+ randomGreen+","+ randomBlue+")");
        $(".btn-twitter").css("background-color","rgb("+randomRed+","+ randomGreen+","+ randomBlue+")");
        
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}

$(function() {
  randomQuote();
});

$("button").click(function(){
  randomQuote();
});