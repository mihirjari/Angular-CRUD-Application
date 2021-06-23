var express = require('express');
var router = express.Router();
var aboutCtrl = require('../controllers/aboutController');
var dataCtrl = require('../controllers/arrayController');


router.get('/', dataCtrl.getHomePage);
router.get('/artists', dataCtrl.getAllArtists);
router.get('/artists/:artistid', dataCtrl.getSingleArtist);
router.get('/about', aboutCtrl.aboutPage);
router.route('/register').get(dataCtrl.addNewArtist).post(dataCtrl.doAddNewArtist);


module.exports = router;
