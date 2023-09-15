
// 初始化菜单
$("#menu").menu();

// 设置菜单选项
$("#menu").menu({
    items: "> :not(:first-child)",
    position: { my: "left top", at: "left ", of: $("") }
});
// 设置除了二级菜单所有菜单选项向右边展开
$("#menu > li > .p_ul1").menu({
    position: { my: "left top", at: "right top+9%", of: $(".p_ul1") }
});
