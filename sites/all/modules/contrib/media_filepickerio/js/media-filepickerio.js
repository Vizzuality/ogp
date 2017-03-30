
/**
 *  @file
 *  This file handles the JS for Media Module functions.
 */

(function ($) {

/**
 * Loads media browsers and callbacks, specifically for media as a field.
 */
Drupal.behaviors.mediaFilepickerio = {
  attach: function (context, settings) {

    filepicker.setKey(settings.media_filepickerio.key);

    filepicker.pick(settings.media_filepickerio.options, function(FPFile){
      $('#filepickerio-files').val(JSON.stringify(FPFile));
      $('#media-filepickerio-form').addClass('filepicker-loading').trigger('submit');
    });

  }
};

})(jQuery);
