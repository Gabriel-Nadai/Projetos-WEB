var game = new Phaser.Game
(800, 600, Phaser.AUTO, '',
{	
	preload: preload,
	create: create,
	update: update
});
	var	player;
	var plataforms;
	var cursors;
	var stars;
	var score = 0;
	var scoreText;

	function preload(){
		game.load.image('sky','assets/sky.png');
		game.load.image('ground','assets/platform.png');
		game.load.image('blocks','assets/tijolo.png');
		game.load.spritesheet('jogador','assets/dude.png', 32, 48);


	}
	function create(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.add.sprite(0, 0, 'sky');

		platforms = game.add.group();
		platforms.enableBody = true;
		var ground = platforms.create(0, game.world.height - 64, 'ground');
		ground.scale.setTo(2, 2);
		ground.body.immovable = true;

		var	ledge = platforms.create(0, 100, 'blocks');
		ledge.body.immovable = true;

		ledge = platforms.create(200, 180, 'blocks');
		ledge.body.immovable = true;

		ledge = platforms.create(400, 260, 'blocks');
		ledge.body.immovable = true;

		ledge = platforms.create(600, 340, 'blocks');
		ledge.body.immovable = true;

		ledge = platforms.create(400, 420, 'blocks');
		ledge.body.immovable = true;

		ledge = platforms.create(200, 500, 'blocks');
		ledge.body.immovable = true;

		player = game.add.sprite(32, game.world.height - 150, 'jogador');

		game.physics.arcade.enable(player);

		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);

		cursors = game.input.keyboard.createCursorKeys();


	}
	function update(){
		var hitPlatform = game.physics.arcade.collide(player, plataforms);

		player.body.velocity.x = 0;

		if(cursors.left.isDown){
			player.body.velocity.x = -150;
			player.animations.play('left');
		}
		else if (cursors.right.isDown){
			player.body.velocity.x = -150;
			player.animations.play('right');
		}
		else {
			player.animations.stop();
			player.frame = 4;
		}
	}
