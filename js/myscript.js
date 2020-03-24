
//Get the button
var mybutton = document.getElementById("myBtn");
var prevScrollpos = window.pageYOffset;
document.getElementById("mainNav").style.top = "0";

window.onscroll = function() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }


  var currentScrollPos = window.pageYOffset;
  document.getElementById("mainNav").style.top = "0";
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("mainNav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}