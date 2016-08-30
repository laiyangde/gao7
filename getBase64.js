var Canvas = require('canvas'),
    _canvas=new Canvas(),
    ctx = _canvas.getContext('2d');
module.exports = function (width,height,color){
        _canvas.width=width;
        _canvas.height=height;
    var text=width+'X'+height,
        fontSize=Math.max(12,parseInt(width/10)),
        buf;
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#fff';
        ctx.font = fontSize+'px Impact';
        ctx.textBaseline = "middle";
        ctx.textAlign = "center"
        ctx.fillText(text, width/2, height/2);
        buf=_canvas.toBuffer();
        ctx.clearRect(0, 0, width, height);
        return buf;
}
// var Pool = require('./pool');
// module.exports = function (width,height,color){
//     var canvas = Pool.getCanvas(width,height),
//         ctx=canvas.getContext('2d'),
//         text=width+'X'+height,
//         buf;
//         ctx.fillStyle = color;
//         ctx.fillRect(0, 0, width, height);
//         ctx.fillStyle = '#fff';
//         ctx.font = '30px Impact';
//         ctx.textBaseline = "middle";
//         ctx.textAlign = "center"
//         ctx.fillText(text, width/2, height/2);
//         buf=canvas.toBuffer();
//         Pool.recover(canvas);
//         canvas=null;
//         return buf;
// }