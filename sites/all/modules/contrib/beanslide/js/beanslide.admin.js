(function ($) {
  Drupal.behaviors.beanslideAdmin = {
    attach: function(context, settings) {
      if (!$(context).hasClass('draggable')) {
        // Hide all current slide forms.
        $('table#field-beanslide-slides-values tr.draggable:not(:last, .beanslide-processed)', context).each(function() {
          var $form = $(this).addClass('beanslide-processed').find("> td:nth-child(2)")
          Drupal.beanslideAdmin.setupForm($form);
          $form.before(Drupal.beanslideAdmin.createOverview($form));
        });
        // Hide new slide form.
        $('table#field-beanslide-slides-values tr.draggable:last', context).each(function() {
          if (!$(this).hasClass('beanslide-processed')) {
            var $form = $(this).addClass('beanslide-processed').find("> td:nth-child(2)")
            Drupal.beanslideAdmin.setupForm($form);
            $form.before(Drupal.beanslideAdmin.createAdd($form));
          }
        });
      }
    }
  }

  Drupal.beanslideAdmin = Drupal.beanslideAdmin || {};

  // Initially hide individual slide forms and add "Collapse" button when form is
  // displayed.
  Drupal.beanslideAdmin.setupForm = function($form) {
    $form.addClass("slide-form").hide();
    var $button = $('<div class="form-actions"><input class="form-submit submit" type="button" value="Collapse" /></div>').click(function() {
      $form.hide();
      Drupal.beanslideAdmin.triggerChange();
      $form.before(Drupal.beanslideAdmin.createOverview($form));
      return false;
    });
    $form.append($button);
  }

  // Create overview page for the add new slide form.
  Drupal.beanslideAdmin.createAdd = function($form) {
    var html = $(Drupal.theme('beanslideNewOverview'));

    html.find("a.add").click(function() {
      $form.show();
      $(this).parents('td.overview').remove();
      return false;
    });

    return html;
  };

  // Create overview page for existing slides.
  Drupal.beanslideAdmin.createOverview = function($form) {
    var html = $(Drupal.theme('beanslideOverview', $form));

    html.find(".edit").click(function() {
      $form.show();
      $(this).parents('td.overview').remove();
      return false;
    });

    return html;
  };

  // Borrow the changed warning system from tabledrag to indicate to user that
  // form still needs to be saved.
  Drupal.beanslideAdmin.triggerChange = function() {
    if (Drupal.tableDrag['field-beanslide-slides-values'].changed == false) {
      $(Drupal.theme('tableDragChangedWarning')).insertBefore(Drupal.tableDrag['field-beanslide-slides-values'].table).hide().fadeIn('slow');
      Drupal.tableDrag['field-beanslide-slides-values'].changed = true;
    }
  }

  Drupal.theme.prototype.beanslideNewOverview = function() {
    return '<td class="overview"><ul class="links"><li><a class="add" href="#">New Slide</a></li></ul></td>';
  }

  Drupal.theme.prototype.beanslideOverview = function($form) {
    var html = '<td class="overview"><div class="overview-column">';
    if ($("div.media-thumbnail", $form).html()) {
      html += $("div.media-thumbnail", $form).html();
    }
    html += '</div><div class="overview-column headline">';
    if ($(".field-name-field-slide-headline input", $form).val()) {
      html += $(".field-name-field-slide-headline input", $form).val();
    }
    else {
      // Allow the div to have width, so that the Expand button will line up
      // with slides that *do* have a headline.
      html += '&nbsp;';
    }
    html += '</div>';
    html += '<div class="overview-column form-actions form-wrapper"><input type="button" class="form-submit edit" value="Expand" /></div>';
    html += '</td>';
    return html;
  }
})(jQuery);
