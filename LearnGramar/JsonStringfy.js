var viewModal = function() {
    var self = this;

    //Dropbox
    // self.contents = ko.observable('Please select file to stringify!!!');
    self.fileName = ko.observable();

    self.jsonStringfy = function () {
        // var arrs = $("#fileSelect")[0].files;

        // for (const item of arrs) {

        //     readTextFile(`./Data/${item.name}`).then(function (data) {
        //         // var contents = JSON.stringify(data);

        //         self.contents(data);
        //     })
        // }

        $.post('http://localhost:4443/email', { fileName: self.fileName(), jsonData: JSON.stringify(contents) }).then(function(data) {
            alert('msg');
        })
    }

    self.createOoo = function () {
        
        createOoo();
        console.log(JSON.stringify(ccc));
    }

    self.init = function () {
        // self.contents(ccc);
        
    }
}

var vm = new viewModal();
ko.applyBindings(vm);

var ccc = [];

var createOoo = function() {
    for (const item of aaa) {
        // console.log(item.grammar.usages[0].examples);
        var arrs = item.grammar.usages[0].examples;
    
        for (const item1 of arrs) {
            var ooo = {
                content : item1.content,
                mean : item1.mean,
            }
            ccc.push(ooo);
        }
    }
}


vm.init();

