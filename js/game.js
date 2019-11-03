//Variáveis Random 1
var txt = [], sele, teste = [], obj, cont = 0, pr, teste1 = [], funciona, tx, lista = [];

//Atributos do Yuusha:
var HP_Y = 15, VEL_Y = 2, FOR_Y = 3, DEF_Y = 3, SOR_Y, ATKB_Y = 6, CA_Y = 3 + VEL_Y + DEF_Y; //CA = 8

//Atributos da Hime:
var HP_H = 7, VEL_H = 2, FOR_H = 1, DEF_H = 0, SOR_H, ATKB_H = 2, CA_H = 3 + VEL_H + DEF_H; //CA = 4

//Atributos do Crassus:
var HP_C = 12, VEL_C = 0, FOR_C = 4, DEF_C = 4, SOR_C, ATKB_C = 0, CA_C = 3 + VEL_C + DEF_C; //CA = 7

//Atributos da Marielle:
var HP_M = 10, VEL_M = 3, FOR_M = 2, DEF_M = 1, SOR_M, ATKB_M = 6, CA_M = 3 + VEL_M + DEF_M; //CA = 7

//Atributos do Slime:
var HP_S = 10, VEL_S = 2, FOR_S = 3, DEF_S = 1, SOR_S, ATKB_S = 0, CA_S = 1 + VEL_S + DEF_S; //CA = 6

//Variáveis Random 2
var velocidades = [ VEL_Y, VEL_H, VEL_C, VEL_M ], max = 0, ind = -1, tam_vetor_herois, herois = [];

//Variáveis para Estatísticas
var atk_falhos_y = 0, atk_acertados_y = 0, atk_falhos_h = 0, atk_acertados_h = 0, atk_falhos_c = 0, atk_acertados_c = 0, atk_falhos_m = 0, atk_acertados_m = 0, dano_y = 0, dano_h = 0, dano_c = 0, dano_m = 0, MVIP;
var maior_dano, ih = 0, vel_ordenada = [ VEL_Y, VEL_H, VEL_C, VEL_M ], auxiliar, contadorzin = 0, exec = 0, aviso = 0, vod, vel_rem, vel_rem2, tam_vetor_herois_ord = 0, izo = [];
var dinheiros = 0;

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
        this.load.image("slime", "Imagens/ligma.png");
        this.load.image('marielle','Imagens/Archer.png');
        this.load.image('crassus','Imagens/crassus.png');
        this.load.image('yuusha','Imagens/Yuusha.png');
        this.load.image('hime','Imagens/Hime.png');
        this.load.image('mapa','Imagens/mapa.png');
        this.load.image('seta','Imagens/seta.png');
        this.load.image('fundo_gramado','Imagens/Field_background2.jpg');
    },

    create: function ()
    {
        this.scene.start("UIScene2");
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
        this.add.image(400,130,'fundo_gramado');
        // Run UI Scene at the same time
        this.scene.run("UIScene");
         
        exec++;

        //player character - Crassus
        var mage = new PlayerCharacter(this, 450, 240, "crassus", "Crassus", HP_C, ATKB_C + FOR_C, 0.7, CA_C);
        this.add.existing(mage);

        //player character - Marielle
        var archer = new PlayerCharacter(this, 450, 290, "marielle", "Marielle", HP_M, ATKB_M + VEL_M, 1, CA_M);        
        this.add.existing(archer);

        // player character - Yuusha
        var yuusha = new PlayerCharacter(this, 390, 240, "yuusha", "Yuusha", HP_Y, ATKB_Y + FOR_Y, 1, CA_Y);
        this.add.existing(yuusha);

        // player character - Hime
        var healer = new PlayerCharacter(this, 390, 290, "hime", "Hime", HP_H, ATKB_H + FOR_H, 1, CA_H);        
        this.add.existing(healer);

        var ligma1 = new Enemy(this, 50, 260, "slime","Slime", 100, 100, CA_S); //HP_S e ATKB_S + FOR_S
        var ligma2 = new Enemy(this, 50, 310, "slime","Slime", 100, 100, CA_S); 
        this.add.existing(ligma1);
        this.add.existing(ligma2);

        // array with heroes
        this.heroes = [ yuusha, healer, mage, archer ];
        herois = [ yuusha, healer, mage, archer ];
        tam_vetor_herois = 4;
        tam_vetor_herois_ord = 4;

        // array with enemies
        this.enemies = [ ligma1, ligma2 ];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);

        this.index = -1;

        contadorzin = 0;

        for(var i = 0 ; i < tam_vetor_herois ; i++){
            for(var j = tam_vetor_herois ; j > i ; j--){
                if(vel_ordenada[j] > vel_ordenada[j-1]){
                    auxiliar = vel_ordenada[j];
                    vel_ordenada[j] = vel_ordenada[j-1];
                    vel_ordenada[j-1] = auxiliar;
                }
            }
        }      
        
        ih = 0;
        max = 0;
        ind = -1;
    },
    nextTurn: function() {
        // if we have victory or game over
        if(this.checkEndBattle()) {           
            this.endBattle(this.checkEndBattle());
            return;
        }
        
        // for(var i = 0 ; i < tam_vetor_herois ; i++){
        //     if(velocidades[i] == vel_ordenada[contadorzin] && this.heroes[i].living){
        //         if(vel_ordenada[contadorzin - 1] == vel_ordenada[contadorzin] && contadorzin != 0){
        //             max = velocidades[i];
        //             ind = i + 1;
        //             break;
        //         }
        //         else{
        //             max = velocidades[i];
        //             ind = i;
        //             break;
        //         }
        //     }
        // }

        // contadorzin++;

        // for(var i = 0 ; i < tam_vetor_herois ; i++){
        //     izo[i] = this.add.text(0 + 20*ih, 0 + 20*iii, vel_ordenada[i]);
        //     this.add.existing(izo[i]);
        //     ih++;
        // }
        // iii++;

        // var izo = this.add.text(220 + 20*ih, 223, max, {color: "#000000"});
        // this.add.existing(izo);
        // ih++;

        do { 
            
            this.index++;

            // // if there are no more units, we start again from the first one
            if(this.index >= this.units.length) {
                this.index = 0;
            }

        } while(!this.units[this.index].living);
        // if its player hero
        if(this.units[this.index] instanceof PlayerCharacter) {
            // var izo = this.add.text(220 + 20*ih, 223, "Hero", {color: "#000000"});
            // this.add.existing(izo);
            // ih++;
            // we need the player to select action and then enemy
            this.events.emit("PlayerSelect", this.index); //ind);
        } else { // else if its enemy unit
            
            // pick random living hero to be attacked
            var r;
            do {
                r = Math.floor(Math.random() * this.heroes.length);
            } while(!this.heroes[r].living) 
            // call the enemy's attack function 
            this.units[this.index].attack(this.heroes[r]);  
            // add timer for the next turn, so will have smooth gameplay
            this.time.addEvent({ delay: 4000, callback: this.nextTurn, callbackScope: this });
            // contadorzin = 0;
            // ind = -1;
            // max = 0;

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
            this.units[this.index].attack(this.enemies[target]); //this.units[ind]              
        }
        // next turn in 3 seconds
        this.time.addEvent({ delay: 4000, callback: this.nextTurn, callbackScope: this });        
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
       
        // sleep the UI
        this.scene.sleep('UIScene');

        if(resultado == 1){
            // var txt = this.add.text(210, 180, "Victory!!!");
            // this.add.existing(txt);
            this.scene.start('VictoryScene');
            
        }
        else if(resultado == 2){
            // var txt = this.add.text(210, 180, "GAME OVER!!!");
            // this.add.existing(txt);
            this.scene.start('DefeatScene');
        }
        
    },
});

var Objetos = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Objetos(scene, x, y, texture, escala){
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture);
        this.setScale(escala);
    }

});

// base class for heroes and enemies
var Unit = new Phaser.Class({
    Extends: Phaser.Scene,
    Extends: Phaser.GameObjects.Text,
    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Unit(scene, x, y, texture, type, hp, damage, ca) {
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture);
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
                if(this.type == "Yuusha"){
                    atk_acertados_y++;
                    dano_y = dano_y + this.damage;
                }
                else if(this.type == "Hime"){
                    atk_acertados_h++;
                    dano_h = dano_h + this.damage;
                }
                else if(this.type == "Crassus"){
                    atk_acertados_c++;
                    dano_c = dano_c + this.damage;
                }
                else if(this.type == "Marielle"){
                    atk_acertados_m++;
                    dano_m = dano_m + this.damage;
                }
            }   
            else{
                this.scene.events.emit("Message", "Turno do oponente!!!  \nAcertou!\n" + this.type + " atacou " + target.type + " e deu " + this.damage + " de dano. " + "\nResultado do dado:" + r);
            }
            
        }
        else{
            if(target instanceof Enemy){
                this.scene.events.emit("Message", "Errou o ataque!\n" + "Resultado do dado: " + r);
                if(this.type == "Yuusha"){
                    atk_falhos_y++;
                }
                else if(this.type == "Hime"){
                    atk_falhos_h++;
                }
                else if(this.type == "Crassus"){
                    atk_falhos_c++;
                }
                else if(this.type == "Marielle"){
                    atk_falhos_m++;
                }
            }
            else{
                this.scene.events.emit("Message", "Turno do oponente!!!  \nErrou o ataque!\n" + "Resultado do dado: " + r);
            }
            

        }
    },
    takeDamage: function(damage) {
        this.hp = this.hp - damage;
        if(this.hp <= 0) {
            // if(this.type instanceof PlayerCharacter){
            //     tam_vetor_herois_ord--;
            //     if(this.type == "Yuusha"){
            //         if(tam_vetor_herois_ord == 3){
            //             vel_ordenada = [ VEL_H, VEL_C, VEL_M ];
            //             vel_rem = VEL_Y;
            //         }
            //         else if(tam_vetor_herois_ord == 2){
            //             if(vel_rem == VEL_H){
            //                 vel_ordenada = [ VEL_C, VEL_M ];
            //             }
            //             else if(vel_rem == VEL_C){
            //                 vel_ordenada = [ VEL_H, VEL_M ];
            //             }
            //             else if(vel_rem == VEL_M){
            //                 vel_ordenada = [ VEL_H, VEL_C ];
            //             }
            //             vel_rem2 = VEL_Y;
            //         }
            //         else if(tam_vetor_herois_ord == 1){
            //             if((vel_rem == VEL_H && vel_rem2 == VEL_C) || (vel_rem == VEL_C && vel_rem2 == VEL_H)){
            //                 vel_ordenada = [ VEL_M ];
            //             }
            //             else if((vel_rem == VEL_H && vel_rem2 == VEL_M) || (vel_rem == VEL_M && vel_rem2 == VEL_H)){
            //                 vel_ordenada = [ VEL_C ];
            //             }
            //             else if((vel_rem == VEL_M && vel_rem2 == VEL_C) || (vel_rem == VEL_C && vel_rem2 == VEL_M)){
            //                 vel_ordenada = [ VEL_H ];
            //             }
            //         }
                    
            //     }
            //     else if(this.type == "Hime"){
            //         if(tam_vetor_herois_ord == 3){
            //             vel_ordenada = [ VEL_Y, VEL_C, VEL_M ];
            //             vel_rem = VEL_H;
            //         }
            //         else if(tam_vetor_herois_ord == 2){
            //             if(vel_rem == VEL_Y){
            //                 vel_ordenada = [ VEL_C, VEL_M ];
            //             }
            //             else if(vel_rem == VEL_C){
            //                 vel_ordenada = [ VEL_Y, VEL_M ];
            //             }
            //             else if(vel_rem == VEL_M){
            //                 vel_ordenada = [ VEL_Y, VEL_C ];
            //             }
            //             vel_rem2 = VEL_H;
            //         }
            //         else if(tam_vetor_herois_ord == 1){
            //             if((vel_rem == VEL_Y && vel_rem2 == VEL_C) || (vel_rem == VEL_C && vel_rem2 == VEL_Y)){
            //                 vel_ordenada = [ VEL_M ];
            //             }
            //             else if((vel_rem == VEL_Y && vel_rem2 == VEL_M) || (vel_rem == VEL_M && vel_rem2 == VEL_Y)){
            //                 vel_ordenada = [ VEL_C ];
            //             }
            //             else if((vel_rem == VEL_M && vel_rem2 == VEL_C) || (vel_rem == VEL_C && vel_rem2 == VEL_M)){
            //                 vel_ordenada = [ VEL_Y ];
            //             }
            //         }
            //     }
            //     else if(this.type == "Crassus"){
            //         if(tam_vetor_herois_ord == 3){
            //             vel_ordenada = [ VEL_Y, VEL_H, VEL_M ];
            //             vel_rem = VEL_C;
            //         }
            //         else if(tam_vetor_herois_ord == 2){
            //             if(vel_rem == VEL_Y){
            //                 vel_ordenada = [ VEL_H, VEL_M ];
            //             }
            //             else if(vel_rem == VEL_H){
            //                 vel_ordenada = [ VEL_Y, VEL_M ];
            //             }
            //             else if(vel_rem == VEL_M){
            //                 vel_ordenada = [ VEL_Y, VEL_H ];
            //             }
            //             vel_rem2 = VEL_C;
            //         }
            //         else if(tam_vetor_herois_ord == 1){
            //             if((vel_rem == VEL_Y && vel_rem2 == VEL_H) || (vel_rem == VEL_H && vel_rem2 == VEL_Y)){
            //                 vel_ordenada = [ VEL_M ];
            //             }
            //             else if((vel_rem == VEL_Y && vel_rem2 == VEL_M) || (vel_rem == VEL_M && vel_rem2 == VEL_Y)){
            //                 vel_ordenada = [ VEL_H ];
            //             }
            //             else if((vel_rem == VEL_H && vel_rem2 == VEL_M) || (vel_rem == VEL_M && vel_rem2 == VEL_H)){
            //                 vel_ordenada = [ VEL_Y ];
            //             }
            //         }
            //     }
            //     else if(this.type == "Marielle"){
            //         if(tam_vetor_herois_ord == 3){
            //             vel_ordenada = [ VEL_Y, VEL_H, VEL_C ];
            //             vel_rem = VEL_M;
            //         }
            //         else if(tam_vetor_herois_ord == 2){
            //             if(vel_rem == VEL_Y){
            //                 vel_ordenada = [ VEL_H, VEL_C ];
            //             }
            //             else if(vel_rem == VEL_H){
            //                 vel_ordenada = [ VEL_Y, VEL_C ];
            //             }
            //             else if(vel_rem == VEL_C){
            //                 vel_ordenada = [ VEL_Y, VEL_H ];
            //             }
            //             vel_rem2 = VEL_M;
            //         }
            //         else if(tam_vetor_herois_ord == 1){
            //             if((vel_rem == VEL_Y && vel_rem2 == VEL_H) || (vel_rem == VEL_H && vel_rem2 == VEL_Y)){
            //                 vel_ordenada = [ VEL_C ];
            //             }
            //             else if((vel_rem == VEL_Y && vel_rem2 == VEL_C) || (vel_rem == VEL_C && vel_rem2 == VEL_Y)){
            //                 vel_ordenada = [ VEL_H ];
            //             }
            //             else if((vel_rem == VEL_H && vel_rem2 == VEL_C) || (vel_rem == VEL_C && vel_rem2 == VEL_H)){
            //                 vel_ordenada = [ VEL_Y ];
            //             }
            //         }
            //     }

            //     for(var i = 0 ; i < tam_vetor_herois ; i++){
            //         for(var j = tam_vetor_herois ; j > i ; j--){
            //             if(vel_ordenada[j] > vel_ordenada[j-1]){
            //                 auxiliar = vel_ordenada[j];
            //                 vel_ordenada[j] = vel_ordenada[j-1];
            //                 vel_ordenada[j-1] = auxiliar;
            //             }
            //         }
            //     }
            // }
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
    function Enemy(scene, x, y, texture, type, hp, damage, ca) {
        Unit.call(this, scene, x, y, texture, type, hp, damage, ca);

        this.setScale(0.5);
    }
});

var PlayerCharacter = new Phaser.Class({
    Extends: Unit,

    initialize:
    function PlayerCharacter(scene, x, y, texture, type, hp, damage, escala, ca) {
        Unit.call(this, scene, x, y, texture, type, hp, damage, ca);
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

//Menu das fases na interface do mapa
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

var VoltarMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function VoltarMenu(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem2("Voltar ao mapa");
        lista[0] = "Voltar ao mapa";
    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedVoltar");        
    }
    
});

var VictoryScene = new Phaser.Class({
    Extends: Phaser.GameObjects.Text,
    Extends: Phaser.Scene,

    initialize:

    function VictoryScene (){
        Phaser.Scene.call(this, { key: "VictoryScene" });
    },

    create: function (){
        this.add.image(400,178,'fundo_gramado');

        vod = 1;
        this.scene.launch('UIScene3');

        var txt_vic = this.add.text(165, 10, "VITÓRIA", { color: "#ffffff", fontSize: "45px"});
        this.add.existing(txt_vic);
        txt_vic.setStroke("#000000", 6);

        var texto = this.add.text(10, 70, "Ataques acertados e errados por personagem: ", { color: "#ffffff"});
        this.add.existing(texto);
        texto.setStroke("#000000", 6);

        if(tam_vetor_herois == 1){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_acertados_y + " | "  + atk_falhos_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 2){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_acertados_y + " | "  + atk_falhos_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_acertados_h + " | " + atk_falhos_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 3){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_acertados_y + " | "  + atk_falhos_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_acertados_h + " | " + atk_falhos_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
            var texto3 = this.add.text(55, 130, herois[2].type + ": " + atk_acertados_c + " | " + atk_falhos_c, { color: "#ffffff"});
            this.add.existing(texto3);
            texto3.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 4){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_acertados_y + " | "  + atk_falhos_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_acertados_h + " | " + atk_falhos_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
            var texto3 = this.add.text(55, 130, herois[2].type + ": " + atk_acertados_c + " | " + atk_falhos_c, { color: "#ffffff"});
            this.add.existing(texto3);
            texto3.setStroke("#000000", 6);
            var texto4 = this.add.text(55, 150, herois[3].type + ": " + atk_acertados_m + " | " + atk_falhos_m, { color: "#ffffff"});
            this.add.existing(texto4);
            texto4.setStroke("#000000", 6);
        }        
            
        var dan_txt = this.add.text(10, 180, "Quantidade de dano deferido em inimigos: ", { color: "#ffffff"});
        this.add.existing(dan_txt);
        dan_txt.setStroke("#000000", 6);

        if(tam_vetor_herois == 1){
            var dan_txt1 = this.add.text(55, 200, herois[0].type + ": " + dano_y, { color: "#ffffff"});
            this.add.existing(dan_txt1);
            dan_txt1.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 2){
            var dan_txt1 = this.add.text(55, 200, herois[0].type + ": " + dano_y, { color: "#ffffff"});
            this.add.existing(dan_txt1);
            dan_txt1.setStroke("#000000", 6);
            var dan_txt2 = this.add.text(55, 220, herois[1].type + ": " + dano_h, { color: "#ffffff"});
            this.add.existing(dan_txt2);
            dan_txt2.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 3){
            var dan_txt1 = this.add.text(55, 200, herois[0].type + ": " + dano_y, { color: "#ffffff"});
            this.add.existing(dan_txt1);
            dan_txt1.setStroke("#000000", 6);
            var dan_txt2 = this.add.text(55, 220, herois[1].type + ": " + dano_h, { color: "#ffffff"});
            this.add.existing(dan_txt2);
            dan_txt2.setStroke("#000000", 6);
            var dan_txt3 = this.add.text(55, 240, herois[2].type + ": " + dano_c, { color: "#ffffff"});
            this.add.existing(dan_txt3);
            dan_txt3.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 4){
            var dan_txt1 = this.add.text(55, 200, herois[0].type + ": " + dano_y, { color: "#ffffff"});
            this.add.existing(dan_txt1);
            dan_txt1.setStroke("#000000", 6);
            var dan_txt2 = this.add.text(55, 220, herois[1].type + ": " + dano_h, { color: "#ffffff"});
            this.add.existing(dan_txt2);
            dan_txt2.setStroke("#000000", 6);
            var dan_txt3 = this.add.text(55, 240, herois[2].type + ": " + dano_c, { color: "#ffffff"});
            this.add.existing(dan_txt3);
            dan_txt3.setStroke("#000000", 6);
            var dan_txt4 = this.add.text(55, 260, herois[3].type + ": " + dano_m, { color: "#ffffff"});
            this.add.existing(dan_txt4);
            dan_txt4.setStroke("#000000", 6);
        }
        
        var mvp_txt = this.add.text(10, 290, "Melhor herói da batalha: ", { color: "#ffffff"});
        this.add.existing(mvp_txt);
        mvp_txt.setStroke("#000000", 6);    

        var j = 0;

        maior_dano = dano_y;
        if(maior_dano < dano_h) maior_dano = dano_h;
        if(maior_dano < dano_c) maior_dano = dano_c;
        if(maior_dano < dano_m) maior_dano = dano_m;

        if(dano_y == maior_dano){
            var dan_txt4 = this.add.text(55, 310  + 20 * j, herois[0].type + ": " + dano_y, { color: "#ffffff"});
            this.add.existing(dan_txt4);
            dan_txt4.setStroke("#000000", 6);
            j++;
        }
        if(dano_h == maior_dano){
            var dan_txt2 = this.add.text(55, 310  + 20 * j, herois[1].type + ": " + dano_h, { color: "#ffffff"});
            this.add.existing(dan_txt2);
            dan_txt2.setStroke("#000000", 6);
            j++;
        }
        if(dano_c == maior_dano){
            var dan_txt3 = this.add.text(55, 310  + 20 * j, herois[2].type + ": " + dano_c, { color: "#ffffff"});
            this.add.existing(dan_txt3);
            dan_txt3.setStroke("#000000", 6);
            j++;
        }
        if(dano_m == maior_dano){
            var dan_txt4 = this.add.text(55, 310  + 20 * j, herois[3].type + ": " + dano_m, { color: "#ffffff"});
            this.add.existing(dan_txt4);
            dan_txt4.setStroke("#000000", 6);
            j++;
        }

    },
    receiveFaseSelection: function(action, cm) {
        if(action == "enter" && cm == "Voltar ao mapa") {            
            this.scene.sleep('VictoryScene');
            this.scene.sleep('UIScene3');
            //Start mapa
            
            // this.scene.switch('Mapa');
            this.scene.wake('UIScene2');
            
        }
    },
});

var DefeatScene = new Phaser.Class({
    Extends: Phaser.GameObjects.Text,
    Extends: Phaser.Scene,

    initialize:

    function DefeatScene (){
        Phaser.Scene.call(this, { key: "DefeatScene" });
    },

    create: function (){
        this.add.image(400,178,'fundo_gramado');

        vod = 2;
        this.scene.launch('UIScene3');

        var txt_vic = this.add.text(165, 10, "DERROTA", { color: "#ffffff", fontSize: "45px"});
        this.add.existing(txt_vic);
        txt_vic.setStroke("#000000", 6);

        var texto = this.add.text(10, 70, "Ataques acertados e errados por personagem: ", { color: "#ffffff"});
        this.add.existing(texto);
        texto.setStroke("#000000", 6);

        if(tam_vetor_herois == 1){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_acertados_y + " | "  + atk_falhos_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 2){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_acertados_y + " | "  + atk_falhos_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_acertados_h + " | " + atk_falhos_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 3){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_acertados_y + " | "  + atk_falhos_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_acertados_h + " | " + atk_falhos_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
            var texto3 = this.add.text(55, 130, herois[2].type + ": " + atk_acertados_c + " | " + atk_falhos_c, { color: "#ffffff"});
            this.add.existing(texto3);
            texto3.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 4){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_acertados_y + " | "  + atk_falhos_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_acertados_h + " | " + atk_falhos_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
            var texto3 = this.add.text(55, 130, herois[2].type + ": " + atk_acertados_c + " | " + atk_falhos_c, { color: "#ffffff"});
            this.add.existing(texto3);
            texto3.setStroke("#000000", 6);
            var texto4 = this.add.text(55, 150, herois[3].type + ": " + atk_acertados_m + " | " + atk_falhos_m, { color: "#ffffff"});
            this.add.existing(texto4);
            texto4.setStroke("#000000", 6);
        }        
            
        var dan_txt = this.add.text(10, 180, "Quantidade de dano deferido em inimigos: ", { color: "#ffffff"});
        this.add.existing(dan_txt);
        dan_txt.setStroke("#000000", 6);

        if(tam_vetor_herois == 1){
            var dan_txt1 = this.add.text(55, 200, herois[0].type + ": " + dano_y, { color: "#ffffff"});
            this.add.existing(dan_txt1);
            dan_txt1.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 2){
            var dan_txt1 = this.add.text(55, 200, herois[0].type + ": " + dano_y, { color: "#ffffff"});
            this.add.existing(dan_txt1);
            dan_txt1.setStroke("#000000", 6);
            var dan_txt2 = this.add.text(55, 220, herois[1].type + ": " + dano_h, { color: "#ffffff"});
            this.add.existing(dan_txt2);
            dan_txt2.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 3){
            var dan_txt1 = this.add.text(55, 200, herois[0].type + ": " + dano_y, { color: "#ffffff"});
            this.add.existing(dan_txt1);
            dan_txt1.setStroke("#000000", 6);
            var dan_txt2 = this.add.text(55, 220, herois[1].type + ": " + dano_h, { color: "#ffffff"});
            this.add.existing(dan_txt2);
            dan_txt2.setStroke("#000000", 6);
            var dan_txt3 = this.add.text(55, 240, herois[2].type + ": " + dano_c, { color: "#ffffff"});
            this.add.existing(dan_txt3);
            dan_txt3.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 4){
            var dan_txt1 = this.add.text(55, 200, herois[0].type + ": " + dano_y, { color: "#ffffff"});
            this.add.existing(dan_txt1);
            dan_txt1.setStroke("#000000", 6);
            var dan_txt2 = this.add.text(55, 220, herois[1].type + ": " + dano_h, { color: "#ffffff"});
            this.add.existing(dan_txt2);
            dan_txt2.setStroke("#000000", 6);
            var dan_txt3 = this.add.text(55, 240, herois[2].type + ": " + dano_c, { color: "#ffffff"});
            this.add.existing(dan_txt3);
            dan_txt3.setStroke("#000000", 6);
            var dan_txt4 = this.add.text(55, 260, herois[3].type + ": " + dano_m, { color: "#ffffff"});
            this.add.existing(dan_txt4);
            dan_txt4.setStroke("#000000", 6);
        }
        
        var mvp_txt = this.add.text(10, 290, "Melhor herói da batalha: ", { color: "#ffffff"});
        this.add.existing(mvp_txt);
        mvp_txt.setStroke("#000000", 6);    

        var j = 0;

        maior_dano = dano_y;
        if(maior_dano < dano_h) maior_dano = dano_h;
        if(maior_dano < dano_c) maior_dano = dano_c;
        if(maior_dano < dano_m) maior_dano = dano_m;

        if(dano_y == maior_dano){
            var dan_txt4 = this.add.text(55, 310  + 20 * j, herois[0].type + ": " + dano_y, { color: "#ffffff"});
            this.add.existing(dan_txt4);
            dan_txt4.setStroke("#000000", 6);
            j++;
        }
        if(dano_h == maior_dano){
            var dan_txt2 = this.add.text(55, 310  + 20 * j, herois[1].type + ": " + dano_h, { color: "#ffffff"});
            this.add.existing(dan_txt2);
            dan_txt2.setStroke("#000000", 6);
            j++;
        }
        if(dano_c == maior_dano){
            var dan_txt3 = this.add.text(55, 310  + 20 * j, herois[2].type + ": " + dano_c, { color: "#ffffff"});
            this.add.existing(dan_txt3);
            dan_txt3.setStroke("#000000", 6);
            j++;
        }
        if(dano_m == maior_dano){
            var dan_txt4 = this.add.text(55, 310  + 20 * j, herois[3].type + ": " + dano_m, { color: "#ffffff"});
            this.add.existing(dan_txt4);
            dan_txt4.setStroke("#000000", 6);
            j++;
        }

    },
    receiveFaseSelection: function(action, cm) {
        if(action == "enter" && cm == "Voltar ao mapa") {            
            this.scene.sleep('DefeatScene');
            this.scene.sleep('UIScene3');
            //Start mapa
            
            // this.scene.switch('Mapa');
            this.scene.wake('UIScene2');
            
        }
    },
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
        var prob = ((21 - CA_S) / 20 ) * 100;

        for(var i = 0 ; i < txt.length ; i++){
            txt[i].destroy();
            pr.destroy();
        }
        
        for(var i = 0 ; i < tam_vetor_herois ; i++){
            var hHp = this.battleScene.heroes[i].hp;
            txt[i] = this.add.text(440, 353 + 20*i, hHp);
            this.add.existing(txt[i]);

            if(i == 0){
                pr = this.add.text(270, 345 + 20*i, "Acerto: \n  " + prob + "%");
                this.add.existing(pr);
            }
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

        this.add.image(260,220,'mapa');
        
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

        obj = new Objetos(this, 412, 215, "seta", 0.4);
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

        
        this.sys.events.on('wake', this.acorda, this);
        this.acorda();
        
    },
    acorda: function(){
        this.currentMenu = this.fasesMenu;
        this.fasesMenu.select(0);
        sele = 0; 
    },
    // we have action selected and we make the enemies menu active
    // the player needs to choose an enemy to attack
    onSelectedFase: function() {
        var cm = teste[sele];
        this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveFaseSelection("enter",cm);
        
    },
    remapFases: function(){
        var fas = teste;
        this.fasesMenu.remap2(fas);
    },
    receiveFaseSelection: function(action, cm) {
        if(action == "enter" && cm == "Fase 1") {            
            this.scene.sleep('UIScene2');
            atk_falhos_y = 0; atk_acertados_y = 0; atk_falhos_h = 0; atk_acertados_h = 0; atk_falhos_c = 0; atk_acertados_c = 0; atk_falhos_m = 0; atk_acertados_m = 0; dano_y = 0; dano_h = 0; dano_c = 0; dano_m = 0;
            // start battle
            this.scene.switch('BattleScene');                  
        }
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
            obj = new Objetos(this, 412, 215, "seta", 0.4);
            this.add.existing(obj);
        }
        else if(cont == 1){
            obj = new Objetos(this, 395, 169, "seta", 0.4);
            this.add.existing(obj);
        }
        else if(cont == 2){
            obj = new Objetos(this, 464, 103, "seta", 0.4);
            this.add.existing(obj);
        }


    },
});

var UIScene3 = new Phaser.Class({

    Extends: Phaser.GameObjects.Text,
    Extends: Phaser.Scene,
    

    initialize:

    function UIScene3 ()
    {
        Phaser.Scene.call(this, { key: "UIScene3" });
    },

    create: function ()
    {    
        if(vod == 1){
            this.vodSc = this.scene.get("VictoryScene");
        }
        else if(vod == 2){
            this.vodSc = this.scene.get("DefeatScene");
        }
        
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        
        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50); 

        // basic container to hold all menus
        this.menus = this.add.container();

        this.voltarMenu = new VoltarMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.voltarMenu;
        
        this.voltarMenu.select(0);

        // add menus to the container
        this.menus.add(this.voltarMenu);

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedVoltar", this.onSelectedVoltar, this);
           
    },
    // we have action selected and we make the enemies menu active
    // the player needs to choose an enemy to attack
    onSelectedVoltar: function() {
        
        var cm = lista[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.vodSc.receiveFaseSelection("enter",cm);
        
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {

            } else if(event.code === "ArrowRight") {
                
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
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
        graphics.strokeRect(8, 25, 180, 100);
        graphics.fillRect(8, 25, 180, 100);
        this.text = new Phaser.GameObjects.Text(scene, 100, 75, "", { color: "#ffffff", align: "center", fontSize: 13, wordWrap: { width: 160, useAdvancedWrap: true }});
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