$(function() {
    var header = $(".navbar-style-one");
    var spotifyFrame = $(".spotify-container");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.removeClass('navbar-style-one').addClass("navbar-style-two");
        } else {
            header.removeClass("navbar-style-two").addClass('navbar-style-one');
        }

        if (scroll >= 800) {
            spotifyFrame.removeClass('spotify-not-fixed').addClass("spotify-fixed");
        } else {
            spotifyFrame.removeClass('spotify-fixed').addClass("spotify-not-fixed");
        }
    });
});

$(document).ready(function(){
    $(".hide").click(function(){
      $(".spotify-frame").hide();
      $(".hide").hide();
      $(".show").show();
      
    });
    $(".show").click(function(){
      $(".spotify-frame").show();
      $(".show").hide();
      $(".hide").show();
    });
});