let mybutton = document.getElementById("myBtn");
let prevScrollpos = window.pageYOffset;
document.getElementById("mainNav").style.top = "0";
window.onscroll = function() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  let currentScrollPos = window.pageYOffset;
  document.getElementById("mainNav").style.top = "0";
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("mainNav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let modalBody = document.querySelectorAll('.modal-body');
let modalNavBtn = document.querySelectorAll('.modal .nav-link');
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


$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});


$(".modal").on("shown.bs.modal", function()  { 
  var urlReplace = "#" + $(this).attr('id');
  history.pushState(null, null, urlReplace); 
});
$(window).on('popstate', function() { 
  $(".modal").modal('hide');
});

$(".modal .close").on("click", function()  {
  history.back();
});

$(".modal").keyup(function(e) {
  if (e.key === "Escape") {
  history.back();
 }
});

document.body.addEventListener('click', function(e) {
  if (e.target.className == "modal fade") {
    history.back();
  }
});