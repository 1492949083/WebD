// window.addEventListener("load", function () {
//     waterFall('photoBox', 'item');
// })
// 页面加载完成

$(function () {
    // 瀑布流布局
    waterFall('#photoBox', '.item');
    // 滚动加载
    $(window).scroll(function () {
        // 获取最后一个盒子
        var lastBox = $('#photoBox').children('div').last();
        // 获取最后一个盒子的高度
        var lastBoxDis = lastBox.offset().top + Math.floor(lastBox.outerHeight() / 2);
        // 获取文档高度
        var documentH = $(document).width();
        // 获取滚动高度
        var scrollH = $(window).scrollTop();
        // 判断是否具备加载条件
        return lastBoxDis < documentH + scrollH ? true : false;
    }) ? loadImg() : null;
    
})
// 监听窗口的改变结束后执行
$(window).resize(function () {
    waterFall('#photoBox', '.item');
})




function waterFall(father, child) {
    // 获取父盒子
    var fatherBox = $(father);
    // 获取子盒子
    var childBox = fatherBox.children(child);
    // 获取子盒子宽度
    var childWidth = childBox.outerWidth();
    // 获取父盒子宽度
    var fatherWidth = fatherBox.width();
    // 获取列数
    var cols = Math.floor(fatherWidth / childWidth);
    // 定义高度数组
    var heightArr = [];
    // 遍历子盒子
    childBox.each(function (index, value) {
        // 获取每个子盒子的高度
        var childHeight = childBox.eq(index).outerHeight();
        if (index < cols) {
            // 存储第一行的盒子高度
            heightArr[index] = childHeight;
        } else {
            // 获取最小高度
            var minBoxHeight = Math.min.apply(null, heightArr);
            // 获取最小高度的索引
            var minBoxIndex = $.inArray(minBoxHeight, heightArr);
            // 设置子盒子的样式
            $(value).css({
                'position': 'absolute',
                'top': minBoxHeight + 'px',
                'left': minBoxIndex * childWidth + 'px'
            })
            // 更新高度数组
            heightArr[minBoxIndex] += childHeight;
        }
    })

}