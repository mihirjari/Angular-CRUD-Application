const mongoose = require('mongoose');
const Music = mongoose.model('Music');


const getMusicList = (req, res) => {

    Music.find().exec((err, musicData) => {

        if(err){
            res.status(404).json(err);
            return;
        }

        res.status(200).json(musicData);

      
    });

}

const getSingleMusic = (req, res) => {

    Music.findById(req.params.musicid).exec((err, musicData) => {

        if(err){
            res.status(404).json(err);
            return;
        }

        res.status(200).json(musicData);
    });
    
}

const addMusic = (req, res) => {

    
    Music.create({

        artist_bio: {first_name: req.body.artist_bio.first_name, last_name: req.body.artist_bio.last_name, city: req.body.artist_bio.city},
        songname: req.body.songname,
        album: req.body.album,
        language: req.body.language,
        sold: req.body.sold,
        available_online: req.body.available_online,
        customer_details: {customer_first_name: req.body.customer_details.customer_first_name, customer_last_name: req.body.customer_details.customer_last_name, customer_address: req.body.customer_details.customer_address, postal_code: req.body.customer_details.postal_code, card_details: req.body.customer_details.card_details}

    }, (err, musicData) => {

        
        if(err){

            res.status(404).json(err);
        }else{
            res.status(201).json(musicData);
        }
    });
}

const updateMusic = (req, res) => {
    
    if(!req.params.musicid){

        
        res.status(404).json({"Message": "Music ID is required."});
        return;
    }

    Music.findById(req.params.musicid).exec((err, musicData) => {

        if(!musicData){
            
            res.status(404).json({"Message": "Music ID not found."});
            return;
        }else if(err){
           
            res.status(404).json(err);
            return;
        }else{

            
        musicData.artist_bio = [{first_name: req.body.artist_bio.first_name, last_name: req.body.artist_bio.last_name, city: req.body.artist_bio.city}];
        musicData.songname = req.body.songname;
        musicData.album = req.body.album;
        musicData.language = req.body.language;
        musicData.sold = req.body.sold;
        musicData.available_online = req.body.available_online;
        musicData.customer_details = [{customer_first_name: req.body.customer_details.customer_first_name, customer_last_name: req.body.customer_details.customer_last_name, customer_address: req.body.customer_details.customer_address, postal_code: req.body.customer_details.postal_code, card_details: req.body.customer_details.card_details}];

        }

        

        musicData.save((err, musicData) => {

            if(err){
                res.status(404).json(err);
            }else{
                res.status(200).json(musicData);
            }
        });

        
    });
}

const deleteMusic = (req, res) => {

    const musicId = req.params.musicid;

    if(musicId){

      Music.findByIdAndRemove(musicId).exec((err, musicData) => {

        if(err){
            res.status(404).json(err);
            return;
        }

        res.status(204).json(null);
      });
    }else{
        res.status(404).json({"Message": "No Music ID found."});
    }
}

module.exports = {getMusicList, getSingleMusic, addMusic, updateMusic, deleteMusic};


