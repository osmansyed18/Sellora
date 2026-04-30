const express = require("express");
const Listing = require("../models/listings.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const router = express.Router({ mergeParams: true });
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const reviewControllers = require("../controllers/review.js");

//reviews
//post review route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewControllers.newReview)
);

//delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewControllers.destroyReview)
);

module.exports = router;
