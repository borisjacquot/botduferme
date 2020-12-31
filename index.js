const fs = require( 'fs' ),
    path = require( 'path' ),
    Twit = require( 'twit' ),
    dotenv = require( 'dotenv' ).config(),
    schedule = require('node-schedule');

const config = {
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_SECRET
}

const T = new Twit(config);

let j = schedule.scheduleJob('15 15 * * *', function(){
    T.get('statuses/user_timeline', { user_id: 'prisduferme', count: 1 }, function ( err, data, response ){
        let words = data[0].text.split(" ");
        let sam = words[3] - 1,
            moussa = words[12] - 1;

        let date_ob = new Date(),
            date = ("0" + date_ob.getDate()).slice(-2),
            month = ("0" + (date_ob.getMonth() + 1)).slice(-2),
            year = date_ob.getFullYear();

        let stat = date + '/' + month + '/' + year + ': Il reste ' + sam + ' jours de ferme à Sam et Redouane, et ' + moussa + ' jours à Moussa !';

        T.post( 'statuses/update', { status: stat }, function( err, data, response ){
            console.log( data );
        } );
    });
});