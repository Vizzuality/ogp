<?php
/**
 * @file
 * BeanSlide plugin for jQuery.cycle.
 */

class BeanSlideCyclePlugin implements BeanSlidePluginInterface {

  /**
   * Implements BeanSlidePluginInterface::attachments().
   */
  public function attachments() {}

  /**
   * Implements BeanSlidePluginInterface::form().
   */
  public function form($settings) {
    $form = array();
    $form['cycle_effect'] = array(
      '#type' => 'select',
      '#title' => t('Transition effect'),
      '#options' => drupal_map_assoc(array(
        'cover',
        'fade',
        'scrollUp',
        'scrollRight',
        'scrollDown',
        'scrollLeft',
        'shuffle',
        'slideUp',
        'slideRight',
        'slideDown',
        'slideLeft',
        'uncover',
        'zoom',
      )),
      '#default_value' => $settings['cycle_effect'],
    );
    return $form;
  }

  /**
   * Implements BeanSlidePluginInterface::values().
   */
  public function values() {
    return array('cycle_effect' => 'fade');
  }

  public function submit(&$settings) {

  }
}
