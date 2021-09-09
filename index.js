//hides and shows navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByTagName("nav")[0].style.top = "0";
  } else {
    document.getElementsByTagName("nav")[0].style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}