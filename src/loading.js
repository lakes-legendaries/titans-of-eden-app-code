// ====================================================================================
// Loading screen
// ====================================================================================

// ====================================================================================
// Interface
var loading = {
	preload: function() {}, // phaser plugin
	setup  : function() {}, // phaser plugin
	done   :         false, // whether rest of game can proceed
}

loading.preload = function() {
	
	// create cover images
	loading.background = [];
	loading.background_loaded = [];
	loading.background_order = [0, 4, 5, 1, 2, 3, 6];
	for (let g = 0; g < 7; g++) {
		let index = loading.background_order[g];
		loading.background[index] = env.add.image({x: env.window.x/2, y: env.window.y/2}, 'cover0');
		loading.background_loaded[index] = false;
	}
	loading.buttons_placed = false;
	
	// fade in cover as assets load (sort of like a progress bar)
	env.physics.load.on('progress', function (value) {
		for (let g = 1; g < 7; g++) {
			let index = loading.background_order[g];
			if (loading.background_loaded[index]) {continue;}
			if (value > g / 8.0) {
				loading.background[index].setTexture('cover' + String(index));
				loading.background_loaded[index] = true;
			} else {break;}
		}
		if (value >= 1 && !loading.buttons_placed) {
			loading.play_fs_button = env.add.sprite({x:  540, y: 950}, 'title buttons').setFrame(0).setInteractive();
			loading.play_iw_button = env.add.sprite({x: 1380, y: 950}, 'title buttons').setFrame(1).setInteractive();
			loading.buttons_placed = true;
		}
	});
}

loading.setup = function() {
	// skip if restarting
	if (loading.done) {return;}
	
	// bring everything to front, in the correct order
	for (let g = 0; g < 7; g++) {
		env.to_front(loading.background[loading.background_order[g]]);
	}
	env.to_front(loading.play_fs_button);
	env.to_front(loading.play_iw_button);
	
	// make buttons interactive
	loading.play_fs_button.on('pointerdown', () => {maximize.scale.toggleFullscreen(); loading.start();})
	loading.play_iw_button.on('pointerdown', () => {loading.start();})
}

// ====================================================================================
// Backend
loading.start = function() {
	for (let g = 0; g < 7; g++) {
		loading.background[g].destroy();
	}
	loading.play_fs_button.destroy();
	loading.play_iw_button.destroy();
	loading.done = true;
}