// $(document).ready(function() {
// $('#button').click(function(event) {
//   console.log($('#pass').val());
//
//   var lastDigit = $('#pass').val().length - 1;
//   console.log($('#pass').val().charAt(lastDigit));



//
//
//   });
// });

// var lastDigit = $('#pass').val().length - 1;
// $("#pass").keydown(function() {
//
//   document.getElementById("pass").text.charAt(lastDigit-1).value = "*";
//
// });

$("#pass").on("keydown",  function(){
  $(this).prevAll().add($(this)).addClass("star");
  $(this).nextAll().removeClass( "star" );
});
