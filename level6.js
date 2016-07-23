window.onload = function () {

    Crafty.init(500, 700, document.getElementById('game'));

    Crafty.e('Floor, 2D, Canvas, Color')
	.attr({x: 0, y: 500, w: 100, h:10})
	.color('green');

    Crafty.e('Floor, 2D, Canvas, Color')
	.attr({x: 150, y: 400, w: 100, h:10})
	.color('green');
    
    Crafty.e('Floor, 2D, Canvas, Color')
	.attr({x: 0, y: 300, w: 100, h:10})
	.color('green');

    var box = Crafty.e('Player').attr({x: 0, y: 500, w: 50, h: 50})
	.color('#F00')
	.gravity('Floor');

    var exit = Crafty.e('Exit').attr({x : 0, y: 200, w:50, h: 100})
	.color('red');
    
    var button = document.getElementById("doit");
    button.addEventListener('click', solution, false);

}
