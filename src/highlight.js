// ====================================================================================
// Highlight cards
// ====================================================================================

// ====================================================================================
// Interface
var highlight = {
	
	// as array - highlight for each card
	
	// setup
	setup : function()               {}, // phaser plugin
	
	// change state
	add   : function(highlight_card) {}, // add highlight to card_num in hand
	toggle: function(highlight_card) {}, // toggle active/inactive
	clear : function()               {}, // remove all highlights
	
	// meta-data
	active: function(highlight_card) {}, // return true if card is highlighted
	any_active: function()           {}, // return true if any cards are highlighted
}

highlight.setup = function() {
	for (let card_num = 0; card_num < card.num; card_num++) {
		highlight[card_num] = env.add.image(env.nowhere, 'single shader');
	}
}

highlight.add = function(highlight_card) {
	for (let d = 0; d < zone.count(player.you, zone.hand); d++) {
		let card_num = zone.get(player.you, zone.hand, d);
		card[card_num].sprite.setDepth(2*(d+1));
	}
	env.place(highlight[highlight_card], card[highlight_card].sprite);
	highlight[highlight_card].setDepth(card[highlight_card].sprite.depth-1);
}

highlight.toggle = function(highlight_card) {
	if (highlight.active(highlight_card)) {
		env.place(highlight[highlight_card], env.nowhere);
	} else {highlight.add(highlight_card);}
}

highlight.clear = function() {
	for (let card_num = 0; card_num < card.num; card_num++) {
		env.place(highlight[card_num], env.nowhere);
	}
}

highlight.active = function(highlight_card) {
	return highlight[highlight_card].x != env.nowhere.x || highlight[highlight_card].y != env.nowhere.y;
}

highlight.any_active = function() {
	for (let card_num = 0; card_num < card.num; card_num++) {
		if (highlight.active(card_num)) {return true;}
	}
	return false;
}