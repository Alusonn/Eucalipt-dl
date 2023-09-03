"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB_URI = exports.CLOUDINARY_CLOUD_NAME = exports.CLOUDINARY_API_SECRET = exports.CLOUDINARY_API_KEY = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://alanWindowsPC:Argentina1@eucalipto-dl.xsyqukc.mongodb.net/eucalipto-dl";
exports.MONGODB_URI = MONGODB_URI;
var PORT = process.env.PORT || 4000;
exports.PORT = PORT;
var CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "dyp6u7nll";
exports.CLOUDINARY_CLOUD_NAME = CLOUDINARY_CLOUD_NAME;
var CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "469227314426786";
exports.CLOUDINARY_API_KEY = CLOUDINARY_API_KEY;
var CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "kqhqasmlsqtSwUF7UOuHoGgaCKA";
exports.CLOUDINARY_API_SECRET = CLOUDINARY_API_SECRET;