
var myVideo = document.getElementById("video1");
var myAudio = document.getElementById("audio1");

var viewModel = function () {
    var self = this;
    self.contents = ko.observable(arrs);

    self.videoSrc = ko.observable();

    self.selectedCountry = ko.observable(arrs);
    self.selectedCountry.subscribe(function(params) {
        if (params == 2) {
            self.videoSrc(`./video/CachSangTaoCuaNguoiNhat.mp4`);
            location.reload();
        }
        else if(params ==1) {
            self.videoSrc(`./video/business.mp4`);
            location.reload();
        }
    })

    var optionList = [1,2,3];

    self.availableCountries = ko.observableArray(optionList);


    // self.fullName = ko.computed(function () {
    //     return self.firstName() + " " + self.lastName();
    // });

    self.playContent = function (id) {
        videoPlay.play(id, false);
        // audioPlay.play(id, false);
    }

    self.play = function () {
        // myVideo.controls = true;
        myVideo.play();        
    }

    function convertToObservable(list) {
        var newList = [];
        
        list.forEach(obj => {
            var newObj = {};
            Object.keys(obj).forEach(key => {
                newObj[key] = ko.observable(obj[key]);
            });
            newList.push(newObj);
        });

        return newList;
    }      
  
};

ko.applyBindings(new viewModel())

// setTimeout(() => {
//     myVideo.pause();
//     // myVideo.play();
//     myVideo.controls = true;
// }, 300);






