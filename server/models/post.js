import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    location: String,
    description: String,
    picPath: String,
    userPicPath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    Comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("posts", postSchema);
