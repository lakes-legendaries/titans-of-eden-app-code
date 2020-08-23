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
	env.physics.load.image('background', 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Background.png');
	
	// Load cards
	env.physics.load.image      ('ref sheet'   , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Reference%20Sheet.png');
	env.physics.load.spritesheet('full cards A', 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Full%20Cards%20A.png', {frameWidth: 500, frameHeight: 700});
	env.physics.load.spritesheet('full cards B', 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Full%20Cards%20B.png', {frameWidth: 500, frameHeight: 700});
	env.physics.load.spritesheet('half cards'  , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Card%20Sprites.png'  , {frameWidth: 210, frameHeight: 160});
	
	// Load buttons
	env.physics.load.image      ('log button'        , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Log%20Button.png');
	env.physics.load.image      ('help button'       , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Help%20Button.png');
	env.physics.load.image      ('restart button'    , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Restart%20Button.png');
	env.physics.load.image      ('lfs button'        , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Large%20Full%20Screen%20Button.png');
	env.physics.load.image      ('x button'          , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/X%20Button.png');
	env.physics.load.spritesheet('action buttons'    , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Action%20Buttons.png'      , {frameWidth: 200, frameHeight:  75});
	env.physics.load.spritesheet('camera'            , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Camera%20Toggles.png'      , {frameWidth:  75, frameHeight: 175});
	env.physics.load.spritesheet('tutorial buttons'  , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Tutorial%20Buttons.png'    , {frameWidth: 200, frameHeight:  75});
	env.physics.load.spritesheet('full screen button', 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Full%20Screen%20Button.png', {frameWidth:  75, frameHeight:  75});
	
	// Load text
	env.physics.load.spritesheet('age text', 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Age%20Text.png'      , {frameWidth: 300, frameHeight: 120});
	env.physics.load.spritesheet('delta'   , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Delta.png'         , {frameWidth: 100, frameHeight:  67});
	env.physics.load.spritesheet('numbers' , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Numbers.png'       , {frameWidth:  50, frameHeight:  67});
	
	// Load victory screen
	env.physics.load.spritesheet('victory' , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Victory%20Screen.png', {frameWidth: 1100, frameHeight: 650});
	
	// Tutorial instructions
	env.physics.load.spritesheet('main instructions a'     , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Main%20Instructions A.png'     , {frameWidth:  1100, frameHeight: 650});
	env.physics.load.spritesheet('main instructions b'     , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Main%20Instructions B.png'     , {frameWidth:  1100, frameHeight: 650});
	env.physics.load.spritesheet('first buy instructions', 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/First%20Buy%20Instructions.png', {frameWidth: 412.5, frameHeight: 250});
	env.physics.load.spritesheet('later buy instructions'  , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Later%20buy%20instructions.png', {frameWidth:  1100, frameHeight: 650});
	env.physics.load.spritesheet('final instructions'      , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Final%20Instructions.png'    , {frameWidth:   650, frameHeight: 300});
	env.physics.load.image      ('super-effective'         , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Super%20Effective%20Chain.png');
	
	// Shaders
	env.physics.load.spritesheet('vertical shaders' , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Vertical%20Shaders.png' , {frameWidth:  300, frameHeight: 1000});
	env.physics.load.image      ('horizontal shader', 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Horizontal%20Shader.png');
	env.physics.load.image      ('single shader', 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Single%20Shader.png');
	
	// Tutorial arrows
	env.physics.load.image('play arrow'        , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Play%20arrow.png');
	env.physics.load.image('buy arrow'         , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Buy%20arrow.png');
	env.physics.load.image('ref arrow'         , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Ref%20arrow.png');
	env.physics.load.image('log arrow'         , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Log%20arrow.png');
	env.physics.load.image('explanation arrow' , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Explanation%20arrow.png');
	env.physics.load.image('top card arrow'    , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Top%20card%20arrow.png');
	env.physics.load.image('full screen arrow' , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Full%20Screen%20Arrow.png');
	env.physics.load.image('surge arrow'       , 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Surge%20arrow.png');
	env.physics.load.spritesheet('camera arrow', 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/Camera%20arrows.png', {frameWidth: 700, frameHeight: 500});
	
	// Load main symbol
	env.physics.load.image('main symbol', 'https://lakes-legendaries.github.io/titans-of-eden-app-assets/TitansOfEden.png');
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