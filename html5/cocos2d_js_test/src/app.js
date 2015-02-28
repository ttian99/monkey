/**
 *  @author     monkey_jiao
 *  @beta       1.0.0
 *  @attribute  cocos2d_js helloworld test
 */

var helloworldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function() {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. choose item of the test
        // 
        this.choose();
    },

    choose: function() {
        // 1.LabelText
        // cc.director.runScene(new LabelTextScene());

        // 2.MenuItem
        // cc.director.runScene(new MenuItemScene());

        // 3.SpriteCreate
        cc.director.runScene(new SpriteCreateScene());

    },

    // labeltext: function() {
    //     cc.director.runScene(new LabelTextScene());
    // }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new helloworldLayer();
        this.addChild(layer);
    }
});