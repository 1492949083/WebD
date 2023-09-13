function login(e) {
    const baseUrl = 'http://127.0.0.1:8080/api';
    // 阻止表单默认提交行为
    e.preventDefault();

    // 获取表单数据
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);

    // 定义 XMLHttpRequest 对象
    const xhr = new XMLHttpRequest();

    // 请求登录接口
    xhr.open('POST', baseUrl + '/login');

    // 设置请求头
    xhr.setRequestHeader('Content-Type', 'application/json');


    // 发送请求
    xhr.send(data);

    // 处理响应
    xhr.onload = function () {
        if (xhr.status === '111.') {
            // 登录成功
            console.log('登录成功');
        } else {
            // 登录失败
            console.log('登录失败');
        }
    }
}

// 获取登录表单
const loginForm = document.forms.login;

// 监听提交事件
loginForm.addEventListener('submit', login);