import express from 'express';
import models from '../models.js';

const router = express.Router();
const Document = models.Document;
const Test = models.Test;
const axios = require('axios');

var request = require('ajax-request');

router.get('/getTags', (req, res) => {

  axios.get('http://localhost:5000/podcast/timestamp')
  .then(function (response) {
    console.log("success")
    console.log(response.data);
  })
  .catch(function (error) {
    console.log("Failed!!");
    console.log(error.response);
  })
})


export default router;
