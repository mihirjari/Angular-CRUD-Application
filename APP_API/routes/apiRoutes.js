var express = require('express');
var router = express.Router();

const ctrlMusic = require('../controllers/placeholderFunctions');


router.route('/musics').get(ctrlMusic.getMusicList).post(ctrlMusic.addMusic);
router.route('/musics/:musicid').get(ctrlMusic.getSingleMusic).put(ctrlMusic.updateMusic).delete(ctrlMusic.deleteMusic);


module.exports = router;