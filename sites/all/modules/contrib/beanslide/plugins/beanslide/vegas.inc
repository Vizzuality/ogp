<?php
/**
 * @file
 * BeanSlide plugin for Vegas.
 */

class BeanSlideVegasPlugin implements BeanSlidePluginInterface {

  /**
   * Implements BeanSlidePluginInterface::attachments().
   */
  public function attachments() {}

  /**
   * Implements BeanSlidePluginInterface::form().
   */
  public function form($settings) {
    $vegas_overlay_options = array();
    foreach (range(1, 15) as $index) {
      $overlay = sprintf('%02d.png', $index);
      $vegas_overlay_options[$overlay] = $overlay;
    }

    // @TODO: Show the overlays using CSS with background-repeat and some extra markup.
    $form = array();
    $form['vegas_overlay'] = array(
      '#type' => 'select',
      '#title' => t('Overlay pattern'),
      '#description' => t('Vegas can optionally use an overlay pattern to decrease the perception of pixelization, bluriness, and compression artifacts seen when a picture is stretched beyond its original size.'),
      '#options' => $vegas_overlay_options,
      '#default_value' => $settings['vegas_overlay'],
      '#states' => array(
        'visible' => array(
          'select[name="slideshow_plugin"]' => array('value' => 'beanslide:jquery.vegas'),
        ),
      ),
      '#empty_value' => '<none>',
    );

    return $form;
  }

  /**
   * Implements BeanSlidePluginInterface::values().
   */
  public function values() {
    return array('vegas_overlay' => '<none>');
  }

  public function submit(&$settings) {

  }
}
