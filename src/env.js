// ====================================================================================
// Environment -- background, and access to the physics engine
// ====================================================================================

// ====================================================================================
// Interface
var env = {
	
	// access to physics engine
	physics: null,                         // set equal to `this` variable of phaser#preload
	
	// phaser plugins
	preload: function(phasers_this) {},    // preload assets
	setup  : function()             {},    // draw background
	
	// create images & sprites
	add    : {                             // create objects
		image : function(coords, name) {}, // add image  to scene
		sprite: function(coords, name) {}, // add sprite to scene
	},
	
	// basic object manipulation
	place   : function(sprite, coords) {}, // instantaneously move sprite to coords
	to_front: function(sprite)         {}, // move sprite to front
	
	// coordinates & sizes
	nowhere: {x: 2000, y: 2000},           // default, out-of-bounds location
	scene  : {x: 3440, y: 1080},           // scene size (full background)
	window : {x: 1920, y: 1080},           // window size (viewable portion)
	
	// image object for the background
	background: null,
}

env.preload = function(phasers_this) {
	
	// Save pointer to physics engine
	env.physics = phasers_this;
	
	// Load background
	env.physics.load.image('background', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Background.png');
	
	// Load cards
	env.physics.load.image      ('ref sheet'   , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Reference%20Sheet.png');
	env.physics.load.spritesheet('full cards A', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Full%20Cards%20A.png', {frameWidth: 500, frameHeight: 700});
	env.physics.load.spritesheet('full cards B', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Full%20Cards%20B.png', {frameWidth: 500, frameHeight: 700});
	env.physics.load.spritesheet('half cards'  , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Card%20Sprites.png'  , {frameWidth: 210, frameHeight: 160});
	
	// Load buttons
	env.physics.load.image      ('log button'        , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Log%20Button.png');
	env.physics.load.image      ('help button'       , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Help%20Button.png');
	env.physics.load.image      ('restart button'    , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Restart%20Button.png');
	env.physics.load.spritesheet('action buttons'    , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Action%20Buttons.png'      , {frameWidth: 200, frameHeight:  75});
	env.physics.load.spritesheet('camera'            , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Camera%20Toggles.png'      , {frameWidth:  75, frameHeight: 175});
	env.physics.load.spritesheet('tutorial buttons'  , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Tutorial%20Buttons.png'    , {frameWidth: 200, frameHeight:  75});
	env.physics.load.spritesheet('full screen button', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Full%20Screen%20Button.png', {frameWidth:  75, frameHeight:  75});
	
	// Load text
	env.physics.load.spritesheet('age text', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Age%20Text.png'      , {frameWidth: 300, frameHeight: 120});
	env.physics.load.spritesheet('delta'   , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Delta.png'         , {frameWidth: 100, frameHeight:  67});
	env.physics.load.spritesheet('numbers' , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Numbers.png'       , {frameWidth:  50, frameHeight:  67});
	
	// Load victory screen
	env.physics.load.spritesheet('victory' , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Victory%20Screen.png', {frameWidth: 1100, frameHeight: 650});
	
	// Tutorial instructions
	env.physics.load.spritesheet('main instructions'     , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Main%20Instructions.png'     , {frameWidth:  1100, frameHeight: 650});
	env.physics.load.spritesheet('first buy instructions', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/First%20Buy%20Instructions.png', {frameWidth: 412.5, frameHeight: 250});
	env.physics.load.spritesheet('later buy instructions', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Later%20buy%20instructions.png', {frameWidth:  1100, frameHeight: 650});
	env.physics.load.spritesheet('final instructions'   , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Final%20Instructions.png'    , {frameWidth:   650, frameHeight: 300});
	
	// Shaders
	env.physics.load.spritesheet('vertical shaders' , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Vertical%20Shaders.png' , {frameWidth:  300, frameHeight: 1000});
	env.physics.load.image      ('horizontal shader', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Horizontal%20Shader.png');
	env.physics.load.image      ('single shader', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Single%20Shader.png');
	
	// Tutorial arrows
	env.physics.load.image('play arrow'        , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Play%20arrow.png');
	env.physics.load.image('buy arrow'         , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Buy%20arrow.png');
	env.physics.load.image('ref arrow'         , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Ref%20arrow.png');
	env.physics.load.image('log arrow'         , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Log%20arrow.png');
	env.physics.load.image('explanation arrow' , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Explanation%20arrow.png');
	env.physics.load.image('top card arrow'    , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Top%20card%20arrow.png');
	env.physics.load.image('full screen arrow' , 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Full%20Screen%20Arrow.png');
	env.physics.load.spritesheet('camera arrow', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Camera%20arrows.png', {frameWidth: 700, frameHeight: 500});
	
	// Load main symbol
	env.physics.load.image('main symbol', 'https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/TitansOfEden.png');
}

env.setup = function() {
	let mid_pt = {x: env.scene.x/2, y: env.scene.y/2}
	env.background = env.add.image(mid_pt, 'background');
}

env.add.image = function(coords, name) {
	return env.physics.add.image(coords.x, coords.y, name);
}

env.add.sprite = function(coords, name) {
	return env.physics.physics.add.sprite(coords.x, coords.y, name);
}

env.place = function(sprite, coords) {
	// move sprite
	if (sprite.body != null) {
		sprite.body.reset(coords.x, coords.y);
	// move image
	} else {
		sprite.x = coords.x;
		sprite.y = coords.y;
	}
}

env.to_front = function(sprite) {
	env.physics.children.bringToTop(sprite);
}