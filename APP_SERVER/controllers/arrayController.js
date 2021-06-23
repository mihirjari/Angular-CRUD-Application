const request = require('request');

const getHomePage = (req, res) => {

    res.render('index', {title: 'The Music Store'});
};

const getAllArtists = (req, res) => {

    const path = "http://localhost:3000/api/musics";
    var requestOptions = {

        url: path,
        method: 'GET',
        json: {}
    };

    request(requestOptions, (err, response, data) => {

       var artistData = [];
       data.forEach((x, i) => {


        artistData[i] = {
                            id: x._id,
                            name: `${x.artist_bio[0].first_name} ${x.artist_bio[0].last_name}`,
                            songname: x.songname
                            };
                                    
   });

   res.render('list-display', {title: "The Music Store - Artists", artistList: artistData});

    });
};

const getSingleArtist = (req, res) => {

    const artistId = req.params.artistid;
    const path = "http://localhost:3000/api/musics/"+artistId;
    var requestOptions = {
        url: path,
        method: 'GET',
        json: {}
    };

    request(requestOptions, (err, response, data) => {

        res.render('details', {title: "The Music Store - Artist & Customer Details", singleArtist: data});
       
    });

};

const addNewArtist = (req, res) => {

    res.render('create', {title: "The Music Store - Registration"});

};

const doAddNewArtist = (req, res) => {

    const path = "http://localhost:3000/api/musics/";   

    const postData = {
        
        "artist_bio": {"first_name": req.body.first_name, "last_name": req.body.last_name, "city": req.body.city},
        "songname": req.body.song,
        "album": req.body.album,
        "language": req.body.language,
        "sold": req.body.sold,
        "available_online": true,
        "customer_details": {"customer_first_name": req.body.customerFname, "customer_last_name": req.body.customerLname, "customer_address": req.body.customerAddress, "postal_code": req.body.customerCode, "card_details": req.body.customerCard}
    };

    const requestOptions = {
        url: path,
        method: 'POST',
        json: postData
    };

    request(requestOptions, (err, response, body) => {

        if(response.statusCode == 201){

            res.redirect('/');
        }else{

            var htmlString = "<p>There was an error submitting the data. Please try again.</p><br><button><a href='/' style='text-decoration: none; color: black'>Home</a></button>";
            res.send(htmlString);
        }
    });

};





module.exports = {getHomePage, getAllArtists, getSingleArtist, addNewArtist, doAddNewArtist};