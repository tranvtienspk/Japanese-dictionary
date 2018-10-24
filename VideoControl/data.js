// (function() {
//     var thisFun = new Object;



    // var file = `/video/${_define.videoName}.ass`;

    // readTextFile(file,function(params) {
    //     // console.log(params);   
    //     readedData= params; 
    // });
    
    
    readedData= CachSangTaoCuaNguoiN;


    var arrayTemp = readedData.split('Dialogue: 0,');
    arrayTemp.splice(0, 1);

    // var xxxx=[];
    // arrayTemp.forEach(element => {
    //     xxxx.push(element.replace(',Default,,0,0,0,,',''));
    // });


    var getPlayTime = function(params) {
        var aaa = params.split(':');
        var bbb = 
            parseFloat(aaa[0])*3600 + 
            parseFloat(aaa[1])*60 + 
            parseFloat(aaa[2]);
        return bbb;
    }

    var arrs=[];
    var i=0;
    arrayTemp.forEach(element => {
        var bbb = element.split(',Default,,0,0,0,,');

        var aaa = bbb[0].split(',');
        var obj = {
            id: i, 
            start: getPlayTime(aaa[0]), 
            end: getPlayTime(aaa[1]), 
            content: bbb[1],
            imagePath: imageList[i]
        };

        i++;
        arrs.push(obj);
    });

    console.log(arrs);
    

//     return thisFun;
// })();    