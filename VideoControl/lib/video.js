var timeOut;
var videoPlay = (function () {
    var thisVideo = new Object;

    thisVideo.play = function (id, isMute) {

        console.log("videoPlaying...!.");

        myVideo.currentTime = arrs[id].start;
        myVideo.play();
        
        var playTime = arrs[id].end - arrs[id].start;
        playTime = playTime*1000 + 50;
        
        clearTimeout(timeOut);
        
        timeOut = setTimeout(function () {
            myVideo.pause();
        }, playTime);
    };

    return thisVideo;
}());