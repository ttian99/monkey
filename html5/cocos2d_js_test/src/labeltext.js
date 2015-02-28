/**
 *  @author     monkey_jiao
 *  @beta       1.0.0
 *  @attribute  cocos2d_js labeltext test
 */

var labelTextLayer = cc.Layer.extend({
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
        var self = this;


        /////////////////////////////
        // 3. 
        //    you may modify it.

        /**
         * 第一种展现方式cc.LabelTTF.create()
         * 这种方式很耗内存
         */
        //(1)常用方式
        //参数1：显示字符串，参数2：字体，参数3：字号，参数4：宽高，参数5：定位
        var label1 = new cc.LabelTTF("测试label1", "Arial", 20, cc.size(320, 32), cc.TEXT_ALIGNMENT_LEFT);
        label1.x = size.width / 2; // setPosition the label on the center of the screen
        label1.y = size.height - 20;
        this.addChild(label1, 1); // add the label as a child to this layer

        //（2）不常用方式
        var fontDef = new cc.FontDefinition();
        fontDef.fontName = "Arial";
        fontDef.fontSize = "20";
        //参数1：显示字符串，参数2：自定义对象cc.FontDefinition
        var myLabel = cc.LabelTTF.create('测试label1.2', fontDef);
        myLabel.x = size.width / 2 + 80;
        myLabel.y = size.height - 20;
        this.addChild(myLabel, 2);

        /**
         * 第二种展现方式cc.LabelBMFont.create（）
         *
         */
        //参数1：显示字符串，参数2：.fnt文字文件
        var label2 = cc.LabelBMFont.create("THERE IS SECOND LABEL", res.hahaFnt_fnt);
        label2.setPosition(cc.p(size.width / 2, size.height / 2)); //setPosition
        label2.setColor(cc.color(0, 255, 0, 255)); //setColor
        this.addChild(label2, 3);

        /**
         * 第三种展现方式cc.LabelBMFont.create（）
         *
         */
        //参数1：显示字符串，参数2：.plist文字文件
        var label3 = cc.LabelAtlas.create("HELLO COCOS THERE IS THIRD LABEL", res.plist16_plist);
        label3.setPosition(cc.p(size.width / 2, size.height - 400));
        this.addChild(label3);

    }
});

var LabelTextScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new labelTextLayer();
        this.addChild(layer);
    }
});