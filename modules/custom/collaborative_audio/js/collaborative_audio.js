(function (Drupal, once) {
  Drupal.behaviors.collaborativeAudioWaveform = {
    attach: function (context, settings) {
      once('collaborativeAudioWaveform', '.field--name-field-audio-file', context).forEach(function (audioField) {
        var audioFileUrl = audioField.querySelector('audio').getAttribute('src');
        var waveSurfer = WaveSurfer.create({
          container: audioField,
          waveColor: 'violet',
          progressColor: 'purple'
        });

        if (audioFileUrl) {
          waveSurfer.load(audioFileUrl);
        }
      });
    }
  };
})(Drupal, once);
