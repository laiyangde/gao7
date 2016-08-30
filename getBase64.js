var Canvas = require('canvas');
module.exports = function (width,height,color){
    var canvas=new Canvas(width,height);
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#fff';
    ctx.font = '30px Impact';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center"
    var text=width+' x '+height;
    // var mt = ctx.measureText(text);
    // console.log(mt)
    ctx.fillText(text, width/2, height/2);
    ctx.stroke();
    return canvas.toDataURL().slice(22)
}