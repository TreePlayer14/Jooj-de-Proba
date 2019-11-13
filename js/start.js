// the message class extends containter 
var config = {
    type: Phaser.AUTO,
    parent: "content",
    width: 520,
    height: 440,
    zoom: 2,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [ BootScene, BattleScene, BattleScene2, UIScene, UIScene2, UIScene3, VictoryScene, DefeatScene, Loja ]
};

var game = new Phaser.Game(config);
