document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'LibrayPage') {
      page.querySelector('#push-button').onclick = function() {
        var myNavigator = document.getElementById('#myNavigator-Libray');
        myNavigator.pushPage('page/Comicp.html');
      };
    } else if (page.id === 'ComicPage') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });