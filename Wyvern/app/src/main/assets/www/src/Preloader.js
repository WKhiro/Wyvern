var Preloader = {
	preload: function()
	{
		preloadBar = game.add.sprite(game.world.centerX,game.world.centerY,'preloaderBar');
		preloadBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(preloadBar);

		game.load.image('mainMenu-bg', 'img/mainMenu-bg.png')
		game.load.image('screen-bg', 'img/screen-bg.png');
		game.load.image('settings-bg', 'img/shop-bg.jpg');
		game.load.image('redsky', 'img/redskyloop.png');
		game.load.image('pauseScreen', 'img/pause-screen.png');

		game.load.image('shield', 'img/shield36x36-2.png');
		game.load.image('bomb', 'img/bomb36x36.png');
		game.load.image('watch', 'img/watch36x36.png');
		
		game.load.image('bombboom', 'img/redring.png');

		game.load.image('invuln', 'img/invuln2.png');
		game.load.image('bullet', 'img/bullet.png');
		game.load.image('dragon', 'img/dragon.png');
		game.load.image('fireball', 'img/fireball.png');
		game.load.image('dorito', 'img/doritos.png');
		game.load.spritesheet('explode', 'img/explode.png', 128, 128);
		game.load.spritesheet('eyes', 'img/eyes35x32.png', 35, 32, 16);
		game.load.spritesheet('letters', 'img/letters-white.png', 9, 8, 26);
		game.load.spritesheet('numbers', 'img/numbers-white.png', 9, 8, 12);
		game.load.spritesheet('meteor', 'img/meteorites.png', 32, 32, 30);
		
		game.load.bitmapFont('buttonStyle', 'img/carrier_command.png', 'img/carrier_command.xml');
		game.load.bitmapFont('titleFont', 'img/desyrel.png', 'img/desyrel.xml');
		game.load.bitmapFont('bubbleFont', 'img/shortStack.png', 'img/shortStack.xml');


		game.load.audio('buttonSFX', 'sfx/sword.mp3');
		game.load.audio('generalBGM', 'sfx/Evil Flight.mp3');
		game.load.audio('bossBGM', 'sfx/Snack of the Snake.mp3');
		
		game.load.audio('warudoSFX', 'sfx/Za Warudo.mp3');
		game.load.audio('warudoEndSFX', 'sfx/Warudo End.ogg');
		game.load.audio('clockTick', 'sfx/clockTick.ogg');
		game.load.audio('eyehit', 'sfx/384 hit.wav');
		game.load.audio('eyedeath', 'sfx/383 death.wav');
		game.load.audio('rockhit', 'sfx/355 hit.wav');
		game.load.audio('rockdeath', 'sfx/354 death.wav');
		game.load.audio('shieldUp', 'sfx/091 charge up.wav');
		game.load.audio('shieldTouch', 'sfx/125 ping.wav');
		game.load.audio('shieldDown', 'sfx/092 discharge.wav');
		game.load.audio('laserCharge', 'sfx/2a2e charge up.wav');
		game.load.audio('laserShot', 'sfx/205 discharge.wav');
		
		game.load.audio('hurt', 'sfx/884 hurt.wav');
		game.load.audio('1up', 'sfx/1-up.mp3');
		
		game.load.audio('fanfare', 'sfx/705 fanfare.wav');
		game.load.audio('bossHit1', 'sfx/378 squish.wav');
		game.load.audio('bossHit2', 'sfx/397 hurt1.wav');
		game.load.audio('bossHit3', 'sfx/398 hurt2.wav');
		game.load.audio('bossHurt', 'sfx/657 hurt.wav');
		game.load.audio('bossDying', 'sfx/674 death.wav');
		game.load.audio('bossDeath', 'sfx/sndMeltingUltraA.ogg');

		game.load.audio('theme', 'sfx/Elysium, in the Blue Sky.mp3');
		game.load.audio('level2BGM', 'sfx/Song of the Ancients - Atonement.mp3');
		

		game.load.audio('explosionSFX', 'sfx/063 explode.wav');
		

		game.load.image('pauseBtn', 'img/pause.png');
		game.load.spritesheet('button', 'img/flixel-button.png', 80, 20);
	},
	create: function()
	{
		game.add.plugin(PhaserInput.Plugin);
		theme = game.add.audio('theme', 0.3, true);
		theme.play();
		game.state.start("MainMenu");
		// game.state.start("Shop");
		// game.state.start("Hub");
	}
}