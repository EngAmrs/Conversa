// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

const { Schema } = mongoose;

const chatSchema = new Schema(
  {
    chatName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
      trim: true
    },
    isGroup: {
      type: Boolean,
      default: false
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    latestMessage:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

  },
  {
    timestamps: true
  }
);

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
