// $Id:

(function ($) {
var views_infinite_scroll_was_initialised = false;
Drupal.behaviors.views_infinite_scroll = {
  attach:function() {
    // Make sure that autopager plugin is loaded
    if($.autopager) {
      if(!views_infinite_scroll_was_initialised) {
        views_infinite_scroll_was_initialised = true;
        // There should not be multiple Infinite Scroll Views on the same page
        if(Drupal.settings.views_infinite_scroll.length == 1) {
          var settings = Drupal.settings.views_infinite_scroll[0];
          var use_ajax = false;
          // Make sure that views ajax is disabled
          if(Drupal.settings.views && Drupal.settings.views.ajaxViews) {
            $.each(Drupal.settings.views.ajaxViews, function(key, value) {
              if((value.view_name == settings.view_name) && (value.view_display_id == settings.display)) {
                use_ajax = true;
              }
            });
          }
          if(!use_ajax) {
            var view_selector    = 'div.view-id-' + settings.view_name + '.view-display-id-' + settings.display;
            var content_selector = view_selector + ' > ' + settings.content_selector;
            var items_selector   = content_selector + ' ' + settings.items_selector;
            var pager_selector   = view_selector + ' > div.item-list ' + settings.pager_selector;
            var next_selector    = view_selector + ' ' + settings.next_selector;
            // The next element will be rearranged in the DOM.
            var next_el          = $(next_selector);
            var img_location     = view_selector + ' > div.view-content';
            var img_path         = settings.img_path;
            var img              = '<div id="views_infinite_scroll-ajax-loader"><img src="' + img_path + '" alt="loading..."/></div>';
            $(pager_selector).hide();
            var handle = $.autopager({
              appendTo: content_selector,
              content: items_selector,
              link: next_selector,
              page: 0,
              autoLoad: !settings.manual_load,
              start: function() {
                $(img_location).after(img);
              },
              load: function(current, next) {
                $('div#views_infinite_scroll-ajax-loader').remove();
                Drupal.attachBehaviors(this);
               // Use >= because of views page numbers begin at 0.
               if (settings.manual_load && next.page >= settings.pager_max) {
                 $(next_el).hide();
               }
              }
            });

            if (settings.manual_load) {
              // The pager is hidden. Pop "next" link out so it will be visible.
              $(next_el).text(settings.text);
              $(next_el).click(function() {
                // do load
                handle.autopager('load');
                return false;
              });
              $(pager_selector).before($(next_el));
              // Wrap the button to allow for easier styling in the theme
              $(next_el).wrap('<div id="views_infinite_scroll_button" />');
            }
            else {
              $(pager_selector).hide();
              // Trigger autoload if content height is less than doc height already
              var prev_content_height = $(content_selector).height();
              do {
                var last = $(items_selector).filter(':last');
                if(last.offset().top + last.height() < $(document).scrollTop() + $(window).height()) {
                  last = $(items_selector).filter(':last');
                  handle.autopager('load');
                }
                else {
                  break;
                }
              }
              while ($(content_selector).height() > prev_content_height);
            }
          }
          else {
            alert(Drupal.t('Views infinite scroll pager is not compatible with Ajax Views. Please disable "Use Ajax" option.'));
          }
        }
        else if(Drupal.settings.views_infinite_scroll.length > 1) {
          alert(Drupal.t('Views Infinite Scroll module can\'t handle more than one infinite view in the same page.'));
        }
      }
    }
    else {
      alert(Drupal.t('Autopager jquery plugin in not loaded.'));
    }
  }
};

})(jQuery);
