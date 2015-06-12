$(document).ready(function drawbg(){
  var canvas = document.getElementById('bgfill');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    
    var ctr_x = 0;
    var ctr_y = 0;
    var rad   = 30;
    var r_prime = 35;
    var spokes = 19;
    var dist = 90;
    
    while( (ctr_x - rad) < window.innerWidth) {
    
      while( (ctr_y - rad) < window.innerHeight) {
	drw_gear(ctx, ctr_x, ctr_y, rad, r_prime, spokes);
	ctr_y = ctr_y + dist;
      }  
    ctr_x = ctr_x + dist;
    ctr_y = dist/2;

      while( (ctr_y - rad) < window.innerHeight) {
	drw_gear(ctx, ctr_x, ctr_y, rad, r_prime, spokes);
	ctr_y = ctr_y + dist;
      }  
    ctr_x = ctr_x + dist;
    ctr_y = 0;

    }
  }
});

function drw_gear(ctx, ctr_x, ctr_y, rad, r_prime, spokes) {

  ctx.beginPath();
  ctx.arc(ctr_x, ctr_y, rad, 0, 2 * Math.PI, false);
  ctx.fillStyle = '#999';
  ctx.fill();

  var n = 0;
  while (n < spokes) {
    var end_x;
    var end_y;
    var theta = (2 * n * Math.PI) / spokes; 
    end_x = ctr_x + (r_prime * Math.cos(theta));
    end_y = ctr_y + (r_prime * Math.sin(theta));
    drw_spoke(ctx, ctr_x, ctr_y, end_x, end_y);

    n++;
  }

  ctx.beginPath();
  ctx.arc(ctr_x, ctr_y, rad/2, 0, 2*Math.PI, false);
  ctx.fillStyle = '#888';
  ctx.fill();
}

function drw_spoke(ctx, ctr_x, ctr_y, end_x, end_y) {

  ctx.beginPath();
  ctx.moveTo(ctr_x, ctr_y);
  ctx.lineTo(end_x, end_y);
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#999';
  ctx.stroke();
}
