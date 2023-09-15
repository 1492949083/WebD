
// 初始化菜单
$("#menu").menu();

// 设置菜单选项
$("#menu").menu({
    items: "> :not(:first-child)",
    blur: {
        blur: 50
    },
    position: { my: "left top", at: "left ", of: $("") }
});
// 设置除了二级菜单所有菜单选项向右边展开
$("#menu > li > .p_ul1").menu({
    position: { my: "left top", at: "right top", of: $(".p_ul1") }
});

const theme_btn = document.getElementById("theme_btn");
const themeSelector = document.querySelector(".themeSelector");

$(".themeSelector").hide();
var click = false;
//点击theme_btn出现themeSelector
// 在这里暂停0.5秒钟
//监听点击
theme_btn.onclick = function () {
    if (click == false) {
        $(".themeSelector").show(200,'swing');

        click = true;
    } else {

        $(".themeSelector").hide(200,'swing');
        click = false;
    }
}