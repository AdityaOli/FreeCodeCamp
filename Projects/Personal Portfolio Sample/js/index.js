$(document).ready(function()
{
  $('.nav a').css("color","orange")
  $('body').scrollspy({target: ".navbar", offset:50});
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
     var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});