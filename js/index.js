// 获取作业目录下的所有HTML文件
const homeworkFiles = [
    { name: "作业1", date: "2023/9/6", url: "./w/W1.html", note: "(各种路径和文本标签)" },
    { name: "作业2", date: "2023/9/8", url: "./w/W2.html", note: "(画表格)" },
    { name: "作业3", date: "2023/9/13", url: "./w/W3.html", note: "(登录页面)" },
    { name: "作业4", date: "2023/9/27", url: "./w/photo.html", note: "(阴影，圆角...的使用)" },
    { name: "作业5", date: "2023/11/8", url: "./w/W5.html", note: "(导航条)" },
    { name: "作业6", date: "2023/12/6", url: "./w/W6.html", note: "(鼠标事件)" },
    { name: "作业7", date: "2023/12/13", url: "./w/W7.html", note: "(音乐,视频)" },
    { name: "新闻网站", date: "2023/12/15", url: "./w/new.html", note: "" },
  ];
  
  // 找到最新的作业
  let newestHomework = homeworkFiles[0];
  for (const homework of homeworkFiles) {
    const currentDate = new Date(homework.date);
    const newestDate = new Date(newestHomework.date);
    if (currentDate > newestDate) {
      newestHomework = homework;
    }
  }
  
  // 创建作业索引的父元素
  const indexBox = document.querySelector(".indexBox");
  // 遍历作业文件列表，创建链接并添加到索引中
  homeworkFiles.forEach((homework) => {
    const linkElement = document.createElement("h3");
    const linkText = document.createTextNode(
      `${homework.name} ${homework.date}`
    );
    const link = document.createElement("a");
    link.href = homework.url;
    link.appendChild(linkText);
    linkElement.appendChild(link);
    noteText = document.createTextNode(`${homework.note}`)
    linkElement.appendChild(noteText)
    // 如果是最新作业，添加标记
    if (homework === newestHomework) {
      const newestText = document.createTextNode(" (最新)");
      linkElement.appendChild(newestText);
    }
    indexBox.appendChild(linkElement);
  });
  