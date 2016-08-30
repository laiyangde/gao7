var Canvas = require('canvas');
// module.exports=(function(){
//         function Pool(){}
//         Pool.recover=function(item,width,height){
//             item.clearRect(0, 0, width, height)
//             Pool._poolDic.push(item);
//         }
//         Pool.getContext=function(width,height){
//             var pool=Pool._poolDic,len=pool.length;
//             if (len) {
//                 var ctx=pool.pop();
//                 ctx.canvas.width=width;
//                 ctx.canvas.height=height;
//                 return ctx
//             }else{
//                 return new Canvas(width,height).getContext('2d')
//             }
//         }
//         Pool._poolDic=[];
//         return Pool;
//     })()
module.exports=(function(){
        function Pool(){}
        Pool.recover=function(item){
            if (Pool._poolDic.length>10) return;
            Pool._poolDic.push(item);
        }
        Pool.getCanvas=function(width,height){
            var pool=Pool._poolDic,len=pool.length;
            if (len) {
                var canvas=pool.pop();
                    canvas.width=width;
                    canvas.height=height;
                return canvas
            }else{
                console.log(11)
                return new Canvas(width,height);
            }
        }
        Pool._poolDic=[];
        return Pool;
    })()