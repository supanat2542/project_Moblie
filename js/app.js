document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === "HomePage") {
      page.querySelector('#push-novel_1').onclick = function() {
        document.querySelector('#myNavigator').pushPage('/detail/Novelp.html', {data: {title: 'Page 2_1'}});
      };
      page.querySelector('#push-novel_2').onclick = function() {
        document.querySelector('#myNavigator').pushPage('/detail/Novelp.html', {data: {title: 'Page 2_2'}});
      };
      page.querySelector('#push-comic_3').onclick = function() {
        document.querySelector('#myNavigator').pushPage('/detail/Comicp.html', {data: {title: 'Page 2_3'}});
      };
    } else if (page.id === "ComicPage") {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
      page.querySelector('ons-row ons-col .head').innerHTML = page.data.title;
    }else if (page.id === "NovelPage") {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        page.querySelector('ons-row ons-col .head').innerHTML = page.data.title;
      }
  });

