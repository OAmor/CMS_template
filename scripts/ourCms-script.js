/*global $ , document, window */


/* Header */
var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

/* Navbar */
var navBar = $("#topNav");
var hdrHeight = $(".header").height();


$(window).scroll(function() {
//    console.log(hdrHeight);
//    console.log($(this).scrollTop());
    // parce que le headerhaight est tjrs 200
  if( $(this).scrollTop() > hdrHeight + 140) {
    navBar.addClass("navScrolled");
  } else {
    navBar.removeClass("navScrolled");
  }
});
