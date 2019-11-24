//Variáveis Random 1
var txt = [], txt2 = [], sele, teste = [], obj, cont = 0, pr, pro, teste1 = [], funciona, tx, lista = [], cont2 = 0;

//Atributos do Yuusha:
var HPT_Y = 15, HP_Y = HPT_Y, VEL_Y = 2, FOR_Y = 3, DEF_Y = 3, INT_Y = 1, SOR_Y, ATKB_Y = 3, CA_Y = 3 + VEL_Y + DEF_Y, MANA_Y = INT_Y + 5, VIVO_Y = true; //CA = 8

//Atributos da Hime:
var HPT_H = 8, HP_H = HPT_H, VEL_H = 1, FOR_H = 1, DEF_H = 0, INT_H = 1, SOR_H, ATKB_H = 2, CA_H = 3 + VEL_H + DEF_H, MANA_H = INT_H + 5, VIVO_H = true; //CA = 4

//Atributos do Crassus:
var HPT_C = 9, HP_C = HPT_C, VEL_C = 1, FOR_C = 3, DEF_C = 2, INT_C = 4, SOR_C, ATKB_C = 0, CA_C = 3 + VEL_C + DEF_C, MANA_C = INT_C + 5, VIVO_C = true; //CA = 5

//Atributos da Marielle:
var HPT_M = 12, HP_M = HPT_M, VEL_M = 3, FOR_M = 2, DEF_M = 1, INT_M = 2, SOR_M, ATKB_M = 3, CA_M = 3 + VEL_M + DEF_M, MANA_M = INT_M + 5, VIVO_M = true; //CA = 7 

//Atributo geral:
var SOR = 0;

//Atributos do Slime:
var HPT_S = 20, HP_S = HPT_S, VEL_S = 2, FOR_S = 3, DEF_S = 1, INT_S = 0, SOR_S, ATKB_S = 0, CA_S = 1 + VEL_S + DEF_S; //CA = 6

//Atributos do Golem:
var HPT_GO = 60, HP_GO = HPT_GO, VEL_GO = 1, FOR_GO = 4, DEF_GO = 3, INT_GO = 0, SOR_GO, ATKB_GO = 2, CA_GO = 3 + VEL_GO + DEF_GO; //CA = 7

//Atributos do Gárgula:
var HPT_GA = 55, HP_GA = HPT_GA, VEL_GA = 3, FOR_GA = 3, DEF_GA = 3, INT_GA = 1, SOR_GA, ATKB_GA = 2, CA_GA = 3 + VEL_GA + DEF_GA; //CA = 9

//Atributos do Borgrok:
var HPT_B = 150, HP_B = HPT_B, VEL_B = 4, FOR_B = 5, DEF_B = 3, INT_B = 0, SOR_B, ATKB_B = 3, CA_B = 3 + VEL_B + DEF_B; //CA = 10

//Variáveis Random 2
var velocidades = [ VEL_Y, VEL_H, VEL_C, VEL_M ], max = 0, ind = -1, tam_vetor_herois, herois = [];

//Variáveis para Estatísticas
var atk_falhos_y = 0, atk_acertados_y = 0, atk_falhos_h = 0, atk_acertados_h = 0, atk_falhos_c = 0, atk_acertados_c = 0, atk_falhos_m = 0, atk_acertados_m = 0, dano_y = 0, dano_h = 0, dano_c = 0, dano_m = 0, MVIP;
var atk_sofrido_y = 0, atk_sofrido_h = 0, atk_sofrido_c = 0, atk_sofrido_m = 0;

//Variáveis Random 3
var maior_dano, ih = 0, vel_ordenada = [ VEL_Y, VEL_H, VEL_C, VEL_M ], auxiliar, contadorzin = 0, exec = 0, aviso = 0, vod, vel_rem, vel_rem2, tam_vetor_herois_ord = 0;
var dinheiros = 0, din_ant = 0, moedas, obj2, lista_loja = [], sele2, selecionou, out_of_mana = 0, cura_total = 0, izo, ordem_turnos = [], turno_de, r, qual_fase, lista1 = [];
var lista2 = [], contHist = 0, selection = 0, contHist2 = 0, contHist3 = 0, contHist4 = 0, contHist5 = 0, contHist6 = 0, contHist7 = 0, contHist8 = 0, contHist9 = 0, contHist10 = 0;
var contHist11 = 0, lista3 = [], lista4 = [], contEnd = 0, contEnd2 = 0, contEnd3 = 0, contEnd4 = 0, lista5 = [], titulao, escudo, music, music2, music3, music4, music5, music6;
var music7, music8, music9;

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
        this.load.image('golem','Imagens/golem.png');
        this.load.image('gargula','Imagens/Gargula.png');
        this.load.image('marielle','Imagens/archer2.png');
        this.load.image('crassus','Imagens/crassus.png');
        this.load.image('yuusha','Imagens/Yuusha2.png');
        this.load.image('hime','Imagens/Hime2.png');
        this.load.image('borgrok','Imagens/flame_blood_lancer1.png');
        this.load.image('mapa','Imagens/mapa.png');
        this.load.image('seta','Imagens/setinea.png');
        this.load.image('fundo_gramado','Imagens/Field_background3.png');
        this.load.image('moeda_loja','Imagens/sprite-loja.png');
        this.load.image('fundo_loja','Imagens/Loja2.png');
        this.load.image('fundo_deserto','Imagens/Wasteland_background1.png');
        this.load.image('fundo_mar','Imagens/Ocean_backgound22.png');
        this.load.image('fundo_bossfight','Imagens/Burned_background-Recovered.jpg');
        this.load.image('fundo_acontecimento','Imagens/placa.png');
        this.load.image('fundo_castelo','Imagens/castelo.png');
        this.load.image('fundo_castelo_chovendo','Imagens/castelo_destruido.jpeg');
        this.load.image('fundo_cidade','Imagens/sprite_cidade.jpg');
        this.load.image('tigre_escudo','Imagens/sprite_tigrao_att_bombapatch_escudo_semi.png');
        this.load.image('titulo','Imagens/titulo.png');

        //this.load.audio('tema_mapa','Soundtrack/World_Map.mp3');
        this.load.audio('tema_loja','Soundtrack/Maybe_shop_theme(1).mp3');
        this.load.audio('tema_intro','Soundtrack/intro.mp3');
        this.load.audio('tema_fase1','Soundtrack/battle(1).mp3');
        this.load.audio('tema_acont1','Soundtrack/I_dont_know(1).mp3');
        this.load.audio('tema_boss','Soundtrack/Boss_battle.mp3');
        this.load.audio('tema_final','Soundtrack/victory.mp3');
        this.load.audio('tema_telavic','Soundtrack/World_Map(1).mp3');
        this.load.audio('tema_mapa','Soundtrack/I_dont_know.mp3');
        this.load.audio('tema_defeat','Soundtrack/Maybe_shop_theme.mp3')
    },

    create: function ()
    {
        this.scene.start("Historia1");
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

        music4 = this.sound.add("tema_fase1");
        music4.play();
        music4.setLoop(true);
        music4.setVolume(0.5);

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

        var ligma1 = new Enemy(this, 50, 260, "slime","Slime", HP_S, ATKB_S + FOR_S, CA_S, 0.5);
        var ligma2 = new Enemy(this, 50, 310, "slime","Slime", HP_S, ATKB_S + FOR_S, CA_S, 0.5); 
        this.add.existing(ligma1);
        this.add.existing(ligma2);

        MANA_Y = INT_Y + 5;
        yuusha.mana = MANA_Y;
        MANA_H = INT_H + 5;
        healer.mana = MANA_H;
        MANA_C = INT_C + 5;
        mage.mana = MANA_C;
        MANA_M = INT_M + 5;
        archer.mana = MANA_M;

        VIVO_Y = true;
        VIVO_H = true;
        VIVO_C = true;
        VIVO_M = true;

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
            turno_de = ordem_turnos[contadorzin].type;
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
            if(this.units[ind].type == "Hime" && r >= 1 && r < 20){
                for(var i = 0 ; i < 4 ; i++){
                    if(this.heroes[i].type == "Yuusha" && this.heroes[i].hp < HPT_Y && HPT_Y >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Yuusha" && this.heroes[i].living){
                        var dif_hp = HPT_Y - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                    if(this.heroes[i].type == "Hime" && this.heroes[i].hp < HPT_H && HPT_H >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Hime" && this.heroes[i].living){
                        var dif_hp = HPT_H - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Crassus" && this.heroes[i].hp < HPT_C && HPT_C >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Crassus" && this.heroes[i].living){
                        var dif_hp = HPT_C - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Marielle" && this.heroes[i].hp < HPT_M && HPT_M >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Marielle" && this.heroes[i].living){
                        var dif_hp = HPT_M - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                }
            }
            else if(this.units[ind].type == "Hime" && r == 20){
                for(var i = 0 ; i < 4 ; i++){
                    if(this.heroes[i].type == "Yuusha" && this.heroes[i].hp < HPT_Y && HPT_Y >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Yuusha" && this.heroes[i].living){
                        var dif_hp = HPT_Y - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                    if(this.heroes[i].type == "Hime" && this.heroes[i].hp < HPT_H && HPT_H >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Hime" && this.heroes[i].living){
                        var dif_hp = HPT_H - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Crassus" && this.heroes[i].hp < HPT_C && HPT_C >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Crassus" && this.heroes[i].living){
                        var dif_hp = HPT_C - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Marielle" && this.heroes[i].hp < HPT_M && HPT_M >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Marielle" && this.heroes[i].living){
                        var dif_hp = HPT_M - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                }
            }
        }
        // else if(action == "fugir"){
        //     this.scene.sleep('UIScene');

        //     this.scene.switch('UIScene2');
        // }

        // next turn in 4 seconds
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
        
        music4.stop();
        this.scene.sleep('UIScene'); //Sai da cena de combate

        if(resultado == 1){ //Se o jogador ganhou a partida, ele entra na tela de vitória.
            dinheiros += 100; //Aumenta a quantidade de moedas que o jogador possui
            this.scene.start('VictoryScene'); 
            
        }
        else if(resultado == 2){ //Se o jogador perdeu a partida, ele entra na tela de derrota.
            dinheiros += 50; //Aumenta a quantidade de moedas que o jogador possui
            this.scene.start('DefeatScene');
        }
        
    },
});

var BattleScene2 = new Phaser.Class({

    Extends: Phaser.Scene,
    

    initialize:

    function BattleScene2 ()
    {
        Phaser.Scene.call(this, { key: "BattleScene2" });
    },
    create: function ()
    {
        music4 = this.sound.add("tema_fase1");
        music4.play();
        music4.setLoop(true);
        music4.setVolume(0.5);

        this.add.image(400,130,'fundo_deserto');
        // Run UI Scene at the same time
        this.scene.run("UIScene4");
        
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

        var golem1 = new Enemy(this, 80, 230, "golem","Golem", HP_GO, ATKB_GO + FOR_GO, CA_GO, 0.5);
        var golem2 = new Enemy(this, 80, 280, "golem","Golem", HP_GO, ATKB_GO + FOR_GO, CA_GO, 0.5); 
        this.add.existing(golem1);
        this.add.existing(golem2);

        MANA_Y = INT_Y + 5;
        yuusha.mana = MANA_Y;
        MANA_H = INT_H + 5;
        healer.mana = MANA_H;
        MANA_C = INT_C + 5;
        mage.mana = MANA_C;
        MANA_M = INT_M + 5;
        archer.mana = MANA_M;

        VIVO_Y = true;
        VIVO_H = true;
        VIVO_C = true;
        VIVO_M = true;

        HP_Y = HPT_Y;
        yuusha.hp = HPT_Y;

        HP_H = HPT_H;
        healer.hp = HPT_H;

        HP_C = HPT_C;
        mage.hp = HPT_C;

        HP_M = HPT_M;
        archer.hp = HPT_M;

        HP_GO = HPT_GO;
        golem1.hp = HPT_GO;
        golem2.hp = HPT_GO;

        // array with heroes
        this.heroes = [ yuusha, healer, mage, archer ];
        herois = [ yuusha, healer, mage, archer ];
        tam_vetor_herois = 4;
        tam_vetor_herois_ord = 4;

        // array with enemies
        this.enemies = [ golem1, golem2 ];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);

        this.index = -1;

        contadorzin = 0;

        if(VEL_M >= VEL_GO && VEL_Y < VEL_GO && VEL_H < VEL_GO && VEL_C < VEL_GO){
            ordem_turnos = [archer, golem1, golem2, yuusha, healer, mage];
        }
        else if(VEL_M >= VEL_GO && VEL_Y >= VEL_GO && VEL_H < VEL_GO && VEL_C < VEL_GO){
            ordem_turnos = [archer, yuusha, golem1, golem2, healer, mage];
        }
        else if(VEL_M >= VEL_GO && VEL_Y >= VEL_GO && VEL_H >= VEL_GO && VEL_C < VEL_GO){
            ordem_turnos = [archer, yuusha, healer, golem1, golem2, mage];
        }
        else if(VEL_M >= VEL_GO && VEL_Y >= VEL_GO && VEL_H >= VEL_GO && VEL_C >= VEL_GO){
            ordem_turnos = [archer, yuusha, healer, mage, golem1, golem2];
        }
        else if(VEL_M < VEL_GO && VEL_Y < VEL_GO && VEL_H < VEL_GO && VEL_C < VEL_GO){
            ordem_turnos = [ golem1, golem2, archer, yuusha, healer, mage];
        }
        
        ih = 0;
        max = 0;
        ind = -1;
    },
    nextTurn: function() {
        cont2 = 0;
        
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
            turno_de = ordem_turnos[contadorzin].type;
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
            if(this.units[ind].type == "Hime" && r >= 1 && r < 20){
                for(var i = 0 ; i < 4 ; i++){
                    if(this.heroes[i].type == "Yuusha" && this.heroes[i].hp < HPT_Y && HPT_Y >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Yuusha" && this.heroes[i].living){
                        var dif_hp = HPT_Y - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                    if(this.heroes[i].type == "Hime" && this.heroes[i].hp < HPT_H && HPT_H >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Hime" && this.heroes[i].living){
                        var dif_hp = HPT_H - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Crassus" && this.heroes[i].hp < HPT_C && HPT_C >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Crassus" && this.heroes[i].living){
                        var dif_hp = HPT_C - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Marielle" && this.heroes[i].hp < HPT_M && HPT_M >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Marielle" && this.heroes[i].living){
                        var dif_hp = HPT_M - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                }
            }
            else if(this.units[ind].type == "Hime" && r == 20){
                for(var i = 0 ; i < 4 ; i++){
                    if(this.heroes[i].type == "Yuusha" && this.heroes[i].hp < HPT_Y && HPT_Y >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Yuusha" && this.heroes[i].living){
                        var dif_hp = HPT_Y - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                    if(this.heroes[i].type == "Hime" && this.heroes[i].hp < HPT_H && HPT_H >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Hime" && this.heroes[i].living){
                        var dif_hp = HPT_H - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Crassus" && this.heroes[i].hp < HPT_C && HPT_C >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Crassus" && this.heroes[i].living){
                        var dif_hp = HPT_C - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Marielle" && this.heroes[i].hp < HPT_M && HPT_M >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Marielle" && this.heroes[i].living){
                        var dif_hp = HPT_M - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                }
            }
        }
        // else if(action == "fugir"){
        //     this.scene.sleep('UIScene');

        //     this.scene.switch('UIScene2');
        // }

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

        music4.stop();
        this.scene.sleep('UIScene4'); //Sai da cena de combate

        if(resultado == 1){ //Se o jogador ganhou a partida, ele entra na tela de vitória.
            dinheiros += 150; //Aumenta a quantidade de moedas que o jogador possui
            this.scene.start('VictoryScene'); 
            
        }
        else if(resultado == 2){ //Se o jogador perdeu a partida, ele entra na tela de derrota.
            dinheiros += 75; //Aumenta a quantidade de moedas que o jogador possui
            this.scene.start('DefeatScene');
        }
        
    },
});

var BattleScene3 = new Phaser.Class({

    Extends: Phaser.Scene,
    

    initialize:

    function BattleScene3 ()
    {
        Phaser.Scene.call(this, { key: "BattleScene3" });
    },
    create: function ()
    {
        music4 = this.sound.add("tema_fase1");
        music4.play();
        music4.setLoop(true);
        music4.setVolume(0.5);

        this.add.image(400,-90,'fundo_mar');
        // Run UI Scene at the same time
        this.scene.run("UIScene5");
        
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

        var gargula1 = new Enemy(this, 70, 100, "gargula", "Gargula", HP_GA, ATKB_GA + FOR_GA, CA_GA, 1.5);
        var gargula2 = new Enemy(this, 70, 160, "gargula", "Gargula", HP_GA, ATKB_GA + FOR_GA, CA_GA, 1.5);
        var gargula3 = new Enemy(this, 170, 130, "gargula", "Gargula", HP_GA, ATKB_GA + FOR_GA, CA_GA, 1.5);

        this.add.existing(gargula1);
        this.add.existing(gargula2);
        this.add.existing(gargula3);

        MANA_Y = INT_Y + 5;
        yuusha.mana = MANA_Y;
        MANA_H = INT_H + 5;
        healer.mana = MANA_H;
        MANA_C = INT_C + 5;
        mage.mana = MANA_C;
        MANA_M = INT_M + 5;
        archer.mana = MANA_M;

        VIVO_Y = true;
        VIVO_H = true;
        VIVO_C = true;
        VIVO_M = true;

        HP_Y = HPT_Y;
        yuusha.hp = HPT_Y;

        HP_H = HPT_H;
        healer.hp = HPT_H;

        HP_C = HPT_C;
        mage.hp = HPT_C;

        HP_M = HPT_M;
        archer.hp = HPT_M;

        HP_GA = HPT_GA;
        gargula1.hp = HPT_GA;
        gargula2.hp = HPT_GA;
        gargula3.hp = HPT_GA;

        // array with heroes
        this.heroes = [ yuusha, healer, mage, archer ];
        herois = [ yuusha, healer, mage, archer ];
        tam_vetor_herois = 4;
        tam_vetor_herois_ord = 4;

        // array with enemies
        this.enemies = [ gargula1, gargula2, gargula3 ];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);

        this.index = -1;

        contadorzin = 0;

        if(VEL_M >= VEL_GA && VEL_Y < VEL_GA && VEL_H < VEL_GA && VEL_C < VEL_GA){
            ordem_turnos = [archer, gargula1, gargula2, gargula3, yuusha, healer, mage];
        }
        else if(VEL_M >= VEL_GA && VEL_Y >= VEL_GA && VEL_H < VEL_GA && VEL_C < VEL_GA){
            ordem_turnos = [archer, yuusha, gargula1, gargula2, gargula3, healer, mage];
        }
        else if(VEL_M >= VEL_GA && VEL_Y >= VEL_GA && VEL_H >= VEL_GA && VEL_C < VEL_GA){
            ordem_turnos = [archer, yuusha, healer, gargula1, gargula2, gargula3, mage];
        }
        else if(VEL_M >= VEL_GA && VEL_Y >= VEL_GA && VEL_H >= VEL_GA && VEL_C >= VEL_GA){
            ordem_turnos = [archer, yuusha, healer, mage, gargula1, gargula2, gargula3];
        }
        else if(VEL_M < VEL_GA && VEL_Y < VEL_GA && VEL_H < VEL_GA && VEL_C < VEL_GA){
            ordem_turnos = [ gargula1, gargula2, gargula3, archer, yuusha, healer, mage];
        }
        
        ih = 0;
        max = 0;
        ind = -1;
    },
    nextTurn: function() {
        cont2 = 0;
        
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
            turno_de = ordem_turnos[contadorzin].type;
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
            if(this.units[ind].type == "Hime" && r >= 1 && r < 20){
                for(var i = 0 ; i < 4 ; i++){
                    if(this.heroes[i].type == "Yuusha" && this.heroes[i].hp < HPT_Y && HPT_Y >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Yuusha" && this.heroes[i].living){
                        var dif_hp = HPT_Y - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                    if(this.heroes[i].type == "Hime" && this.heroes[i].hp < HPT_H && HPT_H >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Hime" && this.heroes[i].living){
                        var dif_hp = HPT_H - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Crassus" && this.heroes[i].hp < HPT_C && HPT_C >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Crassus" && this.heroes[i].living){
                        var dif_hp = HPT_C - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Marielle" && this.heroes[i].hp < HPT_M && HPT_M >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Marielle" && this.heroes[i].living){
                        var dif_hp = HPT_M - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                }
            }
            else if(this.units[ind].type == "Hime" && r == 20){
                for(var i = 0 ; i < 4 ; i++){
                    if(this.heroes[i].type == "Yuusha" && this.heroes[i].hp < HPT_Y && HPT_Y >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Yuusha" && this.heroes[i].living){
                        var dif_hp = HPT_Y - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                    if(this.heroes[i].type == "Hime" && this.heroes[i].hp < HPT_H && HPT_H >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Hime" && this.heroes[i].living){
                        var dif_hp = HPT_H - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Crassus" && this.heroes[i].hp < HPT_C && HPT_C >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Crassus" && this.heroes[i].living){
                        var dif_hp = HPT_C - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Marielle" && this.heroes[i].hp < HPT_M && HPT_M >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Marielle" && this.heroes[i].living){
                        var dif_hp = HPT_M - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                }
            }
        }
        // else if(action == "fugir"){
        //     this.scene.sleep('UIScene');

        //     this.scene.switch('UIScene2');
        // }

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

        music4.stop();
        this.scene.sleep('UIScene5'); //Sai da cena de combate

        if(resultado == 1){ //Se o jogador ganhou a partida, ele entra na tela de vitória.
            dinheiros += 200; //Aumenta a quantidade de moedas que o jogador possui
            this.scene.start('VictoryScene'); 
            
        }
        else if(resultado == 2){ //Se o jogador perdeu a partida, ele entra na tela de derrota.
            dinheiros += 100; //Aumenta a quantidade de moedas que o jogador possui
            this.scene.start('DefeatScene');
        }
        
    },
});

var BattleScene4 = new Phaser.Class({

    Extends: Phaser.Scene,
    

    initialize:

    function BattleScene4 ()
    {
        Phaser.Scene.call(this, { key: "BattleScene4" });
    },
    create: function ()
    {
        music6 = this.sound.add("tema_boss");
        music6.play();
        music6.setLoop(true);
        music6.setVolume(0.5);

        var image = this.add.image(300, 146,'fundo_bossfight');
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(1.5).setScrollFactor(0);
        // Run UI Scene at the same time
        this.scene.run("UIScene6");
        
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

        var boss = new Enemy(this, 140, 230, "borgrok","Borgrok", HP_B, ATKB_B + FOR_B, CA_B, 1);
        this.add.existing(boss);

        MANA_Y = INT_Y + 5;
        yuusha.mana = MANA_Y;
        MANA_H = INT_H + 5;
        healer.mana = MANA_H;
        MANA_C = INT_C + 5;
        mage.mana = MANA_C;
        MANA_M = INT_M + 5;
        archer.mana = MANA_M;

        VIVO_Y = true;
        VIVO_H = true;
        VIVO_C = true;
        VIVO_M = true;

        HP_Y = HPT_Y;
        yuusha.hp = HPT_Y;

        HP_H = HPT_H;
        healer.hp = HPT_H;

        HP_C = HPT_C;
        mage.hp = HPT_C;

        HP_M = HPT_M;
        archer.hp = HPT_M;

        HP_B = HPT_B;
        boss.hp = HPT_B;
        

        // array with heroes
        this.heroes = [ yuusha, healer, mage, archer ];
        herois = [ yuusha, healer, mage, archer ];
        tam_vetor_herois = 4;
        tam_vetor_herois_ord = 4;

        // array with enemies
        this.enemies = [ boss ];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);

        this.index = -1;

        contadorzin = 0;

        if(VEL_M >= VEL_B && VEL_Y < VEL_B && VEL_H < VEL_B && VEL_C < VEL_B){
            ordem_turnos = [archer, boss, yuusha, healer, mage];
        }
        else if(VEL_M >= VEL_B && VEL_Y >= VEL_B && VEL_H < VEL_B && VEL_C < VEL_B){
            ordem_turnos = [archer, yuusha, boss, healer, mage];
        }
        else if(VEL_M >= VEL_B && VEL_Y >= VEL_B && VEL_H >= VEL_B && VEL_C < VEL_B){
            ordem_turnos = [archer, yuusha, healer, boss, mage];
        }
        else if(VEL_M >= VEL_B && VEL_Y >= VEL_B && VEL_H >= VEL_B && VEL_C >= VEL_B){
            ordem_turnos = [archer, yuusha, healer, mage, boss];
        }
        else if(VEL_M < VEL_B && VEL_Y < VEL_B && VEL_H < VEL_B && VEL_C < VEL_B){
            ordem_turnos = [ boss, archer, yuusha, healer, mage];
        }
        
        ih = 0;
        max = 0;
        ind = -1;
    },
    nextTurn: function() {
        cont2 = 0;
        
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
            turno_de = ordem_turnos[contadorzin].type;
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
            if(this.units[ind].type == "Hime" && r >= 1 && r < 20){
                for(var i = 0 ; i < 4 ; i++){
                    if(this.heroes[i].type == "Yuusha" && this.heroes[i].hp < HPT_Y && HPT_Y >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Yuusha" && this.heroes[i].living){
                        var dif_hp = HPT_Y - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                    if(this.heroes[i].type == "Hime" && this.heroes[i].hp < HPT_H && HPT_H >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Hime" && this.heroes[i].living){
                        var dif_hp = HPT_H - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Crassus" && this.heroes[i].hp < HPT_C && HPT_C >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Crassus" && this.heroes[i].living){
                        var dif_hp = HPT_C - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Marielle" && this.heroes[i].hp < HPT_M && HPT_M >= this.heroes[i].hp + (2 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (2 + INT_H);
                    }
                    else if(this.heroes[i].type == "Marielle" && this.heroes[i].living){
                        var dif_hp = HPT_M - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                }
            }
            else if(this.units[ind].type == "Hime" && r == 20){
                for(var i = 0 ; i < 4 ; i++){
                    if(this.heroes[i].type == "Yuusha" && this.heroes[i].hp < HPT_Y && HPT_Y >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Yuusha" && this.heroes[i].living){
                        var dif_hp = HPT_Y - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                    if(this.heroes[i].type == "Hime" && this.heroes[i].hp < HPT_H && HPT_H >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Hime" && this.heroes[i].living){
                        var dif_hp = HPT_H - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Crassus" && this.heroes[i].hp < HPT_C && HPT_C >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Crassus" && this.heroes[i].living){
                        var dif_hp = HPT_C - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }

                    if(this.heroes[i].type == "Marielle" && this.heroes[i].hp < HPT_M && HPT_M >= this.heroes[i].hp + (4 + INT_H) && this.heroes[i].living){
                        this.heroes[i].hp += (4 + INT_H);
                    }
                    else if(this.heroes[i].type == "Marielle" && this.heroes[i].living){
                        var dif_hp = HPT_M - this.heroes[i].hp;
                        this.heroes[i].hp += dif_hp;
                    }
        
                }
            }
        }
        // else if(action == "fugir"){
        //     this.scene.sleep('UIScene');

        //     this.scene.switch('UIScene2');
        // }

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

        music6.stop();

        this.scene.sleep('UIScene6'); //Sai da cena de combate

        if(resultado == 1){ //Se o jogador ganhou a partida, ele entra na tela de vitória.
            dinheiros += 400; //Aumenta a quantidade de moedas que o jogador possui
            this.scene.start('VictoryScene'); 
            
        }
        else if(resultado == 2){ //Se o jogador perdeu a partida, ele entra na tela de derrota.
            dinheiros += 175; //Aumenta a quantidade de moedas que o jogador possui
            this.scene.start('DefeatScene');
        }
        
    },
});

var Acontecimento1 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function Acontecimento1(){
        Phaser.Scene.call(this, { key: "Acontecimento1" });
    },
    create: function (){

        music5 = this.sound.add("tema_acont1");
        music5.play();
        music5.setLoop(true);
        music5.setVolume(0.5);

        var image = this.add.image(260, 230,'fundo_acontecimento');
        image.setScale(0.5);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.acMenu = new AcontecimentoMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.acMenu;
        
        this.acMenu.select(0);

        // add menus to the container
        this.menus.add(this.acMenu);

        var txt_ti = this.add.text(145, 30, "Ataque dos Slimes", { color: "#ffffff", fontSize: "23px"});
        this.add.existing(txt_ti);
        txt_ti.setStroke("#000000", 6);

        var txt_texto = this.add.text(56, 70, "Logo no começo de sua jornada, nossos heróis", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);

        var txt_texto2 = this.add.text(40, 93, "se deparam com alguns slimes atacando merca-", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto2);
        txt_texto2.setStroke("#000000", 6);

        var txt_texto3 = this.add.text(40, 116, "dores.", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto3);
        txt_texto3.setStroke("#000000", 6);

        var txt_texto4 = this.add.text(56, 139, "Eles então decidem salvá-los e partem para", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto4);
        txt_texto4.setStroke("#000000", 6);

        var txt_texto5 = this.add.text(40, 162, "cima dos monstros.", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto5);
        txt_texto5.setStroke("#000000", 6);

        var txt_rec = this.add.text(100, 202, "Recompensa: 100 moedas caso vença", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_rec);
        txt_rec.setStroke("#000000", 6);

        var txt_rec2 = this.add.text(215, 225, "50 moedas caso perca", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_rec2);
        txt_rec2.setStroke("#000000", 6);

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedAc", this.onSelectedAc, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        music5.play();
        music5.setLoop(true);
        music5.setVolume(0.5);
        this.currentMenu = this.acMenu;
        this.acMenu.select(0);
        
    },
    onSelectedAc: function() {
        
        var cm = lista1[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveAcSelection("enter",cm);
        
    },
    receiveAcSelection: function(action, cm) {
        if(action == "enter" && cm == "Ir para a fase") {            
            music5.stop();
            this.scene.sleep('Acontecimento1');
            
            //Start battle
            this.scene.switch('BattleScene');
            
        }
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

var Acontecimento2 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function Acontecimento2(){
        Phaser.Scene.call(this, { key: "Acontecimento2" });
    },
    create: function (){
        music5 = this.sound.add("tema_acont1");
        music5.play();
        music5.setLoop(true);
        music5.setVolume(0.5);

        var image = this.add.image(260, 230,'fundo_acontecimento');
        image.setScale(0.5);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.acMenu = new AcontecimentoMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.acMenu;
        
        this.acMenu.select(0);

        // add menus to the container
        this.menus.add(this.acMenu);

        var txt_ti = this.add.text(145, 30, "Golens do deserto", { color: "#ffffff", fontSize: "23px"});
        this.add.existing(txt_ti);
        txt_ti.setStroke("#000000", 6);

        var txt_texto = this.add.text(66, 70, "Após passarem pelos slimes, nossos heróis", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);

        var txt_texto2 = this.add.text(48, 93, "continuam sua jornada e, em meio ao temível", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto2);
        txt_texto2.setStroke("#000000", 6);

        var txt_texto3 = this.add.text(48, 116, "deserto Sabaku, são surpreendidos por golens", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto3);
        txt_texto3.setStroke("#000000", 6);

        var txt_texto4 = this.add.text(48, 139, "de pedra criados por Borgrok, os mesmos", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto4);
        txt_texto4.setStroke("#000000", 6);

        var txt_texto5 = this.add.text(48, 162, "tentam se livrar de nossos heróis.", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto5);
        txt_texto5.setStroke("#000000", 6);

        var txt_rec = this.add.text(100, 202, "Recompensa: 150 moedas caso vença", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_rec);
        txt_rec.setStroke("#000000", 6);

        var txt_rec2 = this.add.text(215, 225, "75 moedas caso perca", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_rec2);
        txt_rec2.setStroke("#000000", 6);

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedAc", this.onSelectedAc, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        music5.play();
        music5.setLoop(true);
        music5.setVolume(0.5);

        this.currentMenu = this.acMenu;
        this.acMenu.select(0);
        
    },
    onSelectedAc: function() {
        
        var cm = lista1[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveAcSelection("enter",cm);
        
    },
    receiveAcSelection: function(action, cm) {
        if(action == "enter" && cm == "Ir para a fase") {            
            music5.stop();

            this.scene.sleep('Acontecimento2');
            
            //Start battle
            this.scene.switch('BattleScene2');
            
        }
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

var Acontecimento3 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function Acontecimento3(){
        Phaser.Scene.call(this, { key: "Acontecimento3" });
    },
    create: function (){
        music5 = this.sound.add("tema_acont1");
        music5.play();
        music5.setLoop(true);
        music5.setVolume(0.5);

        var image = this.add.image(260, 230,'fundo_acontecimento');
        image.setScale(0.5);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.acMenu = new AcontecimentoMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.acMenu;
        
        this.acMenu.select(0);

        // add menus to the container
        this.menus.add(this.acMenu);

        var txt_ti = this.add.text(118, 10, "Assalto das Gárgulas", { color: "#ffffff", fontSize: "23px"});
        this.add.existing(txt_ti);
        txt_ti.setStroke("#000000", 6);

        var txt_texto = this.add.text(66, 40, "Ao sair do deserto, nossos herois decidem", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);

        var txt_texto2 = this.add.text(48, 63, "descansar na cidade de Guidelight antes da", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto2);
        txt_texto2.setStroke("#000000", 6);

        var txt_texto3 = this.add.text(48, 86, "batalha final, porém mal sabiam eles que", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto3);
        txt_texto3.setStroke("#000000", 6);

        var txt_texto4 = this.add.text(48, 109, "Borgrok havia enviado Gárgulas para destruí-", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto4);
        txt_texto4.setStroke("#000000", 6);

        var txt_texto5 = this.add.text(48, 132, "los juntamente com a cidade portuária.", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto5);
        txt_texto5.setStroke("#000000", 6);

        var txt_texto6 = this.add.text(66, 155, "Eles então devem derrotá-las e salvar a", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto6);
        txt_texto6.setStroke("#000000", 6);

        var txt_texto7 = this.add.text(48, 178, "cidade.", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto7);
        txt_texto7.setStroke("#000000", 6);

        var txt_rec = this.add.text(100, 202, "Recompensa: 200 moedas caso vença", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_rec);
        txt_rec.setStroke("#000000", 6);

        var txt_rec2 = this.add.text(215, 225, "100 moedas caso perca", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_rec2);
        txt_rec2.setStroke("#000000", 6);

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedAc", this.onSelectedAc, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        
        music5.play();
        music5.setLoop(true);
        music5.setVolume(0.5);

        this.currentMenu = this.acMenu;
        this.acMenu.select(0);
        
    },
    onSelectedAc: function() {
        
        var cm = lista1[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveAcSelection("enter",cm);
        
    },
    receiveAcSelection: function(action, cm) {
        if(action == "enter" && cm == "Ir para a fase") {            
            music5.stop();
            this.scene.sleep('Acontecimento3');
            
            //Start battle
            this.scene.switch('BattleScene3');
            
        }
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

var Acontecimento4 = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function Acontecimento4(){
        Phaser.Scene.call(this, { key: "Acontecimento4" });
    },
    create: function (){
        music5 = this.sound.add("tema_acont1");
        music5.play();
        music5.setLoop(true);
        music5.setVolume(0.5);

        var image = this.add.image(260, 230,'fundo_acontecimento');
        image.setScale(0.5);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.acMenu = new AcontecimentoMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.acMenu;
        
        this.acMenu.select(0);

        // add menus to the container
        this.menus.add(this.acMenu);

        var txt_ti = this.add.text(168, 10, "Batalha Final", { color: "#ffffff", fontSize: "23px"});
        this.add.existing(txt_ti);
        txt_ti.setStroke("#000000", 6);

        var txt_texto = this.add.text(66, 40, "Nossos heróis finalmente chegam as ruínas", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);

        var txt_texto2 = this.add.text(48, 63, "de Baldur Grok para sua última batalha desta", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto2);
        txt_texto2.setStroke("#000000", 6);

        var txt_texto3 = this.add.text(48, 86, "jornada.", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto3);
        txt_texto3.setStroke("#000000", 6);

        var txt_texto4 = this.add.text(66, 109, "É chegada a hora de enfrentar Borgrok com", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto4);
        txt_texto4.setStroke("#000000", 6);

        var txt_texto5 = this.add.text(48, 132, "todas as forças e trazer a paz definitiva ", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto5);
        txt_texto5.setStroke("#000000", 6);

        var txt_texto6 = this.add.text(48, 155, "para o reino de Winx.", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_texto6);
        txt_texto6.setStroke("#000000", 6);

        var txt_rec = this.add.text(100, 202, "Recompensa: 400 moedas caso vença", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_rec);
        txt_rec.setStroke("#000000", 6);

        var txt_rec2 = this.add.text(215, 225, "175 moedas caso perca", { color: "#ffffff", fontSize: "16px"});
        this.add.existing(txt_rec2);
        txt_rec2.setStroke("#000000", 6);

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedAc", this.onSelectedAc, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        
        music5.play();
        music5.setLoop(true);
        music5.setVolume(0.5);

        this.currentMenu = this.acMenu;
        this.acMenu.select(0);
        
    },
    onSelectedAc: function() {
        
        var cm = lista1[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveAcSelection("enter",cm);
        
    },
    receiveAcSelection: function(action, cm) {
        if(action == "enter" && cm == "Ir para a fase") {            
            music5.stop();
            this.scene.sleep('Acontecimento4');
            
            //Start battle
            this.scene.switch('BattleScene4');
            
        }
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

var Historia1 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia1(){
        Phaser.Scene.call(this, { key: "Historia1" });
    },
    create: function (){
        music3 = this.sound.add("tema_intro");
        music3.play();
        music3.setLoop(true);
        music3.setVolume(0.5);

        var image = this.add.image(260, 200,'fundo_castelo');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu(270,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(60, 40, "Em um passado distante, o reino de Winx", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});        

        var txt_texto = this.add.text(30, 88, "prosperava em uma era de paz, seu povo era", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 136, "abençoado com grandes colheitas e a guerra", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 184, "não atormentava a vida dos cidadãos do reino", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 232, "a décadas.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(60, 280, "Até o dia da chegada de Borgrok.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        contHist = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        contHist = 0;
        selection = 0;
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista2[selection];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Historia1');
            
            //Start battle
            this.scene.switch('Historia2');
        }
        else if(action == "enter" && cm == "Pular História") {            
            
            music3.stop();
        
            this.scene.sleep('História1');
            
            //Start battle
            this.scene.switch('UIScene2');   
        }
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(this.currentMenu == this.histMenu){
                    if(contHist - 1 >= 0){
                        contHist--;
                    }
                    else{
                        contHist = 1;
                    }
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(this.currentMenu == this.actionsMenu){
                    if(contHist + 1 < 2){
                        contHist++;
                    }
                    else{
                        contHist = 0;
                    }
                }
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },

});

var Historia2 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia2(){
        Phaser.Scene.call(this, { key: "Historia2" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_castelo_chovendo');
        image.setScale(1);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu(270,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(60, 40, "Com seu exército de monstros, Borgrok", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});        

        var txt_texto = this.add.text(30, 88, "destruiu cidades, queimou vilas e espalhou o", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 136, "caos pelo reino.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(60, 184, "Devastado pela força de seu inimigo, o", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 232, "reino estava a beira da destruição completa", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 280, "quando as 12 ordens de cavaleiros se uniram", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 328, "em uma investida final contra o vilão.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        contHist2 = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        contHist2= 0;
        selection = 0;
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista2[selection];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Historia2');
            
            //Start battle
            this.scene.switch('Historia3');
        }
        else if(action == "enter" && cm == "Pular História") {            
            music3.stop();
            this.scene.sleep('História2');
            
            //Start battle
            this.scene.switch('UIScene2');   
        }
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(this.currentMenu == this.histMenu){
                    if(contHist2 - 1 >= 0){
                        contHist2--;
                    }
                    else{
                        contHist2 = 1;
                    }
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(this.currentMenu == this.actionsMenu){
                    if(contHist2 + 1 < 2){
                        contHist2++;
                    }
                    else{
                        contHist2 = 0;
                    }
                }
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },

});

var Historia3 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia3(){
        Phaser.Scene.call(this, { key: "Historia3" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_castelo_chovendo');
        image.setScale(1);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu(270,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(60, 40, "Um a um, todos os territórios tomados por", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});        

        var txt_texto = this.add.text(30, 88, "Borgrok foram reconquistados, e, foi na", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 136, "fortaleza de Baldur Grok, que os nobres", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 184, "guerreiros o enfrentaram.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(60, 232, "A um grande custo, a vitória foi", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 280, "alcançada, a paz reconquistada e uma nova", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 328, "era surgia para o reino.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        contHist3 = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        contHist3 = 0;
        selection = 0;
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista2[selection];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Historia3');
            
            //Start battle
            this.scene.switch('Historia4');
        }
        else if(action == "enter" && cm == "Pular História") {            
            music3.stop();
            this.scene.sleep('História3');
            
            //Start battle
            this.scene.switch('UIScene2');   
        }
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(this.currentMenu == this.histMenu){
                    if(contHist3 - 1 >= 0){
                        contHist3--;
                    }
                    else{
                        contHist3 = 1;
                    }
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(this.currentMenu == this.actionsMenu){
                    if(contHist3 + 1 < 2){
                        contHist3++;
                    }
                    else{
                        contHist3 = 0;
                    }
                }
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },

});

var Historia4 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia4(){
        Phaser.Scene.call(this, { key: "Historia4" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_castelo');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu(270,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(60, 20, "Com a vitória, as ordens se espalharam", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});        

        var txt_texto = this.add.text(30, 68, "pelo reino para combater o resto das forças", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 116, "do vilão derrotado.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(60, 164, "Quase 100 anos se passaram desde a derrota", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 212, "de Borgrok, Winx ainda é um reino em", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 260, "recuperação, monstros remanescentes ainda", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 308, "vagam pela terra, ocasionalmente atacando", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 356, "viajantes e vilarejos.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        contHist4 = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        contHist4 = 0;
        selection = 0;
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista2[selection];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Historia4');
            
            //Start battle
            this.scene.switch('Historia5');
        }
        else if(action == "enter" && cm == "Pular História") {            
            music3.stop();
            this.scene.sleep('História4');
            
            //Start battle
            this.scene.switch('UIScene2');   
        }
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(this.currentMenu == this.histMenu){
                    if(contHist4 - 1 >= 0){
                        contHist4--;
                    }
                    else{
                        contHist4 = 1;
                    }
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(this.currentMenu == this.actionsMenu){
                    if(contHist4 + 1 < 2){
                        contHist4++;
                    }
                    else{
                        contHist4 = 0;
                    }
                }
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },

});

var Historia5 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia5(){
        Phaser.Scene.call(this, { key: "Historia5" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_castelo');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu(270,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var y = new Objetos(this, 450, 300, "yuusha", 1.5);
        this.add.existing(y);
        y.flipX = true;
        this.add.tween({targets: y, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(40, 20, "Vendo então este grande problema, Yuusha,", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});        

        var txt_texto = this.add.text(10, 50, "um jovem órfão que foi criado por um", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 80, "ex-membro da Ordem do Tigre e se tornou", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 110, "aprendiz do mesmo, decide partir em uma", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 140, "jornada para derrotar os monstros restantes,", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 170, "salvando pessoas e, com isso, almejando", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 200, "restaurar a honra e a glória da Ordem do", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 230, "Tigre.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(40, 260, "Porém não demora muito para que", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 290, "o herói descubra que ele sozinho", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 320, "não é capaz de combater tais", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 350, "monstros.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        contHist5 = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        contHist5 = 0;
        selection = 0;
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista2[selection];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Historia5');
            
            //Start battle
            this.scene.switch('Historia6');
        }
        else if(action == "enter" && cm == "Pular História") {            
            music3.stop();
            this.scene.sleep('História5');
            
            //Start battle
            this.scene.switch('UIScene2');   
        }
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(this.currentMenu == this.histMenu){
                    if(contHist5 - 1 >= 0){
                        contHist5--;
                    }
                    else{
                        contHist5 = 1;
                    }
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(this.currentMenu == this.actionsMenu){
                    if(contHist5 + 1 < 2){
                        contHist5++;
                    }
                    else{
                        contHist5 = 0;
                    }
                }
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },

});

var Historia6 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia6(){
        Phaser.Scene.call(this, { key: "Historia6" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_castelo');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu(270,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var h = new Objetos(this, 463, 300, "hime", 1.5);
        this.add.existing(h);
        h.flipX = true;
        this.add.tween({targets: h, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(40, 20, "Logo ele encontra Hime em suas viagens,", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});        

        var txt_texto = this.add.text(10, 57, "garota que nasceu com habilidades para magias", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 94, "divinas.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(40, 131, "Ela havia partido do monastério de Magvel,", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 168, "lugar onde havia sido enviada por seus pais", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 205, "após perceberem a afinidade dela para tais", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 242, "magias, para ajudar mais pessoas do", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 279, "que somente aquelas que frequentavam", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 316, "a igreja onde ia.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});


        contHist6 = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        contHist6 = 0;
        selection = 0;
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista2[selection];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Historia6');
            
            //Start battle
            this.scene.switch('Historia7');
        }
        else if(action == "enter" && cm == "Pular História") {            
            music3.stop();
            this.scene.sleep('História6');
            
            //Start battle
            this.scene.switch('UIScene2');   
        }
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(this.currentMenu == this.histMenu){
                    if(contHist6 - 1 >= 0){
                        contHist6--;
                    }
                    else{
                        contHist6 = 1;
                    }
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(this.currentMenu == this.actionsMenu){
                    if(contHist6 + 1 < 2){
                        contHist6++;
                    }
                    else{
                        contHist6 = 0;
                    }
                }
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },

});

var Historia7 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia7(){
        Phaser.Scene.call(this, { key: "Historia7" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_castelo');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu(270,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var c = new Objetos(this, 460, 310, "crassus", 1);
        this.add.existing(c);
        c.flipX = true;
        this.add.tween({targets: c, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(40, 20, "Juntamente com Hime havia também Crassus,", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});        

        var txt_texto = this.add.text(10, 60, "segundo filho de uma família nobre e também um", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 100, "exímio mago.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(40, 140, "Como Crassus não teria direito aos", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 180, "territórios de seu pai e que teria que viver", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 220, "como um auxiliar de seu irmão, ele decide", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 260, "recusar seu destino, pois não queria", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 300, "viver na sombra de seu irmão.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        contHist7 = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        contHist7 = 0;
        selection = 0;
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista2[selection];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Historia7');
            
            //Start battle
            this.scene.switch('Historia8');
        }
        else if(action == "enter" && cm == "Pular História") {            
            music3.stop();
            this.scene.sleep('História7');
            
            //Start battle
            this.scene.switch('UIScene2');   
        }
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(this.currentMenu == this.histMenu){
                    if(contHist7 - 1 >= 0){
                        contHist7--;
                    }
                    else{
                        contHist7 = 1;
                    }
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(this.currentMenu == this.actionsMenu){
                    if(contHist7 + 1 < 2){
                        contHist7++;
                    }
                    else{
                        contHist7 = 0;
                    }
                }
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },

});

var Historia8 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia8(){
        Phaser.Scene.call(this, { key: "Historia8" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_castelo');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu(270,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var c = new Objetos(this, 460, 310, "crassus", 1);
        this.add.existing(c);
        c.flipX = true;
        this.add.tween({targets: c, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(60, 20, "Crassus então abandona seu título e", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 70, "família para virar aventureiro, porém", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 120, "foi ferido em uma de suas missões", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 170, "próximas a Magvel, sendo tratado por Hime", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 220, "que o levou junto quando saiu do", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 270, "monastério.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        contHist8 = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        contHist8 = 0;
        selection = 0;
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista2[selection];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Historia8');
            
            //Start battle
            this.scene.switch('Historia9');
        }
        else if(action == "enter" && cm == "Pular História") {            
            music3.stop();
            this.scene.sleep('História8');
            
            //Start battle
            this.scene.switch('UIScene2');   
        }
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(this.currentMenu == this.histMenu){
                    if(contHist8 - 1 >= 0){
                        contHist8--;
                    }
                    else{
                        contHist8 = 1;
                    }
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(this.currentMenu == this.actionsMenu){
                    if(contHist8 + 1 < 2){
                        contHist8++;
                    }
                    else{
                        contHist8 = 0;
                    }
                }
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },

});

var Historia9 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia9(){
        Phaser.Scene.call(this, { key: "Historia9" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_castelo');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu(270,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var m = new Objetos(this, 460, 310, "marielle", 1.5);
        this.add.existing(m);
        m.flipX = true;
        this.add.tween({targets: m, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(40, 20, "Durante uma dificil batalha para salvar", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 60, "uma aldeia, o grupo é auxiliado por uma elfa", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 100, "desconhecida que, após o término do combate,", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 140, "revela sua identidade.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(40, 180, "Ela diz que seu nome é Marielle e conta", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 220, "para nossos heróis o motivo de sua", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 260, "jornada e também a verdade por trás", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(10, 300, "dos ataques recentes.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        contHist9 = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        contHist9 = 0;
        selection = 0;
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista2[selection];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Historia9');
            
            //Start battle
            this.scene.switch('Historia10');
        }
        else if(action == "enter" && cm == "Pular História") {            
            music3.stop();
            this.scene.sleep('História9');
            
            //Start battle
            this.scene.switch('UIScene2');   
        }
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(this.currentMenu == this.histMenu){
                    if(contHist9 - 1 >= 0){
                        contHist9--;
                    }
                    else{
                        contHist9 = 1;
                    }
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(this.currentMenu == this.actionsMenu){
                    if(contHist9 + 1 < 2){
                        contHist9++;
                    }
                    else{
                        contHist9 = 0;
                    }
                }
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },

});

var Historia10 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia10(){
        Phaser.Scene.call(this, { key: "Historia10" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_castelo');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu(270,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var m = new Objetos(this, 460, 310, "marielle", 1.5);
        this.add.existing(m);
        m.flipX = true;
        this.add.tween({targets: m, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(60, 20, "A pedido de sua tribo, a elfa partiu para", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 70, "as ruínas de Baldur Grok buscando derrotar", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 120, "o renascido Borgrok antes que ele possa", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 170, "se reerguer por completo.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        contHist10 = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        contHist10 = 0;
        selection = 0;
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista2[selection];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Historia10');
            
            //Start battle
            this.scene.switch('Historia11');
        }
        else if(action == "enter" && cm == "Pular História") {            
            music3.stop();
            this.scene.sleep('História10');
            
            //Start battle
            this.scene.switch('UIScene2');   
        }
    },
    onKeyInput: function(event) {

        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
                if(this.currentMenu == this.histMenu){
                    if(contHist10 - 1 >= 0){
                        contHist10--;
                    }
                    else{
                        contHist10 = 1;
                    }
                }
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
                if(this.currentMenu == this.actionsMenu){
                    if(contHist10 + 1 < 2){
                        contHist10++;
                    }
                    else{
                        contHist10 = 0;
                    }
                }
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },

});

var Historia11 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Historia11(){
        Phaser.Scene.call(this, { key: "Historia11" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_castelo');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new HistoriaMenu2(350,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(60, 20, "Ao descobrirem a verdade sobre o retorno", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 70, "de Borgrok, nossos heróis convencem Marielle", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 120, "a se juntar a eles e o grupo então se", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 170, "prepara para a batalha final que irá decidir", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 220, "o futuro do reino.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        contHist11 = 0;
        selection = 0;

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista3[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Ir para o jogo"){
            music3.stop();
            this.scene.sleep('Historia11');
            
            //Start battle
            this.scene.switch('UIScene2');
        }
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

var Ending1 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Ending1(){
        Phaser.Scene.call(this, { key: "Ending1" });
    },
    create: function (){
        music7 = this.sound.add("tema_final");
        music7.play();
        music7.setLoop(true);
        music7.setVolume(0.5);

        var image = this.add.image(260, 200,'fundo_cidade');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new EndingMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(60, 20, "Depois de derrotar Borgrok com seus", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 70, "companheiros, Yuusha ficou em dúvida, sem", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 120, "monstros atacando Winx, qual seria o", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 170, "propósito das ordens de cavaleiro agora?", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(60, 220, "Com a mente em conflito sobre qual rumo", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 270, "seguir, o jovem seguiu o caminho de volta", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 320, "para casa acompanhado de Crassus e Hime.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista4[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Ending1');
            
            //Start battle
            this.scene.switch('Ending2');
        }
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

var Ending2 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Ending2(){
        Phaser.Scene.call(this, { key: "Ending2" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_cidade');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new EndingMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(60, 10, "Após meses de viajem, os amigos se", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 60, "despediram quando Yuusha finalmente retornou", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 110, "a base da ordem do tigre.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(60, 160, "Para sua surpresa, Yuusha encontrou uma", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 210, "base renovada, um número surpreendente de", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 260, "novos recrutas e os veteranos animados, como", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 310, "se a ordem nunca tivesse passado por", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 360, "dificuldades.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista4[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Ending2');
            
            //Start battle
            this.scene.switch('Ending3');
        }
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

var Ending3 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Ending3(){
        Phaser.Scene.call(this, { key: "Ending3" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_cidade');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new EndingMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(60, 20, "Yuusha foi recebido com uma grande", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 70, "celebração, recrutas ansiosos formavam filas", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 120, "para poder se apresentar para o herói, os", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 170, "integrantes veteranos pareciam mais", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 220, "otimistas do que antes.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista4[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Ending3');
            
            //Start battle
            this.scene.switch('Ending4');
        }
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

var Ending4 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Ending4(){
        Phaser.Scene.call(this, { key: "Ending4" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_cidade');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new EndingMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(60, 10, "Embora Borgrok tenha sido derrotado, para", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 60, "Hime isso não era o suficiente, monstros não", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 110, "eram o único mal que assolava os habitantes", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 160, "de Winx. ", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(60, 210, "Para continuar seguindo seu objetivo, Hime", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 260, "decidiu seguir a vida de aventureira, para", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 310, "poder ajudar o reino a se recuperar de", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(30, 360, "verdade.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista4[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Ending4');
            
            //Start battle
            this.scene.switch('Ending5');
        }
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

var Ending5 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Ending5(){
        Phaser.Scene.call(this, { key: "Ending5" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_cidade');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new EndingMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(50, 20, "Crassus, ainda obstinado em se tornar o", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 70, "mago mais famoso de Winx seguiu sua jornada", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 120, "ao lado de Hime.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(50, 170, "Com a diferença de suas motivações, muitas", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 220, "discussões acompanharam a vida dos dois, mas", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 270, "nunca deixaram de viajar juntos.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista4[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Ending5');
            
            //Start battle
            this.scene.switch('Ending6');
        }
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

var Ending6 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Ending6(){
        Phaser.Scene.call(this, { key: "Ending6" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_cidade');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new EndingMenu(370,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(50, 20, "Assim como os outros elfos, Marielle não se", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 70, "sentiu confortável ficando entre humanos por", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 120, "muito tempo, embora a compania de Yuusha,", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 170, "Crassus e Hime não lhe fosse desagradável, a", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 220, "fama e a atenção que a elfa obteve com o", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 270, "sucesso de sua missão nunca foram o objetivo", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 320, "dela.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista4[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Próximo"){
            this.scene.sleep('Ending6');
            
            //Start battle
            this.scene.switch('Ending7');
        }
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

var Ending7 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Ending7(){
        Phaser.Scene.call(this, { key: "Ending7" });
    },
    create: function (){
        var image = this.add.image(260, 200,'fundo_cidade');
        image.setScale(0.6);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        this.graphics.strokeRect(1, 389, 520, 50); 
        this.graphics.fillRect(1, 389, 520, 50);

        // basic container to hold all menus
        this.menus = this.add.container();

        this.histMenu = new EndingMenu2(330,407,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.histMenu;
        
        this.histMenu.select(0);

        // add menus to the container
        this.menus.add(this.histMenu);

        var txt_texto = this.add.text(50, 10, "Marielle foi a primeira a deixar o grupo,", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 60, "retornando a floresta de Lórien do mesmo", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 110, "jeito que tinha saído: sozinha.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(50, 160, "Pouco se sabe sobre o que aconteceu com", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 210, "Marielle depois da batalha, alguns boatos", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 260, "dizem que a guardiã se tornou a líder de sua", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 310, "vila e mantém a tradição élfica de não", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        var txt_texto = this.add.text(20, 360, "interferir na vida dos humanos.", { color: "#ffffff", fontSize: "18px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 1500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this); 
        
        // an enemy is selected
        this.events.on("SelectedHist", this.onSelectedHist, this);

        this.sys.events.on('wake', this.acorda, this);
        this.acorda();

    },
    acorda: function(){
        this.currentMenu = this.histMenu;
        this.histMenu.select(0);
        
    },
    onSelectedHist: function() {
        
        var cm = lista5[0];
        //this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveHistSelection("enter",cm);
        
    },
    receiveHistSelection: function(action, cm) {
        if(action == "enter" && cm == "Ir para os Créditos"){
            music7.stop();
            this.scene.sleep('Ending7');
            
            //Start battle
            this.scene.switch('Creditos');
        }
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

var Creditos = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Creditos(){
        Phaser.Scene.call(this, { key: "Creditos" });
    },
    create: function (){
        
        var txt_texto = this.add.text(173, 160, "FIM", { color: "#ffffff", fontFamily: "Futura", fontSize: "100px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 2500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 2500, delay: 0, alpha: { getStart: () => 1, getEnd: () => 0 },});
        
        this.time.addEvent({ delay: 2500, callback: this.proximo, callbackScope: this});  

    },
    proximo: function(){
        this.scene.sleep("Creditos");
        this.scene.switch("Creditos2");
    }

});

var Creditos2 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Creditos2(){
        Phaser.Scene.call(this, { key: "Creditos2" });
    },
    create: function (){
        
        escudo = new Objetos(this, 260, 160, "tigre_escudo", 0.8);
        this.add.existing(escudo);
        this.add.tween({targets: escudo, ease: 'Sine.easeInOut', duration: 3000, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        titulao = new Objetos(this, 260, 280, "titulo", 0.17);
        this.add.existing(titulao);
        this.add.tween({targets: titulao, ease: 'Sine.easeInOut', duration: 2500, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});

        this.time.addEvent({ delay: 3500, callback: this.vai, callbackScope: this});  

    },
    vai: function(){
        this.scene.sleep("Creditos2");
        this.scene.switch("Creditos3");
    }

});

var Creditos3 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Creditos3(){
        Phaser.Scene.call(this, { key: "Creditos3" });
    },
    create: function (){
    
        escudo.destroy();
        titulao.destroy();

        escudo = new Objetos(this, 260, 160, "tigre_escudo", 0.8);
        this.add.existing(escudo);
        this.add.tween({targets: escudo, ease: 'Sine.easeInOut', duration: 3500, delay: 0, y: { getStart: () => 160, getEnd: () => -100 },});

        titulao = new Objetos(this, 260, 280, "titulo", 0.17);
        this.add.existing(titulao);
        this.add.tween({targets: titulao, ease: 'Sine.easeInOut', duration: 4500, delay: 0, y: { getStart: () => 280, getEnd: () => -100 },});
  
        var txt_texto = this.add.text(123, 160, "Créditos:", { color: "#ffffff", fontFamily: "Futura", fontSize: "80px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 14000, delay: 0, y: { getStart: () => 500, getEnd: () => -350 },});

        var txt_texto = this.add.text(20, 160, "Roteiro: Jaime Mitsuru Hirai Filho.\nProgramação: Tiago Pinheiro Camargo. \nDesigns: Igor Yoshimitsu Ide \n               Jaime Mitsuru Hirai Filho \nSoundtrack: Igor Yoshimitsu Ide \n\n\n\n\n*Este jogo é uma obra de ficção, portanto \nqualquer semelhança com a vida real é mera \ncoincidência.", { color: "#ffffff", fontFamily: "Futura", fontSize: "26px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 17000, delay: 0, y: { getStart: () => 550, getEnd: () => -400 },});

        this.time.addEvent({ delay: 17000, callback: this.vai, callbackScope: this}); 

    },
    vai: function(){
        this.scene.sleep("Creditos3");
        this.scene.switch("Creditos4");
    }
});

var Creditos4 = new Phaser.Class({
    Extends: Phaser.Tween,
    Extends: Phaser.Scene,

    initialize:

    function Creditos4(){
        Phaser.Scene.call(this, { key: "Creditos4" });
    },
    create: function (){
  
        var txt_texto = this.add.text(40, 120, "Obrigado por \n      Jogar", { color: "#ffffff", fontFamily: "Futura", fontSize: "80px"});
        this.add.existing(txt_texto);
        txt_texto.setStroke("#000000", 6);
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 5000, delay: 0, alpha: { getStart: () => 0, getEnd: () => 1 },});
        this.add.tween({targets: txt_texto, ease: 'Sine.easeInOut', duration: 5000, delay: 0, alpha: { getStart: () => 1, getEnd: () => 0 },});

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
                if(target.type == "Yuusha"){
                    atk_sofrido_y++;
                }
                else if(target.type == "Hime"){
                    atk_sofrido_h++;
                }
                else if(target.type == "Crassus"){
                    atk_sofrido_c++;
                }
                else if(target.type == "Marielle"){
                    atk_sofrido_m++;
                }
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
                if(target.type == "Yuusha"){
                    atk_sofrido_y++;
                }
                else if(target.type == "Hime"){
                    atk_sofrido_h++;
                }
                else if(target.type == "Crassus"){
                    atk_sofrido_c++;
                }
                else if(target.type == "Marielle"){
                    atk_sofrido_m++;
                }
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

        if(this.mana < 3 && this.type == "Yuusha"){
            out_of_mana = 1;
        }
        else if(this.mana < 3 && this.type == "Hime"){
            out_of_mana = 1;
        }
        else if(this.mana < 4 && this.type == "Crassus"){
            out_of_mana = 1;
        }
        else if(this.mana < 3 && this.type == "Marielle"){
            out_of_mana = 1;
        }

        if(this.type == "Hime" && r >= 1 && r < 20 && out_of_mana == 0){
            cura_total = 0;
            if(this.mana - 3 >= 0){
                this.mana -= 3;
            }

            if(HP_Y < HPT_Y && HPT_Y >= HP_Y + (2 + INT_H) && VIVO_Y){
                HP_Y += (2 + INT_H);

                cura_total += (2 + INT_H);
            }
            else if(!VIVO_Y){
                
            }
            else{
                var dif_hp = HPT_Y - HP_Y;
                HP_Y += dif_hp;
                cura_total += dif_hp;
            }

            if(HP_H < HPT_H && HPT_H >= HP_H + (2 + INT_H) && VIVO_H){
                HP_H += (2 + INT_H);
                cura_total += (2 + INT_H);
            }
            else if(!VIVO_H){
                
            }
            else{
                var dif_hp = HPT_H - HP_H;
                HP_H += dif_hp;
                cura_total += dif_hp;
            }
            
            if(HP_C < HPT_C && HPT_C >= HP_C + (2 + INT_H) && VIVO_C){
                HP_C += (2 + INT_H);
                cura_total += (2 + INT_H);
            }
            else if(!VIVO_C){
                
            }
            else{
                var dif_hp = HPT_C - HP_C;
                HP_C += dif_hp;
                cura_total += dif_hp;
            }

            if(HP_M < HPT_M && HPT_M >= HP_M + (2 + INT_H) && VIVO_M){
                HP_M += (2 + INT_H);
                cura_total += (2 + INT_H);
            }
            else if(!VIVO_M){
                
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
            if(this.mana - 3 >= 0){
                this.mana -= 3;
            }
            if(HP_Y < HPT_Y && HPT_Y >= HP_Y + (4 + INT_H) && VIVO_Y){
                HP_Y += (4 + INT_H);

                cura_total += (4 + INT_H);
            }
            else if(!VIVO_Y){
                
            }
            else{
                var dif_hp = HPT_Y - HP_Y;
                HP_Y += dif_hp;
                cura_total += dif_hp;
            }

            if(HP_H < HPT_H && HPT_H >= HP_H + (4 + INT_H) && VIVO_H){
                HP_H += (4 + INT_H);
                cura_total += (4 + INT_H);
            }
            else if(!VIVO_H){
                
            }
            else{
                var dif_hp = HPT_H - HP_H;
                HP_H += dif_hp;
                cura_total += dif_hp;
            }
            
            if(HP_C < HPT_C && HPT_C >= HP_C + (4 + INT_H) && VIVO_C){
                HP_C += (4 + INT_H);
                cura_total += (4 + INT_H);
            }
            else if(!VIVO_C){
                
            }
            else{
                var dif_hp = HPT_C - HP_C;
                HP_C += dif_hp;
                cura_total += dif_hp;
            }

            if(HP_M < HPT_M && HPT_M >= HP_M + (4 + INT_H) && VIVO_M){
                HP_M += (4 + INT_H);
                cura_total += (4 + INT_H);
            }
            else if(!VIVO_M){
                
            }
            else{
                var dif_hp = HPT_M - HP_M;
                HP_M += dif_hp;
                cura_total += dif_hp;
            }

            this.scene.events.emit("Message", "Acertou Crítico da Palavra Curativa!" + " \nCura total: " +  cura_total + ".\n" + "Resultado do dado: " + r);
        }
        else if(this.type == "Hime" && out_of_mana == 1){
            this.scene.events.emit("Message", "O personagem está sem mana suficiente!");
        }
        else if(this.type == "Hime" && r < 10){
            this.scene.events.emit("Message", "Errou a habilidade!\n" + "Resultado do dado: " + r);
        }
        else{
            if(target.living && (r >= target.ca + 1 && r < 20) && out_of_mana == 0){
                if(this.type == "Yuusha"){
                    if(this.mana - 3 >= 0){
                        this.mana -= 3;
                    }
                    target.takeDamage(this.damage + 4);    
                    this.scene.events.emit("Message", "Acertou o Corte-X!" + " \nDano do ataque: " +  (this.damage + 4) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_y++;
                    dano_y = dano_y + this.damage + 4;
                }
                else if(this.type == "Crassus"){
                    if(this.mana - 4 >= 0){
                        this.mana -= 4;
                    }
                    target.takeDamage(INT_C + 6);    
                    this.scene.events.emit("Message", "Acertou a Bola de Fogo!" + " \nDano do ataque: " +  (INT_C + 6) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_c++;
                    dano_c = dano_c + INT_C + 6;
                }
                else if(this.type == "Marielle"){
                    if(this.mana - 3 >= 0){
                        this.mana -= 3;
                    }
                    target.takeDamage(this.damage + INT_M + 2);
                    this.scene.events.emit("Message", "Acertou as Flechas de Gelo!" + " \nDano do ataque: " +  (this.damage + INT_M + 2) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_m++;
                    dano_m = dano_m + this.damage + INT_M + 2;
                }   
                
            }
            else if(target.living && r == 20 && out_of_mana == 0){
                if(this.type == "Yuusha"){
                    if(this.mana - 3 >= 0){
                        this.mana -= 3;
                    }

                    target.takeDamage((this.damage + 4) * 2);    
                    this.scene.events.emit("Message", "Acerto Crítico do Corte-X!" + " \nDano do ataque: " +  ((this.damage + 4) * 2) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_y++;
                    dano_y = dano_y + (this.damage + 4) * 2;
                }
                else if(this.type == "Crassus"){
                    if(this.mana - 4 >= 0){
                        this.mana -= 4;
                    }
                    
                    target.takeDamage((INT_C + 6) * 2);    
                    this.scene.events.emit("Message", "Acerto Crítico da Bola de Fogo!" + " \nDano do ataque: " +  ((INT_C + 6) * 2) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_c++;
                    dano_c = dano_c + (INT_C + 6) * 2;
                }
                else if(this.type == "Marielle"){
                    if(this.mana - 3 >= 0){
                        this.mana -= 3;
                    }
                    
                    target.takeDamage((this.damage + INT_M + 2) * 2);
                    this.scene.events.emit("Message", "Acerto Crítico das Flechas de Gelo!" + " \nDano do ataque: " +  ((this.damage + INT_M + 2) * 2) + ".\n" + "Resultado do dado: " + r);
                    atk_acertados_m++;
                    dano_m = dano_m + (this.damage + INT_M + 2) * 2;
                }
            }
            else if(target.living && out_of_mana == 1){
                this.scene.events.emit("Message", "O personagem está sem mana suficiente!");
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
                VIVO_Y = false;
            }
            else if(this.type == "Hime"){
                HP_H = 0;
                VIVO_H = false;
            }
            else if(this.type == "Crassus"){
                HP_C = 0;
                VIVO_C = false;
            }
            else if(this.type == "Marielle"){
                HP_M = 0;
                VIVO_M = false;
            }
            else if(this.type == "Slime"){
                HP_S = 0;
            }
            else if(this.type == "Gargula"){
                HP_GA = 0;
            }
            else if(this.type == "Golem"){
                HP_GO = 0;
            }
            else if(this.type == "Borgrok"){
                HP_B = 0;
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
    function Enemy(scene, x, y, texture, type, hp, damage, ca, escala) {
        Unit.call(this, scene, x, y, texture, type, hp, damage, ca);
        if(type == "Borgrok" || type == "Golem"){
            this.flipX = true;
        }
        this.setScale(escala);
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
    addMenuItem6: function(unit) {
        var menuItem = new MenuItem(this.menuItems.length * 100, 0, unit, this.scene);
        this.menuItems.push(menuItem);
        this.add(menuItem);
        return menuItem;        
    },
    addMenuItem5: function(unit) {
        var menuItem = new MenuItem(this.menuItems.length * 90, 0, unit, this.scene);
        this.menuItems.push(menuItem);
        this.add(menuItem);
        return menuItem;        
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
        selection = this.menuItemIndex;
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
        selection = this.menuItemIndex;
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
        //this.addMenuItem4("Fugir");
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
        this.addMenuItem2("Concluído");
        lista[0] = "Concluído";
    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedVoltar");        
    }
    
});

var AcontecimentoMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function AcontecimentoMenu(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem2("Ir para a fase");
        lista1[0] = "Ir para a fase";
    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedAc");        
    }
    
});

var HistoriaMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function HistoriaMenu(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem5("Próximo");
        lista2[0] = "Próximo";
        this.addMenuItem5("Pular História");
        lista2[1] = "Pular História";

    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedHist");        
    }
    
});

var HistoriaMenu2 = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function HistoriaMenu2(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem6("Ir para o jogo");
        lista3[0] = "Ir para o jogo";

    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedHist");        
    }
    
});

var EndingMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function EndingMenu(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem6("Próximo");
        lista4[0] = "Próximo";

    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedHist");        
    }
    
});

var EndingMenu2 = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function EndingMenu2(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem6("Ir para os Créditos");
        lista5[0] = "Ir para os Créditos";

    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedHist");        
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
        music8 = this.sound.add("tema_telavic");
        music8.play();
        music8.setLoop(true);
        music8.setVolume(0.5);

        if(qual_fase == "Fase 1"){
            this.add.image(400,178,'fundo_gramado');
        }
        else if(qual_fase == "Fase 2"){
            this.add.image(400,180,'fundo_deserto');
        }
        else if(qual_fase == "Fase 3"){
            this.add.image(400,-152,'fundo_mar');
        }
        else if(qual_fase == "Fase 4"){
            var image = this.add.image(300, 188,'fundo_bossfight');
            image.setScale(1.5).setScrollFactor(0);
        }

        vod = 1;
        this.scene.launch('UIScene3');

        var txt_vic = this.add.text(165, 10, "VITÓRIA", { color: "#ffffff", fontSize: "45px"});
        this.add.existing(txt_vic);
        txt_vic.setStroke("#000000", 6);

        var texto = this.add.text(10, 70, "Ataques sofridos por personagem: ", { color: "#ffffff"});
        this.add.existing(texto);
        texto.setStroke("#000000", 6);

        if(tam_vetor_herois == 1){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_sofrido_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 2){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_sofrido_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_sofrido_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 3){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_sofrido_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_sofrido_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
            var texto3 = this.add.text(55, 130, herois[2].type + ": " + atk_sofrido_c, { color: "#ffffff"});
            this.add.existing(texto3);
            texto3.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 4){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_sofrido_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_sofrido_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
            var texto3 = this.add.text(55, 130, herois[2].type + ": " + atk_sofrido_c, { color: "#ffffff"});
            this.add.existing(texto3);
            texto3.setStroke("#000000", 6);
            var texto4 = this.add.text(55, 150, herois[3].type + ": " + atk_sofrido_m, { color: "#ffffff"});
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
        if(action == "enter" && cm == "Concluído") {            
            music8.stop();
            this.scene.sleep('VictoryScene');
            this.scene.sleep('UIScene3');

            if(qual_fase == "Fase 4"){
                this.scene.switch("Ending1");
            }
            else{
                //Vai para o mapa
                this.scene.wake('UIScene2');
            }
   
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

        music9 = this.sound.add("tema_defeat");
        music9.play();
        music9.setLoop(true);
        music9.setVolume(0.5);

        if(qual_fase == "Fase 1"){
            this.add.image(400,178,'fundo_gramado');
        }
        else if(qual_fase == "Fase 2"){
            this.add.image(400,180,'fundo_deserto');
        }
        else if(qual_fase == "Fase 3"){
            this.add.image(400,-145,'fundo_mar');
        }
        else if(qual_fase == "Fase 4"){
            var image = this.add.image(300, 188,'fundo_bossfight');
            image.setScale(1.5).setScrollFactor(0);
        }

        vod = 2;
        this.scene.launch('UIScene3');

        var txt_vic = this.add.text(165, 10, "DERROTA", { color: "#ffffff", fontSize: "45px"});
        this.add.existing(txt_vic);
        txt_vic.setStroke("#000000", 6);

        var texto = this.add.text(10, 70, "Ataques sofridos por personagem: ", { color: "#ffffff"});
        this.add.existing(texto);
        texto.setStroke("#000000", 6);

        if(tam_vetor_herois == 1){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_sofrido_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 2){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_sofrido_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_sofrido_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 3){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_sofrido_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_sofrido_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
            var texto3 = this.add.text(55, 130, herois[2].type + ": " + atk_sofrido_c, { color: "#ffffff"});
            this.add.existing(texto3);
            texto3.setStroke("#000000", 6);
        }
        else if(tam_vetor_herois == 4){
            var texto1 = this.add.text(55, 90, herois[0].type + ": " + atk_sofrido_y, { color: "#ffffff"});
            this.add.existing(texto1);
            texto1.setStroke("#000000", 6);
            var texto2 = this.add.text(55, 110, herois[1].type + ": " + atk_sofrido_h, { color: "#ffffff"});
            this.add.existing(texto2);
            texto2.setStroke("#000000", 6);
            var texto3 = this.add.text(55, 130, herois[2].type + ": " + atk_sofrido_c, { color: "#ffffff"});
            this.add.existing(texto3);
            texto3.setStroke("#000000", 6);
            var texto4 = this.add.text(55, 150, herois[3].type + ": " + atk_sofrido_m, { color: "#ffffff"});
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
        if(action == "enter" && cm == "Concluído") {            
            music9.stop();
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
        music2 = this.sound.add("tema_loja");
        music2.play();
        music2.setLoop(true);
        music2.setVolume(0.5);

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

        var preco1 = this.add.text(404, 125, "40 moedas", {color: "#ffffff"});
        preco1.setStroke("#000000", 6);
        this.add.existing(preco1);
        
        var preco2 = this.add.text(404, 170, "104 moedas", {color: "#ffffff"});
        preco2.setStroke("#000000", 6);
        this.add.existing(preco2);

        var preco3 = this.add.text(404, 218, "68 moedas", {color: "#ffffff"});
        preco3.setStroke("#000000", 6);
        this.add.existing(preco3);

        var preco4 = this.add.text(404, 265, "60 moedas", {color: "#ffffff"});
        preco4.setStroke("#000000", 6);
        this.add.existing(preco4);

        var preco5 = this.add.text(404, 312, "112 moedas", {color: "#ffffff"});
        preco5.setStroke("#000000", 6);
        this.add.existing(preco5);

        var preco6 = this.add.text(404, 360, "120 moedas", {color: "#ffffff"});
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
        music2.play();
        music2.setLoop(true);
        music2.setVolume(0.5);

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
            if(dinheiros >= 40){
                this.events.emit("Message", "Compra realizada!  HP aumentado em 2 unidades.");
                HPT_Y += 2;
                HP_Y = HPT_Y; 
                HPT_H += 2;
                HP_H = HPT_H;
                HPT_C += 2;
                HP_C = HPT_C;
                HPT_M += 2;
                HP_M = HPT_M;
                dinheiros -= 40;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(0); 
            sele2 = 0;              
        }
        else if(action == "enter" && cm == "Aumentar FORÇA dos personagens") {            
            if(dinheiros >= 104){
                this.events.emit("Message", "Compra realizada!  FORÇA aumentada em 1 unidade.");
                FOR_Y += 1;
                FOR_H += 1;
                FOR_C += 1;
                FOR_M += 1;
                dinheiros -= 104;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(1); 
            sele2 = 1;              
        }
        else if(action == "enter" && cm == "Aumentar VELOCIDADE dos personagens") {            
            if(dinheiros >= 68){
                this.events.emit("Message", "Compra realizada!  VELOCIDADE aumentada em 1 unidade.");
                VEL_Y += 1;
                VEL_H += 1;
                VEL_C += 1;
                VEL_M += 1;
                dinheiros -= 68;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(2); 
            sele2 = 2;              
        }
        else if(action == "enter" && cm == "Aumentar DEFESA dos personagens") {            
            if(dinheiros >= 60){
                this.events.emit("Message", "Compra realizada!  DEFESA aumentada em 1 unidade.");
                DEF_Y += 1;
                DEF_H += 1;
                DEF_C += 1;
                DEF_M += 1;
                dinheiros -= 60;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(3); 
            sele2 = 3;              
        }
        else if(action == "enter" && cm == "Aumentar INTELIGÊNCIA dos personagens") {            
            if(dinheiros >= 112){
                this.events.emit("Message", "Compra realizada!  INTELIGÊNCIA aumentada em 1 unidade.");
                INT_Y += 1;
                INT_H += 1;
                INT_C += 1;
                INT_M += 1;
                dinheiros -= 112;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(4); 
            sele2 = 4;              
        }
        else if(action == "enter" && cm == "Aumentar ATAQUE BASE dos personagens") {            
            if(dinheiros >= 120){
                this.events.emit("Message", "Compra realizada!  ATAQUE BASE aumentado em 1 unidade.");
                ATKB_Y += 1;
                ATKB_H += 1;
                ATKB_C += 1;
                ATKB_M += 1;
                dinheiros -= 120;
                
            }
            else{
                this.events.emit("Message", "Compra rejeitada! \n Não possui dinheiro suficiente.");
            }
            this.currentMenu = this.lojaMenu;   
            this.lojaMenu.select(5); 
            sele2 = 5;              
        }
        else if(action == "enter" && cm == "Voltar para o mapa"){
            music2.stop();
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
        music4.play();
        music4.setLoop(true);
        music4.setVolume(0.5);

        // map hero menu items to heroes
        this.remapHeroes();
        // map enemies menu items to enemies
        this.remapEnemies();
        izo = this.add.text(100, 20, "Esperando para decidir o turno", {color: "#ffffff"});
        izo.setStroke("#000000", 6);
        this.add.existing(izo);

        cont2 = 0;
        selecionou = "Ataque";

        var prob = ((21 - this.battleScene.enemies[0].ca) / 20) * 100;
        var prob2 = ((21 - (this.battleScene.enemies[0].ca + 1)) / 20) * 100;
        var prob3 = 100;

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
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n  " + prob2.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                else{
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n " + prob3.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                
            }

        }

        // first move
        this.time.addEvent({ delay: 1500, callback: this.battleScene.nextTurn, callbackScope: this.battleScene});
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
        // else if(selecionou == "Fugir"){
        //     this.battleScene.receivePlayerSelection("fugir", index);
        // }
        
    },
    onPlayerSelect: function(id) {
        var prob = ((21 - this.battleScene.enemies[0].ca) / 20) * 100;
        var prob2 = ((21 - (this.battleScene.enemies[0].ca + 1)) / 20) * 100;
        var prob3 = 100;

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
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n  " + prob2.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                else{
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n " + prob3.toFixed(1) + "%");
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
        else if(turno_de == "Hime" && selecionou == "Habilidade"){ //|| selecionou == "Fugir"){
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
        // else if(cont2 == 2){
        //     if(this.currentMenu == this.actionsMenu){
        //         selecionou = "Fugir";
        //     }
        // }
        else if(cont2 == 2){

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
        music = this.sound.add("tema_mapa");
        music.play();
        music.setLoop(true);
        music.setVolume(0.5);

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
        
        music.play();
        music.setLoop(true);
        music.setVolume(0.5);

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
        qual_fase = teste[sele];
        this.fasesMenu.deselect();
        this.currentMenu = null;
        this.receiveFaseSelection("enter",cm);
        
    },
    receiveFaseSelection: function(action, cm) {
        music.stop();
        if(action == "enter" && cm == "Fase 1") {            
            this.scene.sleep('UIScene2');
            atk_falhos_y = 0; atk_acertados_y = 0; atk_falhos_h = 0; atk_acertados_h = 0; atk_falhos_c = 0; atk_acertados_c = 0; atk_falhos_m = 0; atk_acertados_m = 0; dano_y = 0; dano_h = 0; dano_c = 0; dano_m = 0;
            // start battle
            this.scene.switch('Acontecimento1');
            
        }
        else if(action == "enter" && cm == "Fase 2"){
            this.scene.sleep('UIScene2');
            atk_falhos_y = 0; atk_acertados_y = 0; atk_falhos_h = 0; atk_acertados_h = 0; atk_falhos_c = 0; atk_acertados_c = 0; atk_falhos_m = 0; atk_acertados_m = 0; dano_y = 0; dano_h = 0; dano_c = 0; dano_m = 0;
            // start battle
            this.scene.switch('Acontecimento2');
        }
        else if(action == "enter" && cm == "Fase 3"){
            this.scene.sleep('UIScene2');
            atk_falhos_y = 0; atk_acertados_y = 0; atk_falhos_h = 0; atk_acertados_h = 0; atk_falhos_c = 0; atk_acertados_c = 0; atk_falhos_m = 0; atk_acertados_m = 0; dano_y = 0; dano_h = 0; dano_c = 0; dano_m = 0;
            // start battle
            this.scene.switch('Acontecimento3');
        }
        else if(action == "enter" && cm == "Fase 4"){
            this.scene.sleep('UIScene2');
            atk_falhos_y = 0; atk_acertados_y = 0; atk_falhos_h = 0; atk_acertados_h = 0; atk_falhos_c = 0; atk_acertados_c = 0; atk_falhos_m = 0; atk_acertados_m = 0; dano_y = 0; dano_h = 0; dano_c = 0; dano_m = 0;
            // start battle
            this.scene.switch('Acontecimento4');
            // this.scene.switch('Ending1');
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

var UIScene4 = new Phaser.Class({

    Extends: Phaser.GameObjects.Text,
    Extends: Phaser.Scene,
    

    initialize:

    function UIScene4 ()
    {
        Phaser.Scene.call(this, { key: "UIScene4" });
    },

    create: function ()
    {    
        this.battleScene = this.scene.get("BattleScene2");

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
        
        music4.play();
        music4.setLoop(true);
        music4.setVolume(0.5);

        // map hero menu items to heroes
        this.remapHeroes();
        // map enemies menu items to enemies
        this.remapEnemies();
        izo = this.add.text(100, 20, "Esperando para decidir o turno", {color: "#ffffff"});
        izo.setStroke("#000000", 6);
        this.add.existing(izo);

        cont2 = 0;
        selecionou = "Ataque";

        var prob = ((21 - this.battleScene.enemies[0].ca) / 20) * 100;
        var prob2 = ((21 - (this.battleScene.enemies[0].ca + 1)) / 20) * 100;
        var prob3 = 100;

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
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n  " + prob2.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                else{
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n " + prob3.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                
            }

        }

        // first move
        this.time.addEvent({ delay: 1500, callback: this.battleScene.nextTurn, callbackScope: this.battleScene});  
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
        // else if(selecionou == "Fugir"){
        //     this.battleScene.receivePlayerSelection("fugir", index);
        // }
        
    },
    onPlayerSelect: function(id) {
        var prob = ((21 - this.battleScene.enemies[0].ca) / 20) * 100;
        var prob2 = ((21 - (this.battleScene.enemies[0].ca + 1)) / 20) * 100;
        var prob3 = 100;

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
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n  " + prob2.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                else{
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n " + prob3.toFixed(1) + "%");
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
        else if(turno_de == "Hime" && selecionou == "Habilidade"){ //|| selecionou == "Fugir"){
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
        // else if(cont2 == 2){
        //     if(this.currentMenu == this.actionsMenu){
        //         selecionou = "Fugir";
        //     }
        // }
        else if(cont2 == 2){

        }
        

    },
});

var UIScene5 = new Phaser.Class({

    Extends: Phaser.GameObjects.Text,
    Extends: Phaser.Scene,
    

    initialize:

    function UIScene5 ()
    {
        Phaser.Scene.call(this, { key: "UIScene5" });
    },

    create: function ()
    {    
        this.battleScene = this.scene.get("BattleScene3");

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
        
        music4.play();
        music4.setLoop(true);
        music4.setVolume(0.5);

        // map hero menu items to heroes
        this.remapHeroes();
        // map enemies menu items to enemies
        this.remapEnemies();
        izo = this.add.text(100, 20, "Esperando para decidir o turno", {color: "#ffffff"});
        izo.setStroke("#000000", 6);
        this.add.existing(izo);

        cont2 = 0;
        selecionou = "Ataque";

        var prob = ((21 - this.battleScene.enemies[0].ca) / 20) * 100;
        var prob2 = ((21 - (this.battleScene.enemies[0].ca + 1)) / 20) * 100;
        var prob3 = 100;

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
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n  " + prob2.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                else{
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n " + prob3.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                
            }

        }

        // first move
        this.time.addEvent({ delay: 1500, callback: this.battleScene.nextTurn, callbackScope: this.battleScene});  
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
        // else if(selecionou == "Fugir"){
        //     this.battleScene.receivePlayerSelection("fugir", index);
        // }
        
    },
    onPlayerSelect: function(id) {
        var prob = ((21 - this.battleScene.enemies[0].ca) / 20) * 100;
        var prob2 = ((21 - (this.battleScene.enemies[0].ca + 1)) / 20) * 100;
        var prob3 = 100;

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
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n  " + prob2.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                else{
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n " + prob3.toFixed(1) + "%");
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
        else if(turno_de == "Hime" && selecionou == "Habilidade"){ //|| selecionou == "Fugir"){
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
        // else if(cont2 == 2){
        //     if(this.currentMenu == this.actionsMenu){
        //         selecionou = "Fugir";
        //     }
        // }
        else if(cont2 == 2){

        }
        

    },
});

var UIScene6 = new Phaser.Class({

    Extends: Phaser.GameObjects.Text,
    Extends: Phaser.Scene,
    

    initialize:

    function UIScene6 ()
    {
        Phaser.Scene.call(this, { key: "UIScene6" });
    },

    create: function ()
    {    
        this.battleScene = this.scene.get("BattleScene4");

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
        
        music6.play();
        music6.setLoop(true);
        music6.setVolume(0.5);

        // map hero menu items to heroes
        this.remapHeroes();
        // map enemies menu items to enemies
        this.remapEnemies();
        izo = this.add.text(100, 20, "Esperando para decidir o turno", {color: "#ffffff"});
        izo.setStroke("#000000", 6);
        this.add.existing(izo);

        cont2 = 0;
        selecionou = "Ataque";

        var prob = ((21 - this.battleScene.enemies[0].ca) / 20) * 100;
        var prob2 = ((21 - (this.battleScene.enemies[0].ca + 1)) / 20) * 100;
        var prob3 = 100;

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
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n  " + prob2.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                else{
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n " + prob3.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                
            }

        }

        // first move
        this.time.addEvent({ delay: 1500, callback: this.battleScene.nextTurn, callbackScope: this.battleScene});  
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
        // else if(selecionou == "Fugir"){
        //     this.battleScene.receivePlayerSelection("fugir", index);
        // }
        
    },
    onPlayerSelect: function(id) {
        
        var prob = ((21 - this.battleScene.enemies[0].ca) / 20) * 100;
        var prob2 = ((21 - (this.battleScene.enemies[0].ca + 1)) / 20) * 100;
        var prob3 = 100;

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
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n  " + prob2.toFixed(1) + "%");
                    this.add.existing(pro);
                }
                else{
                    pro = this.add.text(268, 362 + 20*i, "Acerto: \n " + prob3.toFixed(1) + "%");
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
        else if(turno_de == "Hime" && selecionou == "Habilidade"){ //|| selecionou == "Fugir"){
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
        // else if(cont2 == 2){
        //     if(this.currentMenu == this.actionsMenu){
        //         selecionou = "Fugir";
        //     }
        // }
        else if(cont2 == 2){

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