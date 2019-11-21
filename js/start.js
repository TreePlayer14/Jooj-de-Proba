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
    scene: [ BootScene, BattleScene, BattleScene2, BattleScene3, BattleScene4, UIScene, UIScene2, UIScene3, UIScene4, UIScene5, UIScene6, VictoryScene, DefeatScene, Loja, Acontecimento1, Acontecimento2, Acontecimento3, Acontecimento4, Historia1, Historia2, Historia3, Historia4, Historia5, Historia6, Historia7, Historia8, Historia9, Historia10, Historia11, Ending1, Ending2, Ending3, Ending4, Ending5, Ending6, Ending7, Creditos, Creditos2, Creditos3 ]
};

var game = new Phaser.Game(config);
