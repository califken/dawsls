<?php

/**
 * Prepares variables for 'collaborative_audio_audio_file_formatter' templates.
 *
 * Default template: collaborative-audio-audio-file-formatter.html.twig.
 *
 * @param array $variables
 *   An associative array containing:
 *   - elements: The field elements.
 *   - item: The field item to be rendered.
 */
function template_preprocess_collaborative_audio_audio_file_formatter(&$variables) {
  $item = $variables['item'];
  $variables['file_url'] = \Drupal::service('file_url_generator')->generateAbsoluteString($item['#item']->entity->url());
  // Add any other variables you need for the template here.
}
