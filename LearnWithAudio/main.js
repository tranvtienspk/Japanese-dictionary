var viewModel = function() {
    var self = this;

    var myAudio = document.getElementById("audio1");
    self.contents = ko.observable([]);
};

ko.applyBindings(new viewModel())
