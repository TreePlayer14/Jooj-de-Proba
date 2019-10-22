var BootScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function BootScene ()
    {
        Phaser.Scene.call(this, { key: "BootScene" });
    },

    preload: function ()
    {
        // load resources
        this.load.image('fundo', 'Imagens/fundo_fase_teste.jpg');
        this.load.spritesheet("player", "assets/RPG_assets.png", { frameWidth: 16, frameHeight: 16 });
        this.load.image("dragonblue", "assets/dragonblue.png");
        this.load.image("ligma", "Imagens/ligma.png");
        this.load.image('marielle','Imagens/Archer.png');
        this.load.image('crassus','Imagens/crassus.png');
        this.load.image('yuusha','Imagens/Yuusha.png');
        this.load.image('hime','Imagens/Hime.png');
    },

    create: function ()
    {
        this.scene.start("BattleScene");
    }
});



var BattleScene = new Phaser.Class({

    Extends: Phaser.Scene,
    

    initialize:

    function BattleScene ()
    {
        Phaser.Scene.call(this, { key: "BattleScene" });
    },
    create: function ()
    {
        // Run UI Scene at the same time
        this.scene.launch("UIScene");

        this.add.image(400,200,'fundo');
        
        // player character - Crassus
        var mage = new PlayerCharacter(this, 450, 100, "crassus", 4, "Crassus", 70, 8, 0.7);
        this.add.existing(mage);

        // player character - Marielle
        var archer = new PlayerCharacter(this, 450, 150, "marielle", 1, "Marielle", 65, 20, 1);        
        this.add.existing(archer);
        
        // player character - Yuusha
        var yuusha = new PlayerCharacter(this, 390, 100, "yuusha", 2, "Yuusha", 80, 8, 1);
        this.add.existing(yuusha);

        // player character - Hime
        var healer = new PlayerCharacter(this, 390, 150, "hime", 3, "Hime", 55, 20, 1);        
        this.add.existing(healer);
        
        //var dragonblue = new Enemy(this, 50, 50, "dragonblue", null, "Dragon", 50, 3);
        //this.add.existing(dragonblue);
        
        var ligma1 = new Enemy(this, 50, 100, "ligma", null,"Ligma", 10, 3);
        var ligma2 = new Enemy(this, 50, 150, "ligma", null,"Ligma", 10, 3);
        this.add.existing(ligma1);
        this.add.existing(ligma2);

        // array with heroes
        this.heroes = [ yuusha, healer, mage, archer ];
        // array with enemies
        this.enemies = [ ligma1, ligma2 ];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);

        this.index = -1;                
    },
    nextTurn: function() {
        this.index++;
        // if there are no more units, we start again from the first one
        if(this.index >= this.units.length) {
            this.index = 0;
        }
        if(this.units[this.index]) {
            // if its player hero
            if(this.units[this.index] instanceof PlayerCharacter) {                
                this.events.emit("PlayerSelect", this.index);
            } else { // else if its enemy unit
                // pick random hero
                var r = Math.floor(Math.random() * this.heroes.length);
                // call the enemy"s attack function 
                this.units[this.index].attack(this.heroes[r]);  
                // add timer for the next turn, so will have smooth gameplay
                this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
            }
        }
    },
    // when the player have selected the enemy to be attacked
    receivePlayerSelection: function(action, target) {
        if(action == "attack") {            
            this.units[this.index].attack(this.enemies[target]);              
        }
        // next turn in 3 seconds
        this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });        
    }
});

// base class for heroes and enemies
var Unit = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Unit(scene, x, y, texture, frame, type, hp, damage) {
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame)
        this.type = type;
        this.maxHp = this.hp = hp;
        this.damage = damage; // default damage                
    },
    attack: function(target) {
        target.takeDamage(this.damage);
        this.scene.events.emit("Message", this.type + " attacks " + target.type + " for " + this.damage + " damage");
    },
    takeDamage: function(damage) {
        this.hp -= damage;
        if(this.hp <= 0) {
            this.hp = 0;
            this.alive = false;
        }
    },
});

var Enemy = new Phaser.Class({
    Extends: Unit,

    initialize:
    function Enemy(scene, x, y, texture, frame, type, hp, damage) {
        Unit.call(this, scene, x, y, texture, frame, type, hp, damage);

        this.setScale(0.5);
    }
});

var PlayerCharacter = new Phaser.Class({
    Extends: Unit,

    initialize:
    function PlayerCharacter(scene, x, y, texture, frame, type, hp, damage, escala) {
        Unit.call(this, scene, x, y, texture, frame, type, hp, damage, escala);
        // flip the image so I don"t have to edit it manually
        this.flipX = true;
        this.setScale(escala);
    },
    
});

var MenuItem = new Phaser.Class({
    Extends: Phaser.GameObjects.Text,
    
    initialize:
            
    function MenuItem(x, y, text, scene) {
        Phaser.GameObjects.Text.call(this, scene, x, y, text, { color: "#ffffff", align: "left", fontSize: 15});
    },
    
    select: function() {
        this.setColor("#f8ff38");
    },
    
    deselect: function() {
        this.setColor("#ffffff");
    }
    
});

var Menu = new Phaser.Class({
    Extends: Phaser.GameObjects.Container,
    
    initialize:
            
    function Menu(x, y, scene, heroes) {
        Phaser.GameObjects.Container.call(this, scene, x, y);
        this.menuItems = [];
        this.menuItemIndex = 0;
        this.heroes = heroes;
        this.x = x;
        this.y = y;
    },     
    addMenuItem: function(unit) {
        var menuItem = new MenuItem(0, this.menuItems.length * 20, unit, this.scene);
        this.menuItems.push(menuItem);
        this.add(menuItem);        
    },            
    moveSelectionUp: function() {
        this.menuItems[this.menuItemIndex].deselect();
        this.menuItemIndex--;
        if(this.menuItemIndex < 0)
            this.menuItemIndex = this.menuItems.length - 1;
        this.menuItems[this.menuItemIndex].select();
    },
    moveSelectionDown: function() {
        this.menuItems[this.menuItemIndex].deselect();
        this.menuItemIndex++;
        if(this.menuItemIndex >= this.menuItems.length)
            this.menuItemIndex = 0;
        this.menuItems[this.menuItemIndex].select();
    },
    // select the menu as a whole and an element with index from it
    select: function(index) {
        if(!index)
            index = 0;
        this.menuItems[this.menuItemIndex].deselect();
        this.menuItemIndex = index;
        this.menuItems[this.menuItemIndex].select();
    },
    // deselect this menu
    deselect: function() {        
        this.menuItems[this.menuItemIndex].deselect();
        this.menuItemIndex = 0;
    },
    confirm: function() {
        // when the player confirms his slection, do the action
    },
    clear: function() {
        for(var i = 0; i < this.menuItems.length; i++) {
            this.menuItems[i].destroy();
        }
        this.menuItems.length = 0;
        this.menuItemIndex = 0;
    },
    remap: function(units) {
        this.clear();        
        for(var i = 0; i < units.length; i++) {
            var unit = units[i];
            this.addMenuItem(unit.type);
        }
    },
    remap2: function(units){
        this.clear();
        for(var i=0;i < units.lenght; i++){
            var unit = units[i];
            this.addMenuItem(unit);
        }
    },
});

var HeroesMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function HeroesMenu(x, y, scene) {
        Menu.call(this, x, y, scene);
                            
    }
});

var HpMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:

    function HpMenu(x, y, scene) {
        Menu.call(this, x, y, scene);
                       
    }
});

var ActionsMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function ActionsMenu(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem("Attack");
    },
    confirm: function() {      
        this.scene.events.emit("SelectEnemies");        
    }
    
});

var EnemiesMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function EnemiesMenu(x, y, scene) {
        Menu.call(this, x, y, scene);        
    },       
    confirm: function() {        
        this.scene.events.emit("Enemy", this.menuItemIndex);
    }
});

var UIScene = new Phaser.Class({

    Extends: Phaser.GameObjects.Text,
    Extends: Phaser.Scene,
    

    initialize:

    function UIScene ()
    {
        Phaser.Scene.call(this, { key: "UIScene" });
    },

    create: function ()
    {    
        this.battleScene = this.scene.get("BattleScene");

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);
        //menu oponente        
        this.graphics.strokeRect(2, 339, 175, 100); //(2,150,90,100)
        this.graphics.fillRect(2, 339, 175, 100); //(2,150,90,100)
        //menu ataques
        this.graphics.strokeRect(178, 339, 160, 100); //(95,150,90,100)
        this.graphics.fillRect(178, 339, 160, 100); //(95,150,90,100)
        //menu herois
        this.graphics.strokeRect(339, 339, 180, 100); //(eixo x: 188, eixo y: 150, tamanho em relação a x: 130, tamanho em relação a y:100)
        this.graphics.fillRect(339, 339, 180, 100); //(188,150,130,100)
        
        // basic container to hold all menus
        this.menus = this.add.container();
                
        this.hpMenu = new HpMenu(360, 353, this);
        this.heroesMenu = new HeroesMenu(355, 353, this); //(eixo x, eixo y) = (195,153,this)       
        this.actionsMenu = new ActionsMenu(195, 353, this); //(100,153)           
        this.enemiesMenu = new EnemiesMenu(8, 353, this); //(8,153) 

        // the currently selected menu 
        this.currentMenu = this.actionsMenu;
        
        // add menus to the container
        this.menus.add(this.hpMenu);
        this.menus.add(this.heroesMenu);
        this.menus.add(this.actionsMenu);
        this.menus.add(this.enemiesMenu);
        
        //array with heroes hp
        for(var i=0 ; i < 4 ; i++){
            var hHp = this.battleScene.heroes[i].hp;
            var txt = this.add.text(440, 353 + 20*i, hHp);
            this.add.existing(txt);
            
        }

        //Phaser.GameObjects.Text.call(this, BattleScene, 400, 300, 'funciona pelo amor de deus', { color: "#ffffff", align: "left", fontSize: 15});
        
        // this.hHp = [ yuusha.getHp(), healer.getHp(), mage.getHp(), archer.getHp() ];

        this.remapEnemies();
        this.remapHeroes();
        
        this.input.keyboard.on("keydown", this.onKeyInput, this);   
        
        this.battleScene.events.on("PlayerSelect", this.onPlayerSelect, this);
        
        this.events.on("SelectEnemies", this.onSelectEnemies, this);
        
        this.events.on("Enemy", this.onEnemy, this);
        
        this.message = new Message(this, this.battleScene.events);
        this.add.existing(this.message);        
        
        this.battleScene.nextTurn();                
    },
    onEnemy: function(index) {
        this.heroesMenu.deselect();
        this.actionsMenu.deselect();
        this.enemiesMenu.deselect();
        this.currentMenu = null;
        this.battleScene.receivePlayerSelection("attack", index);
    },
    onPlayerSelect: function(id) {
        this.heroesMenu.select(id);
        this.actionsMenu.select(0);
        this.currentMenu = this.actionsMenu;
    },
    onSelectEnemies: function() {
        this.currentMenu = this.enemiesMenu;
        this.enemiesMenu.select(0);
    },
    remapHeroes: function() {
        var heroes = this.battleScene.heroes;
        this.heroesMenu.remap(heroes);
    },
    remapEnemies: function() {
        var enemies = this.battleScene.enemies;
        this.enemiesMenu.remap(enemies);
    },
    remapHp: function() {
        var hp = this.battleScene.hHp;
        this.hpMenu.remap2(hp);
    },
    onKeyInput: function(event) {
        if(this.currentMenu) {
            if(event.code === "ArrowUp") {
                this.currentMenu.moveSelectionUp();
            } else if(event.code === "ArrowDown") {
                this.currentMenu.moveSelectionDown();
            } else if(event.code === "ArrowRight" || event.code === "Shift") {

            } else if(event.code === "Space" || event.code === "ArrowLeft") {
                this.currentMenu.confirm();
            } 
        }
    },
});

var Message = new Phaser.Class({

    Extends: Phaser.GameObjects.Container,

    initialize:
    function Message(scene, events) {
        Phaser.GameObjects.Container.call(this, scene, 160, 30);
        var graphics = this.scene.add.graphics();
        this.add(graphics);
        graphics.lineStyle(1, 0xffffff, 0.8);
        graphics.fillStyle(0x031f4c, 0.3);        
        graphics.strokeRect(-90, -15, 180, 30);
        graphics.fillRect(-90, -15, 180, 30);
        this.text = new Phaser.GameObjects.Text(scene, 0, 0, "", { color: "#ffffff", align: "center", fontSize: 13, wordWrap: { width: 160, useAdvancedWrap: true }});
        this.add(this.text);
        this.text.setOrigin(0.5);        
        events.on("Message", this.showMessage, this);
        this.visible = false;
    },
    showMessage: function(text) {
        this.text.setText(text);
        this.visible = true;
        if(this.hideEvent)
            this.hideEvent.remove(false);
        this.hideEvent = this.scene.time.addEvent({ delay: 2000, callback: this.hideMessage, callbackScope: this });
    },
    hideMessage: function() {
        this.hideEvent = null;
        this.visible = false;
    }
});

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
    scene: [ BootScene, BattleScene, UIScene ]
};

var game = new Phaser.Game(config);