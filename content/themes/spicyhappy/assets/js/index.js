/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        function casperFullImg() {
            $("img").each( function() {
                var contentWidth = $(".post-content").outerWidth(); // Width of the content
                var imageWidth = $(this)[0].naturalWidth; // Original image resolution

                if (imageWidth >= contentWidth) {
                    $(this).addClass('full-img');
                } else {
                    $(this).removeClass('full-img');
                }
            });
        };

        casperFullImg();
        $(window).smartresize(casperFullImg);

    });

}(jQuery));

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

// Based off a workaround https://ghost.org/forum/plugins/239-plugin-idea-add-cover-image-to-a-post/?page=2
$(document).ready(function(){
  var imgBackground = $('img[alt="img-background"]');

  if (imgBackground.length > 0) {
    $.backstretch(imgBackground.attr('src'));
    $('.site-nav').css({"color":"white"});
  }

  else {
    $.backstretch('/assets/images/XinXin-White-Mountains01.jpg');
  }

  var projects = [
    '/assets/images/XinXin-BackgroundBlue.jpg',
    '/assets/images/XinXin-Panjiva.jpg',
    '/assets/images/XinXin-BlackHat.jpg',
    '/assets/images/XinXin-mCent.jpg',
    '/assets/images/XinXin-Squeezicks.jpg',
    '/assets/images/XinXin-Medlert.jpg',
    '/assets/images/XinXin-Icarus.jpg',
    '/assets/images/XinXin-RetailProject.jpg',
    '/assets/images/XinXin-RubiksCube03.jpg',
    '/assets/images/XinXin-Sketch06.jpg'
  ];

  $('#projects tr').hover(function() {
    number = $(this).attr('class');
    $('#projects .backstretch-canvas').backstretch([projects[number]], {speed: 600});

    $('#projects .backstretch').css({"opacity":".3", "filter":"alpha(opacity=30)"});
  },
    function() {
      $('#projects').css({"background-color":"#15bded"});
      $('#projects .backstretch-canvas').backstretch([projects[0]], {speed: 100});
    }
  );
});