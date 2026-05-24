const mongoose = require('mongoose');


const VideoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    videoUrl: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    valueScore: {
        type: Number,
        required: true
    },
    transcript: {
        type: String,
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('Video', VideoSchema);