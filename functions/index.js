const functions = require('firebase-functions');

const firebase = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.enterDisplayName = functions.auth.user().onCreate((user)=>{

    const email = user.email;
    const displayName = user.displayName;
    //Write the displayName into firebases
    return ;
});