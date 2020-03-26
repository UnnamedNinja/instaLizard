
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

//НОРМАЛЬНА ПРОКРУТКА В МОДАЛАХ
var modalBody = document.querySelectorAll('.modal-body');
var modalNavBtn = document.querySelectorAll('.modal .nav-link');
for (let i = 0; i < modalNavBtn.length; i++) {
  modalNavBtn[i].addEventListener('click', function() {
    if (i <= 3) {
      topModalFunction(0);
    }
    else if (i > 3 && i <= 7) {
      topModalFunction(1);
    }
    else {
      topModalFunction(2);
    }
  });
}

function topModalFunction(counter) {
  modalBody[counter].scrollTop = 0;
}

//СХОВАТИ МЕНЮ ПРИ КЛІКУ
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});