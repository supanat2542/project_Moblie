// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC5F0hYIZihQTOyRfVGTcDtjzqCqvQH1d8",
    authDomain: "bookbabry.firebaseapp.com",
    databaseURL: "https://bookbabry-default-rtdb.firebaseio.com",
    projectId: "bookbabry",
    storageBucket: "bookbabry.appspot.com",
    messagingSenderId: "11425908254",
    appId: "1:11425908254:web:228396eb9f7b9624ea100f",
    measurementId: "G-N5GZC90HB5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();



function saveData() {
    db.collection("post").add({
            name: $("#namePost").val()
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

db.collection("post")
    .onSnapshot(function(querySnapshot) {
        $("#nm").html('');
        querySnapshot.forEach(function(doc) {
            $("#nm").append('<div>' + doc.data().name + '</div>')
        });
    });

db.collection("book").where("type", "==", "comic")
    .onSnapshot(function(querySnapshot) {
        $("#nov").html('');
        querySnapshot.forEach(function(doc) {
            $("#nov").append('<ons-carousel-item > <img onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px" width="130px"></ons-carousel-item>')
        });
    });
db.collection("book").where("type", "==", "novel")
    .onSnapshot(function(querySnapshot) {
        $("#nol").html('');
        querySnapshot.forEach(function(doc) {
            $("#nol").append('<ons-carousel-item > <img onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px" width="130px"></ons-carousel-item>')
        });
    });

db.collection("book").where("ratting", ">", 9)
    .onSnapshot(function(querySnapshot) {
        $("#rec").html('');
        querySnapshot.forEach(function(doc) {
            $("#rec").append('<ons-carousel-item class="mySlides" > <img onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px" width="130px"></ons-carousel-item>')
        });
    });

function getSearch() {
    db.collection("book").where("name", "==", $("#searchBook").val())
        .onSnapshot(function(querySnapshot) {
            $("#search").html('');
            console.log($("#searchBook").val());
            querySnapshot.forEach(function(doc) {
                $("#search").append('<ons-carousel-item ><ons-list><ons-row><img onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px .width: 130px;"><ons-col><H1>' + doc.data().name + '</H1><p>port : <p  style="font-size: 15px;">port :  ' + doc.data().post + ' </p></p></ons-col></ons-row></ons-list></ons-carousel-item>')
            });
        });
}

let arr = null;
db.collection("user").where("user", "==", "kan")
    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            arr = doc.data().book;
        })
        getBook(arr)
    });

function getBook(boo) {
    console.log(boo);
    $("#libary").html('');
    for (let i = 0; i < boo.length; i++) {
        db.collection("book").where("name", "==", boo[i])
            .onSnapshot(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log(doc.data().name);
                    $("#libary").append('<ons-carousel-item ><ons-list><ons-row><img  onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px ,width: 130px;"><ons-col><H1>' + doc.data().name + '</H1><p  style="font-size: 15px;">port :  ' + doc.data().post + ' </p></ons-col></ons-row></ons-list></ons-carousel-item>')
                });
            });
    }
}

function clickBook() {
    document.querySelector('#myNavigator').pushPage('/detail/Novelp.html');
    getRead(arguments[0])
}

function getRead() {
    $("#readc").html('');
    db.collection("book").where("name", "==", arguments[0])

    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            $("#readc").append('<ons-row><ons-row><h1>' + doc.data().name + '</h1></ons-row><img src="' + doc.data().cover + '" class="' + doc.data().type + '" height="300px"> </ons-row> <ons-row>  <div class="gerne"></div><ons-col><ons-row><ons-row>Author</ons-row><ons-row>' + " " + doc.data().author + '</ons-row></ons-row></ons-col> </ons-row><h3>Plot Summary</h3></ons-row><ons-row>>' + doc.data().post + '</p></ons-row></div><ons-button onclick="clickRead(`' + doc.data().name + '`,`' + doc.data().type + '`)">Read</ons-button>')
        });
    });
}

function clickRead() {
    document.querySelector('#myNavigator').pushPage('/detail/Comicp.html');
    getPosts(arguments[0])
}

function getPosts() {
    $("#posts").html('');
    db.collection("book").where("name", "==", arguments[0])
        .onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                $("#posts").append('<ons-row><ons-row><h1>' + doc.data().name + '</h1></ons-row><img src="' + doc.data().cover + '" class="' + doc.data().type + '" height="300px"><ons-row></ons-row> </ons-row><div id="getPage"></div>')
                getPage(doc.data().name, doc.data().pix)
            });
        });
}


function getPage() {
    $("#getPage").html('');
    for (let i = 0; i < arguments[1].length; i++) {
        db.collection("book").where("name", "==", arguments[0])
            .onSnapshot(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log(doc.data().name);
                    $("#getPage").append('<ons-row><ons-row></ons-row><img src="' + doc.data().pix[i] + '" height="300px"> </ons-row><ons-row><h3>Page : ' + (i + 1) + '/' + doc.data().pix.length + '</h3></ons-row>')
                });
            });
    }


}