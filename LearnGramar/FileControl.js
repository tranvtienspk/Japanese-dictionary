function readTextFile(file) {
    var d = new $.Deferred();

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var content = rawFile.responseText;
                d.resolve(content);
            }
        }
    }
    
    rawFile.send(null);
    
    return d.promise();
}