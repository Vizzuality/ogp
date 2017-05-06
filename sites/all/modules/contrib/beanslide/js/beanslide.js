(function ($) {
  Drupal.behaviors.beanslide = {
    attach: function(context, settings) {
      $.each(settings.beanslide.slideshows, function (key, slideshow) {
        if ($('#' + slideshow.id + ' ul.slides > li', context).length > 0) {
          var container = $('#' + slideshow.id + ' ul.slides', context);
          var slides = $('> li', container);
          switch (slideshow.slideshow_plugin) {
            case 'beanslide:jquery.cycle':
            // Support beans created in 1.x.
            case 'jquery.cycle':
              if (slideshow.navigation.position !== '<none>') {
                // @TODO: implement navivation position.
              }

              if (slideshow.pager.type !== '<none>') {
                standardPager(slideshow, container, slides);
              }
              container.cycle({
                timeout: slideshow.timeout,
                pager: '#' + slideshow.id + '-nav',
                pagerAnchorBuilder: function(index, element) {
                  return '<li class="beanslide-pager-item-' + index + '"><a href="#">' + (index + 1) + '</a></li>';
                }
              });
              break;
            case 'beanslide:jquery.vegas':
            // Support beans created in 1.x.
            case 'jquery.vegas':
              if (slideshow.pager.type !== '<none>') {
                standardPager(slideshow, container, slides);
              }
              if (slideshow.navigation.position !== '<none>') {
                // @TODO: implement navivation position.
                vegasNavigation(slideshow, container);
              }
              slides.hide().css({ position: 'absolute' });
              // Tag along with Vegas's image transitions and fade in/fade out
              // the non-image slide content in sync (as much as possible) with
              // the background slideshow.
              var previous = -1;
              $('body').bind('vegasload.beanslide', function (event, image, index) {
                if (previous != -1) {
                  $(slides[previous]).fadeOut(slideshow.transition_duration);
                }
                previous = index;
                $(slides[index]).fadeIn(slideshow.transition_duration);
                $('.beanslide-pager-current', container.parent()).html((index + 1).toString());
              });
              // Transform the array of image URLs into an array of objects as
              // Vegas expects.
              var backgrounds = [];
              $.each(slideshow.images, function (key, image) {
                backgrounds[key] = {
                  src: image,
                  fade: slideshow.transition_duration
                };
              });
              // Start the slideshow.
              $.vegas('slideshow', {
                delay: slideshow.timeout,
                backgrounds: backgrounds
              });
              if (slideshow.vegas_overlay != '<none>') {
                $.vegas('overlay', {
                  src: slideshow.vegas_overlay,
                  opacity: 0.5
                });
              }
              break;
            case 'beanslide:responsiveslides':
            // Support beans created in 1.x.
            case 'responsiveslides':
              if (slideshow.navigation.position !== '<none>') {
                // @TODO: implement navivation position.
              }
              $("#" + slideshow.id + " ul.slides").each(function(){
                // Add the rslides class to use the default responsiveslides.css.
                $(this).addClass('rslides');
              });
              var enablePager = (slideshow.pager.type === '<none>') ? false : true;
              var enableNavigation = (slideshow.navigation.position === '<none>') ? false : true;

              $("#" + slideshow.id + " ul.slides").responsiveSlides({
                auto: true,                             // Boolean: Animate automatically, true or false
                speed: slideshow.transition_duration,   // Integer: Speed of the transition, in milliseconds
                timeout: slideshow.timeout,             // Integer: Time between slide transitions, in milliseconds
                pager: enablePager,                     // Boolean: Show pager, true or false
                nav: enableNavigation,                  // Boolean: Show navigation, true or false
                random: false,                          // Boolean: Randomize the order of the slides, true or false
                pause: false,                           // Boolean: Pause on hover, true or false
                pauseControls: false,                   // Boolean: Pause when hovering controls, true or false
                prevText: slideshow.navigation.previous,// String: Text for the "previous" button
                nextText: slideshow.navigation.next,    // String: Text for the "next" button
                maxwidth: slideshow.responsive_maxwidth,// Integer: Max-width of the slideshow, in pixels
                controls: "",                           // Selector: Where controls should be appended to, default is after the 'ul'
                namespace: "rslides",                   // String: change the default namespace used
                before: function(){},                   // Function: Before callback
                after: function(){}                     // Function: After callback
              });
              break;
            case 'beanslide:flexslider':
            // Support beans created in 1.x.
            case 'flexslider':
              container.parent().flexslider(slideshow.plugin_settings);
              break;
          }
        }
      });
    }
  }
  var standardPager = function(slideshow, container, slides) {
    switch (slideshow.pager.type) {
      case 'numbers':
        // slideshow.pager.position is "before" or "after".
        container[slideshow.pager.position]('<ul class="beanslide-pager" id="' + slideshow.id + '-nav">');
        break;
      case 'thumbnails':
        break;
      case 'position':
        // slideshow.pager.position is "before" or "after".
        container[slideshow.pager.position]('<div class="beanslide-pager beanslide-pager-position"><span class="beanslide-pager-current"></span>/<span class="beanslide-pager-count">' + slides.length + '</span></div>')
        break;
    }
  }
  var vegasNavigation = function(slideshow, container) {
    var previous = $('<a href="#" class="beanslide-previous">' + slideshow.navigation.previous + '</a>');
    var next = $('<a href="#" class="beanslide-next">' + slideshow.navigation.next + '</a>');
    var controls = $('<div class="beanslide-controls"></div>');
    previous.click(function (e) {
      e.preventDefault();
      $.vegas('previous');
    }).appendTo(controls);
    next.click(function (e) {
      $.vegas('next');
      e.preventDefault();
    }).appendTo(controls);
    // position is "before" or "after".
    container[slideshow.navigation.position](controls);
  }
})(jQuery);
