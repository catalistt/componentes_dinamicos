$(document).ready(function() {
  console.log( "ready!" );
  $(".close").click(hideAlert);
  $(".segundo").click(toggleContainer);
  $(".collapsible").click(toggleCollapsible);
});

function hideAlert(){
  $(".alert-warning").hide();
}

function toggleContainer(){
  var containerId = $(this).data("target");
  $(containerId).toggle();
}

//
//function toggleCollapsible(){
//  var coll = document.getElementsByClassName("collapsible");
//  var i;

//  for (i = 0; i < coll.length; i++) {
//    coll[i].addEventListener("click", function() {
//      this.classList.toggle("active");
//      var content = this.nextElementSibling;
//      if (content.style.display === "block") {
//        content.style.display = "none";
 //     } else {
//       content.style.display = "block";
//      }
//    });
//  }}

function toggleCollapsible() {
  var id_object=$(this).data("target");
  $(id_object).toggle();
  $(".collapse").not(id_object).hide();
}