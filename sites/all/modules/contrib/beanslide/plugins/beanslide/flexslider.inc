<?php

/**
 * @file
 * BeanSlide plugin for Flexslider.
 */
class BeanSlideFlexSliderPlugin implements BeanSlidePluginInterface {

  /**
   * Implements BeanSlidePluginInterface::attachments().
   */
  public function attachments() {

  }

  /**
   * Implements BeanSlidePluginInterface::form().
   */
  public function form($settings) {
    $form = array();
    $parents = array('#parents' => array());

    // General Slideshow and Animiation Settings
    $form['animation_slideshow'] = array(
      '#type' => 'fieldset',
      '#title' => t('General Slideshow and Animation Settings'),
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
    );

    $form['animation_slideshow']['animation'] = array(
      '#type' => 'select',
      '#title' => t('Animation'),
      '#description' => t('Select your animation type'),
      '#options' => array(
        'fade' => t('Fade'),
        'slide' => t('Slide'),
      ),
      '#default_value' => $settings['animation'],
        // @todo add states to enable/disable the direction
    );

    $form['animation_slideshow']['animationSpeed'] = array(
      '#type' => 'textfield',
      '#title' => t('Animation Speed'),
      '#description' => t('Set the speed of animations, in milliseconds'),
      '#element_validate' => array('_beanslide_validate_positive_integer'),
      '#default_value' => $settings['animationSpeed'],
      '#size' => 30,
    );

    $form['animation_slideshow']['direction'] = array(
      '#type' => 'select',
      '#title' => t('Slide Direction'),
      '#description' => t('Select the sliding direction, "horizontal" or "vertical"'),
      '#options' => array(
        'horizontal' => t('Horizontal'),
        'vertical' => t('Vertical'),
      ),
      '#default_value' => $settings['direction'],
    );

    $form['animation_slideshow']['slideshow'] = array(
      '#type' => 'checkbox',
      '#title' => t('Slideshow'),
      '#description' => t('Animate the slides automatically'),
      '#default_value' => $settings['slideshow'],
    );

    $form['animation_slideshow']['easing'] = array(
      '#type' => 'select',
      '#title' => t('Easing'),
      '#multiple' => FALSE,
      '#description' => t('The description appears usually below the item.'),
      '#options' => array(
        'linear' => t('Linear'),
        'swing' => t('Swing'),
      ), // @todo load list of options based on jquery easing plugin
      '#default_value' => $settings['easing'],
    );

    $form['animation_slideshow']['smoothHeight'] = array(
      '#type' => 'checkbox',
      '#title' => t('Smooth Height'),
      '#description' => t('Animate the height of the slider smoothly for slides of varying height.'),
      '#default_value' => $settings['smoothHeight'],
    );

    $form['animation_slideshow']['reverse'] = array(
      '#type' => 'checkbox',
      '#title' => t('Reverse'),
      '#description' => t('Animate the slides in reverse'),
      '#default_value' => $settings['reverse'],
    );

    $form['animation_slideshow']['slideshowSpeed'] = array(
      '#type' => 'textfield',
      '#title' => t('Slideshow speed'),
      '#description' => t('Set the speed of the slideshow cycling, in milliseconds'),
      '#element_validate' => array('_beanslide_validate_positive_integer'),
      '#default_value' => $settings['slideshowSpeed'],
      '#size' => 30,
    );

    $form['animation_slideshow']['animationLoop'] = array(
      '#type' => 'checkbox',
      '#title' => t('Loop Slideshow'),
      '#description' => t('Loop the slideshow once it reaches the last slide.'),
      '#default_value' => $settings['animationLoop'],
    );

    $form['animation_slideshow']['randomize'] = array(
      '#type' => 'checkbox',
      '#title' => t('Randomize Slide Order'),
      '#description' => t('Randomize the order the slides play back.'),
      '#default_value' => $settings['randomize'],
    );
    $form['animation_slideshow']['startAt'] = array(
      '#type' => 'textfield',
      '#title' => t('Starting Slide'),
      '#description' => t('The slide that the slider should start on. Ex: For the first slide enter "0", for the second enter "1", etc. If you enter a value which is greater than the number of slides, the slider will default to the first slide.'),
      '#element_validate' => array('_beanslide_validate_positive_integer'),
      '#default_value' => $settings['startAt'],
      '#size' => 30,
        // @todo add states to disable if randomize is set
    );

    $form['animation_slideshow']['itemWidth'] = array(
      '#type' => 'textfield',
      '#title' => t('Item Width'),
      '#description' => t('Box-model width of individual carousel items, including horizontal borders and padding.'),
      '#size' => 40,
      '#maxlength' => 255,
      '#default_value' => $settings['itemWidth'],
    );
    $form['animation_slideshow']['itemMargin'] = array(
      '#type' => 'textfield',
      '#title' => t('Item Margin'),
      '#description' => t('Margin between carousel items.'),
      '#size' => 40,
      '#maxlength' => 255,
      '#default_value' => $settings['itemMargin'],
    );
    $form['animation_slideshow']['minItems'] = array(
      '#type' => 'textfield',
      '#title' => t('Minimum Items'),
      '#description' => t('Minimum number of carousel items that should be visible.'),
      '#size' => 40,
      '#maxlength' => 255,
      '#default_value' => $settings['minItems'],
    );
    $form['animation_slideshow']['maxItems'] = array(
      '#type' => 'textfield',
      '#title' => t('Max Items'),
      '#description' => t('Maximum number of carousel items that should be visible.'),
      '#size' => 40,
      '#maxlength' => 255,
      '#default_value' => $settings['maxItems'],
    );
    $form['animation_slideshow']['move'] = array(
      '#type' => 'textfield',
      '#title' => t('Move'),
      '#description' => t('Number of carousel items that should move on animation. If 0, slider will move all visible items.'),
      '#size' => 40,
      '#maxlength' => 255,
      '#default_value' => $settings['move'],
    );

    // Navigation and Control Settings
    $form['nav_controls'] = array(
      '#type' => 'fieldset',
      '#title' => t('Navigation and Control Settings'),
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
    );
    $form['nav_controls']['directionNav'] = array(
      '#type' => 'checkbox',
      '#title' => t('Next/Previous Controls'),
      '#description' => t('Add controls for previous/next navigation'),
      '#default_value' => $settings['directionNav'],
    );
    $form['nav_controls']['controlNav'] = array(
      '#type' => 'select',
      '#title' => t('Paging Controls'),
      '#description' => t('Add controls to jump to individual slides. (Note: set to "On" if using Manual Controls)'),
      '#default_value' => $settings['controlNav'],
      '#options' => array(
        0 => t('Off'),
        1 => t('On'),
        'thumbnails' => t('Thumbnails'),
      )
    );
    $form['nav_controls']['keyboard'] = array(
      '#type' => 'checkbox',
      '#title' => t('Keyboard Navigation'),
      '#description' => t('Allow slider navigating via keyboard left/right keys'),
      '#default_value' => $settings['keyboard'],
    );
    $form['nav_controls']['multipleKeyboard'] = array(
      '#type' => 'checkbox',
      '#title' => t('Multiple Keyboard'),
      '#description' => t('Allow keyboard navigation to affect multiple sliders.'),
      '#default_value' => $settings['multipleKeyboard'],
    );
    $form['nav_controls']['mousewheel'] = array(
      '#type' => 'checkbox',
      '#title' => t('Mousewheel Navigation'),
      '#description' => t('Allow slider navigating via mousewheel'),
      '#default_value' => $settings['mousewheel'],
        // @todo add check for jquery mousewheel library
    );
    $form['nav_controls']['touch'] = array(
      '#type' => 'checkbox',
      '#title' => t('Touch'),
      '#description' => t('Allow touch swipe navigation.'),
      '#default_value' => $settings['touch'],
    );
    $form['nav_controls']['prevText'] = array(
      '#type' => 'textfield',
      '#title' => t('Previous Link Text'),
      '#description' => t('Set the text for the "previous" control item. <em>Text translation can be controlled using the <a href="http://drupal.org/project/stringoverrides">String Overrides module</a>.</em>'),
      '#default_value' => isset($settings['prevText']) ? $settings['prevText'] : t('Previous'),
    );
    $form['nav_controls']['nextText'] = array(
      '#type' => 'textfield',
      '#title' => t('Next Link Text'),
      '#description' => t('Set the text for the "next" control item. <em>Text translation can be controlled using the <a href="http://drupal.org/project/stringoverrides">String Overrides module</a>.</em>'),
      '#default_value' => isset($settings['nextText']) ? $settings['nextText'] : t('Next'),
    );

    // Advanced Options
    $form['advanced'] = array(
      '#type' => 'fieldset',
      '#title' => t('Advanced Options'),
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
    );
    $form['advanced']['namespace'] = array(
      '#type' => 'textfield',
      '#title' => t('Namespace'),
      '#description' => t('Prefix string attached to the classes of all elements generated by the plugin.'),
      '#size' => 40,
      '#maxlength' => 255,
      '#default_value' => $settings['namespace'],
    );
    $form['advanced']['selector'] = array(
      '#type' => 'textfield',
      '#title' => t('Selector'),
      '#description' => t('Must match a simple pattern. "{container} > {slide}".'),
      '#size' => 40,
      '#maxlength' => 255,
      '#default_value' => $settings['selector'],
    );
    $form['advanced']['sync'] = array(
      '#type' => 'textfield',
      '#title' => t('Sync'),
      '#description' => t('Mirror the actions performed on this slider with another slider.'),
      '#size' => 40,
      '#maxlength' => 255,
      '#default_value' => $settings['sync'],
    );
    $form['advanced']['asNavFor'] = array(
      '#type' => 'textfield',
      '#title' => t('Use as navigation'),
      '#description' => t('Turn the slider into a thumbnail navigation for another slider.'),
      '#size' => 40,
      '#maxlength' => 255,
      '#default_value' => $settings['asNavFor'],
    );

    $form['advanced']['initDelay'] = array(
      '#type' => 'textfield',
      '#title' => t('Initialize Delay'),
      '#description' => t('Set an initialization delay, in milliseconds.'),
      '#size' => 20,
      '#maxlength' => 255,
      '#default_value' => $settings['initDelay'],
      '#element_validate' => array('_beanslide_validate_positive_integer'),
    );
    $form['advanced']['useCSS'] = array(
      '#type' => 'checkbox',
      '#title' => t('Use CSS'),
      '#description' => t('Slider will use CSS3 transitions, if available.'),
      '#default_value' => $settings['useCSS'],
    );
    $form['advanced']['video'] = array(
      '#type' => 'checkbox',
      '#title' => t('Video'),
      '#description' => t('Will prevent use of CSS3 3D Transforms, avoiding graphical glitches.'),
      '#default_value' => $settings['video'],
    );
    $form['advanced']['pausePlay'] = array(
      '#type' => 'checkbox',
      '#title' => t('Add Pause/Play Indicator'),
      '#description' => t('Have FlexSlider add an element indicating the current state of the slideshow (i.e. "pause" or "play").'),
      '#default_value' => $settings['pausePlay'],
        // @todo add states value for pause/play text
    );
    $form['advanced']['pauseText'] = array(
      '#type' => 'textfield',
      '#title' => t('Pause State Text'),
      '#description' => t('Set the text for the "pause" state indicator. <em>Text translation can be controlled using the <a href="http://drupal.org/project/stringoverrides">String Overrides module</a>.</em>'),
      '#default_value' => $settings['pauseText'],
    );
    $form['advanced']['playText'] = array(
      '#type' => 'textfield',
      '#title' => t('Play State Text'),
      '#description' => t('Set the text for the "play" state indicator. <em>Text translation can be controlled using the <a href="http://drupal.org/project/stringoverrides">String Overrides module</a>.</em>'),
      '#default_value' => $settings['playText'],
    );
    $form['advanced']['pauseOnAction'] = array(
      '#type' => 'checkbox',
      '#title' => t('Pause On Controls'),
      '#description' => t('Pause the slideshow when interacting with control elements.'),
      '#default_value' => $settings['pauseOnAction'],
    );
    $form['advanced']['pauseOnHover'] = array(
      '#type' => 'checkbox',
      '#title' => t('Pause On Hover'),
      '#description' => t('Pause the slideshow when hovering over slider, then resume when no longer hovering.'),
      '#default_value' => $settings['pauseOnHover'],
    );
    $form['advanced']['controlsContainer'] = array(
      '#type' => 'textfield',
      '#title' => t('Controls container (Advanced)'),
      '#description' => t('Declare which container the navigation elements should be appended too. Default container is the flexSlider element. Example use would be ".flexslider-container", "#container", etc. If the given element is not found, the default action will be taken.'),
      '#default_value' => $settings['controlsContainer'],
    );
    $form['advanced']['manualControls'] = array(
      '#type' => 'textfield',
      '#title' => t('Manual controls (Advanced)'),
      '#description' => t('Declare custom control navigation. Example would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.'),
      '#default_value' => $settings['manualControls'],
    );

    foreach (element_children($form) as $fieldset) {
      foreach (element_children($form[$fieldset]) as $element) {
        $form[$fieldset][$element] += array('#parents' => array('plugin_settings', $element));
      }
    }
    return $form;
  }

  /**
   * Implements BeanSlidePluginInterface::values().
   */
  public function values() {
    $settings = array(
      // v2.x options
      'namespace' => 'flex-',
      'selector' => '.slides > li',
      'easing' => 'swing',
      'direction' => 'horizontal',
      'reverse' => FALSE, // @todo verify data value
      'smoothHeight' => FALSE, // @todo verify data value
      'startAt' => 0,
      'animationSpeed' => 600,
      'initDelay' => 0,
      'useCSS' => TRUE,
      'touch' => TRUE,
      'video' => FALSE,
      'keyboard' => TRUE,
      'multipleKeyboard' => FALSE,
      'mousewheel' => FALSE, // requires https://github.com/brandonaaron/jquery-mousewheel @todo add to make file
      'controlsContainer' => '',
      'sync' => '',
      'asNavFor' => '',
      'itemWidth' => 0,
      'itemMargin' => 0,
      'minItems' => 0,
      'maxItems' => 0,
      'move' => 0,
      //'start' => '',
      //'before' => '',
      //'after' => '',
      //'end' => '',
      //'added' => '',
      //'removed' => '',
      // @todo verify the 1.x options are still valid
      // v1.x options
      'animation' => 'slide',
      //'animationDuration' => 6000, -- replaced by 'animationSpeed'
      //'slidedirection' => 'horizontal', -- replaced by "direction"
      'slideshow' => TRUE,
      'slideshowSpeed' => 7000,
      'directionNav' => TRUE,
      'controlNav' => TRUE,
      //'keyboardnav' => TRUE, --  replaced by 'keyboard'
      //'mousewheel' => FALSE,
      'prevText' => t('Previous'),
      'nextText' => t('Next'),
      'pausePlay' => FALSE,
      'pauseText' => t('Pause'),
      'playText' => t('Play'),
      'randomize' => FALSE,
      //'slidetostart' => 0, // integer value, not boolean --  replace by "startAt"
      'animationLoop' => TRUE,
      'pauseOnAction' => TRUE,
      'pauseOnHover' => FALSE,
      //'controlscontainer' => '.flex-nav-container', -- updated in v2
      'manualControls' => '',
        //'startCallback' => 'function() {}', -- replace by 'start'
        //'beforeCallback' => 'function() {}', -- replaced by 'before'
        //'afterCallback' => 'function() {}', -- replaced by 'after'
        //'endCallback' => 'function() {}', -- replaced by 'end'
    );
    $this->typecast_settings($settings);
    return $settings;
  }

  public function submit(&$settings) {
    $this->typecast_settings($settings);
  }

  public function typecast_settings(&$settings) {
    if (isset($settings) && !empty($settings)) {
      foreach ($settings as $key => $value) {
        switch ($key) {
          case 'namespace':
          case 'selector':
          case 'easing':
          case 'direction':
          case 'controlsContainer':
          case 'sync':
          case 'asNavFor':
          case 'fade':
          case 'prevText':
          case 'nextText':
          case 'pauseText':
          case 'playText':
          case 'manualControls':
            $settings[$key] = (string) $value;
            break;
          case 'startAt':
          case 'animationSpeed':
          case 'initDelay':
          case 'itemWidth':
          case 'itemMargin':
          case 'minItems':
          case 'maxItems':
          case 'move':
            $settings[$key] = (int) $value;
            break;
          case 'controlNav':
            if ($value == 'thumbnails') {
              $settings[$key] = (string) $value;
              break;
            }
          case 'reverse':
          case 'smoothHeight':
          case 'useCSS':
          case 'touch':
          case 'video':
          case 'keyboard':
          case 'multipleKeyboard':
          case 'mouseWheel':
          case 'slideshow':
          case 'directionNav':
          case 'pausePlay':
          case 'randomize':
          case 'animationLoop':
          case 'pauseOnAction':
          case 'pauseOnHover':
            $settings[$key] = (boolean) $value;
            break;
        }
      }
    }
  }

}
