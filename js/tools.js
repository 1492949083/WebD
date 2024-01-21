
//修改任意css内容工具
//没有直接调用方便jquery的css函数方便,因为这样子需要在base.js加载完成后才能调用,当时还是想太好了,但是不敢删这个,因为这个代码放了好久了,我怕有什么地方用到了
function changeCSS(className, sty, value) {
    $(className).css(sty, value);
}

