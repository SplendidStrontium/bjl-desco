// do not display a link to the currently displayed page
//$(".pages.contact").ready(function(){
//  alert("please do!");
//});

function draw(){
  var canvas = document.getElementById('blogo');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, 10, 55, 50);

    ctx.fillStyle = "rgba(0,0,200,0.5)";
    ctx.fillRect (30, 30, 55, 50);

    ctx.font = "30px serif";
    ctx.fillStyle = 'black';
    ctx.fillText("B.J. Laura & Son", 20, 120);
  }
}
