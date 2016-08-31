var Canvas = require('canvas'),
    Image = Canvas.Image,
    fs=require('fs'),
    _canvas=new Canvas(),
    ctx = _canvas.getContext('2d'),
    p41=0.41,p80=0.8,p125=1.25,p240=2.4,
    sectionA=['a1.jpg','a2.jpg','a3.jpg','a4.jpg','a5.jpg','a6.jpg'],//宽高比小于0.41的部分随机
    sectionB=['b1.jpg','b2.jpg','b3.jpg','b4.jpg','b5.jpg','b6.jpg'],//宽高比0.41-0.8的部分随机
    sectionC=['c1.jpg','c2.jpg','c3.jpg','c4.jpg','c5.jpg'],//宽高比0.8-1.25的部分随机
    sectionD=['d1.jpg','d2.jpg','d3.png','d4.png','d5.jpg','d6.jpg'],//宽高比1.25-2.4的部分随机
    sectionE=['e1.jpg','e2.jpg','e3.jpg','e4.jpg','e5.jpg','e6.jpg'];//宽高比大于2.4的部分随机

module.exports.colorStream = function (width,height,color,res){
        ctx.clearRect(_canvas.width,_canvas.height)
        _canvas.width=width;
        _canvas.height=height;
    var text=width+'X'+height,
        fontSize=Math.max(12,parseInt(width/10));
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#fff';
        ctx.font = fontSize+'px Impact';
        ctx.textBaseline = "middle";
        ctx.textAlign = "center"
        ctx.fillText(text, width/2, height/2);
        _canvas.createJPEGStream().pipe(res)
}

module.exports.ImageStream = function (width,height,res){
    _canvas.width=width;
    _canvas.height=height;
    var img = new Image(),buf,sx=0,sy=0,sHeight,sWidth,wRaido,hRadio,radio=width/height,pic,picLen;
    if (radio<=p41) {
        picLen=sectionA.length;
        pic=sectionA[getRandom(picLen)]
    }else if (radio<=p80) {
        picLen=sectionB.length;
        pic=sectionB[getRandom(picLen)]
    }else if (radio<=p125) {
        picLen=sectionC.length;
        pic=sectionC[getRandom(picLen)]
    }else if (radio<=p240) {
        picLen=sectionD.length;
        pic=sectionD[getRandom(picLen)]
    }else{
        picLen=sectionE.length;
        pic=sectionE[getRandom(picLen)]
    }
    img.src = fs.readFileSync(__dirname + '/public/images/'+pic);
    sHeight=img.height;
    sWidth=img.width;
    wRaido=sWidth/width;
    hRadio=sHeight/height;
    if (wRaido!=hRadio) {
        if (wRaido<hRadio) {
            sHeight=Math.floor(height*wRaido);
            sWidth=Math.floor(width*wRaido);
            sy=(img.height-sHeight)/2
        }else{
            sHeight=Math.floor(height*hRadio);
            sWidth=Math.floor(width*hRadio);
            sx=(img.width-sWidth)/2
        }
    }
    ctx.drawImage(img, sx, sy,sWidth,sHeight,0,0,width,height);
    _canvas.createJPEGStream({quality:100}).pipe(res)
}

function getRandom(max){
    return Math.floor(Math.random()*max)
}

// var Pool = require('./pool');
// module.exports.ImageBuffer = function (){
    // var canvas = Pool.getCanvas(width,height),
    //     ctx=canvas.getContext('2d'),
    //     text=width+'X'+height,
    //     buf;
    //     ctx.fillStyle = color;
    //     ctx.fillRect(0, 0, width, height);
    //     ctx.fillStyle = '#fff';
    //     ctx.font = '30px Impact';
    //     ctx.textBaseline = "middle";
    //     ctx.textAlign = "center"
    //     ctx.fillText(text, width/2, height/2);
    //     buf=canvas.toBuffer();
    //     Pool.recover(canvas);
    //     canvas=null;
    //     return buf;
// }