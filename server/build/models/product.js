"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var productSchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    "default": 0
  },
  sku: {
    type: Number,
    required: false
  },
  sizes: {
    type: [String],
    required: true
  },
  image: {
    public_id: String,
    secure_url: String
  },
  outstanding: {
    type: Boolean,
    "default": false,
    required: true
  },
  sold: {
    type: Boolean,
    "default": false,
    required: true
  },
  active: {
    type: Boolean,
    "default": false,
    required: true
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)("Product", productSchema);
exports["default"] = _default;