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

document.onselectstart = function () { return false; };// 禁止文字选择
//滑块被按住移动,松开取消
hk.onmousedown = function (e) {
    //获取鼠标在滑块上的位置
    let x = e.clientX - hk.offsetLeft;
    //移动滑块
    if (end == false) {
        document.onmousemove = function (e) {
            if (end == true) {
                hkBgText.style.opacity = 1;
            } else {
                let _x = e.clientX - x;
                limitHk(_x);
            }
        }
    }
    
    //松开取消
    document.onmouseup = function () {
        if (end != false & hk.offsetLeft < 277) {
            moveHk(13);
            hkBgText.style.opacity = 0;
        } else {
            end = true;
        }
    }
}




//限制移动范围
function limitHk(x) {
    //限制不能超过hkBox的左宽度-13px
    if (x < 13) {
        x = 13;
    } else if (x > 277) {
        x = 277;
    }
    //移动滑块
    moveHk(x);
}


var click = false;
//点击money_btn出现money
money_btn.onclick = function () {
    if (click == false) {
        money.style.display = "block";
        moneyText.style.display = "none";
        click = true;
    } else {
        money.style.display = "none";
        moneyText.style.display = "block";
        click = false;
    }
}


