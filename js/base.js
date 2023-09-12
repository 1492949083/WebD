const root = document.documentElement;
// 改变 颜色 变量
// 默认配色
// root.style.setProperty('--bg-color', 'rgb(34, 34, 49)');
// root.style.setProperty('--bg-Dcolor', 'rgb(17, 17, 36)');
// root.style.setProperty('--linear-gradient-bg-color', 'linear-gradient(to bottom, var(--bg-color) 30%,var(--bg-Dcolor))');
// root.style.setProperty('--text-color', 'rgb(253, 237, 202)');
// root.style.setProperty('--text-color-accent', 'rgb(255, 201, 120)');
// base.js

const themes = {
    theme0: {
        '--bg-color': 'rgb(34, 34, 49)',
        '--bg-Dcolor': 'rgb(17, 17, 36)',
        '--text-color': 'rgb(253, 237, 202)',
        '--text-color-accent': 'rgb(255, 201, 120)',
    },
    theme1: {
        '--bg-color': '#1e2d39',
        '--bg-Dcolor': '#0f1a23',
        '--text-color': '#fff',
        '--text-color-accent': '#ff9f53',
    },
    theme2: {
        '--bg-color': '#C1DBDA',
        '--bg-Dcolor': '#5B9391',
        '--text-color': '#52565e',
        '--text-color-accent': '#F2987D',
    },
    theme3: {
        '--bg-color': '#f8f5d6',
        '--bg-Dcolor': '#D5D0A1',
        '--text-color': '#52565e',
        '--text-color-accent': '#80d1c8',
    },
};

function changeTheme(theme) {
    document.documentElement.className = theme;

    //cookie
    document.cookie = `theme=${theme};path=/;expires=Tue, 19 Jan 2038 03:14:07 GMT`;
}

// 获取指定 Cookie 值
function getCookie(name) {

    // 读取所有保存的 Cookie 字符串
    const cookies = document.cookie.split(';');

    // 遍历 cookies 数组中的每个元素
    for (let cookie of cookies) {

        // 去除首尾空格
        cookie = cookie.trim();

        // 如果当前元素中包含请求的 Cookie 名称，则返回
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }

    // 如果不存在则返回 null
    return null;
}

// 获取保存在Cookie的主题名
const theme = getCookie('theme');

// 如果存在主题名，则设置主题
if (theme) {
    changeTheme(theme);
} else {
    changeTheme('theme0');
}


// 页面加载完成
window.onload = () => {
// 加载网页图标
// 创建一个 link 元素
    const link = document.createElement('link');
    link.rel = 'icon'; // 指定关系为 icon，表示网页图标
    link.href = '/img/favicon.ico'; // 替换为你的图标文件的路径

    // 将 link 元素添加到文档头部
    document.head.appendChild(link);


};

function thm0() {
    changeTheme('theme0');
}

function thm1() {
    changeTheme('theme1');
}

function thm2() {
    changeTheme('theme2');
}

function thm3() {
    changeTheme('theme3');
}