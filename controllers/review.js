const Review = require("../models/review.js");
const Listing = require("../models/listings.js");

module.exports.newReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newreview = new Review(req.body.review);
  newreview.author = req.user._id;
  listing.reviews.push(newreview);

  listing.aiOverview = "";
  listing.aiOverviewUpdatedAt = null;

  await newreview.save();
  await listing.save();
  req.flash("success", "New Review Created!");

  res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, {
    $pull: { reviews: reviewId },
    $set: { aiOverview: "", aiOverviewUpdatedAt: null },
  });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review Deleted!");

  res.redirect(`/listings/${id}`);
};
