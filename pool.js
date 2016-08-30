var Canvas = require('canvas');
module.exports=(function(){
        function Pool(){}
        Pool.recover=function(item){
            Pool._poolDic.push(item);
        }
        Pool.getCanvas=function(){
            var pool=Pool._poolDic;
            var rst=pool.length ? pool.pop():new Canvas();
            return rst;
        }
        Pool._poolDic=[];
        return Pool;
    })()