var express = require('express');
var app = express();
var router = express.Router();
var getBase64 = require('./getBase64')
var setting={
    width:200,
    height:200,
    color:'aaaaaa'
}
app.get(['/placehold','/placehold/:imgSize','/placehold/:imgSize/:imgColor'],analysisRequest);
// app.use('/placehold', router);
app.listen(80);

function analysisRequest(req,res){
    if (req.params.imgSize===undefined) {
        res.type('png').end(getBase64(setting.width,setting.height,'#'+setting.color),'base64')
        return
    }
    var _imgSize=req.params.imgSize.split('x');
    var _width=parseInt(_imgSize[0]) || setting.width;
    var _height=parseInt(_imgSize[1]) || _width;
    var _color=req.params.imgColor
        _color=_color.length >2 && !/[^0-9A-Fa-f]/.test(_color) ? _color : setting.color;
    res.end(getBase64(_width,_height,'#'+_color),'base64');
}

function respondWithError(res,txt) {
    return res.status(400).send('<h1>'+txt+'</h1>');
}