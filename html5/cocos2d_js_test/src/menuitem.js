/**
 *  @author     monkey_jiao
 *  @beta       1.0.0
 *  @attribute  cocos2d_js menuitem test
 */

var menu;
var menuItemLayer = cc.Layer.extend({
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
         * 第一类 文字类菜单
         */

        /**
         * (1)cc.MenuItemLabel
         *
         * 参数1： 显示的文本label
         * 参数2： 触发的函数
         * 参数3： 触发的目标对象， 一般在此场景中就用this
         * 注意： 需要设置label的样式， 需要一个.fnt自定义字体表
         */
        var m_label1 = cc.LabelBMFont.create("FIRST", res.hahaFnt_fnt);
        var m_item1 = cc.MenuItemLabel.create(m_label1, this.onMenuCallback, this);
        m_item1.setPosition(0, 200); //setPosition


        /**
         * (2)cc.cc.MenuItemFont
         *
         * 参数1： 显示的文本label
         * 参数2： 触发的函数
         * 参数3： 触发的目标对象， 一般在此场景中就用this
         * 注意： 需要设置label的样式， 需要一个.fnt自定义字体表
         */
        cc.MenuItemFont.setFontName("Arial");
        var m_item2 = cc.MenuItemFont.create("Test2", this.onMenuCallback, this);
        m_item2.setPosition(0, 100);



        /**
         * 第二类： 图片类菜单
         */

        /**
         * (3)cc.MenuItemSprite
         *
         * 参数1： 正常显示的图片(新建的图片后面带了一个cc.rect是设置图片区域大小， 也就是按钮的区域CCRect(x, y, width, height))
         * 参数2： 选中显示的图片
         * 参数3： 不可用显示的图片
         * 参数4： 触发的函数
         * 参数5： 触发的目标对象
         */
        var spriteNormal = cc.Sprite.create(res.s_menuItem_normal);
        var spriteSelected = cc.Sprite.create(res.s_menuItem_selected);
        var spriteDisabled = cc.Sprite.create(res.s_menuItem_disabled);
        var m_item3 = cc.MenuItemSprite.create(spriteNormal, spriteSelected, spriteDisabled, this.onMenuCallback, this);
        m_item3.setPosition(0, 0);


        /**
         * (4)cc.MenuItemImage===========================推荐使用
         *
         * 参数1： 正常显示的图片
         * 参数2： 选中显示的图片
         * 参数3： 触发的函数
         * 参数4： 触发的目标对象
         * 注意： 正常和选中的图片都最好事先在resource.js文件中标注好， 让系统首先预加载
         */

        var m_item4 = cc.MenuItemImage.create(res.s_menuItem_normal, res.s_menuItem_selected, this.onMenuCallback, this);
        m_item4.setPosition(0, -100);



        /**
         * 第三类： 开关类菜单
         */

        /**
         * (5)cc.MenuItemToggle
         *
         * 参数1： 正常显示的图片
         * 参数2： 选中显示的图片
         * 参数3： 触发的函数
         * 参数4： 触发的目标对象
         * 注意： 正常和选中的图片都最好事先在resource.js文件中标注好， 让系统首先预加载
         */

        // 用文本建立两个不同状态的按钮，每当点击时，就会更改字体的状态。
        var m_item5_1 = cc.MenuItemToggle.create(cc.MenuItemFont.create("On"), cc.MenuItemFont.create("Off"));
        m_item5_1.setPosition(0, -200);
        m_item5_1.setCallback(this.onMenuCallback2, this);


        // 也可以这样建立多个，每点击一次就逐个更改
        var m_item5_2 = cc.MenuItemToggle.create(
            cc.MenuItemFont.create("Off"),
            cc.MenuItemFont.create("33%"),
            cc.MenuItemFont.create("66%"),
            cc.MenuItemFont.create("100%"),
            this.onMenuCallback2, this
        );
        m_item5_2.setPosition(100, -200);

        // 当建立完菜单选项之后我们还需要建立一个菜单“ 大管家”， 把这些选项显示出来
        menu = cc.Menu.create(m_item1, m_item2, m_item3, m_item4, m_item5_1, m_item5_2);
        menu.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(menu);
    },
    onMenuCallback: function() {
        cc.log("you touch the menu=============================!");
        this.removeChild(menu);
    },
    onMenuCallback2: function() {
        cc.log("you touch the menu5=============================!");

    }
});

var MenuItemScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new menuItemLayer();
        this.addChild(layer);
    }
});