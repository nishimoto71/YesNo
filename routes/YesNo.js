// routes/YesNo.js
const express = require('express');
const router = express.Router();

const request = require('request');

router.get('/', function(req, res, next) {
  request('https://yesno.wtf/api', function (error, response, body) {
    if (error) return next(error);
    if (response.statusCode !== 200) return next(new Error('Bad status code: ' + response.statusCode));
    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      return next(e);
    }
    // レンダリングまたはJSON応答
    res.render('YesNo', { answer: data.answer, image: data.image });
    // または res.json({ answer: data.answer, image: data.image });
  });
});

module.exports = router;
