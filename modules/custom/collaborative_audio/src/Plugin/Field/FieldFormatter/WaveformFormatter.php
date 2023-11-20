<?php

namespace Drupal\collaborative_audio\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'waveform' formatter.
 *
 * @FieldFormatter(
 *   id = "waveform",
 *   label = @Translation("Audio Waveform"),
 *   field_types = {
 *     "file"
 *   }
 * )
 */
class WaveformFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];

    foreach ($items as $delta => $item) {
      // Render each item as waveform.
    }

    return $elements;
  }
}
