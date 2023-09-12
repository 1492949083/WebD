// 获取作业目录下的所有HTML文件
const homeworkFiles = [
    { name: "作业1", date: "2023/9/6", url: "./w/W1.html" },
    { name: "作业2", date: "2023/9/8", url: "./w/W2.html" },
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
  
    // 如果是最新作业，添加标记
    if (homework === newestHomework) {
      const newestText = document.createTextNode(" (最新)");
      linkElement.appendChild(newestText);
    }
  
    indexBox.appendChild(linkElement);
  });
  