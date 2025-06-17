import { model, Schema } from "mongoose";
import { TUser } from "../interface/user.interface";


const userSchema = new Schema<TUser>({
    firstName: {
        type: String,
        required: [true, 'First Name Is Require'],
        minlength: [3, 'First name minimum length is 3, but got {VALUE}'],
        maxlength: [10, 'First name maximum length is 10, but got {VALUE}'],
        trim: true

    },
    lastName: {
        type: String,
        required: [true, "Last name is require"],
        minlength: [3, 'Last name minimum length is 3, but got {VALUE}'],
        maxlength: [10, 'Last name maximum length is 10, but got {VALUE}'],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is require"],
        unique: [true, "Your email is not unique"],
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
            },
            message: function (props) {
                return `Your ${props.value} is not a valid email!`
            }
        },
        trim: true
    },
    age: {
        type: Number,
        min: [18, 'Minimum is 18, but got {VALUE}'],
        max: [60, 'Maximum is 60, but got {VALUE}']
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: {
            values : ['USER', 'ADMIN', "SUPER-ADMIN"],
            message : "Invalid User Role"
        },
        default: 'USER'
    }
}, {
    versionKey: false,
    timestamps: true
})

export const User = model("User", userSchema)