var Canvas = require('canvas'),
    Image = Canvas.Image,
    fs=require('fs'),
    _canvas=new Canvas(),
    ctx = _canvas.getContext('2d');
module.exports.colorBuffer = function (width,height,color,res){
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

module.exports.ImageBuffer = function (width,height,res){
    _canvas.width=width;
    _canvas.height=height;
    var img = new Image(),buf;
    img.src = fs.readFileSync(__dirname + '/public/images/1.jpg');
    ctx.drawImage(img, 100, 100,width,height,0,0,width,height);
    _canvas.createJPEGStream().pipe(res)
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