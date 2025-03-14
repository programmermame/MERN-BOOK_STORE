import mongoose, { mongo } from "mongoose";

const bookSchema = mongoose.Schema({
    ISBN: {
        type: Number,
        required: true,
        unique: true,
    },
    Title: {
        type: String,
        required: true,
    },
    Author: {
        type: String,
        required: true,
    },
    Genre: {
        type: String,
        required: true,
    },
    PublicationDate: {
        type: Date,
        required: true,
    }
},
    {
        timestamps: true,
    }
);

const bookModel = mongoose.model("Book", bookSchema);

export default bookModel;