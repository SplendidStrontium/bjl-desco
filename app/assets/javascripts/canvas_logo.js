// do not display a link to the currently displayed page
//$(".pages.contact").ready(function(){
//  alert("please do!");
//});

function draw(){
  var canvas = document.getElementById('blogo');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    /*draw the bolt top for underline*/
    
      ctx.fillStyle = '#778899'; /*hsb 210 22 60*/
      ctx.beginPath();
      ctx.moveTo(20,120);
      ctx.lineTo(24,114);
      ctx.lineTo(32,114);
      ctx.lineTo(36,120);
      ctx.lineTo(32,126);
      ctx.lineTo(24,126);
      ctx.fill();

      ctx.fillStyle = '#637180'; /*left*/
      ctx.beginPath();
      ctx.moveTo(20,120);
      ctx.lineTo(24,126);
      ctx.lineTo(24,131);
      ctx.lineTo(20,125);
      ctx.fill();

    ctx.fillStyle = '#95aabf'; /*middle*/
    ctx.beginPath();
    ctx.moveTo(24,126);
    ctx.lineTo(32,126);
    ctx.lineTo(32,131);
    ctx.lineTo(24,131);
    ctx.fill();

    ctx.fillStyle = '#3c444d'; /*right*/
    ctx.beginPath();
    ctx.moveTo(32,126);
    ctx.lineTo(36,120);
    ctx.lineTo(36,125);
    ctx.lineTo(32,131);
    ctx.fill();

    /*text bj laura*/
    drw_title(ctx);
  }
}

/* draw title text */
function drw_title(context){
  context.font = "30px serif";
  context.fillStyle = 'black';
  context.fillText("B.J. Laura & Son", 20, 70);
}
