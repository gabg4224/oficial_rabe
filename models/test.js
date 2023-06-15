import { Schema, model, models } from "mongoose";

const testSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Test = models.Product || model("Product", testSchema);
export default Test;
