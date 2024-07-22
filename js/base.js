

const root = document.documentElement;
// 获取Abox元素
const Abox = document.querySelector('.Abox');
// 获取第二个 meta 元素
const meta = document.querySelectorAll('meta')[1];
//获取body元素
const body = document.querySelector('body');
// 构造要添加的HTML字符串
const navBarHTML = `
        <div class="navBar">
            <div class="leftBar">
                <img src="/img/favicon.ico" alt="logo">
                <a href="/index.html"><i class="fa-solid fa-house"></i> 首页</a>
                <ul class="p_menu" id="menu">
                    <li>
                        <p id="p" href=""><i class="fa-solid fa-box"></i> 存储库</p>
                        <ul id="p_ul1" class="p_ul1">
                            <li class="p_li1">
                                <a class="p_li1_a" href="javascript:void(0);">上学期作业</a>
                                <ul class="p_ul2">
                                    <li><a href="//2022web.766677.xyz">Simple-Web</a></li>
                                    <li><a href="//github.com/ccc007ccc/TurnBasedGenshin">回合制原神</a></li>
                                    <li><a href="https://github.com/ccc007ccc/PingPongWinRateCalculator">乒乓球胜率计算器</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/index.html">这学期作业</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">github储存库</a>
                                <ul>
                                    <li><a href="https://github.com/ccc007ccc/script_c-">c++自动点击</a></li>
                                    <li><a href="https://github.com/ccc007ccc/AutoClick">Python自动点击</a></li>
                                    <li><a href="https://github.com/ccc007ccc/AudioDurationCalculator">音频时长总和计算器</a></li>
                                    <li><a href="https://github.com/ccc007ccc/ProgramController">程序控制器</a></li>
                                </ul>
                            </li>
                            <li><a href="/w/BaseConverter.html">进制转换器(在做)</a></li>
                            <li>
                                <a href="javascript:void(0);">已归档储存库</a>
                                <ul>
                                    <li><a href="../w/766677.xyz/index_old.html">曾经写的网站</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p id="theme_btn" href=""><i class="fa-solid fa-shirt"></i> 主题</p>
                <a href="/w/photo.html"><i class="fa-solid fa-images"></i> 我的影集</a>
            </div>
            <div class="palestineBox">
                <div class="support-palestine__flag" role="img" aria-label="Flag of palestine">
                    <div class="background">
                        <div class="top"></div>
                        <div class="middle"></div>
                        <div class="triangle"></div>
                    </div>
                </div>
                <div class="support-palestine__label"><a href="https://the-palestinian-side.vercel.app/resources">Free Palestine</a></div>
            </div>
            <div class="icon">
                
                <a href="https://gitee.com/ccc007ccc/WebD" target="_blank">
                    <i id="gitee" class="iconfont icon-gitee"></i>
                </a>
                <a href="https://github.com/ccc007ccc/WebD" target="_blank">
                    <i id="github" class="fab fa-github"></i>
                </a>
            </div>
        </div>

        <div class="themeSelector">
            <div class="button" id="theme0" onclick="thm0()">
                <div class="colorBlock0">
                    <div class="block1"></div>
                    <div class="block2"></div>
                </div>
                <p>默认</p>
            </div>
            <div class="button" id="theme1" onclick="thm1()">
                <div class="colorBlock1">
                    <div class="block1"></div>
                    <div class="block2"></div>
                </div>
                <p>配色1</p>
            </div>
            <div class="button" id="theme2" onclick="thm2()">
                <div class="colorBlock2">
                    <div class="block1"></div>
                    <div class="block2"></div>
                </div>
                <p>配色2</p>
            </div>
            <div class="button" id="theme3" onclick="thm3()">
                <div class="colorBlock3">
                    <div class="block1"></div>
                    <div class="block2"></div>
                </div>
                <p>配色3</p>
            </div>
        </div>
`;

const bottomHTML = `
    
    `;


function loadScript(src) {
    var script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}

function isLocal(local) {
    if (local == true) {
        loadScript('/js/jquery.min.js')
        loadScript('/js/jquery-ui.min.js');
        const link = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4246322_x9378e49s9.css">
        <link rel="stylesheet" href="/css/base.css">
        <link rel="stylesheet" href="/css/theme.css">
        <link rel="stylesheet" href="/css/palestine.css">
        `
        // 加载 jQuery 和 jQuery UI
        // loadScript('https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js');
        // loadScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js');
        
        // 加载本地脚本
        setTimeout(() => {
            loadScript('/js/navBar.js');
        }, 300);
        loadScript('/js/tools.js');
          
        // 将HTML添加到Abox中
        Abox.insertAdjacentHTML('afterbegin', navBarHTML);
        meta.insertAdjacentHTML('afterend', link);    
    } else {
        // 加载 jQuery 和 jQuery UI
        loadScript('https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js');
        loadScript('https://apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min.js');
        const link = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4246322_x9378e49s9.css">
        <link rel="stylesheet" href="/css/base.css">
        <link rel="stylesheet" href="/css/theme.css">
        <link rel="stylesheet" href="/css/palestine.css">
        `
        // 加载本地脚本
        setTimeout(() => {
            loadScript('/js/navBar.js');
        }, 300);
        loadScript('/js/tools.js');
          
        // 将HTML添加到Abox中
        Abox.insertAdjacentHTML('afterbegin', navBarHTML);
        meta.insertAdjacentHTML('afterend', link);  
    }
}    
isLocal(true)

// 改变 颜色 变量
// 默认配色
// root.style.setProperty('--bg-color', 'rgb(34, 34, 49)');
// root.style.setProperty('--bg-Dcolor', 'rgb(17, 17, 36)');
// root.style.setProperty('--linear-gradient-bg-color', 'linear-gradient(to bottom, var(--bg-color) 30%,var(--bg-Dcolor))');
// root.style.setProperty('--text-color', 'rgb(253, 237, 202)');
// root.style.setProperty('--text-color-accent', 'rgb(255, 201, 120)');
// base.js

// const themes = {
//     theme0: {
//         '--bg-color': 'rgb(34, 34, 49)',
//         '--bg-Dcolor': 'rgb(17, 17, 36)',
//         '--text-color': 'rgb(253, 237, 202)',
//         '--text-color-accent': 'rgb(255, 201, 120)',
//     },
//     theme1: {
//         '--bg-color': '#1e2d39',
//         '--bg-Dcolor': '#0f1a23',
//         '--text-color': '#fff',
//         '--text-color-accent': '#ff9f53',
//     },
//     theme2: {
//         '--bg-color': '#C1DBDA',
//         '--bg-Dcolor': '#5B9391',
//         '--text-color': '#52565e',
//         '--text-color-accent': '#F2987D',
//     },
//     theme3: {
//         '--bg-color': '#f8f5d6',
//         '--bg-Dcolor': '#D5D0A1',
//         '--text-color': '#52565e',
//         '--text-color-accent': '#80d1c8',
//     },
// };

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
    link.href = '/img/favicon.ico';

    // 将 link 元素添加到文档头部
    document.head.appendChild(link);
    // 将HTML添加到Abox中
    Abox.insertAdjacentHTML('beforeend', bottomHTML);


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

// setTimeout(() => {
//     //如果jquery和jqueryui没有加载，就重载页面
//     if (typeof jQuery == 'undefined' || typeof jQuery.ui == 'undefined') {
//         location.reload();
//     }
// }, 500);


