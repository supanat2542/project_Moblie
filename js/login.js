$(function() {


    $("#signin").click(function() {

        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithRedirect(provider);

        firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // ...
            }
            // The signed-in user info.
            var user = result.user;
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            $("#error").text(errorMessage)
                // ...
        });

    });
    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
            // User is signed in.
            window.location.href = './index.html';
        }
        // ...
    });
});