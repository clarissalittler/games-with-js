window.onload = function () {
    
    Crafty.init(1000, 350, document.getElementById('game'));
    
    Crafty.e('Floor, 2D, Canvas, Color')
	.attr({x: 0, y : 250, w: 100, h:10})
	.color('green');

    Crafty.e('Floor, 2D, Canvas, Color')
	.attr({x: 150, y : 250, w: 100, h:10})
	.color('green');
    
    Crafty.e('Floor, 2D, Canvas, Color')
	.attr({x: 300, y : 250, w: 100, h:10})
	.color('green');
    
    Crafty.e('Floor, 2D, Canvas, Color')
	.attr({x: 450, y : 250, w: 100, h:10})
	.color('green');
    
    Crafty.e('Floor, 2D, Canvas, Color')
	.attr({x: 600, y : 250, w: 100, h:10})
	.color('green');
    
    var box = Crafty.e('Player').attr({x: 0, y: 250, w: 50, h: 50})
	.color('#F00')
	.gravity('Floor');

    var exit = Crafty.e('Exit').attr({x : 650, y: 150, w:50, h: 100})
	.color('red');
    
    var button = document.getElementById("doit");
    button.addEventListener('click', solution, false);
}
