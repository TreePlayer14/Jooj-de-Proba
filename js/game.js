//Variáveis Random 1
var txt = [], txt2 = [], sele, teste = [], obj, cont = 0, pr, pro, teste1 = [], funciona, tx, lista = [], cont2 = 0;

//Atributos do Yuusha:
var HPT_Y = 15, HP_Y = HPT_Y, VEL_Y = 2, FOR_Y = 3, DEF_Y = 3, INT_Y = 1, SOR_Y, ATKB_Y = 6, CA_Y = 3 + VEL_Y + DEF_Y, MANA_Y = INT_Y + 10; //CA = 8

//Atributos da Hime:
var HPT_H = 7, HP_H = HPT_H, VEL_H = 1, FOR_H = 1, DEF_H = 0, INT_H = 2, SOR_H, ATKB_H = 2, CA_H = 3 + VEL_H + DEF_H, MANA_H = INT_H + 10; //CA = 4

//Atributos do Crassus:
var HPT_C = 9, HP_C = HPT_C, VEL_C = 1, FOR_C = 4, DEF_C = 4, INT_C = 3, SOR_C, ATKB_C = 0, CA_C = 3 + VEL_C + DEF_C, MANA_C = INT_C + 10; //CA = 7

//Atributos da Marielle:
var HPT_M = 12, HP_M = HPT_M, VEL_M = 3, FOR_M = 2, DEF_M = 1, INT_M = 2, SOR_M, ATKB_M = 6, CA_M = 3 + VEL_M + DEF_M, MANA_M = INT_M + 10; //CA = 7 

//Atributo geral:
var SOR = 0;

//Atributos do Slime:
var HPT_S = 20, HP_S = HPT_S, VEL_S = 2, FOR_S = 3, DEF_S = 1, INT_S = 0, SOR_S, ATKB_S = 0, CA_S = 1 + VEL_S + DEF_S; //CA = 6

//Variáveis Random 2
var velocidades = [ VEL_Y, VEL_H, VEL_C, VEL_M ], max = 0, ind = -1, tam_vetor_herois, herois = [];

//Variáveis para Estatísticas
var atk_falhos_y = 0, atk_acertados_y = 0, atk_falhos_h = 0, atk_acertados_h = 0, atk_falhos_c = 0, atk_acertados_c = 0, atk_falhos_m = 0, atk_acertados_m = 0, dano_y = 0, dano_h = 0, dano_c = 0, dano_m = 0, MVIP;

//Variáveis Random 3
var maior_dano, ih = 0, vel_ordenada = [ VEL_Y, VEL_H, VEL_C, VEL_M ], auxiliar, contadorzin = 0, exec = 0, aviso = 0, vod, vel_rem, vel_rem2, tam_vetor_herois_ord = 0;
var dinheiros = 0, din_ant = 0, moedas, obj2, lista_loja = [], sele2, selecionou, out_of_mana = 0, cura_total = 0, izo, ordem_turnos = [], turno_de, r;

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
        this.load.image('seta','Imagens/setinea.png');
        this.load.image('fundo_gramado','Imagens/Field_background2.jpg');
        this.load.image('moeda_loja','Imagens/sprite-loja.png');
        this.load.image('fundo_loja','Imagens/Loja2.png');
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
        var mage = new PlayerCharacter(this, 450, 240, "crassus", "Crassus", HP_C, ATKB_C + FOR_C, 0.7, CA_C, MANA_C);
        this.add.existing(mage);

        //player character - Marielle
        var archer = new PlayerCharacter(this, 450, 290, "marielle", "Marielle", HP_M, ATKB_M + VEL_M, 1, CA_M, MANA_M);        
        this.add.existing(archer);

        // player character - Yuusha
        var yuusha = new PlayerCharacter(this, 390, 240, "yuusha", "Yuusha", HP_Y, ATKB_Y + FOR_Y, 1, CA_Y, MANA_Y);
        this.add.existing(yuusha);

        // player character - Hime
        var healer = new PlayerCharacter(this, 390, 290, "hime", "Hime", HP_H, ATKB_H + FOR_H, 1, CA_H, MANA_H);        
        this.add.existing(healer);

        var ligma1 = new Enemy(this, 50, 260, "slime","Slime", HP_S, ATKB_S + FOR_S, CA_S, 0);
        var ligma2 = new Enemy(this, 50, 310, "slime","Slime", HP_S, ATKB_S + FOR_S, CA_S, 0); 
        this.add.existing(ligma1);
        this.add.existing(ligma2);

        MANA_Y = INT_Y + 10;
        yuusha.mana = MANA_Y;
        MANA_H = INT_H + 10;
        healer.mana = MANA_H;
        MANA_C = INT_C + 10;
        mage.mana = MANA_C;
        MANA_M = INT_M + 10;
        archer.mana = MANA_M;

        HP_Y = HPT_Y;
        yuusha.hp = HPT_Y;

        HP_H = HPT_H;
        healer.hp = HPT_H;

        HP_C = HPT_C;
        mage.hp = HPT_C;

        HP_M = HPT_M;
        archer.hp = HPT_M;

        HP_S = HPT_S;
        ligma1.hp = HPT_S;
        ligma2.hp = HPT_S;

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

        if(VEL_M >= VEL_S && VEL_Y < VEL_S && VEL_H < VEL_S && VEL_C < VEL_S){
            ordem_turnos = [archer, ligma1, ligma2, yuusha, healer, mage];
        }
        else if(VEL_M >= VEL_S && VEL_Y >= VEL_S && VEL_H < VEL_S && VEL_C < VEL_S){
            ordem_turnos = [archer, yuusha, ligma1, ligma2, healer, mage];
        }
        else if(VEL_M >= VEL_S && VEL_Y >= VEL_S && VEL_H >= VEL_S && VEL_C < VEL_S){
            ordem_turnos = [archer, yuusha, healer, ligma1, ligma2, mage];
        }
        else if(VEL_M >= VEL_S && VEL_Y >= VEL_S && VEL_H >= VEL_S && VEL_C >= VEL_S){
            ordem_turnos = [archer, yuusha, healer, mage, ligma1, ligma2];
        }
        else if(VEL_M < VEL_S && VEL_Y < VEL_S && VEL_H < VEL_S && VEL_C < VEL_S){
            ordem_turnos = [ ligma1, ligma2, archer, yuusha, healer, mage];
        }
        
        ih = 0;
        max = 0;
        ind = -1;
    },
    nextTurn: function() {
        cont2 = 0;
        turno_de = ordem_turnos[contadorzin].type;
        // if we have victory or game over
        if(this.checkEndBattle()) {           
            this.endBattle(this.checkEndBattle());
            return;
        }

        do { 
            
            for(var i = 0 ; i < this.units.length ; i++){
                if(this.units[i] == ordem_turnos[contadorzin]){
                    ind = i;
                }
            }
    
            contadorzin++;

            // // if there are no more units, we start again from the first one
            if(contadorzin >= this.units.length) {
                contadorzin = 0;
            }

        } while(!this.units[ind].living);
        // if its player hero
        if(this.units[ind] instanceof PlayerCharacter) {
            
            // we need the player to select action and then enemy
            this.events.emit("PlayerSelect", ind);
            izo.destroy();
            izo = this.add.text(213, 20, "Seu turno!", {color: "#0CE82A"});
            izo.setStroke("#000000", 6);
            this.add.existing(izo);
        } else { // else if its enemy unit
            izo.destroy();
            izo = this.add.text(171, 20, "Turno do Oponente!", {color: "#FF2A1E"});
            izo.setStroke("#000000", 6);
            this.add.existing(izo);

            // pick random living hero to be attacked
            var r;
            do {
                r = Math.floor(Math.random() * this.heroes.length);
            } while(!this.heroes[r].living) 
            // call the enemy's attack function 
            this.units[ind].ataque(this.heroes[r]);  
            // add timer for the next turn, so will have smooth gameplay
            this.time.addEvent({ delay: 4000, callback: this.nextTurn, callbackScope: this });
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
        if(action == "ataque") {            
            this.units[ind].ataque(this.enemies[target]); //this.units[ind]              
        }
        else if(action == "habilidade"){
            this.units[ind].habilidade(this.enemies[target]);
            if(this.units[ind].type == "Hime" && r >= 10 && r < 20){
                for(var i = 0 ; i < 4 ; i++){
                    if(this.heroes[i].type == "Yuusha" && this.heroes[i].hp < HPT_Y && HPT_Y >= this.heroes[i].hp + 2){
                        this.heroes[i].hp += 2;
                    }
                    else if(this.heroes[i].type == "Yuusha"){
                        var dif_hp = HPT_Y - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                    if(this.heroes[i].type == "Hime" && this.heroes[i].hp < HPT_H && HPT_H >= this.heroes[i].hp + 2){
                        this.heroes[i].hp += 2;
                    }
                    else if(this.heroes[i].type == "Hime"){
                        var dif_hp = HPT_H - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Crassus" && this.heroes[i].hp < HPT_C && HPT_C >= this.heroes[i].hp + 2){
                        this.heroes[i].hp += 2;
                    }
                    else if(this.heroes[i].type == "Crassus"){
                        var dif_hp = HPT_C - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Marielle" && this.heroes[i].hp < HPT_M && HPT_M >= this.heroes[i].hp + 2){
                        this.heroes[i].hp += 2;
                    }
                    else if(this.heroes[i].type == "Marielle"){
                        var dif_hp = HPT_M - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                }
            }
            else if(this.units[ind].type == "Hime" && r == 20){
                for(var i = 0 ; i < 4 ; i++){
                    if(this.heroes[i].type == "Yuusha" && this.heroes[i].hp < HPT_Y && HPT_Y >= this.heroes[i].hp + 4){
                        this.heroes[i].hp += 4;
                    }
                    else if(this.heroes[i].type == "Yuusha"){
                        var dif_hp = HPT_Y - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                    if(this.heroes[i].type == "Hime" && this.heroes[i].hp < HPT_H && HPT_H >= this.heroes[i].hp + 4){
                        this.heroes[i].hp += 4;
                    }
                    else if(this.heroes[i].type == "Hime"){
                        var dif_hp = HPT_H - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Crassus" && this.heroes[i].hp < HPT_C && HPT_C >= this.heroes[i].hp + 4){
                        this.heroes[i].hp += 2;
                    }
                    else if(this.heroes[i].type == "Crassus"){
                        var dif_hp = HPT_C - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Marielle" && this.heroes[i].hp < HPT_M && HPT_M >= this.heroes[i].hp + 4){
                        this.heroes[i].hp += 4;
                    }
                    else if(this.heroes[i].type == "Marielle"){
                        var dif_hp = HPT_M - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                }
            }
        }

        // next turn in 3 seconds
        this.time.addEvent({ delay: 4000, callback: this.nextTurn, callbackScope: this });        
    },
    endBattle: function(resultado) {       

        // remove os sprites e limpa a tela.
        this.heroes.length = 0;
        this.enemies.length = 0;
        for(var i = 0; i < this.units.length; i++) {
            this.units[i].destroy();            
        }
        this.units.length = 0;
       
        din_ant = dinheiros; //Guarda o valor anterior de moedas que o jogador possuia
        dinheiros += 100; //Aumenta a quantidade de moedas que o jogador possui

        this.scene.sleep('UIScene'); //Sai da cena de combate

        if(resultado == 1){ //Se o jogador ganhou a partida, ele entra na tela de vitória.
            this.scene.start('VictoryScene'); 
            
        }
        else if(resultado == 2){ //Se o jogador perdeu a partida, ele entra na tela de derrota.
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

    function Unit(scene, x, y, texture, type, hp, damage, ca, mana) {
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture);
        this.type = type;
        this.maxHp = this.hp = hp;
        this.damage = damage; // default damage
        this.ca = ca;
        this.maxMana = this.mana = mana;
        this.living = true;         
        this.menuItem = null;                
    },
    // we will use this to notify the menu item when the unit is dead
    setMenuItem: function(item) {
        this.menuItem = item;
    },
    ataque: function(target) {
        r = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

        if(target.living && (r >= target.ca && r < 20)){
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
                this.scene.events.emit("Message", "Acertou!\n" + this.type + " atacou " + target.type + " e deu " + this.damage + " de dano. " + "\nResultado do dado:" + r);
            }
            
        }
        else if(r == 20){
            target.takeDamage(this.damage * 2);
            if(target instanceof Enemy){
                this.scene.events.emit("Message", "Acerto Crítico!\n" + " Dano do ataque: " +  (this.damage * 2) + ".\n" + "Resultado do dado: " + r);
                if(this.type == "Yuusha"){
                    atk_acertados_y++;
                    dano_y = dano_y + (this.damage * 2);
                }
                else if(this.type == "Hime"){
                    atk_acertados_h++;
                    dano_h = dano_h + (this.damage * 2);
                }
                else if(this.type == "Crassus"){
                    atk_acertados_c++;
                    dano_c = dano_c + (this.damage * 2);
                }
                else if(this.type == "Marielle"){
                    atk_acertados_m++;
                    dano_m = dano_m + (this.damage * 2);
                }
            }   
            else{
                this.scene.events.emit("Message", "Acerto Crítico!\n" + this.type + " atacou " + target.type + " e deu " + (this.damage * 2) + " de dano. " + "\nResultado do dado:" + r);
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
                this.scene.events.emit("Message", "Errou o ataque!\n" + "Resultado do dado: " + r);
            }
            

        }
    },
    habilidade: function(target){
        r = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        
        out_of_mana = 0;

        if(MANA_Y <= 0 && this.type == "Yuusha"){
            out_of_mana = 1;
        }
        else if(MANA_H <= 0 && this.type == "Hime"){
            out_of_mana = 1;
        }
        else if(MANA_C <= 0 && this.type == "Crassus"){
            out_of_mana = 1;
        }
        else if(MANA_M <= 0 && this.type == "Marielle"){
            out_of_mana = 1;
        }

        if(this.type == "Hime" && r >= 10 && r < 20 && out_of_mana == 0){
            cura_total = 0;
            this.mana -= 5;
            if(HP_Y < HPT_Y && HPT_Y >= HP_Y + 2){
                HP_Y += 2;

                cura_total += 2;
            }
            else{
                var dif_hp = HPT_Y - HP_Y;
                HP_Y += dif_hp;
                cura_total += dif_hp;
            }

            if(HP_H < HPT_H && HPT_H >= HP_H + 2){
                HP_H += 2;
                cura_total += 2;
            }
            else{
                var dif_hp = HPT_H - HP_H;
                HP_H += dif_hp;
                cura_total += dif_hp;
            }
            
            if(HP_C < HPT_C && HPT_C >= HP_C + 2){
                HP_C += 2;
                cura_total += 2;
            }
            else{
                var dif_hp = HPT_C - HP_C;
                HP_C += dif_hp;
                cura_total += dif_hp;
            }

            if(HP_M < HPT_M && HPT_M >= HP_M + 2){
                HP_M += 2;
                cura_total += 2;
            }
            else{
                var dif_hp = HPT_M - HP_M;
                HP_M += dif_hp;
                cura_total += dif_hp;
            }

            this.scene.events.emit("Message", "Acertou a Palavra Curativa!\n" + " Cura total: " +  cura_total + ".\n" + "Resultado do dado: " + r);
        }
        else if(this.type == "Hime" && r == 20 && out_of_mana == 0){
            cura_total = 0;
            this.mana -= 5;
            if(HP_Y < HPT_Y && HPT_Y >= HP_Y + 4){
                HP_Y += 4;

                cura_total += 4;
            }
            else{
                var dif_hp = HPT_Y - HP_Y;
                HP_Y += dif_hp;
                cura_total += dif_hp;
            }

            if(HP_H < HPT_H && HPT_H >= HP_H + 4){
                HP_H += 4;
                cura_total += 4;
            }
            else{
                var dif_hp = HPT_H - HP_H;
                HP_H += dif_hp;
                cura_total += dif_hp;
            }
            
            if(HP_C < HPT_C && HPT_C >= HP_C + 4){
                HP_C += 4;
                cura_total += 4;
            }
            else{
                var dif_hp = HPT_C - HP_C;
                HP_C += dif_hp;
                cura_total += dif_hp;
            }

            if(HP_M < HPT_M && HPT_M >= HP_M + 4){
                HP_M += 4;
                cura_total += 4;
            }
            else{
                var dif_hp = HPT_M - HP_M;
                HP_M += dif_hp;
                cura_total += dif_hp;
            }

            this.scene.events.emit("Message", "Acertou Crítico da Palavra Curativa!" + " \nCura total: " +  cura_total + ".\n" + "Resultado do dado: " + r);
        }
        else if(this.type == "Hime" && out_of_mana == 1){
            this.scene.events.emit("Message", "O personagem está sem mana!");
        }
        else if(this.type == "Hime" && r < 10){
            this.scene.events.emit("Message", "Errou a habilidade!\n" + "Resultado do dado: " + r);
        }
        else{
            if(target.living && (r >= target.ca + 3 && r < 20) && out_of_mana == 0){
                if(this.type == "Yuusha"){
                    this.mana -= 3;
                    target.takeDamage(this.damage + 4);    
                    this.scene.events.emit("Message", "Acertou o Corte-X!" + " \nDano do ataque: " +  (this.damage + 4) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_y++;
                    dano_y = dano_y + this.damage + 4;
                }
                else if(this.type == "Crassus"){
                    this.mana -= 4;
                    target.takeDamage(INT_C + 6);    
                    this.scene.events.emit("Message", "Acertou a Bola de Fogo!" + " \nDano do ataque: " +  (INT_C + 6) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_c++;
                    dano_c = dano_c + INT_C + 6;
                }
                else if(this.type == "Marielle"){
                    this.mana -= 3;
                    target.takeDamage(this.damage + INT_M);
                    this.scene.events.emit("Message", "Acertou as Flechas de Gelo!" + " \nDano do ataque: " +  (this.damage + INT_M) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_m++;
                    dano_m = dano_m + this.damage + INT_M;
                }   
                
            }
            else if(target.living && r == 20 && out_of_mana == 0){
                if(this.type == "Yuusha"){
                    this.mana -= 3;
                    target.takeDamage((this.damage + 4) * 2);    
                    this.scene.events.emit("Message", "Acerto Crítico do Corte-X!" + " \nDano do ataque: " +  ((this.damage + 4) * 2) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_y++;
                    dano_y = dano_y + (this.damage + 4) * 2;
                }
                else if(this.type == "Crassus"){
                    this.mana -= 4;
                    target.takeDamage((INT_C + 6) * 2);    
                    this.scene.events.emit("Message", "Acerto Crítico da Bola de Fogo!" + " \nDano do ataque: " +  ((INT_C + 6) * 2) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_c++;
                    dano_c = dano_c + (INT_C + 6) * 2;
                }
                else if(this.type == "Marielle"){
                    this.mana -= 3;
                    target.takeDamage((this.damage + INT_M) * 2);
                    this.scene.events.emit("Message", "Acerto Crítico das Flechas de Gelo!" + " \nDano do ataque: " +  ((this.damage + INT_M) * 2) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_m++;
                    dano_m = dano_m + (this.damage + INT_M) * 2;
                }
            }
            else if(target.living && out_of_mana == 1){
                this.scene.events.emit("Message", "O personagem está sem mana!");
            }
            else{
                
                this.scene.events.emit("Message", "Errou a habilidade!\n" + "Resultado do dado: " + r);
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
        }
    },
    takeDamage: function(damage) {
        this.hp = this.hp - damage;
        if(this.type == "Yuusha"){
            HP_Y -= damage;
        }
        else if(this.type == "Hime"){
            HP_H -= damage;
        }
        else if(this.type == "Crassus"){
            HP_C -= damage;
        }
        else if(this.type == "Marielle"){
            HP_M -= damage;
        }
        else if(this.type == "Slime"){
            HP_S -= damage;
        }

        if(this.hp <= 0) {
            this.hp = 0;

            if(this.type == "Yuusha"){
                HP_Y = 0;
            }
            else if(this.type == "Hime"){
                HP_H = 0;
            }
            else if(this.type == "Crassus"){
                HP_C = 0;
            }
            else if(this.type == "Marielle"){
                HP_M = 0;
            }
            else if(this.type == "Slime"){
                HP_S = 0;
            }

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
    function PlayerCharacter(scene, x, y, texture, type, hp, damage, escala, ca, mana) {
        Unit.call(this, scene, x, y, texture, type, hp, damage, ca, mana);
        // flip the image so I don"t have to edit it manually
        this.flipX = true;
        this.setScale(escala);
    },
    
});

var MenuItem = new Phaser.Class({
    Extends: Phaser.GameObjects.Text,
    
    initialize:
            
    function MenuItem(x, y, text, scene) {
        if(text == "Aumentar HP dos personagens" || text == "Aumentar FORÇA dos personagens" || text == "Aumentar VELOCIDADE dos personagens" || text == "Aumentar DEFESA dos personagens" || text == "Aumentar INTELIGÊNCIA dos personagens" || text == "Aumentar ATAQUE BASE dos personagens" || text == "Voltar para o mapa"){
            Phaser.GameObjects.Text.call(this, scene, x, y, text, { color: "#ffffff", align: "left", fontSize: 15});
            this.setStroke("#000000", 6);
            
        }
        else{
            Phaser.GameObjects.Text.call(this, scene, x, y, text, { color: "#ffffff", align: "left", fontSize: 15});
        }
        
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
    addMenuItem4: function(unit) {
        var menuItem = new MenuItem(0, this.menuItems.length * 36, unit, this.scene);
        this.menuItems.push(menuItem);
        this.add(menuItem);
        return menuItem;        
    },
    addMenuItem3: function(unit) {
        var menuItem = new MenuItem(0, this.menuItems.length * 46.5, unit, this.scene);
        this.menuItems.push(menuItem);
        this.add(menuItem);
        return menuItem;        
    },
    addMenuItem2: function(unit) {
        if(unit == "Loja"){
            var menuItem = new MenuItem( 460, -329, unit, this.scene);
        }
        else{
            var menuItem = new MenuItem( this.menuItems.length * 70, 0, unit, this.scene);
        }
        
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
        sele2 = this.menuItemIndex;
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
        sele2 = this.menuItemIndex;
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
        sele2 = this.menuItemIndex;
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
        sele2 = this.menuItemIndex;
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
        this.addMenuItem4("Ataque");
        this.addMenuItem4("Habilidade");
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
        this.addMenuItem2("Fase 4");
        teste[3] = "Fase 4";
        this.addMenuItem2("Loja");
        teste[4] = "Loja";

    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedFase");        
    },
    
});

var LojaMenu = new Phaser.Class({
    Extends: Menu,

    initialize:

    function FasesMenu(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem3("Aumentar HP dos personagens");
        lista_loja[0] = "Aumentar HP dos personagens";
        this.addMenuItem3("Aumentar FORÇA dos personagens");
        lista_loja[1] = "Aumentar FORÇA dos personagens";
        this.addMenuItem3("Aumentar VELOCIDADE dos personagens");
        lista_loja[2] = "Aumentar VELOCIDADE dos personagens";
        this.addMenuItem3("Aumentar DEFESA dos personagens");
        lista_loja[3] = "Aumentar DEFESA dos personagens";
        this.addMenuItem3("Aumentar INTELIGÊNCIA dos personagens");
        lista_loja[4] = "Aumentar INTELIGÊNCIA dos personagens";
        this.addMenuItem3("Aumentar ATAQUE BASE dos personagens");
        lista_loja[5] = "Aumentar ATAQUE BASE dos personagens";

        this.addMenuItem3("Voltar para o mapa");
        lista_loja[6] = "Voltar para o mapa";

    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedLoja");        
    },
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

        var cur_txt = this.add.text(290, 366, "Dinheiro Adquirido: " + (dinheiros - din_ant), { color: "#ffffff"});
        this.add.existing(cur_txt);
        cur_txt.setStroke("#000000", 6);

    },
    receiveFaseSelection: function(action, cm) {
        if(action == "enter" && cm == "Voltar ao mapa") {            
            this.scene.sleep('VictoryScene');
            this.scene.sleep('UIScene3');

            //Start mapa
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

        var cur_txt = this.add.text(290, 366, "Dinheiro Adquirido: " + (dinheiros - din_ant), { color: "#ffffff"});
        this.add.existing(cur_txt);
        cur_txt.setStroke("#000000", 6);

    },
    receiveFaseSelection: function(action, cm) {
        if(action == "enter" && cm == "Voltar ao mapa") {            
            this.scene.sleep('DefeatScene');
            this.scene.sleep('UIScene3');
            //Start mapa
            
            this.scene.wake('UIScene2');
            
        }
    },
});

var Loja = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Loja()
    {
        Phaser.Scene.call(this, { key: "Loja" });
    },
    create: function()
    {
        this.add.image(260,220,'fundo_loja');

        // basic container to hold all menus
        this.menus = this.add.container();
                
        this.lojaMenu = new LojaMenu(13,125,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.lojaMenu;
        
        this.lojaMenu.select(0);
        sele2 = 0;

        // add menus to the container
        this.menus.add(this.lojaMenu);

        var preco1 = this.add.text(404, 125, "100 moedas", {color: "#ffffff"});
        preco1.setStroke("#000000", 6);
        this.add.existing(preco1);
        
        var preco2 = this.add.text(404, 170, "260 moedas", {color: "#ffffff"});
        preco2.setStroke("#000000", 6);
        this.add.existing(preco2);

        var preco3 = this.add.text(404, 218, "170 moedas", {color: "#ffffff"});
        preco3.setStroke("#000000", 6);
        this.add.existing(preco3);

        var preco4 = this.add.text(404, 265, "230 moedas", {color: "#ffffff"});
        preco4.setStroke("#000000", 6);
        this.add.existing(preco4);

        var preco5 = this.add.text(404, 312, "280 moedas", {color: "#ffffff"});
        preco5.setStroke("#000000", 6);
        this.add.existing(preco5);

        var preco6 = this.add.text(404, 360, "330 moedas", {color: "#ffffff"});
        preco6.setStroke("#000000", 6);
        this.add.existing(preco6);


        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedLoja", this.onSelectedLoja, this);

        this.message = new Message(this, this.events);
        this.add.existing(this.message);  
        
        this.sys.events.on('wake', this.acor, this);

        this.acor();
    },
    acor: function(){
        // moedas.destroy();

        // moedas = this.add.text(10, 30, "Moedas: " + dinheiros, { color: "#ffffff"});
        // this.add.existing(moedas);
        // moedas.setStroke("#000000", 6);

        this.currentMenu = this.lojaMenu;
        this.lojaMenu.select(0);
        sele2 = 0; 
    },
    // we have action selected and we make the enemies menu active
    // the player needs to choose an enemy to attack
    onSelectedLoja: function() {
        var cm = lista_loja[sele2];
        this.lojaMenu.deselect();
        this.currentMenu = null;
        this.receiveLojaSelection("enter",cm);
        
    },
    receiveLojaSelection: function(action, cm) {
        if(action == "enter" && cm == "Aumentar HP dos personagens") {            
            if(dinheiros >= 100){
                this.events.emit("Message", "Compra realizada!");
                HPT_Y += 2;
                HP_Y = HPT_Y; 
                HPT_H += 2;
                HP_H = HPT_H;
                HPT_C += 2;
                HP_C = HPT_C;
                HPT_M += 2;
                HP_M = HPT_M;
                dinheiros -= 100;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(0); 
            sele2 = 0;              
        }
        else if(action == "enter" && cm == "Aumentar FORÇA dos personagens") {            
            if(dinheiros >= 260){
                this.events.emit("Message", "Compra realizada!");
                FOR_Y += 1;
                FOR_H += 1;
                FOR_C += 1;
                FOR_M += 1;
                dinheiros -= 260;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(1); 
            sele2 = 1;              
        }
        else if(action == "enter" && cm == "Aumentar VELOCIDADE dos personagens") {            
            if(dinheiros >= 170){
                this.events.emit("Message", "Compra realizada!");
                VEL_Y += 1;
                VEL_H += 1;
                VEL_C += 1;
                VEL_M += 1;
                dinheiros -= 170;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(2); 
            sele2 = 2;              
        }
        else if(action == "enter" && cm == "Aumentar DEFESA dos personagens") {            
            if(dinheiros >= 230){
                this.events.emit("Message", "Compra realizada!");
                DEF_Y += 1;
                DEF_H += 1;
                DEF_C += 1;
                DEF_M += 1;
                dinheiros -= 230;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(3); 
            sele2 = 3;              
        }
        else if(action == "enter" && cm == "Aumentar INTELIGÊNCIA dos personagens") {            
            if(dinheiros >= 270){
                this.events.emit("Message", "Compra realizada!");
                DEF_Y += 1;
                DEF_H += 1;
                DEF_C += 1;
                DEF_M += 1;
                dinheiros -= 270;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(4); 
            sele2 = 4;              
        }
        else if(action == "enter" && cm == "Aumentar ATAQUE BASE dos personagens") {            
            if(dinheiros >= 330){
                this.events.emit("Message", "Compra realizada!");
                ATKB_Y += 1;
                ATKB_H += 1;
                ATKB_C += 1;
                ATKB_M += 1;
                dinheiros -= 330;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(5); 
            sele2 = 5;              
        }
        else if(action == "enter" && cm == "Voltar para o mapa"){
            this.scene.sleep('Loja');

            this.scene.wake('UIScene2');
        }
    },
    onKeyInput: function(event) {
        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowUp") {
                this.currentMenu.moveSelectionUp();
            } else if(event.code === "ArrowDown") {
                this.currentMenu.moveSelectionDown();
            } else if(event.code === "ArrowLeft" || event.code === "ArrowRight") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
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
        this.graphics.strokeRect(1, 339, 156, 100); //(2,150,90,100)
        this.graphics.fillRect(1, 339, 156, 100); //(2,150,90,100)
        //menu ataques
        this.graphics.strokeRect(158, 339, 180, 100); //(95,150,90,100)
        this.graphics.fillRect(158, 339, 180, 100); //(95,150,90,100)
        //menu herois
        this.graphics.strokeRect(339, 339, 180, 100); //(eixo x: 188, eixo y: 150, tamanho em relação a x: 130, tamanho em relação a y:100)
        this.graphics.fillRect(339, 339, 180, 100); //(188,150,130,100)
        
        // basic container to hold all menus
        this.menus = this.add.container();
                
        this.heroesMenu = new HeroesMenu(355, 361, this); //(eixo x, eixo y) = (195,153,this)       
        this.actionsMenu = new ActionsMenu(163, 353, this); //(100,153)           
        this.enemiesMenu = new EnemiesMenu(8, 353, this); //(8,153) 

        // the currently selected menu 
        this.currentMenu = this.actionsMenu;
        
        // add menus to the container
        
        this.menus.add(this.heroesMenu);
        this.menus.add(this.actionsMenu);
        this.menus.add(this.enemiesMenu);

        selecionou = "Ataque";

        var nomes = this.add.text(355, 343, "Nomes:");
        this.add.existing(nomes);

        var agape = this.add.text(440, 343, "HP:");
        this.add.existing(agape);

        var emepe = this.add.text(485, 343, "MP:");
        this.add.existing(emepe);

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

        cont2 = 0;
        this.createMenu(); 
        
        
    },
    createMenu: function() {
        // map hero menu items to heroes
        this.remapHeroes();
        // map enemies menu items to enemies
        this.remapEnemies();
        izo = this.add.text(180, 20, "Esperando para decidir o turno", {color: "#ffffff"});
        izo.setStroke("#000000", 6);
        this.add.existing(izo);

        cont2 = 0;
        selecionou = "Ataque";

        // first move
        this.battleScene.nextTurn();  
    },
    onEnemy: function(index) {
        // when the enemy is selected, we deselect all menus and send event with the enemy id
        this.heroesMenu.deselect();
        this.actionsMenu.deselect();
        this.enemiesMenu.deselect();
        this.currentMenu = null;
        //this.battleScene.receivePlayerSelection("attack", index);
        if(selecionou == "Ataque"){
            this.battleScene.receivePlayerSelection("ataque", index);    
        }
        else if(selecionou == "Habilidade"){
            this.battleScene.receivePlayerSelection("habilidade", index);
            
        }
        
    },
    onPlayerSelect: function(id) {
        var prob = ((21 - this.battleScene.enemies[0].ca) / 20) * 100;
        var prob2 = ((21 - (this.battleScene.enemies[0].ca + 3)) / 20) * 100;
        var prob3 = ((21 - 10) / 20) * 100;

        for(var i = 0 ; i < txt.length ; i++){
            txt[i].destroy();
            txt2[i].destroy();
            pr.destroy();
            pro.destroy();
        }
        
        for(var i = 0 ; i < tam_vetor_herois ; i++){
            var hHp = this.battleScene.heroes[i].hp;
            txt[i] = this.add.text(440, 361 + 20*i, hHp);
            this.add.existing(txt[i]);

            var hMana = this.battleScene.heroes[i].mana;
            txt2[i] = this.add.text(485, 361 + 20*i, hMana);
            this.add.existing(txt2[i]);

            if(i == 0){
                pr = this.add.text(268, 345 + 20*i, "Acerto: \n  " + prob.toFixed(1) + "%");
                this.add.existing(pr);
            }
            else if(i == 1){
                if(turno_de != "Hime"){
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n  " + prob3.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                else{
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n  " + prob2.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                
            }

        }
        // when its player turn, we select the active hero item and the first action
        // then we make actions menu active
        this.heroesMenu.select(id);
        this.actionsMenu.select(0);
        selecionou = "Ataque";
        this.currentMenu = this.actionsMenu;
    },
    // we have action selected and we make the enemies menu active
    // the player needs to choose an enemy to attack
    onSelectedAction: function() {
        if((turno_de != "Hime" && selecionou == "Habilidade") || selecionou == "Ataque"){
            this.currentMenu = this.enemiesMenu;
            this.enemiesMenu.select(0);
        }
        else if(turno_de == "Hime" && selecionou == "Habilidade"){
            this.onEnemy(null);
        }
        
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

                if(this.currentMenu == this.actionsMenu){
                    if(cont2 - 1 >= 0){
                        cont2--;
                    }
                    else{
                        cont2 = 1;
                    }
                }

            } else if(event.code === "ArrowDown") {
                this.currentMenu.moveSelectionDown();
                
                if(this.currentMenu == this.actionsMenu){
                    if(cont2 + 1 < 2){
                        cont2++;
                    }
                    else{
                        cont2 = 0;
                    }
                }

            } else if(event.code === "ArrowRight" || event.code === "Shift") {

            } else if(event.code === "Space" || event.code === "ArrowLeft") {
                this.currentMenu.confirm();
            } 
        }

        if(cont2 == 0){
            if(this.currentMenu == this.actionsMenu){
                selecionou = "Ataque";
            }
        }
        else if(cont2 == 1){
            if(this.currentMenu == this.actionsMenu){
                selecionou = "Habilidade";
            }
        }
        else if(cont == 2){
            
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
        //Fase 1        
        this.graphics.strokeRect(2, 339, 63, 50); //(2,150,90,100)
        this.graphics.fillRect(2, 339, 63, 50); //(2,150,90,100)
        //Fase 2
        this.graphics.strokeRect(73, 339, 63, 50); //(95,150,90,100)
        this.graphics.fillRect(73, 339, 63, 50); //(95,150,90,100)
        //Fase 3
        this.graphics.strokeRect(143, 339, 63, 50); //(eixo x: 188, eixo y: 150, tamanho em relação a x: 130, tamanho em relação a y:100)
        this.graphics.fillRect(143, 339, 63, 50); //(188,150,130,100)

        //Fase 4
        this.graphics.strokeRect(213, 339, 63, 50); //(eixo x: 188, eixo y: 150, tamanho em relação a x: 130, tamanho em relação a y:100)
        this.graphics.fillRect(213, 339, 63, 50); //(188,150,130,100)

        obj = new Objetos(this, 270, 155, "seta", 0.4);
        this.add.existing(obj);

        obj2 = new Objetos(this, 484, 62, "moeda_loja", 0.04);
        this.add.existing(obj2);

        moedas = this.add.text(10, 30, "Moedas: " + dinheiros, { color: "#ffffff"});
        this.add.existing(moedas);
        moedas.setStroke("#000000", 6);

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
        moedas.destroy();

        moedas = this.add.text(10, 30, "Moedas: " + dinheiros, { color: "#ffffff"});
        this.add.existing(moedas);
        moedas.setStroke("#000000", 6);

        this.currentMenu = this.fasesMenu;
        this.fasesMenu.select(0);
        sele = 0; 
        cont = 0;
        obj.destroy();
        obj = new Objetos(this, 270, 155, "seta", 0.4);
        this.add.existing(obj);
    },
    // we have action selected and we make the enemies menu active
    // the player needs to choose an enemy to attack
    onSelectedFase: function() {
        var cm = teste[sele];
        this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveFaseSelection("enter",cm);
        
    },
    receiveFaseSelection: function(action, cm) {
        if(action == "enter" && cm == "Fase 1") {            
            this.scene.sleep('UIScene2');
            atk_falhos_y = 0; atk_acertados_y = 0; atk_falhos_h = 0; atk_acertados_h = 0; atk_falhos_c = 0; atk_acertados_c = 0; atk_falhos_m = 0; atk_acertados_m = 0; dano_y = 0; dano_h = 0; dano_c = 0; dano_m = 0;
            // start battle
            this.scene.switch('BattleScene');                  
        }
        else if(action == "enter" && cm == "Loja"){
            this.scene.sleep('UIScene2');

            this.scene.switch('Loja');
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
                    cont = 4;
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(cont + 1 < 5){
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
            obj = new Objetos(this, 270, 155, "seta", 0.4);
            this.add.existing(obj);
        }
        else if(cont == 1){
            obj = new Objetos(this, 175, 159, "seta", 0.4);
            this.add.existing(obj);
        }
        else if(cont == 2){
            obj = new Objetos(this, 76, 165, "seta", 0.4);
            this.add.existing(obj);
        }
        else if(cont == 3){
            obj = new Objetos(this, 168, 66, "seta", 0.4);
            this.add.existing(obj);
        }
        else if(cont == 4){

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