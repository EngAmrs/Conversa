// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
      trim: true
    },
    pic: {
      type: String,
      required: true,
      default: 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='
    },
    email: {
      type: String,
      unique: true,
      minLength: 5,
      maxLength: 100,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 30,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 1024,
    },

  },
  {
    toJSON: {
      transform(doc, ret) {
        // eslint-disable-next-line no-param-reassign
        delete ret.password;
      },
    },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

export default User;
