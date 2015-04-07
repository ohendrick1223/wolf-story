$(document).ready(function(){
  pulse();
  // fadeIn();
  wolfDeerCoyote();
  coyoteFox();
  deerBearStream();
  beaverStream();
  tooltips();
});

var animals = ["wolf", "deer", "fox", "amphib", "beaver", "bird", "bear", "fish", "coyote", "veg-stream"];

function pulse() {
  for (var j = 0; j < animals.length; j++) {
    $("#" + animals[j]).hover(function(){
      $(this).attr('class','pulse')
        .css('cursor','pointer');
    }, function () {
      $(this).attr('class','oldclass');
    });
  }
}

function wolfDeerCoyote() {
  $("#wolf").on('click', function() {
    $("#wolf .click-text").attr('class', 'hide');
    $('#arrow-to-deer').attr('class','fade-in');
    window.setTimeout(function(){
      $('#deer').attr('class','fade-in tooltip');
      $('#elk').attr('class','fade-in tooltip');
    }, 500);
    window.setTimeout(function(){
      $('#arrow-to-coyote').attr('class','fade-in');
      window.setTimeout(function() {
        $('#coyote').attr('class','fade-in');
      }, 500);
    }, 1000);
  });
}

function coyoteFox() {
  $('#coyote').on('click', function() {
    $('#arrow-to-fox').attr('class','fade-in');
    window.setTimeout(function() {
      $('#fox').attr('class','fade-in');
    }, 500);
  });
}

function deerBearStream() {
  $("#deer").on('click', function() {
    $('#arrow-to-veg').attr('class','fade-in');
    window.setTimeout(function() {
      $('#veg-stream').attr('class','fade-in');
      window.setTimeout(function() {
        $('#fish').attr('class','fade-in');
        window.setTimeout(function() {
          $('#arrow-to-elk').attr('class','fade-in');
          window.setTimeout(function() {
            $('#bear').attr('class','fade-in');
          }, 500);
        }, 1000);
      }, 1500);
    }, 800);
  });
}

function beaverStream() {
  $('#veg-stream').on('click', function() {
    $('#arrow-to-stream').attr('class','fade-in');
    window.setTimeout(function() {
      $('#beaver').attr('class','fade-in');
    }, 500);
  });
}

function tooltips() {
  $('.tooltip').tooltipster({
    theme: 'tooltipster-shadow',
    position: 'top-right',
  });
}

// var animateAnimals = ['wolf', 'deer', 'coyote', 'veg-stream'];
// var relationships = {
//   "wolf": [["arrow-to-deer", 'deer'], ['arrow-to-coyote', 'coyote']],
//   'deer': [['arrow-to-veg', 'veg-stream'], ['arrow-to-elk', 'bear']],
//   'coyote': [['arrow-to-fox', 'fox']],
//   'veg-stream': [['arrow-to-stream', 'beaver']]
// }

// function fadeIn(){
//   for (var i = 0; i < animateAnimals.length; i++) {
//     var elem = $('#' + animateAnimals[i]);
//     elem.on('click', function() {
//       for (var j = 0; j < animateAnimals.length; j++) { // i was undefined
//         var arrowElem1 = null;
//         var arrowElem2 = null;
//         var clickedAnimalConnections = relationships[animateAnimals[j]];
//         if (clickedAnimalConnections.length == 2) {
//           arrowElem1 = $('#' + clickedAnimalConnections[0][0]);
//           arrowElem2 = $('#' + clickedAnimalConnections[1][0]);
//           console.log(arrowElem1);
//           console.log(arrowElem2);
//         } else {
//           arrowElem1 = $("#" + clickedAnimalConnections[0]);
//         }
//           // .......!!!!!!
//       }
//     });
//   }