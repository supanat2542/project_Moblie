// document.addEventListener('init', function(event) {
//     var page = event.target;

//     if (page.id === "HomePage") {
//       page.querySelector('#push-novel_1').onclick = function() {
//         document.querySelector('#myNavigator').pushPage('/detail/Novelp.html', {data: {title: 'Page 2_1'}});
//       };
//       page.querySelector('#push-novel_2').onclick = function() {
//         document.querySelector('#myNavigator').pushPage('/detail/Novelp.html', {data: {title: 'Page 2_2'}});
//       };
//       page.querySelector('#push-comic_3').onclick = function() {
//         document.querySelector('#myNavigator').pushPage('/detail/Comicp.html', {data: {title: 'Page 2_3'}});
//       };
//     } else if (page.id === "ComicPage") {
//       page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
//       page.querySelector('ons-row ons-col .head').innerHTML = page.data.title;
//     }else if (page.id === "NovelPage") {
//         page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
//         page.querySelector('ons-row ons-col .head').innerHTML = page.data.title;
//       }
//   });

document.addEventListener('init', function(event) {
    var page = event.target;
    console.log(page.id);

    if (page.id === 'HomePage') {
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 2000);
        }
    }
});

function signout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });

}