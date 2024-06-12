const mongoose = require("mongoose");
const { Schema } = mongoose;

const DailyChannelReportSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    title: {
      type: String,
    },
    url: {
      type: String,
    },
    source: {
      type: String,
    },
    views: {
      type: String,
    },
    likes: {
      type: String,
    },
    comments: {
      type: String,
    },
    duration: {
      type: String,
    },
    sentiment:{
      type: String,
    },
  },
  { timestamps: true }
);

DailyChannelReportSchema.pre("save", async function () {
  try {
    await this.populate("userId", "email").execPopulate();
    console.log("User Email:", this.userId.email);
  } catch (error) {
    console.error("Error during population:", error);
  }
});

const DailyChannelReport = mongoose.model("DailyChannelReport", DailyChannelReportSchema);

module.exports = DailyChannelReport;
