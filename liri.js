require("dotenv").config();
var keys = require("./keys.js");

//json parse () json stringify () json (whatever youre working with)
//

var fs = require("fs");

var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var request = require("request")
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var example1 = process.argv[2];
var example2 = process.argv[3];
var example3 = process.argv[4];
//console.log(example1);
 if (example1 == 'twit'){
     forClient()
 }else if (example1=='spot'){
    anotherOne()
 }else if (example1=='movie')
 {
    moviewsome()
 }

function forClient(){
    var newInput={
        screen_name:example1,
        count:5
    }
    
        client.get('statuses/user_timeline',newInput, function (error, tweets) {
           // console.log(tweets)
        if (error) throw error;

        for (i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }
    })
}

function anotherOne(){
    var somestuff = {
        type: 'track',
        query: example2,
        limit:1
    }
    console.log(example2)
        spotify.search(somestuff, function (err,data){
           // console.log(JSON.stringify(data))
        if (err) throw err;

        console.log(`
        Artist: ${JSON.parse(JSON.stringify(data.tracks.items))[0].album.artists[0].name}
        Track: ${JSON.parse(JSON.stringify(data.tracks.items))[0].name}
        Preview: ${JSON.parse(JSON.stringify(data)).tracks.items[0].preview_url}
        Album: ${JSON.parse(JSON.stringify(data.tracks.items))[0].album.name}
        `)
    });
}




function moviewsome(){
    var queryURL = "https://www.omdbapi.com/?t=" + example2 + "&apikey=trilogy";

    request(queryURL, function(error,response,body){
        if (error) throw error;

        console.log(`
        Title: ${JSON.parse(body).Title} 
                Year: ${JSON.parse(body).Year}
                IMDB Rating: ${JSON.parse(body).imdbRating}
                Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}
                Country: ${JSON.parse(body).Country}
                Language: ${JSON.parse(body).Language}
                Plot: ${JSON.parse(body).Plot}
                Actors: ${JSON.parse(body).Actors}
                `);
    });
}



//  function somestuff(){
// switch (example1){
//    console.log(example1);
//     case 'my-tweets':
//     client.get('statuses/user_timeline', function (error, tweets, response) {
//         if (error) throw error;

//         for (i = 0; i < tweets.length; i++) {
//             console.log(tweets[i].text);
//         }
//     })

//     break;
//     case 'spotify-a-song':
//     spotify.search({type: 'track', query: example2, limit:1}, function (err,data){
//         if (err) throw err;

//         console.log(`
//         Artist: ${JSON.parse(JSON.stringify(data.tracks.items))[0].album.artists[0].name}
//         Track: ${JSON.parse(JSON.stringify(data.tracks.items))[0].name}
//         Preview: ${JSON.parse(JSON.stringify(data)).tracks.items[0].preview_url}
//         Album: ${JSON.parse(JSON.stringify(data.tracks.items))[0].album.name}
//         `)
//     });

//     break;
    
//     case 'movie-item':
//     vary queryURL = "https://www.omdbapi.com/?t=" + example2 + "y=&plot=full&tomatoes=true&r=json";

//     request(queryURL, function(error,response,body){
//         if (error) throw error;

//         console.log(`
//         Title: ${JSON.parse(body).Title} 
//                 Year: ${JSON.parse(body).Year}
//                 IMDB Rating: ${JSON.parse(body).imdbRating}
//                 Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}
//                 Country: ${JSON.parse(body).Country}
//                 Language: ${JSON.parse(body).Language}
//                 Plot: ${JSON.parse(body).Plot}
//                 Actors: ${JSON.parse(body).Actors}
//                 `);
//     });

//     break;

//     console.log("something something something");
//     break;
// }



// }

