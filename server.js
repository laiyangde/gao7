﻿var express = require('express'),
    app = express(),
    fs=require('fs'),
    // router = express.Router(),
    getBuffer = require('./getBuffer'),
    cacheTime=60 * 60 * 24 * 7,
    setting={
    width:200,
    height:200,
    color:'aaaaaa'
    };
app.use(express.static('public'))
// app.get(['/placehold','/placehold/:imgSize','/placehold/:imgSize/:imgColor'],analysisRequest);
app.get('/placehold',analysisRequest);
app.get('/placehold/:imgSize',analysisRequest);
app.get('/placehold/:imgSize/:imgColor',analysisRequest);
app.listen(80);

function analysisRequest(req,res){
    res.set({
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=' + cacheTime,
        'Expires': new Date(Date.now() + cacheTime * 1000).toUTCString()
    })
    if (req.params.imgSize===undefined) {
        res.end(getBuffer(setting.width,setting.height,'#'+setting.color))
        return
    }
    var _imgSize=req.params.imgSize.split('x'),
        _width=parseInt(_imgSize[0]) || setting.width,
        _height=parseInt(_imgSize[1]) || _width,
        _color=req.params.imgColor;
        if (_color===undefined) {
            
        }
        if (_color==='r') {
            _color=('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
        }else{
            _color=_color.length >2 && !/[^0-9A-Fa-f]/.test(_color) ? _color : setting.color;
        }
        res.end(getBuffer(_width,_height,'#'+_color));
}

function respondWithError(res,txt) {
    return res.status(400).send('<h1>'+txt+'</h1>');
}         