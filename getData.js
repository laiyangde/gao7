// sectionA宽高比小于0.41的部分
// sectionB宽高比0.41-0.8的部分
// sectionC宽高比0.8-1.25的部分
// sectionD宽高比1.25-2.4的部分
// sectionE宽高比大于2.4的部分
var sectionModel = require('./mongodb'),section;
sectionModel.find({_id:'57c7cfacee8c33350b281554'},function(err,data){
    if (err!==null) {throw new TypeError(err);return;}
    section=data[0];
})
