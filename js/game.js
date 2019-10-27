var txt = [], sele, teste = [], obj, cont = 0;

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
        this.load.image("ligma", "Imagens/ligma.png");
        this.load.image('marielle','Imagens/Archer.png');
        this.load.image('crassus','Imagens/crassus.png');
        this.load.image('yuusha','Imagens/Yuusha.png');
        this.load.image('hime','Imagens/Hime.png');
        this.load.image('mapa','Imagens/mapa.png');
        this.load.image('seta','Imagens/seta.png');
    },

    create: function ()
    {
        this.scene.start("Mapa");
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
        this.add.image(400,160,'fundo');
        // Run UI Scene at the same time
        this.scene.launch("UIScene");
                
        // player character - Crassus
        var mage = new PlayerCharacter(this, 450, 100, "crassus", 4, "Crassus", 70, 10, 0.7, 13);
        this.add.existing(mage);

        // player character - Marielle
        var archer = new PlayerCharacter(this, 450, 150, "marielle", 1, "Marielle", 65, 45, 1, 12);        
        this.add.existing(archer);

        // player character - Yuusha
        var yuusha = new PlayerCharacter(this, 390, 100, "yuusha", 2, "Yuusha", 80, 50, 1, 15);
        this.add.existing(yuusha);

        // player character - Hime
        var healer = new PlayerCharacter(this, 390, 150, "hime", 3, "Hime", 55, 5, 1, 10);        
        this.add.existing(healer);

        var ligma1 = new Enemy(this, 50, 100, "ligma", null,"Ligma", 10, 3, 9);
        var ligma2 = new Enemy(this, 50, 150, "ligma", null,"Ligma", 10, 3, 9);
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
        // if we have victory or game over
        if(this.checkEndBattle()) {           
            this.endBattle(this.checkEndBattle());
            return;
        }
        do {
            // currently active unit
            this.index++;
            // if there are no more units, we start again from the first one
            if(this.index >= this.units.length) {
                this.index = 0;
            }            
        } while(!this.units[this.index].living);
        // if its player hero
        if(this.units[this.index] instanceof PlayerCharacter) {
            // we need the player to select action and then enemy
            this.events.emit("PlayerSelect", this.index);
        } else { // else if its enemy unit
            // pick random living hero to be attacked
            var r;
            do {
                r = Math.floor(Math.random() * this.heroes.length);
            } while(!this.heroes[r].living) 
            // call the enemy's attack function 
            this.units[this.index].attack(this.heroes[r]);  
            // add timer for the next turn, so will have smooth gameplay
            this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
        }
    },
    // check for game over or victory
    checkEndBattle: function() {        
        var victory = true;
        // if all enemies are dead we have victory
        for(var i = 0; i < this.enemies.length; i++) {
            if(this.enemies[i].living)
                victory = false;
        }
        var gameOver = true;
        // if all heroes are dead we have game over
        for(var i = 0; i < this.heroes.length; i++) {
            if(this.heroes[i].living)
                gameOver = false;
        }

        if(victory){
            return 1;
        }
        if(gameOver){
            return 2;
        }
        
    },
    // when the player have selected the enemy to be attacked
    receivePlayerSelection: function(action, target) {
        if(action == "attack") {            
            this.units[this.index].attack(this.enemies[target]);              
        }
        // next turn in 3 seconds
        this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });        
    },
    endBattle: function(resultado) {       
        // clear state, remove sprites
        this.heroes.length = 0;
        this.enemies.length = 0;
        for(var i = 0; i < this.units.length; i++) {
            // link item
            this.units[i].destroy();            
        }
        this.units.length = 0;

        if(resultado == 1){
            var txt = this.add.text(210, 180, "Victory!!!");
            this.add.existing(txt);
        }
        else if(resultado == 2){
            var txt = this.add.text(210, 180, "GAME OVER!!!");
            this.add.existing(txt);
        }

        // sleep the UI
        this.scene.sleep('UIScene');
        // return to WorldScene and sleep current BattleScene
        //this.scene.switch('WorldScene');
    },
});

var Mapa = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Mapa ()
    {
        Phaser.Scene.call(this, { key: 'Mapa' });
    },

    preload: function ()
    {
        
    },

    create: function ()
    {
        this.add.image(260,220,'mapa');
        
        this.scene.launch("UIScene2");
        
        this.index = -1;    
    },
    receiveFaseSelection: function(action, cm) {
        if(action == "enter" && cm == "Fase 1") {            
            this.scene.sleep('UIScene2');
            this.scene.sleep('Mapa');
            // start battle
            this.scene.switch('BattleScene');             
        }
    },
    
});

var Objetos = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Objetos(scene, x, y, texture, frame, escala){
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame);
        this.setScale(escala);
    }


});

// base class for heroes and enemies
var Unit = new Phaser.Class({
    Extends: Phaser.Scene,
    Extends: Phaser.GameObjects.Text,
    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Unit(scene, x, y, texture, frame, type, hp, damage, ca) {
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame);
        this.type = type;
        this.maxHp = this.hp = hp;
        this.damage = damage; // default damage
        this.ca = ca;
        this.living = true;         
        this.menuItem = null;                
    },
    // we will use this to notify the menu item when the unit is dead
    setMenuItem: function(item) {
        this.menuItem = item;
    },
    attack: function(target) {
        var r;
        r = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

        if(target.living && (r >= target.ca && r <= 20)){
            target.takeDamage(this.damage);
            if(target instanceof Enemy){
                this.scene.events.emit("Message", "Acertou!\n" + " Dano do ataque: " +  this.damage + ".\n" + "Resultado do dado: " + r);
            }   
            else{
                this.scene.events.emit("Message", "Acertou!\n" + this.type + " atacou " + target.type + " e deu " + this.damage + " de dano. " + "\nResultado do dado:" + r);
            }
            
        }
        else{
            this.scene.events.emit("Message", "Errou o ataque!\n" + "Resultado do dado: " + r);
        }
    },
    takeDamage: function(damage) {
        this.hp = this.hp - damage;
        if(this.hp <= 0) {
            this.hp = 0;
            this.menuItem.unitKilled();
            this.living = false;
            this.visible = false;   
            this.menuItem = null;
        }
    },
});

var Enemy = new Phaser.Class({
    Extends: Unit,

    initialize:
    function Enemy(scene, x, y, texture, frame, type, hp, damage, ca) {
        Unit.call(this, scene, x, y, texture, frame, type, hp, damage, ca);

        this.setScale(0.5);
    }
});

var PlayerCharacter = new Phaser.Class({
    Extends: Unit,

    initialize:
    function PlayerCharacter(scene, x, y, texture, frame, type, hp, damage, escala, ca) {
        Unit.call(this, scene, x, y, texture, frame, type, hp, damage, ca);
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
    },
    // when the associated enemy or player unit is killed
    unitKilled: function() {
        this.active = false;
        this.visible = false;
    },
    
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
        this.selected = false;
    },
    addMenuItem2: function(unit) {
        var menuItem = new MenuItem( this.menuItems.length * 70, 0, unit, this.scene);
        this.menuItems.push(menuItem);
        this.add(menuItem);
        return menuItem;        
    },
    addMenuItem: function(unit) {
        var menuItem = new MenuItem(0, this.menuItems.length * 20, unit, this.scene);
        this.menuItems.push(menuItem);
        this.add(menuItem);
        return menuItem;        
    },
    // menu navigation 
    moveSelectionUp: function() {
        this.menuItems[this.menuItemIndex].deselect();
        do {
            this.menuItemIndex--;
            if(this.menuItemIndex < 0)
                this.menuItemIndex = this.menuItems.length - 1;
        } while(!this.menuItems[this.menuItemIndex].active);
        this.menuItems[this.menuItemIndex].select();
        sele = this.menuItemIndex;
    },
    moveSelectionDown: function() {
        this.menuItems[this.menuItemIndex].deselect();
        do {
            this.menuItemIndex++;
            if(this.menuItemIndex >= this.menuItems.length)
                this.menuItemIndex = 0;
        } while(!this.menuItems[this.menuItemIndex].active);
        this.menuItems[this.menuItemIndex].select();
        sele = this.menuItemIndex;
    },
    moveSelectionLeft: function() {
        this.menuItems[this.menuItemIndex].deselect();
        do {
            this.menuItemIndex--;
            if(this.menuItemIndex < 0)
                this.menuItemIndex = this.menuItems.length - 1;
        } while(!this.menuItems[this.menuItemIndex].active);
        this.menuItems[this.menuItemIndex].select();
        sele = this.menuItemIndex;
    },
    moveSelectionRight: function() {
        this.menuItems[this.menuItemIndex].deselect();
        do {
            this.menuItemIndex++;
            if(this.menuItemIndex >= this.menuItems.length)
                this.menuItemIndex = 0;
        } while(!this.menuItems[this.menuItemIndex].active);
        this.menuItems[this.menuItemIndex].select();
        sele = this.menuItemIndex;
    },            
    select: function(index) {
        if(!index)
            index = 0;       
        this.menuItems[this.menuItemIndex].deselect();
        this.menuItemIndex = index;
        while(!this.menuItems[this.menuItemIndex].active) {
            this.menuItemIndex++;
            if(this.menuItemIndex >= this.menuItems.length)
                this.menuItemIndex = 0;
            if(this.menuItemIndex == index)
                return;
        }        
        this.menuItems[this.menuItemIndex].select();
        this.selected = true;
        

    },
    // deselect this menu
    deselect: function() {        
        this.menuItems[this.menuItemIndex].deselect();
        this.menuItemIndex = 0;
        this.selected = false;
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
            unit.setMenuItem(this.addMenuItem(unit.type));            
        }
        this.menuItemIndex = 0;
    },
});

var HeroesMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function HeroesMenu(x, y, scene) {
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
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedAction");        
    }
    
});

var EnemiesMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function EnemiesMenu(x, y, scene) {
        Menu.call(this, x, y, scene);        
    },       
    confirm: function() {    
        // the player has selected the enemy and we send its id with the event    
        this.scene.events.emit("Enemy", this.menuItemIndex);
    }
});

var FasesMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function FasesMenu(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem2("Fase 1");
        teste[0] = "Fase 1";
        this.addMenuItem2("Fase 2");
        teste[1] = "Fase 2";
        this.addMenuItem2("Fase 3");
        teste[2] = "Fase 3";
    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedFase");        
    }
    
});

// User Interface scene
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
                
        this.heroesMenu = new HeroesMenu(355, 353, this); //(eixo x, eixo y) = (195,153,this)       
        this.actionsMenu = new ActionsMenu(195, 353, this); //(100,153)           
        this.enemiesMenu = new EnemiesMenu(8, 353, this); //(8,153) 

        // the currently selected menu 
        this.currentMenu = this.actionsMenu;
        
        // add menus to the container
        
        this.menus.add(this.heroesMenu);
        this.menus.add(this.actionsMenu);
        this.menus.add(this.enemiesMenu);

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this);   
        
        // when its player cunit turn to move
        this.battleScene.events.on("PlayerSelect", this.onPlayerSelect, this);
        
        // when the action on the menu is selected
        // for now we have only one action so we dont send and action id
        this.events.on("SelectedAction", this.onSelectedAction, this);
        
        // an enemy is selected
        this.events.on("Enemy", this.onEnemy, this);
        
        // when the scene receives wake event
        this.sys.events.on('wake', this.createMenu, this);

        // the message describing the current action
        this.message = new Message(this, this.battleScene.events);
        this.add.existing(this.message);       
        
        this.createMenu(); 
           
    },
    createMenu: function() {
        // map hero menu items to heroes
        this.remapHeroes();
        // map enemies menu items to enemies
        this.remapEnemies();
        // first move
        this.battleScene.nextTurn(); 
    },
    onEnemy: function(index) {
        // when the enemy is selected, we deselect all menus and send event with the enemy id
        this.heroesMenu.deselect();
        this.actionsMenu.deselect();
        this.enemiesMenu.deselect();
        this.currentMenu = null;
        this.battleScene.receivePlayerSelection("attack", index);
    },
    onPlayerSelect: function(id) {
        for(var i=0 ; i < txt.length ; i++){
            txt[i].destroy();
        }
        
        for(var i=0 ; i < 4 ; i++){
            var hHp = this.battleScene.heroes[i].hp;
            txt[i] = this.add.text(440, 353 + 20*i, hHp);
            this.add.existing(txt[i]);
        }
        // when its player turn, we select the active hero item and the first action
        // then we make actions menu active
        this.heroesMenu.select(id);
        this.actionsMenu.select(0);
        this.currentMenu = this.actionsMenu;
    },
    // we have action selected and we make the enemies menu active
    // the player needs to choose an enemy to attack
    onSelectedAction: function() {
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
    onKeyInput: function(event) {
        if(this.currentMenu && this.currentMenu.selected) {
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

// User Interface scene
var UIScene2 = new Phaser.Class({

    Extends: Phaser.GameObjects.Text,
    Extends: Phaser.Scene,
    

    initialize:

    function UIScene2 ()
    {
        Phaser.Scene.call(this, { key: "UIScene2" });
    },

    create: function ()
    {    

        this.mapa = this.scene.get("Mapa");
        
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);
        //menu oponente        
        this.graphics.strokeRect(2, 339, 63, 50); //(2,150,90,100)
        this.graphics.fillRect(2, 339, 63, 50); //(2,150,90,100)
        //menu ataques
        this.graphics.strokeRect(73, 339, 63, 50); //(95,150,90,100)
        this.graphics.fillRect(73, 339, 63, 50); //(95,150,90,100)
        //menu herois
        this.graphics.strokeRect(143, 339, 63, 50); //(eixo x: 188, eixo y: 150, tamanho em relação a x: 130, tamanho em relação a y:100)
        this.graphics.fillRect(143, 339, 63, 50); //(188,150,130,100)

        obj = new Objetos(this, 412, 215, "seta", 1, 0.4);
        this.add.existing(obj);

        // basic container to hold all menus
        this.menus = this.add.container();
                
        this.fasesMenu = new FasesMenu(7,360,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.fasesMenu;
        
        this.fasesMenu.select(0);
        sele = 0;

        // add menus to the container
        this.menus.add(this.fasesMenu);

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedFase", this.onSelectedFase, this);
           
    },
    // we have action selected and we make the enemies menu active
    // the player needs to choose an enemy to attack
    onSelectedFase: function() {
        
        var cm = teste[sele];
        this.fasesMenu.deselect();
        this.currentMenu = null;
        this.mapa.receiveFaseSelection("enter",cm);
        
    },
    onKeyInput: function(event) {
        obj.destroy();

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(cont - 1 >= 0){
                    cont--;
                }
                else{
                    cont = 2;
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(cont + 1 < 3){
                    cont++;
                }
                else{
                    cont = 0;
                }
                
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }

        if(cont == 0){
            obj = new Objetos(this, 412, 215, "seta", 1, 0.4);
            this.add.existing(obj);
        }
        else if(cont == 1){
            obj = new Objetos(this, 395, 169, "seta", 1, 0.4);
            this.add.existing(obj);
        }
        else if(cont == 2){
            obj = new Objetos(this, 464, 103, "seta", 1, 0.4);
            this.add.existing(obj);
        }


    },
});

// the message class extends containter 
var Message = new Phaser.Class({

    Extends: Phaser.GameObjects.Container,

    initialize:
    function Message(scene, events) {
        Phaser.GameObjects.Container.call(this, scene, 160, 30);
        var graphics = this.scene.add.graphics();
        this.add(graphics);
        graphics.lineStyle(1, 0xffffff, 0.8);
        graphics.fillStyle(0x031f4c, 0.3);        
        graphics.strokeRect(8, 220, 180, 70);
        graphics.fillRect(8, 220, 180, 70);
        this.text = new Phaser.GameObjects.Text(scene, 100, 255, "", { color: "#ffffff", align: "center", fontSize: 13, wordWrap: { width: 160, useAdvancedWrap: true }});
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
        this.hideEvent = this.scene.time.addEvent({ delay: 4000, callback: this.hideMessage, callbackScope: this });
    },
    hideMessage: function() {
        this.hideEvent = null;
        this.visible = false;
    }
});