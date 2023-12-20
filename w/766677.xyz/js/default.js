document.title = "看der";
var srch = window.location.search;
var url = window.location.href;  // 返回完整 URL (https://www.runoob.com/html/html-tutorial.html)
var pathname = window.location.pathname; // 返回路径部分 (/html/html-tutorial.html)
var origin = window.location.origin;   // 返回基础 URL (https://www.runoob.com/)
let css = document.documentElement.style;
console.log(srch);


function thm1() {
  $("body").css({backgroundColor: "#1e2d39"});
  $("body").css("color","#fff");
  $("a").css("color","#ff9f53");
  window.location.href=(pathname + '?thm=1');
}

function thm2() {
  $("body").css({backgroundColor: "#C1DBDA"});
  $("body").css("color","#52565e");
  $("a").css("color","#F2987D");
  window.location.href=(pathname + '?thm=2');
}

function thm3() {
  $("body").css({backgroundColor: "#f8f5d6"});
  $("body").css("color","#52565e");
  $("a").css("color","#80d1c8");
  window.location.href=(pathname + '?thm=3');
}

if(srch == "?thm=1") {
  console.log("主题1");
  css.setProperty('--thm-bg', '#1e2d39');
  css.setProperty('--thm-a', '#ff9f53');
  css.setProperty('--thm-text', '#fff');
  css.setProperty('--thm-nav', 'rgba(255, 255, 255, 0.7)');
}

if(srch == "?thm=2") {
  console.log("主题2");
  css.setProperty('--thm-bg', '#C1DBDA');
  css.setProperty('--thm-a', '#F2987D');
  css.setProperty('--thm-text', '#52565e');
  css.setProperty('--thm-nav', 'rgba(0, 0, 0, 0.7)');
}

if(srch == "?thm=3") {
  console.log("主题3");
  css.setProperty('--thm-bg', '#f8f5d6');
  css.setProperty('--thm-a', '#80d1c8');
  css.setProperty('--thm-text', '#52565e');
  css.setProperty('--thm-nav', 'rgba(0, 0, 0, 0.7)');
}