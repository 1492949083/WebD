$(function(){
    //面板内的p标签点击事件
    $('.selectBox p').click(function(){
        hideSelectBox();
    });
});

//在localStorage中存储当前选择的进制
function setBase(base){
    localStorage.setItem("base", base);
}

function Convert(input, output){
    var base = localStorage.getItem("base");
    if(base == null){
        alert("请先选择进制");
        //清空输入框
        $(input).val("");
        return;
    }else{
        switch(base){
            case 'TenToTwo':
                TenToTwo(input, output);
        }
    }
}

//显示转换面板
function showSelectBox(){
    $('.selectBox').css('top', '7vh');
    $('.selectBox').css('opacity', '100%');
}

//隐藏转换面板
function hideSelectBox(){
    $('.selectBox').css('top', '-100vh');
    $('.selectBox').css('opacity', '0%');
}

//计算
//十进制转二进制
function TenToTwo(input, output) {
    var value = $(input).val();
    var result = "";
    while(value > 0){
        result = value%2 + result;
        value = Math.floor(value/2);
    }
    var out = $(output).val(result);
    return result;
}

