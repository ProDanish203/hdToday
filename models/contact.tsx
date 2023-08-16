import mongoose from "mongoose";
import validator from "validator";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: validator.isEmail,
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
    },
    message: {
        type: String,
        required: [true, "Message is required"]
    },
}, { timestamps: true})

export default mongoose.models.contact || mongoose.model("contact", ContactSchema);