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
    receivePlayerSelection: function(action) {
        if(action == "enter") {            
            this.enter();              
        }
    },
    enter: function() {
        this.input.stopPropagation();
        this.scene.sleep('UIScene2');
        this.scene.sleep('Mapa');
        // start battle
        this.scene.switch('BattleScene');
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
    // // when the associated enemy or player unit is killed
    // unitKilled: function() {
    //     this.active = false;
    //     this.visible = false;
    // },
    
});

var Menu = new Phaser.Class({
    Extends: Phaser.GameObjects.Container,
    
    initialize:
            
    function Menu(x, y, scene) {
        Phaser.GameObjects.Container.call(this, scene, x, y);
        this.menuItems = [];
        this.menuItemIndex = 0;
        this.x = x;
        this.y = y;
        this.selected = false;
    },     
    addMenuItem: function(unit) {
        var menuItem = new MenuItem( this.menuItems.length * 70, 0, unit, this.scene);
        this.menuItems.push(menuItem);
        this.add(menuItem);
        return menuItem;        
    },
    moveSelectionRight: function() {
        this.menuItems[this.menuItemIndex].deselect();
        do {
            this.menuItemIndex--;
            if(this.menuItemIndex < 0)
                this.menuItemIndex = this.menuItems.length - 1;
        } while(!this.menuItems[this.menuItemIndex].active);
        this.menuItems[this.menuItemIndex].select();
    },
    moveSelectionLeft: function() {
        this.menuItems[this.menuItemIndex].deselect();
        do {
            this.menuItemIndex++;
            if(this.menuItemIndex >= this.menuItems.length)
                this.menuItemIndex = 0;
        } while(!this.menuItems[this.menuItemIndex].active);
        this.menuItems[this.menuItemIndex].select();
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
    
});

var FasesMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function FasesMenu(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem("Fase 1");
        this.addMenuItem("Fase 2");
    },
    confirm: function() {      
        // we select an action and go to the next menu and choose from the enemies to apply the action
        this.scene.events.emit("SelectedAction");        
    }
    
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
        
        // basic container to hold all menus
        this.menus = this.add.container();
                
        this.fasesMenu = new FasesMenu(10,360,this); //(eixo x, eixo y)

        // the currently selected menu 
        this.currentMenu = this.fasesMenu;
        
        this.fasesMenu.select(0);

        // add menus to the container
        
        this.menus.add(this.fasesMenu);

        // listen for keyboard events
        this.input.keyboard.on("keydown", this.onKeyInput, this);   
           
    },
    // we have action selected and we make the enemies menu active
    // the player needs to choose an enemy to attack
    onSelectedAction: function() {
        this.fasesMenu.deselect();
        this.currentMenu = null;
        this.mapa.receivePlayerSelection("enter");
    },
    onKeyInput: function(event) {
        if(this.currentMenu && this.currentMenu.selected) {
            if(event.code === "ArrowLeft") {
                this.currentMenu.moveSelectionLeft();
            } else if(event.code === "ArrowRight") {
                this.currentMenu.moveSelectionRight();
            } else if(event.code === "ArrowUp" || event.code === "ArrowDown") {

            } else if(event.code === "Space") {
                this.currentMenu.confirm();
            } 
        }
    },
});

