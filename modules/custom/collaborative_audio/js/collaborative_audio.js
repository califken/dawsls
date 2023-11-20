(function ($) {
  Drupal.behaviors.collaborativeAudioWaveform = {
    attach: function (context) {
    $('.field--name-field-audio-file', context).once('collaborativeAudioWaveform').each(function () {

        var audioFileUrl = $(this).find('audio').attr('src');
        var waveSurfer = WaveSurfer.create({
          container: this,
          waveColor: 'violet',
          progressColor: 'purple'
        });

        if (audioFileUrl) {
          waveSurfer.load(audioFileUrl);
        }
      });
    }
  };
})(jQuery);
