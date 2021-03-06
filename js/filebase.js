
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
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

db.collection("post")
  .onSnapshot(function (querySnapshot) {
    $("#nm").html('');
    querySnapshot.forEach(function (doc) {
      $("#nm").append('<div>' + doc.data().name + '</div>')
    });
  });

db.collection("book").where("type", "==", "comic")
  .onSnapshot(function (querySnapshot) {
    $("#nov").html('');
    querySnapshot.forEach(function (doc) {
      $("#nov").append('<ons-carousel-item > <img onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px" width="130px"></ons-carousel-item>')
    });
  });

db.collection("book").where("type", "==", "novel")
  .onSnapshot(function (querySnapshot) {
    $("#nol").html('');
    querySnapshot.forEach(function (doc) {
      $("#nol").append('<ons-carousel-item > <img onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px" width="130px"></ons-carousel-item>')
    });
  });

db.collection("book").where("ratting", ">", 9)
  .onSnapshot(function (querySnapshot) {
    $("#rec").html('');
    querySnapshot.forEach(function (doc) {
      $("#rec").append('<ons-carousel-item > <img onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px" width="130px"></ons-carousel-item>')
    });
  });
function getSearch() {
  db.collection("book").where("name", "==", $("#searchBook").val())
    .onSnapshot(function (querySnapshot) {
      $("#search").html('');
      console.log($("#searchBook").val());
      querySnapshot.forEach(function (doc) {
        $("#search").append('<ons-carousel-item ><ons-list><ons-row><img onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px .width: 130px;"><ons-col><H1>' + doc.data().name + '</H1><p>port : <p  style="font-size: 15px;">port :  ' + doc.data().post + ' </p></p></ons-col></ons-row></ons-list></ons-carousel-item>')
      });
    });
}

let arr = null;
db.collection("user").where("user", "==", "kan")
  .onSnapshot(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      arr = doc.data().book;
    })
    getBook(arr)
  });

function getBook(boo) {
  console.log(boo);
  $("#libary").html('');
  for (let i = 0; i < boo.length; i++) {
    db.collection("book").where("name", "==", boo[i])
      .onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.data().name);
          $("#libary").append('<ons-carousel-item ><ons-list><ons-row><img  onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px ,width: 130px;"><ons-col><H1>' + doc.data().name + '</H1><p  style="font-size: 15px;">port :  ' + doc.data().post + ' </p></ons-col></ons-row></ons-list></ons-carousel-item>')
        });
      });
  }
}


    db.collection("book").where("week", "==","free")
      .onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.data().name);
          $("#week").append('<ons-carousel-item ><ons-list><ons-row><img  onclick="clickBook(`' + doc.data().name + '`,`' + doc.data().type + '`)" src="' + doc.data().cover + '" class="' + doc.data().type + '" height="200px ,width: 130px;"><ons-col><H1>' + doc.data().name + '</H1><ons-row>Free to Week</ons-row><p  style="font-size: 10px;">port :  ' + doc.data().post + ' </p></ons-col></ons-row></ons-list></ons-carousel-item>')
        });
      });


function clickBook() {
  getRead(arguments[0])
  
  
}

function getRead() {
  document.querySelector('#myNavigator').pushPage('/detail/Novelp.html');
  $("#readc").html('');
  db.collection("book").where("name", "==", arguments[0])
 
    .onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        $("#readc").append('<ons-row><ons-row class="headd"><h1 >' + doc.data().name + '</h1></ons-row><img src="' + doc.data().cover + '" class="' + doc.data().type + '" height="300px"> </ons-row> <ons-row><ons-col><ons-row><ons-row class="pad">Author</ons-row><ons-row class="pad20">' + " " + doc.data().author + '</ons-row></ons-row></ons-col> </ons-row ><div class="headd1"><h3>Plot Summary</h3></div></ons-row><ons-row>' + doc.data().post + '</p></ons-row></div><ons-button onclick="clickRead(`' + doc.data().name + '`,`' + doc.data().type + '`)">Read</ons-button>')
      });
    });
}

function clickRead() {
  getPosts(arguments[0])
  document.querySelector('#myNavigator').pushPage('/detail/Comicp.html');
  
}

function getPosts() {
  $("#posts").html('');
  db.collection("book").where("name", "==", arguments[0])
    .onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        $("#posts").append('<ons-row><ons-row><h1>' + doc.data().name + '</h1></ons-row><img src="' + doc.data().cover + '" class="' + doc.data().type + '" height="300px"><ons-row></ons-row> </ons-row><div id="getPage"></div>')
        getPage(doc.data().name,doc.data().pix)
      });
    });
}
function getPage(){
  $("#getPage").html('');
  for (let i = 0; i < arguments[1].length; i++) {
    db.collection("book").where("name", "==",arguments[0])
      .onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.data().name);
          $("#getPage").append('<ons-row><ons-row></ons-row><img src="' + doc.data().pix[i] + '" height="300px"></ons-row><ons-row><div class="text_center"><h3>Page : ' + (i+1) + '/' + doc.data().pix.length + '</h3></div></ons-row>')
        });
      });
  }



}

function myFunction() {
  console.log("kan")
  var element = document(`.dark`);
  element.classList.toggle("dark-mode");
}

function login() {

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithRedirect(provider);

  firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}