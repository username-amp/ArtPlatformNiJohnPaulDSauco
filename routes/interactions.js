const express = require("express");
const { interactionsController } = require("../controllers");
const {
  validateLike,
  validateComment,
  validateSave,
} = require("../validators/interactions");
const isAuth = require("../middleware/isAuth");
const validate = require("../validators/validate");
const router = express.Router();

router.post(
  "/like",
  isAuth,
  validateLike,
  validate,
  interactionsController.likePost
);
router.post(
  "/comment",
  isAuth,
  validateComment,
  validate,
  interactionsController.commentPost
);
router.post(
  "/save",
  isAuth,
  validateSave,
  validate,
  interactionsController.savePost
);

module.exports = router;