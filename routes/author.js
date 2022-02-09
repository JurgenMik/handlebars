// routing determines how application responds to a client request , based on URL endpoint
// peab uuesti kasutusele kutsuma express, et oleks saada aru koodi vormistusest
const express = require('express');
const router = express.Router();
// Controller asukoht
const authorController = require('../controllers/author');

// routeril on 2 parameetrit, request kindlal URlil ja asukoht , mis juhatab vastava response juurde
router.get('/:id', authorController.getAllArticlesByAuthor);


module.exports = router;