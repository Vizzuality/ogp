<?php
/**
 * @file
 * BeanSlide plugin for ResponsiveSlides.
 */

class BeanSlideResponsiveSlidesPlugin implements BeanSlidePluginInterface {

  /**
   *
   */
  public function attachments() {
  }

  /**
   * Implements BeanSlidePlugin::form_alter().
   */
  public function form($settings) {
    $form = array();
    $form['max_width'] = array(
      '#type' => 'textfield',
      '#title' => t('Maximum slideshow width (pixels)'),
      '#default_value' => $settings['max_width'],
    );
    $form['pager_warning'] = array(
      '#type' => 'item',
      '#title' => t('ALERT'),
      '#markup' => '<label>' . t('The responsiveSlides library always appends the pager to the slideshow UL. TODO: incorporate an "append" selector') . '</label>',
      '#states' => array(
        'invisible' => array(
          'select[name="pager[type]"]' => array('value' => '<none>'),
        ),
      ),
    );
    $form['responsive_navigation'] = array(
      '#type' => 'item',
      '#title' => t('ALERT'),
      '#markup' => '<label>' . t('The responsiveSlides library always appends the navigation controls to the slideshow UL. TODO: incorporate an "append" selector') . '</label>',
      '#states' => array(
        'visible' => array(
          'select[name="navigation[position]"]' => array('value' => 'before'),
        ),
      ),
    );
    return $form;
  }

  /**
   * Implements BeanSlidePlugin::form_alter().
   */
  public function form_alter(&$form, &$form_state) {
  }

  /**
   * Implements BeanSlidePlugin::values().
   */
  public function values() {
    return array('max_width' => 960);
  }

  public function submit(&$settings) {

  }

}
