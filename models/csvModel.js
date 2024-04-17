const mongoose= require('mongoose');


const csvSchema = new mongoose.Schema({
    fileName:{
        type: String,
        required: true
    },
    header_row:{
        type: [Object]
    },
    data_row:{
        type: [Object]
    }
}, {
    timestamps: true
})

const csvModel = mongoose.model('CSV', csvSchema)

module.exports = csvModel