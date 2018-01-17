const express = require('express'),
      router  = express.Router(),
      URL     = require('../models/url'),
      isUrl   = require('is-url');
      
router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/new/*', (req, res) => {
    function shortenURL() {
        var shortCode = generateShortCode();
        var short_url = `https://short-links.glitch.me/${shortCode}`;
        URL.findOne({ short_url })
            .then(url => {
                if (!url) {
                    var newURL = {
                        original_url: req.params[0],
                        short_url
                    };
                    return URL.create(newURL);
                } else shortenURL();
            }).then( newURL => {
                res.send({
                    original_url: newURL.original_url,
                    short_url: newURL.short_url
                });
            }).catch(console.log);
    }
    if (isUrl(req.params[0])) shortenURL();     
    else res.json({ error:'URL invalid'});
});

router.get('/:shortcode', (req, res) => {
    var short_url = `https://short-links.glitch.me/${req.params.shortcode}`;
    URL.findOne({ short_url })
        .then(url => {
            if (url) res.redirect(url.original_url);
            else res.json({ error:'URL not found!'});
        }).catch(console.log)
});

function generateShortCode() {
  var text = '';
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += characters.charAt(Math.floor(Math.random() * characters.length));

  return text;
}

module.exports = router;
