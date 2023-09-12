// 获取indexBox容器
const indexBox = document.querySelector('.indexBox');

// 使用Fetch请求/w/目录
fetch('/w/')
    .then(response => response.text())
    .then(html => {

        // 创建临时DOM元素
        const doc = document.createElement('div');
        doc.innerHTML = html;

        // 获取目录下所有链接
        const links = doc.querySelectorAll('a');

        // 遍历链接 
        links.forEach(link => {

            // 获取href和文本
            const href = link.getAttribute('href');
            const text = link.innerText;

            // 创建h3和a元素 
            const h3 = document.createElement('h3');
            const a = document.createElement('a');

            // 设置属性
            a.href = href;
            a.innerText = text;

            // 构造标签树
            h3.appendChild(a);

            // 插入到页面
            indexBox.appendChild(h3);

        });

    });


// 在页面加载完毕后执行
window.onload = () => {



};