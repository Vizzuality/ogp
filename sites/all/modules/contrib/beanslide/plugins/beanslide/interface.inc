<?php
/**
 * @file
 * Interface for BeanSlide plugins.
 */

interface BeanSlidePluginInterface {

  /**
   *
   */
  public function attachments();

  /**
   *
   */
  public function form($settings);

  /**
   *
   */
  public function values();

  /**
   *
   */
  public function submit(&$settings);
}

class BeanSlideNullPlugin {

  /**
   * Implements BeanSlidePluginInterface::attachments().
   */
  public function attachments() {}

  /**
   * Implements BeanSlidePluginInterface::form().
   */
  public function form($settings) {
    return array();
  }

  /**
   * Implements BeanSlidePluginInterface::values().
   */
  public function values() {
    return array();
  }
}
