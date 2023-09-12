const mongoose = require("mongoose");
const { Schema } = mongoose;

const tweetSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, "Must be some content with tweet"],
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    noOfRetweets: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
