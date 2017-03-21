(function () {

    "use strict";

    global.$    = require("jquery");

    require('fullpage.js');

    var colash = {
      1 : {
        "url" : "img/colash-1.png",
        "color" : "#407a15"
      },
      2 : {
        "url" : "img/colash-2.jpg",
        "color" : "#d8384b"
      },
      3 : {
        "url" : "img/colash-3.jpg",
        "color" : "#ffba00"
      },
      4 : {
        "url" : "img/colash-4.jpg",
        "color" : "#003e3a"
      },
      5 : {
        "url" : "img/colash-5.jpg",
        "color" : "#64462c"
      }
    }

    function countProperties(obj) {
        return Object.keys(obj).length;
    }

    function initSlides(obj) {


      for ( var i = 1; i <= obj; i++ ){
        if(i != obj) {
          $('#fullpage').append('<div class="section" style="background-image:url('+colash[i].url+');background-color:'+colash[i].color+'"><div style="background-image:linear-gradient('+colash[i].color+', '+colash[(i+1)].color+')" class="gradient"></div> </div>');
        } else {
          $('#fullpage').append('<div class="section" style="background-image:url('+colash[i].url+');background-color:'+colash[i].color+'"></div>');
        }
      }
      $('#fullpage').fullpage();

    }

    $(function () {

      initSlides(countProperties(colash));


    });

}());
