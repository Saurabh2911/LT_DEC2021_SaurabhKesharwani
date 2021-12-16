  // Sticky menu background

window.onscroll = function() {sti_Function()};

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function sti_Function() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } 
  else {
    header.classList.remove("sticky");
  }
}
