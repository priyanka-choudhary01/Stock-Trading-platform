const mongoose = require("mongoose")
const { Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },
    password:{
      type:String,
      required:true,

    },

    DOB: {
      type: Date,
      required: true,
    },

    panNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      match: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    },

     address: {
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
        match: /^[1-9][0-9]{5}$/,
      },
    },

    bankDetails: {
      accountNumber: {
        type: String,
        required: true,
      },
      ifscCode: {
        type: String,
        required: true,
      },
    },

    wallet: {
      balance: {
        type: Number,
        default: 0,
      },
      marginUsed: {
        type: Number,
        default: 0,
      },
    },

    accountStatus: {
      type: String,
      default: "active",
    },
  },
  { timestamps: true }
);
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
