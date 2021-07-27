import express from "express";
import models from "../models.js";
const router = express.Router();
const User = models.User;
const Pin = models.Pin;
const Podcast = models.Podcast;
const Episode = models.Episode;
const UserEpisode = models.UserEpisode;
const GcloudResponse = models.GcloudResponse;

/*
renders all users
*/
router.get('/users/all', (req, res, next) => {
  User.find({}, 'username')
  .then(resp => {
    res.status(200).json({
      success: true,
      message: resp
    });
  })
  .catch(err => {
    res.status(500).json(err);
  })
})

/*
returns an all friends of given user
*/
router.post('/users/getFriends', (req, res, next) => {
  User.findById(req.body.user_id)
  .populate('friends')
  .then(resp => {
    res.status(200).json({
      success: true,
      message: resp
    });
  })
  .catch(err => {
    res.status(500).json(err);
  })
})

/*
follows a specific user
*/

router.post('/follow', (req, res, next) => {
  // update the user object in the database adding the follower, and then return the userschema
  User.findByIdAndUpdate(req.body.user_id, {$push: { friends: req.body.friend_id} })
  .then(user => {
    res.status(200).json({
      success: true,
      message: user
    });
  })
  .catch(err => {
    res.status(500).json(err);
  })
})

/*
unfollows a specific user
*/
router.post('/unfollow', (req, res, next) => {
  // update the user object in the database and then return the userschema
  User.findByIdAndUpdate(req.body.user_id, {$pull: { friends: req.body.friend_id } })
  .then(user => {
    res.status(200).json({
      success: true,
      message: user
    });
  })
  .catch(err => {
    res.status(500).json(err);
  })
})

/*
shares pin with specific user
*/

router.post('/share', (req, res, next) => {
  // update the user object in the database and then return the userschema
  User.findByIdAndUpdate(req.body.user_id, {$push: { sharedPins: req.body.pin} })
  .then(user => {
    console.log("Pin shared ======", user)
    res.status(200).json({
      success: true,
      message: "Pin succesfully shared"
    });
  })
  .catch(err => {
    res.status(500).json(err);
  })
})




export default router;
