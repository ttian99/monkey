/**
 *@author monkey_jiao
 *@beta 1.0.0
 *@attribute cocos2d_js text test
 */


/**
 * 第一种展现方式cc.LabelTTF.create()
 * 这种方式很耗内存
 */
//参数1：显示字符串，参数2：字体，参数3：字号，参数4：宽高，参数5：定位
var myLabel = cc.LabelTTF.create('label text', 'Times New Roman', 32, cc.size(320, 32), cc.TEXT_ALIGNMENT_LEFT);