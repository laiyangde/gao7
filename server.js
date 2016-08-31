var express = require('express'),
    app = express(),
    // router = express.Router(),
    sendStream = require('./sendStream'),
    colorStream=sendStream.colorStream,
    ImageStream=sendStream.ImageStream,
    cacheTime=60 * 60 * 24 * 7,
    setting={
    width:200,
    height:200,
    color:'aaaaaa'
    };
app.use(express.static('public'))
app.get('/',function(){

})
app.get(['/placehold','/placehold/:imgSize','/placehold/:imgSize/:imgColor'],analysisRequest);
app.get('/placehold',analysisRequest);
app.get('/placehold/:imgSize',analysisRequest);
app.get('/placehold/:imgSize/:imgColor',analysisRequest);
app.listen(80);
function analysisRequest(req,res){
    res.set({
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=' + cacheTime,
        'Expires': new Date(Date.now() + cacheTime * 1000).toUTCString()
    })
    if (req.params.imgSize===undefined) {
        colorStream(setting.width,setting.height,'#'+setting.color,res)
        return
    }
    var _imgSize=req.params.imgSize.split('x'),
        _width=parseInt(_imgSize[0]) || setting.width,
        _height=parseInt(_imgSize[1]) || _width,
        _color=req.params.imgColor;
        if (_color===undefined) {
            ImageStream(_width,_height,res)
            return;
        }
        if (_color==='r') {
            _color=('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
        }else{
            _color=_color.length >2 && !/[^0-9A-Fa-f]/.test(_color) ? _color : setting.color;
        }
        colorStream(_width,_height,'#'+_color,res)
}

function respondWithError(res,txt) {
    return res.status(400).send('<h1>'+txt+'</h1>');
}         