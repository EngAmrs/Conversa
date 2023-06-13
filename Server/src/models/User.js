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
    email: {
      type: String,
      unique: true,
      minLength: 5,
      maxLength: 100,
      trim: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
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
);

const User = mongoose.model('User', userSchema);

export default User;
