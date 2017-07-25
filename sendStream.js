var Canvas = require('canvas'),
    Image = Canvas.Image,
    fs=require('fs'),
    http = require('http'),
    _canvas=new Canvas(),
    // httpProxy = require('http-proxy'),
    ctx = _canvas.getContext('2d'),
    p41=0.41,p80=0.8,p125=1.25,p240=2.4,
    sectionModel = require('./mongodb'),
    section;
    sectionModel.find({_id:'57c7cfacee8c33350b281554'},function(err,data){
        if (err!==null) {throw new TypeError(err);return;}
        section=data[0];
    });
// var proxy = httpProxy.createProxyServer({});    
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
        picLen=section.sectionA.length;
        pic=section.sectionA[getRandom(picLen)]
    }else if (radio<=p80) {
        picLen=section.sectionB.length;
        pic=section.sectionB[getRandom(picLen)]
    }else if (radio<=p125) {
        picLen=section.sectionC.length;
        pic=section.sectionC[getRandom(picLen)]
    }else if (radio<=p240) {
        picLen=section.sectionD.length;
        pic=section.sectionD[getRandom(picLen)]
    }else{
        picLen=section.sectionE.length;
        pic=section.sectionE[getRandom(picLen)]
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

module.exports.recieveImage=function(req,res){
    var file=req.file,radio=req.body.radio,name,suffix;
    if (!file || file.size/1024 > 400) return res.end('超过400k');

    suffix=file.mimetype==='image/jpeg' ? '.jpg' :'.png';
    if (radio<p41) {
        name='a'+(section.sectionA.length+1)+suffix;
        section.sectionA.push(name);
        updateMongo({sectionA:section.sectionA})
    }else if (radio<=p80) {
        name='b'+(section.sectionB.length+1)+suffix;
        section.sectionB.push(name);
        updateMongo({sectionB:section.sectionB})
    }else if (radio<=p125) {
        name='c'+(section.sectionC.length+1)+suffix;
        section.sectionC.push(name);
        updateMongo({sectionC:section.sectionC})
    }else if (radio<=p240) {
        name='d'+(section.sectionD.length+1)+suffix;
        section.sectionD.push(name);
        updateMongo({sectionD:section.sectionD})
    }else{
        name='e'+(section.sectionE.length+1)+suffix;
        section.sectionE.push(name);
        updateMongo({sectionE:section.sectionE})
    }
    res.set({
        'Access-Control-Allow-Origin':'*'
    })
    res.end()
    fs.createReadStream(req.file.path).pipe(fs.createWriteStream('public/images/'+name,{mode:777}));
}

module.exports.httpProxyData=function(req,res){
    var method=req.method;
    var _query=method=='GET' ? req.query : req.body;
    delete req.headers.host;
    var options = {
        host:_query.host,
        path:getPath(_query),
        port: 80,
        method:method,
        headers:req.headers
    };
    delete options.headers['content-length'];
    var req2 = http.request(options,function(res2){
        res.set({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json; charset=utf-8'
        })
        res2.pipe(res)
    })
    req2.on('error', (e) => {
        res.set({
            'Access-Control-Allow-Origin':'*',
        })
        res.end(e.message)
    });
    req2.end(); 
}


function updateMongo(target){
    sectionModel.update({_id:'57c7cfacee8c33350b281554'},{$set : target},{upsert : true},function(error){
        console.log(error===null? '图片保存成功':'图片保存失败，原因是：'+error)
    })
}


function getRandom(max){
    return Math.floor(Math.random()*max)
}

function getPath(obj){
    var path=obj.path,count=0;
    for(var key in obj){
        if (key=='path' || key=='host') continue;
        if (count==0) {
            path=path+'?';
            count++
        }
        path=path+key+'='+obj[key]+'&'
    }
    return path.slice(0,-1)
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