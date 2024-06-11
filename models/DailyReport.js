const mongoose = require("mongoose");
const { Schema } = mongoose;

const DailyReportSchema = new Schema(
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
  },
  { timestamps: true }
);

DailyReportSchema.pre("save", async function () {
  try {
    await this.populate("userId", "email").execPopulate();
    console.log("User Email:", this.userId.email);
  } catch (error) {
    console.error("Error during population:", error);
  }
});

const DailyReport = mongoose.model("DailyReport", DailyReportSchema);

module.exports = DailyReport;
