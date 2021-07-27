import express from "express";
import models from "../models.js";
const router = express.Router();
const User = models.User;
const Pin = models.Pin;

// TODO: add episode id

// ====== CREATE PIN ROUTE =========

router.post("/createPin", (req, res) => {
  // create a new Pin with timestamp, text, User, and Podcast
  const newPin = new Pin({
    text: req.body.text,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    user: req.body.id,
    ccId: req.body.ccId,
    episode: req.body.episode,
    pinDate: new Date(),
  });
  // save to database
  newPin
    .save()
    .then((resp) => {
      // Update the user model, adding the pins id to the list of the User's pins
      User.findByIdAndUpdate(req.body.id, { $push: { pins: resp._id } })
        .then((resp) => {
          res.status(200).json({
            success: true,
            message: newPin,
            pinId: resp._id,
          });
        })
        .catch((err) => {
          console.log("error updating user model: User likely not found")
          res.status(500).json(err);
        });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// ====== DELETE PIN ROUTE =========

router.post("/deletePin", (req, res) => {
  // query to find the pin in question
  const query = {
    ccId: req.body.ccId,
    user: req.body.id,
    episode: req.body.episode,
  };

  Pin.findOneAndDelete(query)
    .then((resp) => {
      console.log("deleted Pin", resp);
      res.status(200).json({
        success: true,
        message: resp,
      });
    })
    .catch((err) => {
      // Pin delete failed
      console.log("error finding the Pin to delete")
      res.status(500).json(err);
    });
});

// ====== ADD A NOTE TO A PIN =========

//get episode
router.post("/addNote", (req, res) => {
  Pin.findOneAndUpdate(
    {
      ccId: req.body.ccId,
      user: req.body.id,
      episode: req.body.episode,
    },
    { note: req.body.note }
  )
    .then((resp) => {
      // Pin successfully updated in the database
      res.status(200).json({
        success: true,
        message: "added note",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// ====== ROUTE TO RENDER FRIEND PINS ========= TO DO: THIS SHOULD PROBABLY BE A GET ROUTE
router.post("/friendPin", (req, res) => {
  Pin.find({
    $and: [{ user: { $in: req.body.friends } }, { episode: req.body.episode }],
  })
    .populate("user")
    .then((resp) => {
      res.status(200).json({
        success: true,
        message: resp,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// ====== EDIT PINS =======
router.post("/editPin", (req, res) => {
  // query to find Pin to edit in database
  const query = {
    ccId: req.body.ccId,
    user: req.body.id,
    episode: req.body.episode,
  };
  // new Pin information to update
  const newPin = {
    text: req.body.text,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    ccId: req.body.newCcId,
  };
  // update the Pin stuff
  Pin.findOneAndUpdate(query, newPin)
    .then((resp) => {
      res.status(200).json({
        success: true,
        message: "added note",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// ====== FAVORITE PINS PINS =======
router.post("/pinFavorite", (req, res) => {
  // query to find Pin to edit in database
  const query = {
    ccId: req.body.ccId,
    user: req.body.user_id,
    episode: req.body.episode,
  };
  const fav = {
    favorited: req.body.favorite,
  };
  Pin.findOneAndUpdate(query, fav)
    .then((resp) => {
      res.status(200).json({
        success: true,
        message: "favorite changed",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// ====== RENDER PINS BY EPISODE=======
router.post("/renderPins", (req, res) => {
  // find all pins by the user and by episode
  Pin.find({ user: req.body.user_id, episode: req.body.episode }).then(
    (resp) => {
      res.status(200).json({
        success: true,
        message: resp,
        id: resp._id,
      });
    }
  );
});

// ===== ADMIN USE: PIN CLEARING ROUTES =========
router.get("/clearUserPins/:userid", (req, res) => {
  // update user model to clear all pins
  User.findByIdAndUpdate(
    req.params.userid,
    { $set: { pins: [] } },
    { new: true }
  )
    .then((resp) => {
      res.status(200).json({
        success: true,
        message: "user pins cleared",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

export default router;
