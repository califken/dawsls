(function (Drupal, drupalSettings) {
  Drupal.behaviors.collaborativeAudioWaveform = {
    attach: function (context) {
      const audioFields = context.querySelectorAll('.field--name-field-audio-file');
      for (const audioField of audioFields) {
        if (audioField.classList.contains('js-processed-collaborative-audiowaveform')) {
          continue;
        }
        audioField.classList.add('js-processed-collaborative-audiowaveform');

        var audioFileUrl = audioField.querySelector('audio').getAttribute('src');
        var waveSurfer = WaveSurfer.create({
          container: audioField,
          waveColor: 'violet',
          progressColor: 'purple'
        });

        if (audioFileUrl) {
          waveSurfer.load(audioFileUrl);
        }
      }
    }
  };
})(Drupal, drupalSettings);
