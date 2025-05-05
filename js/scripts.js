/* alert("Hello"); */


$(document).ready(function () {
    console.log("jQuery is working with CDN!");
  });

  function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }