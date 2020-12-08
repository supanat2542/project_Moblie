
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

  function saveData(){
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
        // console.log(doc.data().name);
          $("#nm").append('<div>'+doc.data().name+'</div>')
      });
  });

  db.collection("book").where("type", "==", "comic")
  .onSnapshot(function(querySnapshot) {
    $("#nov").html('');
      querySnapshot.forEach(function(doc) {
        // console.log(doc.data().cover);
          $("#nov").append('<ons-carousel-item > <img src="'+doc.data().cover+'" class="'+doc.data().type+'" height="200px" width="130px"></ons-carousel-item>')
      });
  });
  db.collection("book").where("type", "==", "novel")
  .onSnapshot(function(querySnapshot) {
    $("#nol").html('');
      querySnapshot.forEach(function(doc) {
        // console.log(doc.data().name);
          $("#nol").append('<ons-carousel-item > <img src="'+doc.data().cover+'" class="'+doc.data().type+'" height="200px" width="130px"></ons-carousel-item>')
      });
  });

  db.collection("book").where("ratting", ">", 9)
  .onSnapshot(function(querySnapshot) {
    $("#rec").html('');
      querySnapshot.forEach(function(doc) {
        // console.log(doc.data().cover);
          $("#rec").append('<ons-carousel-item > <img src="'+doc.data().cover+'" class="'+doc.data().type+'" height="200px" width="130px"></ons-carousel-item>')
      });
  });
  
  function getSearch(){
    db.collection("book").where("ratting", ">", 9)
  .onSnapshot(function(querySnapshot) {
    $("#search").html('');
    console.log($("#searchBook").val());
      querySnapshot.forEach(function(doc) {
        console.log(doc.data().cover);
          $("#search").append('<ons-carousel-item ><ons-list><ons-row><img src="'+doc.data().cover+'" class="'+doc.data().type+'" height="200px .width: 130px;"><ons-col><H1>'+doc.data().name+'</H1><p>port : --------------------------------------------------------------------------------------------------------------------------------------------------------------</p></ons-col></ons-row></ons-list></ons-carousel-item>')
      });
  });
  }