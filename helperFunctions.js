Crafty.c("Player", {
    init: function () {
	this.addComponent("2D, Canvas, Color, Gravity, Motion, Delay");
	this.facing = 1;
	this.frames = 0;
	this.moving = false;
	this.queue = [];
	this.bind("Moov", function (v) {
	    this.queue.push([v.x,v.y,v.f]);
	    console.log("moov fired");
	});
	this.bind("Run", function () {
	    this.run = true;
	});
	this.run = false;
	this.projectedX = 0;
	this.projectedF = 1;
	this.bind("EnterFrame", function () {
	    if(! this.moving && this.run) {
		var f = this.queue.shift();
		if (f) {
		    this.moving = true;
		    this.frames = 100;
		    this.vy = f[1];
		    this.vx = f[0] * this.facing;
		    this.facing = this.facing * f[2];
		}
		else {
		    return;
		}
	    };
	    
	    if (this.frames > 0){
		this.frames = this.frames - 1;
	    } 
	    else {
		this.vx = 0;
		this.moving = false;
	    }
	    
	});
    },
    remove: function () {
	    Crafty.log("Player removed");
	},
    });

	 Crafty.c("Exit", {
	     init: function () {
	this.addComponent("2D, Canvas, Color"); 
    }
});

function step () {
    var player = Crafty("Player").get(0);
    player.trigger("Moov", {x : 25, y : 0, f: 1});
    player.projectedX = player.projectedX + 50*player.projectedF;
}

function jump () {
    var player = Crafty("Player").get(0);
    player.trigger("Moov", {x : 50, y : -450, f : 1});
    player.projectedX = player.projectedX + 100*player.projectedF;
}

function isAtExit (){
    var player = Crafty("Player").get(0);
    var exit = Crafty("Exit").get(0);

    return ((player.projectedX > exit._x -10) &&  (player.projectedX < exit._x + 10));
    // return player.intersect(exit._x,exit._y,exit._w,exit._h); 
}

function turnAround() {
    var player = Crafty("Player").get(0);
    player.trigger("Moov", {x : 0, y : 0, f : -1});
    player.projectedF = player.projectedF * -1;
}

function atEdge () {
    var player = Crafty("Player").get(0); 
    var ledges = Crafty("Floor").get(); 
    for (var i = 0; i < ledges.length; i = i + 1){
	if(player.projectedF > 0) {
	    var rightLedge = ledges[i]._x + ledges[i]._w;
	    var playerEdge = player.projectedX + player._w;
	    if ((playerEdge > rightLedge - 20) && (playerEdge < rightLedge + 20)){
		return true;
	    }
	}
	else {
	    var leftLedge = ledges[i]._x;
	    var playerEdge = player.projectedX;
	    if ((playerEdge > leftLedge - 20) && (playerEdge < leftLedge + 20)){
		return true;
	    } 
	}
    }
    /*
      var ledge = player.ground;
      var ledgeEdge = ledge._x + ledge._w;
      return player.intersect(ledgeEdge - 10,player._y,20,10);
    */
}

function finish () {
    var player = Crafty("Player").get(0);
    player.trigger("Run");
}
