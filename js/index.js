$(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var email = user.email;
            // window.location.href = 'index.html';
            console.log(email);
            // ...
        } else {
            // User is signed out.
            window.location.href = 'login.html';
        }
    });



})