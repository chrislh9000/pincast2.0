import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import http from "http";
import fs from "fs";
import models from "../models.js";
const router = express.Router();
const GcloudResponse = models.GcloudResponse;

// ===== ADMIN USE: upload json file to the database (no longer using this as we manually upload on Mongodb)

router.get("/upload", (req, res) => {
  // create new Transcript
  fs.readFile(
    "./src/assets/json_files/How_I_built_this_Riot_Games.json",
    "utf8",
    (err, jsonString) => {
      if (err) {
        console.log("Error reading file from disk:", err);
        return;
      }
      try {
        const resp = JSON.parse(jsonString);
        // create new Transcript
        const newResponse = new GcloudResponse({
          id: "planet_money_01",
          response: resp,
        });
        newResponse
        .save()
        .then(() => {
          res.status(200).json({
            success: true,
            message: "transcript saved successfully",
          });
        })
        .catch((err) => {
          res.status(500).json(err);
        });
      } catch (err) {
        console.log("Error parsing JSON string:", err);
      }
    }
  );
});

// ===== Loading the transcript into the listening page

router.get("/loadTranscript/:id", (req, res) => {
  GcloudResponse.findById(req.params.id)
  .then((resp) => {
    if (!resp) {
      res.status(404).json({
        success: false,
        message: "no gcloudresponse found",
      });
    } else {
      // get ready to parse the json object
      let trans = JSON.parse(JSON.stringify(resp))["response"]["response"][
        "results"
      ];
      // init ccComps array
      let ccComps = [];
      let ccObj = {};
      //loop through each word in the response
      let ccSentence = "";
      // counter for the CC_id
      let ccCounter = 0;
      for (let i = 0; i < trans.length - 1; i++) {
        for (
          let j = 0; j < trans[i]["alternatives"][0]["words"].length;j++) {
            let word = trans[i]["alternatives"][0]["words"][j]["word"];
            if (
              // if the last character in the word is a sentence-ending punctuation mark, break it off
              word[word.length - 1] == "." ||
              word[word.length - 1] == "?" ||
              word[word.length - 1] == "!"
            ) {
              // if there's only one word in the sentence, then make sure to add the timestamp
              if (ccSentence.length == 0) {
                let timeStampstr =
                trans[i]["alternatives"][0]["words"][j]["startTime"];
                ccObj["startTime"] =
                Number(
                  timeStampstr.substring(
                    timeStampstr,
                    timeStampstr.length - 1
                  )
                ) + 0.0001;
                ccObj["endTime"] =
                Number(
                  timeStampstr.substring(
                    timeStampstr,
                    timeStampstr.length - 1
                  )
                ) + 0.0001;
              }
              // create add sentence to the ccObj
              ccSentence = ccSentence.concat(" ").concat(word);
              ccObj["text"] = ccSentence;
              // finish ccObj
              ccObj["id"] = ccCounter;
              let timeStampstr =
              trans[i]["alternatives"][0]["words"][j]["endTime"];
              ccObj["endTime"] =
              Number(
                timeStampstr.substring(timeStampstr, timeStampstr.length - 1)
              ) + 0.0001;
              // push ccObj to ccComps array
              ccComps.push(ccObj);
              //change variables
              ccObj = {};
              ccSentence = "";
              ccCounter += 1;
            } else {
              if (ccSentence.length == 0) {
                let timeStampstr =
                trans[i]["alternatives"][0]["words"][j]["startTime"];
                ccObj["startTime"] =
                Number(
                  timeStampstr.substring(
                    timeStampstr,
                    timeStampstr.length - 1
                  )
                ) + 0.0001;
              }
              ccSentence = ccSentence.concat(" ").concat(word);
            }
          }
        }
        res.status(200).json({
          success: true,
          message: ccComps,
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
  });


  export default router;
