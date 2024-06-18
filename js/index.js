// 获取作业目录下的所有HTML文件
const homeworkFiles = [
    { name: "作业1", date: "2023/9/6", url: "./w/W1.html", note: "(各种路径和文本标签)" },
    { name: "作业2", date: "2023/9/8", url: "./w/W2.html", note: "(画表格)" },
    { name: "作业3", date: "2023/9/13", url: "./w/W3.html", note: "(登录页面)" },
    { name: "作业4", date: "2023/9/27", url: "./w/photo.html", note: "(阴影，圆角...的使用)" },
    { name: "作业5", date: "2023/11/8", url: "./w/W5.html", note: "(导航条)" },
    { name: "作业6", date: "2023/12/6", url: "./w/W6.html", note: "(鼠标事件)" },
    { name: "作业7", date: "2023/12/13", url: "./w/W7.html", note: "(音乐,视频)" },
    { name: "作业8", date: "2024/3/6", url: "./w/W8.html", note: "(表格,可编辑,音视频)" },
    { name: "作业9", date: "2024/2/28", url: "./w/2024/2.28.html", note: "" },
    { name: "作业10", date: "2024/3/6", url: "./w/2024/3.6.html", note: "" },
    { name: "作业11", date: "2024/3/13", url: "./w/2024/3.13.html", note: "" },
    { name: "作业12", date: "2024/3/18", url: "./w/2024/3.18.html", note: "" },
    { name: "作业13", date: "2024/4/15", url: "./w/2024/4.15.html", note: "" },
    { name: "作业14", date: "2024/4/24", url: "./w/2024/4.24.html", note: "" },
    { name: "作业15", date: "2024/5/8", url: "./w/2024/5.8.html", note: "" },
    { name: "作业16", date: "2024/5/15", url: "./w/2024/5.15.html", note: "" },
    { name: "作业17", date: "2024/6/5", url: "./w/2024/6.5.html", note: "" },
    { name: "新闻网站", date: "2023/12/15", url: "./w/new.html", note: "" },
    { name: "Vue & Ui框架学习试验场", date: "2023/12/18", url: "//vue.766677.xyz", note: "" },
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
  