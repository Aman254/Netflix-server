import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.model(
  {
    name: {
      type: String,
      required: [true, "A user must have a Name."],
      trim: true,
      maxlength: [14, "A Users Name must not be morre than 14 Characters."],
      minLength: [2, "A User name Must be between 2 to 14 characters."],
    },
    email: {
      type: String,
      required: [true, "A user must have an Email."],
      unique: [true, "Email address already exists."],
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a Valid Email."],
    },
    picture: {
      type: String,
      default: "https://avatar.iran.liara.run/public",
    },
    mobile: {
      type: String,
      required: [true, "A User Must have a Mobile Number."],
      validate: {
        validator: function (v) {
          return /^[6-9]\d{9}$/.test(v);
        },
        message: (number) =>
          `${number.value} is not a valid INDIAN Mobile Number. `,
      },
    },
    password: {
      type: String,
      required: [true, "A user must have a password."],
      minLength: [4, "A Password must be of Minimum 4 Characters."],
      maxLength: [128, "A password must be between 4 to 128 characters"],
    },
  },
  { collection: "users", timestamps: true }
);

const UserModel =
  mongoose.model.UserModel || mongoose.model("UserModel", userSchema);

export default UserModel;
