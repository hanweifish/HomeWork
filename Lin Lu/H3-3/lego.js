var count = 0;
$('#img').click(function(event) {
  count++;
  $('.count').text('count:' + " " + count);
});

function zero (){
  count = 0;
  $('.count').text('count:' + " " + count);
}

$('#gc').click(function(event) {
  $('.name').text('Grand Carousel');
  $('#img').attr('src', 'http://www.hanwei.us/legoclicker/img/Creator-Carousel-10196-2.jpg');
  zero();
});
$('#ct').click(function(event) {
  $('.name').text('Cargo Train');
  $('#img').attr('src', 'http://www.hanwei.us/legoclicker/img/7939.png');
  zero();
});
$('#sw').click(function(event) {
  $('.name').text("Santa's Workshop");
  $('#img').attr('src', 'http://www.hanwei.us/legoclicker/img/LEGO-2014-Winter-Village-Santas-Workshop-10245-Set-e1408126000342.jpg');
  zero();
});
$('#ge').click(function(event) {
  $('.name').text('Grand Emporium');
  $('#img').attr('src', 'http://www.hanwei.us/legoclicker/img/10211.png');
  zero();
});
$('#mc').click(function(event) {
  $('.name').text('MINI Cooper');
  $('#img').attr('src', 'http://www.hanwei.us/legoclicker/img/q3i6vycvluxercnyv5sy.jpg');
  zero();
});
$('#th').click(function(event) {
  $('.name').text('Town Hall');
  $('#img').attr('src', 'http://www.hanwei.us/legoclicker/img/10224_Back_01.jpg');
  zero();
});
