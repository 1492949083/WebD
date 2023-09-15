
// 初始化菜单
$("#menu").menu();

// 设置菜单选项
$("#menu").menu({
    items: "> :not(:first-child)",
    position: { my: "left top", at: "left bottom" }  
});

// 打开二级菜单
$("#menu").on("click", "li", function () {
    $(this).children("ul").show();
});

// 关闭二级菜单 
$("#menu").on("click", "a", function () {
    $(this).parent().parent().children("ul").hide();
});