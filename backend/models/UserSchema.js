import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// User Schema Model - (Name, email, password, creation Date) with validation rules
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique : true,
        validate: {
            validator: validator.isEmail,
            message: "Invalid email format"
        },
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength : [6, "Password must be at least 6 characters"],
    },
    mobile: {
        type: String,
        required: [true, "Mobile number is required"],
        unique: true,
        validate: {
            validator: function(value) {
                return validator.isMobilePhone(value, 'any', { strictMode: true });
            },
            message: "Invalid mobile number format"
        },
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: ""
    },
    transactions: {
        type: Array,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);

export default User;
