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

let date_ob = new Date(),
    date = ("0" + date_ob.getDate()).slice(-2),
    month = ("0" + (date_ob.getMonth() + 1)).slice(-2),
    year = date_ob.getFullYear(),
    hours = date_ob.getHours(),
    minutes = date_ob.getMinutes(),
    seconds = date_ob.getSeconds();



/* T.post( 'statuses/update', { status: date + '/' + month + '/' + year + ': Il reste 1926 jours de ferme à Sam et Redouane, et 1151 jours à Moussa !' }, function( err, data, response ){
    console.log( data );
} ); */

T.get('statuses/user_timeline', { user_id: 'prisduferme', count: 1 }, function ( err, data, response ){
    console.log(data[0].text);
    let words = data[0].text.split(" ");
    console.log(words[3]);
    console.log(words[12]);
});

/* schedule.scheduleJob('0 17 * * *', () => {
    console.log("oui")
}) */

console.log("il est" + hours + ":" + minutes + ":" + seconds);

while (1) {

};
