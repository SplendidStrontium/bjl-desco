// do not display a link to the currently displayed page
//$(".pages.contact").ready(function(){
//  alert("please do!");
//});

$(document).ready(function draw(){
  var canvas = document.getElementById('blogo');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    /*draw the bolt top for underline*/
    drw_bolt(ctx, 20, 120);
    drw_bolt(ctx, 45, 120);
    drw_bolt(ctx, 70, 120);

    /*text bj laura*/
    drw_title(ctx);
  }
});

/* draw bolt */
function drw_bolt(context, strt_x, strt_y){
  var topleft_x	  = strt_x + 4;
  var topleft_y	  = strt_y - 6;
  var topright_x  = strt_x + 12;
  var topright_y  = strt_y - 6;
  var midright_x  = strt_x + 16;
  var midright_y  = strt_y;
  var btmright_x  = strt_x + 12;
  var btmright_y  = strt_y + 6;
  var btmleft_x	  = strt_x + 4;
  var btmleft_y	  = strt_y + 6;
  context.fillStyle = '#778899'; /*hsb 210 22 60*/
  context.beginPath();
  context.moveTo(strt_x,strt_y);
  context.lineTo(topleft_x,topleft_y);
  context.lineTo(topright_x,topright_y);
  context.lineTo(midright_x,midright_y);
  context.lineTo(btmright_x,btmright_y);
  context.lineTo(btmleft_x,btmleft_y);
  context.fill();
  
  var height = 5;
  context.fillStyle = '#637180'; /*left*/
  context.beginPath();
  context.moveTo(strt_x,strt_y);
  context.lineTo(btmleft_x,btmleft_y);
  context.lineTo(btmleft_x,btmleft_y + height);
  context.lineTo(strt_x,strt_y + height);
  context.fill();

  context.fillStyle = '#95aabf'; /*middle*/
  context.beginPath();
  context.moveTo(btmleft_x,btmleft_y);
  context.lineTo(btmright_x,btmright_y);
  context.lineTo(btmright_x,btmright_y + height);
  context.lineTo(btmleft_x,btmleft_y + height);
  context.fill();

  context.fillStyle = '#3c444d'; /*right*/
  context.beginPath();
  context.moveTo(btmright_x,btmright_y);
  context.lineTo(midright_x,midright_y);
  context.lineTo(midright_x,midright_y + height);
  context.lineTo(btmright_x,btmright_y + height);
  context.fill();
}

/* draw title text */
function drw_title(context){
  context.font = "30px serif";
  context.fillStyle = 'black';
  context.fillText("B.J. Laura & Son", 20, 70);
}
