<?php

/**
 * @file
 * Artists plugin definition.
 */

$plugin = array(
  'label' => t('Countries'),
  'resource' => 'countries',
  'name' => 'countries__0_1',
  'entity_type' => 'node',
  'bundle' => 'country_page',
  'description' => t('This resource presents countries from REST easy.'),
  'class' => 'ResteasyRestfulEntityCountriesResource',
  'major_version' => 0,
  'minor_version' => 1,
);
