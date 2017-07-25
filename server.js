var express = require('express'),
    app = express(),
    fs=require('fs'),
    multer = require ('multer'),
    bodyParser = require('body-parser'),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server), 
    // router = express.Router(),
    sendStream = require('./sendStream'),
    colorStream=sendStream.colorStream,
    ImageStream=sendStream.ImageStream,
    recieveImage=sendStream.recieveImage,
    httpProxyData=sendStream.httpProxyData
    cacheTime=60 * 60 * 24 * 7,
    setting={
    width:200,
    height:200,
    color:'aaaaaa'
    };
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
var upload = multer({ dest:  "public/upload" });  
app.use(express.static('public'))
// app.use('/uploadImage',express.bodyParser)
app.post('/uploadImage',upload.single('myImage'),uploadImage)
app.get('/httpProxyData',httpProxyData);
app.post('/httpProxyData',bodyParser.urlencoded({ extended: true }),httpProxyData);
// app.get(['/placehold','/placehold/:imgSize','/placehold/:imgSize/:imgColor'],analysisRequest);
// app.get('/placehold',analysisRequest);
app.get('/placehold/:imgSize',analysisRequest);
app.get('/placehold/:imgSize/:imgColor',analysisRequest);
server.listen(80);
function analysisRequest(req,res){
    res.set({
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=' + cacheTime,
        'Expires': new Date(Date.now() + cacheTime * 1000).toUTCString()
    })
    if (req.params.imgSize===undefined) {
        colorStream(setting.width,setting.height,'#'+randomColor(),res)
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
            _color=randomColor();
        }else{
            _color=_color.length >2 && !/[^0-9A-Fa-f]/.test(_color) ? _color : randomColor();
        }
        colorStream(_width,_height,'#'+_color,res)
}

function randomColor(){
    return ('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
}

function uploadImage(req,res){
    recieveImage(req,res);
}

function respondWithError(res,txt) {
    return res.status(400).send('<h1>'+txt+'</h1>');
}         

io.on('connection', function(socket) {
    //接收并处理客户端发送的foo事件
    socket.on('test', function(data) {
        //将消息输出到控制台
        console.log(data);
    })
});