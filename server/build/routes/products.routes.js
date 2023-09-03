"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _products = require("../controllers/products");
var _expressFileupload = _interopRequireDefault(require("express-fileupload"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.get("/adminApi/products", _products.getProducts);
router.post("/adminApi/products", (0, _expressFileupload["default"])({
  useTempFiles: true,
  tempFileDir: "./uploads"
}), _products.createProduct);
router.put("/adminApi/products/:id", _products.updateProduct);
router["delete"]("/adminApi/products/:id", _products.deleteProduct);
router.get("/adminApi/products/:id", _products.getProduct);
var _default = router;
exports["default"] = _default;