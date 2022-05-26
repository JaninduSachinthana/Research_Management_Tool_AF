const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Research = new schema({
    stdID: {
        type : String,
        required : true
    },
    grpID: {
        type : String,
        required : true
    },
    file: {
        type : String,
        required : true
      
    },
    cloudinary_id: {
        type : String,
        required : true
      
    }
})

const research = mongoose.model('research', Research);
module.exports = research;