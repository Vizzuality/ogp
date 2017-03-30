(function ($) {

  function scrollButtons(wrappers) {
    wrappers.each(function() {
      if ( $(this).width() < $(this).children('table').width() ) {
        $(this).parent('.responsive-table-wrapper').addClass('scroll-buttons');
      } else {
        $(this).parent('.responsive-table-wrapper').removeClass('scroll-buttons');
      }
    });
  }

  Drupal.behaviors.responsiveTables = {
    attach: function (context, settings) {

      $('#content .node-content table').once(function() {
        if ( !$(this).parent('div').hasClass('responsive-table-wrapper') && !$(this).hasClass('sticky-header') ) {
          $(this).wrap( '<div class="responsive-table-wrapper"><div class="responsive-table-wrapper-inner"></div></div>' );
        }
      });

      $('.responsive-table-wrapper').once(function() {
        $(this).append( '<div class="scroll-table-button-description">Click arrows to scroll the table.</div><div class="scroll-table-button left"></div><div class="scroll-table-button right"></div>' );
      });

      $('.scroll-table-button.left').once(function() {
        $(this).click(function() {
          var currentScrollPosition = $(this).siblings('.responsive-table-wrapper-inner').scrollLeft();
          $(this).siblings('.responsive-table-wrapper-inner')
          .stop(true, false)
          .animate({ scrollLeft: currentScrollPosition - 100 }, '100');
        });
      });

      $('.scroll-table-button.right').once(function() {
        $(this).click(function() {
          var currentScrollPosition = $(this).siblings('.responsive-table-wrapper-inner').scrollLeft();
          $(this).siblings('.responsive-table-wrapper-inner')
          .stop(true, false)
          .animate({ scrollLeft: currentScrollPosition + 100 }, '100');
        });
      });

      var wrappers = $('.responsive-table-wrapper-inner');
      scrollButtons(wrappers);

      $(window).resize(function() {
        scrollButtons(wrappers);
      });

    }
  };

})(jQuery);
