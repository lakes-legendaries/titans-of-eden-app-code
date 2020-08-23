// ====================================================================================
// Loading screen
// ====================================================================================

// ====================================================================================
// Interface
var loading = {
	preload: function() {}, // phaser plugin
	setup  : function() {}, // phaser plugin, destroy loading objects
	update : function() {}, // phaser plugin
	done   :         false, // whether rest of game can proceed
}

loading.preload = function() {
	
	// make progress box/bar objects
	loading.background    = env.physics.add.graphics();
	loading.progressBox   = env.physics.add.graphics();
	loading.progressBar   = env.physics.add.graphics();
	
	// design background
	loading.background.fillStyle(0x000000, 1);
	loading.background.fillRect(0, 0, env.window.x, env.window.y);
	
	// design progress box
	loading.progressBox.fillStyle(0xFFFFFF, 1);
	loading.progressBox.fillRect(env.window.x/2 - 160, env.window.y/2-10 + 150, 320, 50);
	
	
	// make update for progress bar
	env.physics.load.on('progress', function (value) {
		loading.progressBar.clear();
		loading.progressBar.fillStyle(0x000000, 1);
		loading.progressBar.fillRect(env.window.x/2 - 300 / 2, env.window.y/2 + 150, 300 * value, 30);
	});
	
	// Zero-out counter
	loading.counter = 0;
}

loading.setup = function() {
	if (loading.done) {return;}
	
	// make main symbol
	loading.main_symbol = env.add.image({x: env.window.x/2, y: env.window.y/2 - 200}, 'main symbol');
	loading.main_symbol.setScale(0.33).setAlpha(0);
	
	// bring everything to front
	env.to_front(loading.background);
	env.to_front(loading.progressBox);
	env.to_front(loading.progressBar);
	env.to_front(loading.main_symbol);
	
	// add full screen button to queue
	loading.fsbutton = env.add.image({x:  815, y: 540}, 'lfs button');
	loading.xbutton  = env.add.image({x: 1440, y: 390}, 'x button');
	loading.fsbutton.visible = false;
	loading.xbutton .visible = false;
	if (game.phaser.scale.displaySize.width < 1000) {
		move.fade_in(loading.fsbutton);
		move.fade_in(loading.xbutton);
		loading.fsbutton.setInteractive().on('pointerdown', () => {maximize.scale.toggleFullscreen();});
		loading.xbutton.setInteractive ().on('pointerdown', () => {loading.fsbutton.visible = false; loading.xbutton.visible = false;});
	}
}

loading.update = function() {
	if (!loading.done) {
		let cur_alpha = loading.main_symbol.alpha;
		if (loading.counter == 0) {
			if (cur_alpha < 1) {
				loading.main_symbol.setAlpha(cur_alpha + 0.05);
			} else {
				loading.counter++
			}
		} else if (loading.counter++ >= 40) {
			if (cur_alpha > 0) {
				loading.background .setAlpha(cur_alpha - 0.05);
				loading.progressBox.setAlpha(cur_alpha - 0.05);
				loading.progressBar.setAlpha(cur_alpha - 0.05);
				loading.main_symbol.setAlpha(cur_alpha - 0.05);
			} else {
				loading.background .destroy();
				loading.progressBox.destroy();
				loading.progressBar.destroy();
				loading.main_symbol.destroy();
				loading.done = true;
			}
		}
	}
}