// function login(e) {
//     const baseUrl = 'http://127.0.0.1:8080/api';
//     // 阻止表单默认提交行为
//     e.preventDefault();

//     // 获取表单数据
//     const formData = new FormData(loginForm);
//     const data = Object.fromEntries(formData);

//     // 定义 XMLHttpRequest 对象
//     const xhr = new XMLHttpRequest();

//     // 请求登录接口
//     xhr.open('POST', baseUrl + '/login');

//     // 设置请求头
//     xhr.setRequestHeader('Content-Type', 'application/json');


//     // 发送请求
//     xhr.send(data);

//     // 处理响应
//     xhr.onload = function () {
//         if (xhr.status === '111.') {
//             // 登录成功
//             console.log('登录成功');
//         } else {
//             // 登录失败
//             console.log('登录失败');
//         }
//     }
// }

// // 获取登录表单
// const loginForm = document.forms.login;

// // 监听提交事件
// loginForm.addEventListener('submit', login);




const hk = document.getElementById("hk");
const hkBox = document.getElementById("hkBox");
const hkBg = document.getElementById("hkBg");
const hkBgText = document.getElementById("hkBgText");
const money = document.getElementById("money");
const money_btn = document.getElementById("money_btn");
const moneyText = document.getElementById("moneyText");
const Tlogin = document.getElementById("Tlogin");
const Tregister = document.getElementById("Tregister");

//点击登录栏
var inLogin = true;

Tlogin.onclick = function () {
    if (inLogin == false) {
        Tlogin.style.borderBottom = "5px solid var(--text-color-accent)";
        Tregister.style.borderBottom = "none";
        inLogin = true;
    }
}

Tregister.onclick = function () {
    if (inLogin == true) {
        Tregister.style.borderBottom = "5px solid var(--text-color-accent)";
        Tlogin.style.borderBottom = "none";
        inLogin = false;
    }
}


// 移动滑块
function moveHk(x) {
    hk.style.left = x + "px";
    hkBg.style.width = x + "px";
}


let end = false;
let Yclick = false;

document.onselectstart = function () { return false; };// 禁止文字选择
//滑块被按住移动,松开取消
hk.onmousedown = function (e) {
    Yclick = true;
    //获取鼠标在滑块上的位置
    let x = e.clientX - hk.offsetLeft;
    //移动滑块
    document.onmousemove = function (e) {
        if (end == true) {
            hkBgText.style.opacity = 1;
        } else {
            let _x = e.clientX - x;
            if (Yclick == true) {
                hkBg.style.opacity = 1;
                limitHk(_x);
            } else {
                hkBg.style.opacity = 0;
            }
        }
    }
    
    //松开取消
    document.onmouseup = function () {
        Yclick = false;
        if ( hk.offsetLeft < 267) {
            moveHk(3);
            hk.style.transition = "left 0.5s cubic-bezier(1,0,.6,1.23)";
            hkBg.style.transition = "opacity 0.45s cubic-bezier(1,-0.3,.85,.95),width 0.5s cubic-bezier(1,0,.6,1.23)";
            setTimeout(function () {
                hk.style.transition = "left 0s";
                hkBg.style.transition = "width 0s";
            }, 500);
            hkBgText.style.opacity = 0;
        } else {
            if (hk.offsetLeft >= 267) {
                end = true;
            }
        }
    }
}



//限制移动范围
function limitHk(x) {
    //限制不能超过hkBox的左宽度-13px
    if (x < 1) {
        x = 1;
    } else if (x > 267) {
        x = 267;
    }
    //移动滑块
    moveHk(x);
}


var click = false;
//点击money_btn出现money
// 在这里暂停0.5秒钟
setTimeout(function() {}, 500);
money_btn.onclick = function () {
    if (click == false) {
        money.style.height = "300px";
        money.style.width = "300px";
        money.style.opacity = 1;
        $(".wechatIcon").css("left", "173px");
        money.style.top = "70px";
        moneyText.style.top = "-320px";
        moneyText.style.opacity = "0";
        
        setTimeout(function() {
            $(".wechatIcon").css("font-size", "36px");
        }, 500);

        click = true;
    } else {
        money.style.width = "0px";
        money.style.height = "0px";
        money.style.opacity = 0;
        $(".wechatIcon").css("left", "100px");
        $(".wechatIcon").css("font-size", "16px");
        money.style.top = "470px";
        moneyText.style.top = "0px";
        // 在这里暂停0.5秒钟
        setTimeout(function() {
            moneyText.style.opacity = "1";
        }, 300);


        click = false;
    }
}


