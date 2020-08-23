// ====================================================================================
// Maximize -- button to go fullscreen
// ====================================================================================

// ====================================================================================
// Interface
var maximize = {
	setup : function(scale) {}, // phaser plugin
	update: function()      {}, // phaser plugin
	scale : null,               // access to the scale controller
}

maximize.setup = function(scale) {
	maximize.scale  = scale;
	maximize.button = env.add.sprite(maximize.button_loc, 'full screen button');
	maximize.button.setInteractive().on('pointerdown', () => {maximize.scale.toggleFullscreen();});
}

maximize.update = function() {
	maximize.button.setFrame(maximize.scale.isFullscreen? 1: 0);
	if (loading.fsbutton.visible == true && maximize.scale.isFullscreen) {
		loading.fsbutton.visible = false;
		loading. xbutton.visible = false;
	}
}

// ====================================================================================
// Backend
maximize.button_loc = {x: 1582, y: 934};