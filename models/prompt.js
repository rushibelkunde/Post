

import mongoose, { Schema } from "mongoose";

const promtSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    prompt:{
        type: String,
        required: [true, 'Prompt is required']
    },
    tag:{
        type: String,
        required: [true, 'Tag is required']
    },

    likes: [
        {
        type: String
        }
        
    ]
    
})

const Prompt = mongoose.models.Prompt || mongoose.model('Prompt', promtSchema)

export default Prompt