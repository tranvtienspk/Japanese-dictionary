var audioPlayer = function(audio) {
    var self = this;

    self.TimeOut = null;

    self.Audio = audio;

    self.play = function(id) {
        console.log("AudioPlaying...!.");

        self.Audio.currentTime = common.convert(arrs[id].start);
        self.Audio.play();

        var playTime = common.convert(arrs[id].end) - common.convert(arrs[id].start);
        playTime = playTime * 1000 + 50;

        clearTimeout(self.TimeOut);

        self.TimeOut = setTimeout(function() {
            self.Audio.pause();
        }, playTime);
    };
};