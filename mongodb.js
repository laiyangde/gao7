var mongoose = require('mongoose'),Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost/placehold');
var sectionSchema = new Schema({
    sectionA:Array,
    sectionB:Array,
    sectionC:Array,
    sectionD:Array,
    sectionE:Array
});
module.exports = mongoose.model('section', sectionSchema);
