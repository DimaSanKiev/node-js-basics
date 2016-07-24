// Problem: we need a simple way to look at a user's badge count and JavaScript points
// Solution: use Node.js to connect to Treehouse's API to get profile information to print out

var http = require("https");
var username = "chrisramacciotti";

function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
}

// connect to the API URL: (https://teamtreehouse.com/username.json)
var request = http.get("https://teamtreehouse.com/" + username + ".json", function (response) {
    console.log(response.statusCode);
    // read the data from response

    // parse the data
    // print the data out
});

request.on("error", function (error) {
    console.error(error.message);
});