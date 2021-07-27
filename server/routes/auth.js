import express from "express";
import models from "../models.js";
const router = express.Router();
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";
const User = models.User;

function hashPassword(password) {
  return CryptoJS.AES.encrypt(password, "secret key 123").toString();
}

module.exports = (passport) => {
  const validateReq = (userData) => userData.password === userData.password2;


  //======= REGISTRATION ROUTE ==========

  router.post("/register", (req, res) => {
    if (!validateReq(req.body)) {
      res.status(401).json({
        success: false,
        message: "passwords do not match",
      });
    } else {
      // check if there is already a user with the same username, if so send an error message to prompt them to change usernames
      User.find({ username: req.body.username })
      .then((users) => {
        if (users.length > 0) {
          // if username is already taken ask them to choose another username
          res.status(200).json({
            success: false,
            message: "this username has already been taken, try another one",
          });
        } else {
          // if no username conflicts, go ahead with creating the new user and saving it to the db
          const newUser = new User({
            username: req.body.username,
            password: sha256(req.body.password).toString(),
          });
          newUser.save()
          .then(() => {
            res.status(200).json({
              success: true,
              message: "registration successful",
            });
          })
          .catch((err) => {
            res.status(500).json(err);
          });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      })
    }
  });

  // ====== POST login route =========

  router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user) => {
      if (err || !user) {
        res.status(500)
        .json({ success: false, message: "err or bad user/pass" });
      } else {
        req.login(user, (err) => {
          if (err) {
            // error with login request, not passport middleware
            res.status(500).json({ success: false, err: err });
          } else {
            res.status(200).json({ success: true, user: req.user });
          }
        });
      }
    })(req, res, next);
  });

  return router;
};
