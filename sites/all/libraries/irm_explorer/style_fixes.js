Drupal.behaviors.irm_explorer = {
    attach: function (context, settings) {

        $("body").bind("DOMSubtreeModified", function () {
            SetContentHeight();
        });

        function SetContentHeight() {
            contentWrapperHeight = $('#content-wrapper').outerHeight();
            irmHeight = $('#table_view__countryNamesEtAl_area__belowHeadersArea__id_name').outerHeight() + 700;
            contentWrapperHeight = Math.max(contentWrapperHeight, irmHeight);
            $('#content-wrapper').css('min-height', contentWrapperHeight);
        }
    }
};