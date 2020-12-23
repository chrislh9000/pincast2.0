import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import http from 'http';
import fs from 'fs';
import models from '../models.js';
const router = express.Router();
const GcloudResponse = models.GcloudResponse;


router.get('/upload', (req, res) => {
  // create new Transcript
  const newResponse = new GcloudResponse({
    id: 'daily_nytimes_election',
    response: {"response": {"results": [{"alternatives": [{"transcript": "I'm here to tell you tonight. We believe we're on track to win this election.", "confidence": 0.9128386974334717, "words": [{"startTime": "1.7s", "endTime": "2.0s", "word": "I'm"}, {"startTime": "2.0s", "endTime": "2.2s", "word": "here"}, {"startTime": "2.2s", "endTime": "2.3s", "word": "to"}, {"startTime": "2.3s", "endTime": "2.6s", "word": "tell"}, {"startTime": "2.6s", "endTime": "2.7s", "word": "you"}, {"startTime": "2.7s", "endTime": "3.4s", "word": "tonight."}, {"startTime": "3.8s", "endTime": "3.9s", "word": "We"}, {"startTime": "3.9s", "endTime": "4.4s", "word": "believe"}, {"startTime": "4.4s", "endTime": "4.5s", "word": "we're"}, {"startTime": "4.5s", "endTime": "4.7s", "word": "on"}, {"startTime": "4.7s", "endTime": "5.0s", "word": "track"}, {"startTime": "5.0s", "endTime": "5.2s", "word": "to"}, {"startTime": "5.2s", "endTime": "5.3s", "word": "win"}, {"startTime": "5.3s", "endTime": "5.5s", "word": "this"}, {"startTime": "5.5s", "endTime": "6.2s", "word": "election."}]}]}, {"alternatives": [{"transcript": " From The New York Times. I'm Michael borrow. This is a daily today. So we'll be going to the US Supreme Court. We want all voting to start. It ain't over till every vote is counted. Every ballot is counted Joe Biden is calling for patients and President Trump is threatening legal action as millions of votes are still uncounted. We don't want them to find any ballots at", "confidence": 0.9065894484519958, "words": [{"startTime": "7.4s", "endTime": "7.5s", "word": "From"}, {"startTime": "7.5s", "endTime": "7.6s", "word": "The"}, {"startTime": "7.6s", "endTime": "7.7s", "word": "New"}, {"startTime": "7.7s", "endTime": "7.9s", "word": "York"}, {"startTime": "7.9s", "endTime": "8.4s", "word": "Times."}, {"startTime": "8.7s", "endTime": "8.9s", "word": "I'm"}, {"startTime": "8.9s", "endTime": "9.2s", "word": "Michael"}, {"startTime": "9.2s", "endTime": "9.8s", "word": "borrow."}, {"startTime": "10.6s", "endTime": "11.2s", "word": "This"}, {"startTime": "11.4s", "endTime": "11.5s", "word": "is"}, {"startTime": "11.5s", "endTime": "11.6s", "word": "a"}, {"startTime": "11.6s", "endTime": "12.1s", "word": "daily"}, {"startTime": "12.8s", "endTime": "13.4s", "word": "today."}, {"startTime": "13.9s", "endTime": "14.1s", "word": "So"}, {"startTime": "14.1s", "endTime": "14.3s", "word": "we'll"}, {"startTime": "14.3s", "endTime": "14.4s", "word": "be"}, {"startTime": "14.4s", "endTime": "14.9s", "word": "going"}, {"startTime": "14.9s", "endTime": "15.3s", "word": "to"}, {"startTime": "15.3s", "endTime": "15.8s", "word": "the"}, {"startTime": "15.8s", "endTime": "16.1s", "word": "US"}, {"startTime": "16.1s", "endTime": "16.6s", "word": "Supreme"}, {"startTime": "16.6s", "endTime": "17.3s", "word": "Court."}, {"startTime": "17.7s", "endTime": "17.9s", "word": "We"}, {"startTime": "17.9s", "endTime": "18.2s", "word": "want"}, {"startTime": "18.2s", "endTime": "18.9s", "word": "all"}, {"startTime": "19.3s", "endTime": "19.7s", "word": "voting"}, {"startTime": "19.7s", "endTime": "19.9s", "word": "to"}, {"startTime": "19.9s", "endTime": "20.6s", "word": "start."}, {"startTime": "20.9s", "endTime": "21.0s", "word": "It"}, {"startTime": "21.0s", "endTime": "21.2s", "word": "ain't"}, {"startTime": "21.2s", "endTime": "21.5s", "word": "over"}, {"startTime": "21.5s", "endTime": "21.7s", "word": "till"}, {"startTime": "21.7s", "endTime": "22.1s", "word": "every"}, {"startTime": "22.1s", "endTime": "22.4s", "word": "vote"}, {"startTime": "22.4s", "endTime": "22.6s", "word": "is"}, {"startTime": "22.6s", "endTime": "23.1s", "word": "counted."}, {"startTime": "23.1s", "endTime": "23.5s", "word": "Every"}, {"startTime": "23.5s", "endTime": "23.9s", "word": "ballot"}, {"startTime": "23.9s", "endTime": "24.0s", "word": "is"}, {"startTime": "24.0s", "endTime": "24.7s", "word": "counted"}, {"startTime": "24.7s", "endTime": "25.1s", "word": "Joe"}, {"startTime": "25.1s", "endTime": "25.6s", "word": "Biden"}, {"startTime": "25.6s", "endTime": "25.8s", "word": "is"}, {"startTime": "25.8s", "endTime": "26.3s", "word": "calling"}, {"startTime": "26.3s", "endTime": "26.5s", "word": "for"}, {"startTime": "26.5s", "endTime": "27.2s", "word": "patients"}, {"startTime": "27.5s", "endTime": "27.8s", "word": "and"}, {"startTime": "27.8s", "endTime": "28.3s", "word": "President"}, {"startTime": "28.3s", "endTime": "28.8s", "word": "Trump"}, {"startTime": "28.8s", "endTime": "29.0s", "word": "is"}, {"startTime": "29.0s", "endTime": "29.7s", "word": "threatening"}, {"startTime": "29.7s", "endTime": "30.1s", "word": "legal"}, {"startTime": "30.1s", "endTime": "30.6s", "word": "action"}, {"startTime": "30.9s", "endTime": "31.2s", "word": "as"}, {"startTime": "31.2s", "endTime": "31.9s", "word": "millions"}, {"startTime": "31.9s", "endTime": "32.1s", "word": "of"}, {"startTime": "32.1s", "endTime": "32.6s", "word": "votes"}, {"startTime": "32.6s", "endTime": "32.8s", "word": "are"}, {"startTime": "32.8s", "endTime": "33.3s", "word": "still"}, {"startTime": "33.3s", "endTime": "34.3s", "word": "uncounted."}, {"startTime": "34.6s", "endTime": "34.7s", "word": "We"}, {"startTime": "34.7s", "endTime": "34.9s", "word": "don't"}, {"startTime": "34.9s", "endTime": "35.1s", "word": "want"}, {"startTime": "35.1s", "endTime": "35.3s", "word": "them"}, {"startTime": "35.3s", "endTime": "35.5s", "word": "to"}, {"startTime": "35.5s", "endTime": "36.0s", "word": "find"}, {"startTime": "36.0s", "endTime": "36.2s", "word": "any"}, {"startTime": "36.2s", "endTime": "36.8s", "word": "ballots"}, {"startTime": "36.8s", "endTime": "37.0s", "word": "at"}]}]}, {"alternatives": [{"transcript": " Four o'clock in the morning and add them to the list. Okay.", "confidence": 0.9128386378288269, "words": [{"startTime": "37.7s", "endTime": "37.9s", "word": "Four"}, {"startTime": "37.9s", "endTime": "38.3s", "word": "o'clock"}, {"startTime": "38.3s", "endTime": "38.4s", "word": "in"}, {"startTime": "38.4s", "endTime": "38.5s", "word": "the"}, {"startTime": "38.5s", "endTime": "39.0s", "word": "morning"}, {"startTime": "39.0s", "endTime": "39.2s", "word": "and"}, {"startTime": "39.2s", "endTime": "39.4s", "word": "add"}, {"startTime": "39.4s", "endTime": "39.6s", "word": "them"}, {"startTime": "39.6s", "endTime": "39.8s", "word": "to"}, {"startTime": "39.8s", "endTime": "39.9s", "word": "the"}, {"startTime": "39.9s", "endTime": "40.5s", "word": "list."}, {"startTime": "40.6s", "endTime": "41.2s", "word": "Okay."}]}]}, {"alternatives": [{"transcript": " It's going to take time to count the votes. We're going to win, Pennsylvania.", "confidence": 0.7834404110908508, "words": [{"startTime": "44.1s", "endTime": "44.2s", "word": "It's"}, {"startTime": "44.2s", "endTime": "44.3s", "word": "going"}, {"startTime": "44.3s", "endTime": "44.4s", "word": "to"}, {"startTime": "44.4s", "endTime": "44.7s", "word": "take"}, {"startTime": "44.7s", "endTime": "44.9s", "word": "time"}, {"startTime": "44.9s", "endTime": "45.0s", "word": "to"}, {"startTime": "45.0s", "endTime": "45.3s", "word": "count"}, {"startTime": "45.3s", "endTime": "45.4s", "word": "the"}, {"startTime": "45.4s", "endTime": "45.7s", "word": "votes."}, {"startTime": "45.7s", "endTime": "45.8s", "word": "We're"}, {"startTime": "45.8s", "endTime": "46.1s", "word": "going"}, {"startTime": "46.1s", "endTime": "46.1s", "word": "to"}, {"startTime": "46.1s", "endTime": "46.4s", "word": "win,"}, {"startTime": "46.4s", "endTime": "47.4s", "word": "Pennsylvania."}]}]}, {"alternatives": [{"transcript": " Alex burns on where the election stands and the remaining paths to Victory. We were getting ready to win this election.", "confidence": 0.82317054271698, "words": [{"startTime": "48.6s", "endTime": "49.1s", "word": "Alex"}, {"startTime": "49.1s", "endTime": "49.6s", "word": "burns"}, {"startTime": "49.6s", "endTime": "50.1s", "word": "on"}, {"startTime": "50.1s", "endTime": "50.4s", "word": "where"}, {"startTime": "50.4s", "endTime": "50.6s", "word": "the"}, {"startTime": "50.6s", "endTime": "51.2s", "word": "election"}, {"startTime": "51.2s", "endTime": "51.8s", "word": "stands"}, {"startTime": "52.4s", "endTime": "52.8s", "word": "and"}, {"startTime": "52.8s", "endTime": "53.0s", "word": "the"}, {"startTime": "53.0s", "endTime": "53.8s", "word": "remaining"}, {"startTime": "53.8s", "endTime": "54.4s", "word": "paths"}, {"startTime": "54.4s", "endTime": "54.7s", "word": "to"}, {"startTime": "54.7s", "endTime": "55.2s", "word": "Victory."}, {"startTime": "55.3s", "endTime": "55.6s", "word": "We"}, {"startTime": "55.6s", "endTime": "55.8s", "word": "were"}, {"startTime": "55.8s", "endTime": "56.3s", "word": "getting"}, {"startTime": "56.3s", "endTime": "56.6s", "word": "ready"}, {"startTime": "56.6s", "endTime": "56.9s", "word": "to"}, {"startTime": "56.9s", "endTime": "57.1s", "word": "win"}, {"startTime": "57.1s", "endTime": "57.3s", "word": "this"}, {"startTime": "57.3s", "endTime": "57.9s", "word": "election."}]}]}, {"alternatives": [{"transcript": "", "confidence": 0.0, "words": [{"startTime": "1.7s", "endTime": "2.0s", "word": "I'm"}, {"startTime": "2.0s", "endTime": "2.2s", "word": "here"}, {"startTime": "2.2s", "endTime": "2.3s", "word": "to"}, {"startTime": "2.3s", "endTime": "2.6s", "word": "tell"}, {"startTime": "2.6s", "endTime": "2.7s", "word": "you"}, {"startTime": "2.7s", "endTime": "3.4s", "word": "tonight."}, {"startTime": "3.8s", "endTime": "3.9s", "word": "We"}, {"startTime": "3.9s", "endTime": "4.4s", "word": "believe"}, {"startTime": "4.4s", "endTime": "4.5s", "word": "we're"}, {"startTime": "4.5s", "endTime": "4.7s", "word": "on"}, {"startTime": "4.7s", "endTime": "5.0s", "word": "track"}, {"startTime": "5.0s", "endTime": "5.2s", "word": "to"}, {"startTime": "5.2s", "endTime": "5.3s", "word": "win"}, {"startTime": "5.3s", "endTime": "5.5s", "word": "this"}, {"startTime": "5.5s", "endTime": "6.2s", "word": "election."}, {"startTime": "7.4s", "endTime": "7.5s", "word": "From"}, {"startTime": "7.5s", "endTime": "7.6s", "word": "The"}, {"startTime": "7.6s", "endTime": "7.7s", "word": "New"}, {"startTime": "7.7s", "endTime": "7.9s", "word": "York"}, {"startTime": "7.9s", "endTime": "8.4s", "word": "Times."}, {"startTime": "8.7s", "endTime": "8.9s", "word": "I'm"}, {"startTime": "8.9s", "endTime": "9.2s", "word": "Michael"}, {"startTime": "9.2s", "endTime": "9.8s", "word": "borrow."}, {"startTime": "10.6s", "endTime": "11.2s", "word": "This"}, {"startTime": "11.4s", "endTime": "11.5s", "word": "is"}, {"startTime": "11.5s", "endTime": "11.6s", "word": "a"}, {"startTime": "11.6s", "endTime": "12.1s", "word": "daily"}, {"startTime": "12.8s", "endTime": "13.4s", "word": "today."}, {"startTime": "13.9s", "endTime": "14.1s", "word": "So"}, {"startTime": "14.1s", "endTime": "14.3s", "word": "we'll"}, {"startTime": "14.3s", "endTime": "14.4s", "word": "be"}, {"startTime": "14.4s", "endTime": "14.9s", "word": "going"}, {"startTime": "14.9s", "endTime": "15.3s", "word": "to"}, {"startTime": "15.3s", "endTime": "15.8s", "word": "the"}, {"startTime": "15.8s", "endTime": "16.1s", "word": "US"}, {"startTime": "16.1s", "endTime": "16.6s", "word": "Supreme"}, {"startTime": "16.6s", "endTime": "17.3s", "word": "Court."}, {"startTime": "17.7s", "endTime": "17.9s", "word": "We"}, {"startTime": "17.9s", "endTime": "18.2s", "word": "want"}, {"startTime": "18.2s", "endTime": "18.9s", "word": "all"}, {"startTime": "19.3s", "endTime": "19.7s", "word": "voting"}, {"startTime": "19.7s", "endTime": "19.9s", "word": "to"}, {"startTime": "19.9s", "endTime": "20.6s", "word": "start."}, {"startTime": "20.9s", "endTime": "21.0s", "word": "It"}, {"startTime": "21.0s", "endTime": "21.2s", "word": "ain't"}, {"startTime": "21.2s", "endTime": "21.5s", "word": "over"}, {"startTime": "21.5s", "endTime": "21.7s", "word": "till"}, {"startTime": "21.7s", "endTime": "22.1s", "word": "every"}, {"startTime": "22.1s", "endTime": "22.4s", "word": "vote"}, {"startTime": "22.4s", "endTime": "22.6s", "word": "is"}, {"startTime": "22.6s", "endTime": "23.1s", "word": "counted."}, {"startTime": "23.1s", "endTime": "23.5s", "word": "Every"}, {"startTime": "23.5s", "endTime": "23.9s", "word": "ballot"}, {"startTime": "23.9s", "endTime": "24.0s", "word": "is"}, {"startTime": "24.0s", "endTime": "24.7s", "word": "counted"}, {"startTime": "24.7s", "endTime": "25.1s", "word": "Joe"}, {"startTime": "25.1s", "endTime": "25.6s", "word": "Biden"}, {"startTime": "25.6s", "endTime": "25.8s", "word": "is"}, {"startTime": "25.8s", "endTime": "26.3s", "word": "calling"}, {"startTime": "26.3s", "endTime": "26.5s", "word": "for"}, {"startTime": "26.5s", "endTime": "27.2s", "word": "patients"}, {"startTime": "27.5s", "endTime": "27.8s", "word": "and"}, {"startTime": "27.8s", "endTime": "28.3s", "word": "President"}, {"startTime": "28.3s", "endTime": "28.8s", "word": "Trump"}, {"startTime": "28.8s", "endTime": "29.0s", "word": "is"}, {"startTime": "29.0s", "endTime": "29.7s", "word": "threatening"}, {"startTime": "29.7s", "endTime": "30.1s", "word": "legal"}, {"startTime": "30.1s", "endTime": "30.6s", "word": "action"}, {"startTime": "30.9s", "endTime": "31.2s", "word": "as"}, {"startTime": "31.2s", "endTime": "31.9s", "word": "millions"}, {"startTime": "31.9s", "endTime": "32.1s", "word": "of"}, {"startTime": "32.1s", "endTime": "32.6s", "word": "votes"}, {"startTime": "32.6s", "endTime": "32.8s", "word": "are"}, {"startTime": "32.8s", "endTime": "33.3s", "word": "still"}, {"startTime": "33.3s", "endTime": "34.3s", "word": "uncounted."}, {"startTime": "34.6s", "endTime": "34.7s", "word": "We"}, {"startTime": "34.7s", "endTime": "34.9s", "word": "don't"}, {"startTime": "34.9s", "endTime": "35.1s", "word": "want"}, {"startTime": "35.1s", "endTime": "35.3s", "word": "them"}, {"startTime": "35.3s", "endTime": "35.5s", "word": "to"}, {"startTime": "35.5s", "endTime": "36.0s", "word": "find"}, {"startTime": "36.0s", "endTime": "36.2s", "word": "any"}, {"startTime": "36.2s", "endTime": "36.8s", "word": "ballots"}, {"startTime": "36.8s", "endTime": "37.0s", "word": "at"}, {"startTime": "37.7s", "endTime": "37.9s", "word": "Four"}, {"startTime": "37.9s", "endTime": "38.3s", "word": "o'clock"}, {"startTime": "38.3s", "endTime": "38.4s", "word": "in"}, {"startTime": "38.4s", "endTime": "38.5s", "word": "the"}, {"startTime": "38.5s", "endTime": "39.0s", "word": "morning"}, {"startTime": "39.0s", "endTime": "39.2s", "word": "and"}, {"startTime": "39.2s", "endTime": "39.4s", "word": "add"}, {"startTime": "39.4s", "endTime": "39.6s", "word": "them"}, {"startTime": "39.6s", "endTime": "39.8s", "word": "to"}, {"startTime": "39.8s", "endTime": "39.9s", "word": "the"}, {"startTime": "39.9s", "endTime": "40.5s", "word": "list."}, {"startTime": "40.6s", "endTime": "41.2s", "word": "Okay."}, {"startTime": "44.1s", "endTime": "44.2s", "word": "It's"}, {"startTime": "44.2s", "endTime": "44.3s", "word": "going"}, {"startTime": "44.3s", "endTime": "44.4s", "word": "to"}, {"startTime": "44.4s", "endTime": "44.7s", "word": "take"}, {"startTime": "44.7s", "endTime": "44.9s", "word": "time"}, {"startTime": "44.9s", "endTime": "45.0s", "word": "to"}, {"startTime": "45.0s", "endTime": "45.3s", "word": "count"}, {"startTime": "45.3s", "endTime": "45.4s", "word": "the"}, {"startTime": "45.4s", "endTime": "45.7s", "word": "votes."}, {"startTime": "45.7s", "endTime": "45.8s", "word": "We're"}, {"startTime": "45.8s", "endTime": "46.1s", "word": "going"}, {"startTime": "46.1s", "endTime": "46.1s", "word": "to"}, {"startTime": "46.1s", "endTime": "46.4s", "word": "win,"}, {"startTime": "46.4s", "endTime": "47.4s", "word": "Pennsylvania."}, {"startTime": "48.6s", "endTime": "49.1s", "word": "Alex"}, {"startTime": "49.1s", "endTime": "49.6s", "word": "burns"}, {"startTime": "49.6s", "endTime": "50.1s", "word": "on"}, {"startTime": "50.1s", "endTime": "50.4s", "word": "where"}, {"startTime": "50.4s", "endTime": "50.6s", "word": "the"}, {"startTime": "50.6s", "endTime": "51.2s", "word": "election"}, {"startTime": "51.2s", "endTime": "51.8s", "word": "stands"}, {"startTime": "52.4s", "endTime": "52.8s", "word": "and"}, {"startTime": "52.8s", "endTime": "53.0s", "word": "the"}, {"startTime": "53.0s", "endTime": "53.8s", "word": "remaining"}, {"startTime": "53.8s", "endTime": "54.4s", "word": "paths"}, {"startTime": "54.4s", "endTime": "54.7s", "word": "to"}, {"startTime": "54.7s", "endTime": "55.2s", "word": "Victory."}, {"startTime": "55.3s", "endTime": "55.6s", "word": "We"}, {"startTime": "55.6s", "endTime": "55.8s", "word": "were"}, {"startTime": "55.8s", "endTime": "56.3s", "word": "getting"}, {"startTime": "56.3s", "endTime": "56.6s", "word": "ready"}, {"startTime": "56.6s", "endTime": "56.9s", "word": "to"}, {"startTime": "56.9s", "endTime": "57.1s", "word": "win"}, {"startTime": "57.1s", "endTime": "57.3s", "word": "this"}, {"startTime": "57.3s", "endTime": "57.9s", "word": "election."}]}]}]}}
  })
  newResponse.save()
  .then(() => {
    res.status(200).json({
      success: true,
      message: 'transcript saved successfully',
    });
  })
  .catch((err) => {
    res.status(500).json(err);
  });
})

router.get('/loadTranscript/:id', (req, res) => {
  console.log("HEYYY")
  GcloudResponse.findOne({ id: req.params.id })
  .then((resp) => {
    if (!resp) {
      console.log("===NO RESPONSE===")
      res.status(404).json({
        success: false,
        message: 'no gcloudresponse found'
      })
    } else {
      // init ccComps array
      let trans = JSON.parse(JSON.stringify(resp))['response']['response']['results']
      // console.log('TRANS LENGTH=======', trans)
      // console.log('TRANS IT=======', trans[0]['alternatives'][0]['words'].length)
      // console.log('TRANS START TIMES=======', trans[0]['alternatives'][0]['words'][0]['startTime'])
      // console.log("=====TRANS LENGTH=======", trans['message']['response']['results'].length)
      let ccComps = [];
      let ccObj = {};
      //loop through each word in the response
      let ccSentence = "";
      // counter for the CC_id
      let ccCounter = 0;
      for (let i = 0; i < trans.length - 1; i++) {
        for (let j = 0; j < trans[i]['alternatives'][0]['words'].length; j++) {
          let word = trans[i]['alternatives'][0]['words'][j]['word'];
          if (word[word.length - 1 ] == '.') {
            // if there's only one word in the sentence, then make sure to add the timestamp
            if (ccSentence.length == 0) {
              let timeStampstr = trans[i]['alternatives'][0]['words'][j]['startTime']
              ccObj['startTime'] = Number(timeStampstr.substring(timeStampstr, timeStampstr.length - 1)) - 0.3
              ccObj['endTime'] = Number(timeStampstr.substring(timeStampstr, timeStampstr.length - 1)) - 0.3
            }
            // create add sentence to the ccObj
            ccSentence = ccSentence.concat(' ').concat(word)
            ccObj['text'] = ccSentence
            // finish ccObj
            ccObj['id'] =  ccCounter
            let timeStampstr = trans[i]['alternatives'][0]['words'][j]['endTime']
            ccObj['endTime'] =  Number(timeStampstr.substring(timeStampstr, timeStampstr.length - 1)) - 0.3
            // push ccObj to ccComps array
            ccComps.push(ccObj)
            //change variables
            ccObj = {}
            ccSentence = ""
            ccCounter += 1
          } else {
            if (ccSentence.length == 0) {
              let timeStampstr = trans[i]['alternatives'][0]['words'][j]['startTime']
              ccObj['startTime'] = Number(timeStampstr.substring(timeStampstr, timeStampstr.length - 1)) - 0.3
            }
            ccSentence = ccSentence.concat(' ').concat(word)
          }
        }
      }
      res.status(200).json({
        success: true,
        message: ccComps
      })
    }
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json(err)
  })
})

router.get('/test', (req, res) => {
  console.log('WORKING')
})




export default router;
