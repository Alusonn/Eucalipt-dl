import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        default: 0
    }


})


export default mongoose.model('Product', productSchema)