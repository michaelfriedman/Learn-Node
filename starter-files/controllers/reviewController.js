const mongoose = require('mongoose');

const Review = mongoose.model('Review');

exports.addReview = async (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  req.body.author = req.user._id;
  req.body.store = req.params.id;
  const newReview = Review(req.body);
  await newReview.save();
  req.flash('success', 'Review saved! 👍');
  res.redirect('back');
};
