

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

var click = false;
//点击theme_btn出现themeSelector
//监听点击
theme_btn.onclick = function () {
    if (click == false) {

        changeCSS(".themeSelector", "left", "0vh");
        changeCSS(".themeSelector", "opacity", "1");
        click = true;

        //鼠标没有悬停在控件上,就一秒后自动关闭
        themeSelector.onmouseleave = function () {
            setTimeout(function () {
                changeCSS(".themeSelector", "left", "-15vh");
                changeCSS(".themeSelector", "opacity", "0");
                click = false;
            }, 1000);
        }

        
        
    } else {

        changeCSS(".themeSelector", "left", "-15vh");
        changeCSS(".themeSelector", "opacity", "0");
        click = false;
    }
}

$('.themeSelector').hide();
//页面加载之后执行
$(document).ready(function () {
    
    $('.themeSelector').show();
});

