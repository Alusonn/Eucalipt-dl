import { Schema, model } from "mongoose";

const productSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    sku: {
      type: Number,
      required: false,
    },
    sizes: {
      type: [String],
      required: true,
    },
    image: {
      public_id: String,
      secure_url: String,
      id: String
    },

    outstanding: {
      type: Boolean,
      default: false,
      required: true,
    },
    sold: {
      type: Boolean,
      default: false,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Product", productSchema);
