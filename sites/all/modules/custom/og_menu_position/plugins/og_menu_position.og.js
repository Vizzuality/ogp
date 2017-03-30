(function ($) {

/**
 * Provide the summary information for the organic group plugin's vertical tab.
 */
Drupal.behaviors.menuPositionOgSettingsSummary = {
  attach: function (context) {
    $('fieldset#edit-og', context).drupalSetSummary(function (context) {
      if ($('select[name="group"]', context).val() != 0) {
        return Drupal.t('Group: %group', {'%group' : $('select[name="group"] option:selected', context).text()});
      }
      else {
        return Drupal.t('Any group');
      }
    });
  }
};

})(jQuery);
