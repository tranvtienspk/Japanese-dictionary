"use strict";
var common = /** @class */ (function () {
    function common() {
    }


    // common.convert = function (params) {
    //     var arrs = params.split('.');
    //     return 60 + parseInt(arrs[0]) + parseInt(arrs[1]) / 100;
    // };

    common.convert = function (params) {
        var arrs = params.split('.');
        return 60 + parseInt(arrs[0]) + parseInt(arrs[1]) / 100;
    };


    return common;
}());
