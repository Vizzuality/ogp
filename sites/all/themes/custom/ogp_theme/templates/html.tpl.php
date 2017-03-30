<?php

/**
 * @file
 * Default theme implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $css: An array of CSS files for the current page.
 * - $language: (object) The language the site is being displayed in.
 *   $language->language contains its textual representation.
 *   $language->dir contains the language direction. It will either be 'ltr' or 'rtl'.
 * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.
 * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.
 * - $head_title: A modified version of the page title, for use in the TITLE
 *   tag.
 * - $head_title_array: (array) An associative array containing the string parts
 *   that were used to generate the $head_title variable, already prepared to be
 *   output as TITLE tag. The key/value pairs may contain one or more of the
 *   following, depending on conditions:
 *   - title: The title of the current page, if any.
 *   - name: The name of the site.
 *   - slogan: The slogan of the site, if any, and if there is no title.
 * - $head: Markup for the HEAD section (including meta tags, keyword tags, and
 *   so on).
 * - $styles: Style tags necessary to import all CSS files for the page.
 * - $scripts: Script tags necessary to load the JavaScript files and settings
 *   for the page.
 * - $page_top: Initial markup from any modules that have altered the
 *   page. This variable should always be output first, before all other dynamic
 *   content.
 * - $page: The rendered page content.
 * - $page_bottom: Final closing markup from any modules that have altered the
 *   page. This variable should always be output last, after all other dynamic
 *   content.
 * - $classes String of classes that can be used to style contextually through
 *   CSS.
 *
 * @see template_preprocess()
 * @see template_preprocess_html()
 * @see template_process()
 *
 * @ingroup themeable
 */
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>>

<head profile="<?php print $grddl_profile; ?>">
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <?php print $scripts; ?>

  <!-- favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/sites/all/themes/custom/ogp_theme/images/apple-touch-icon.png">
  <link rel="icon" type="image/png" href="/sites/all/themes/custom/ogp_theme/images/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/sites/all/themes/custom/ogp_theme/images/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="/sites/all/themes/custom/ogp_theme/images/manifest.json">
  <link rel="mask-icon" href="/sites/all/themes/custom/ogp_theme/images/safari-pinned-tab.svg" color="#000000">
  <meta name="theme-color" content="#000000">

  <!-- scripts -->
  <script type="text/javascript" src="//cdn.transifex.com/live.js"></script>
  <script type="text/javascript">
    window.liveSettings = {
      api_key:"5a2bcd52efad4b169c9543330d3187a4",
      staging: true,
      picker: "#transifexSelector",
      dynamic: true
    }
    //This is called each time the languages list is retrieved
    //from Transifex Live. This may happen more than once so we should
    //be able to handle this case.
    Transifex.live.onFetchLanguages(function(languages) {

        //set the language selector to the source language (default)
        $('#language-current').html(
            Transifex.live.getSourceLanguage().name
        );

        //empty our language list
        $('#ltransifexSelector').empty();

        //add translation languages to the list
        for (var i = 0; i < languages.length; ++i) {
            $('#ltransifexSelector').append(
                '<li class="text -menu" data-code="' + languages[i].code +
                '" data-name="' + languages[i].name +
                '">' + languages[i].name + '</li>'
            );
        }

        //handle user selecting a language
        $('#ltransifexSelector').find('li').click(function(e) {
            e && e.preventDefault();
            var code = $(this).closest('[data-code]').data('code');
            var name = $(this).closest('[data-code]').data('name');

            //tell transifex live to translate the page
            //based on user selection
            Transifex.live.translateTo(code, true);
        });

        //called when Transifex Live successfully translates the
        //page to a language. In that case lets update the
        //selected language of the widget
        Transifex.live.onTranslatePage(function(language_code) {
            $('#language-current').html(
                Transifex.live.getLanguageName(language_code)
            );
        });
    });
  </script>
</head>
<body class="<?php print $classes; ?> txlive" <?php print $attributes;?>>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
