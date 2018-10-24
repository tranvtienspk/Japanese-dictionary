var timeOut;
var audioPlay = (function () {
    var thisAudio = new Object;

    thisAudio.play = function (id, isMute) {

        console.log("AudioPlaying...!.");

        myAudio.currentTime = common.convert(arrs[id].start);
        myAudio.play();
        
        var playTime = common.convert(arrs[id].end) - common.convert(arrs[id].start);
        playTime = playTime*1000 + 50;
        
        clearTimeout(timeOut);
        
        timeOut = setTimeout(function () {
            myAudio.pause();
        }, playTime);
    };

    return thisAudio;
}());