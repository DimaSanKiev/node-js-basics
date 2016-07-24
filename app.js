// Problem: we need a simple way to look at a user's badge count and JavaScript points
// Solution: use Node.js to connect to Treehouse's API to get profile information to print out

var http = require("https");
var username = "chrisramacciotti";

// print out message
function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Java.";
    console.log(message);
}

// print out error messages
function printError(error) {
    console.error(error.message);
}

// connect to the API URL: (https://teamtreehouse.com/username.json)
var request = http.get("https://teamtreehouse.com/" + username + ".json", function (response) {
    var body = "";

    // read the data from response
    response.on('data', function (chunk) {
        body += chunk;
    });
    response.on('end', function () {
        if (response.statusCode == 200) {
            try {
                var profile = JSON.parse(body);
                printMessage(username, profile.badges.length, profile.points.Java);
            } catch (error) {
                // parse error
                printError(error);
            }
        } else {
            // status code error
            printError({
                message: "There was an error getting the profile for " + username + ". (" +
                http.STATUS_CODES[response.statusCode] + ")"
            });
        }
    });

    // parse the data

    // print the data out
});

// connection error
request.on("error", printError());