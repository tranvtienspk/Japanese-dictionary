var viewModal = function() {
    var self = this;

    var originalList = [];
    
    //Filter
    self.meanFilter = ko.observable();
    self.meanFilter.subscribe(function (params) {

        if (_.isEmpty(params)) {
            self.displayList(originalList.slice(0, 200));
        }
        else{
            var arrs = _.filter(originalList, function (e) { 
                return e.mean.includes(params);
                // return e.mean.search(`/${params}/g`);
            });
    
            self.displayList(arrs.slice(0, 200));
        }

        self.displayList().forEach(function (element) {
            element.visible(false);
        }, this);

    }); 

    self.contentFilter = ko.observable();
    self.contentFilter.subscribe(function (params) {

        if (_.isEmpty(params)) {
            self.displayList(originalList.slice(0, 200));
        }
        else{
            var arrs = _.filter(originalList, function (e) { 
                return e.content.includes(params);
            });
    
            self.displayList(arrs.slice(0, 200));
        }

        self.displayList().forEach(function (element) {
            element.visible(false);
        }, this);

    }); 

    //Dropbox
    self.optionValues = ko.observableArray();
    self.selectedOptionValue = ko.observable();
    self.selectedOptionValue.subscribe(function (params) {
        
        readTextFile(`./Data/${params}`).then(function (data) {
            originalList = JSON.parse(data);

            var index = 0;
            originalList.forEach(function (element) {
                element.visible = ko.observable(false);
                element.id = index++;
            }, this);

            self.displayList(originalList.slice(0, 200));
        })
    });    

    // Learn Type
    self.LearnType = ko.observable(false);
    self.LearnType.subscribe(function(params) {
        self.displayList().forEach(function (element) {
            element.visible(false);
        }, this);
    });

    self.displayList = ko.observableArray();

    //function
    self.show = function(params) {
        if (params.visible()) {
            params.visible(false);
        }
        else{
            params.visible(true);
        }
    }

    self.log = function(params) {
        // console.log(1);
    }



    self.setDropbox = function () {
        var arrs = $("#fileSelect")[0].files;

        self.optionValues([]);
        for (const item of arrs) {
            self.optionValues.push(item.name);
        }
    }

    self.selectContent = function (aa) {
        console.log(aa);
        selectText11(aa.id);
    }

    self.init = function () {
        // self.selectedOptionValue("N5 bunbo.csv");
    }
}

var vm = new viewModal();
ko.applyBindings(vm);
vm.init();

var selectText11 = function(node) {
    node = document.getElementById(node);

    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
}