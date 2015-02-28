/**
 *  @author     monkey_jiao
 *  @beta       1.0.0
 *  @attribute  cocos2d_js spriteCteate test
 */

var menu;
var spriteCreateLayer = cc.Layer.extend({
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
        // 3. sproteCreate test一共有5种方法
        //    

        /**
         * 第一种：cc.Sprite.create(fileName)
         *
         * 通过一张图片生成精灵对象
         * 参数：图片的名称。
         */
        // var sprite1 = cc.Sprite.create("res/test_sprite.png"); //这里图片名称最好写在resource.js里面
        // sprite1.setPosition(size.width / 5, size.height / 2);
        // this.addChild(sprite1);

        /**
         * 第二种：cc.Sprite.create(fileName, rect)
         * 通过一张图片进行给定矩形裁剪生成精灵对象
         * 参数1：图片名称
         * 参数2：矩形的区域CCRect(x, y, width, height)
         */
        var sprite2 = cc.Sprite.create("res/test_sprite.png", cc.rect(0, 0, 150, 80));
        sprite2.setPosition(size.width / 5 * 2, size.height / 2);
        this.addChild(sprite2);

        /**
         * 第三种： cc.Sprite.createWithSpriteFrame(spriteFrame)
         * 通过缓存中的帧生成精灵对象
         * 参数： 帧的名称
         */
        // var spriteFrameCache = cc.SpriteFrameCache.getInstance(); //使用精灵帧缓存，方便后面多次使用
        // var frameCache = spriteFrameCache.addSpriteFrames(res.s_plist, res.s_plist_png); //第一个参数plist文件，第二个参数plist对应的png图片

        // var sprite3 = cc.Sprite.createWithSpriteFrame(spriteFrameCache.getSpriteFrame("actor_fish_hetun02_normal_002.png.png")); //plist里面对于的图片名称
        // sprite1.setPosition(size.width / 5 * 3, size.height / 2);
        // this.addChild(sprite3);
        cc.spriteFrameCache.addSpriteFrames(res.s_plist);
        var sprite3 = cc.Sprite.createWithSpriteFrame(spriteFrameCache.getSpriteFrame("actor_fish_hetun02_normal_002.png.png")); //plist里面对于的图片名称
        sprite1.setPosition(size.width / 5 * 3, size.height / 2);
        this.addChild(sprite3);


        /**
         *  第四种： cc.Sprite.createWithSpriteFrameName(spriteFrameName)
         *  另外一种通过缓存中的帧生成精灵对象
         *  参数： 帧的名称
         */
        var sprite4 = cc.Sprite.createWithSpriteFrameName("test1.png");
        sprite4.setPosition(cc.p(10, 10));
        this.addChild(sprite4);


        /**
         *  第五种： cc.Sprite.createWithTexture(texture, rect)
         *  通过Texture2D， 并进行裁剪生成精灵对象
         *  参数1： Texture图片
         *  参数2： 矩形的区域
         */


        // var batch = cc.SpriteBatchNode.create(s_mybach);
        // this.addChild(batch);

        // var sprite5 = cc.Sprite.createWithTexture(batch.getTexture(), cc.rect(0, 121, 85, 121)); //需要显示的区域
        // var sprite6 = cc.Sprite.createWithTexture(batch.getTexture(), cc.rect(85, 121, 85, 121));
        // sprite5.setPosition(cc.p(10, 10));
        // this.addChild(sprite5);

    }
});

var SpriteCreateScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new spriteCreateLayer();
        this.addChild(layer);
    }
});