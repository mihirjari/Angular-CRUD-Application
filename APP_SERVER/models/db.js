const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://mihir:alxMDciePVrXjfkt@cluster0.fdji1.mongodb.net/musicDB?retryWrites=true&w=majority';

mongoose.connect(dbUri, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {

    console.log("Connected to musicDB!");
});

mongoose.connection.on('error', (error) => {

    console.log('Error was found : '+error);
});

mongoose.connection.on('disconnected', () => {

    console.log("Disconnected!");
});

require('./music');