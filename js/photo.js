//将每个图片的详细信息写在这里,实现切换图片同时切换详细信息,如光圈,快门速度,ISO等   图片1,图片2这样保存

var index = 0;

var photo = [
    {   //图片1
        "title": "图片1",
        "time": "2021/7/8 19:44",
        "fnumber": "f/1.9",
        "shutter": "1/333",
        "ISO": "ISO50",
        "device": "Mi 10 Pro"
    },
    {   //图片2
        "title": "图片2",
        "time": "2023/7/26 18:52",
        "fnumber": "f/1.9",
        "shutter": "1/30",
        "ISO": "ISO50",
        "device": "Redmi K30 Pro"
    },
    {   
        "title": "图片3",
        "time": "2023/7/26 18:57",
        "fnumber": "f/1.9",
        "shutter": "1/100",
        "ISO": "ISO50",
        "device": "Redmi K30 Pro"
    },
    {   
        "title": "图片4",
        "time": "2023/6/28 22:08",
        "fnumber": "已丢失",
        "shutter": "已丢失",
        "ISO": "已丢失",
        "device": "SONY DSC-H50"
    },
    {   
        "title": "图片5",
        "time": "2022/2/25 18:27",
        "fnumber": "f/4.5",
        "shutter": "1/20",
        "ISO": "ISO500",
        "device": "SONY DSC-H50"
    },
    {   
        "title": "图片6",
        "time": "2023/2/20 16:17",
        "fnumber": "f/3.5",
        "shutter": "1/400",
        "ISO": "ISO100",
        "device": "SONY DSC-H50"
    },
    {   
        "title": "图片7",
        "time": "2023/3/8 15:05",
        "fnumber": "f/2.4",
        "shutter": "1/2010",
        "ISO": "ISO50",
        "device": "Redmi K30 Pro"
    },
    {   
        "title": "图片8",
        "time": "2023/2/20 16:17",
        "fnumber": "f/3.2",
        "shutter": "1/640",
        "ISO": "ISO100",
        "device": "SONY DSC-H50"
    },
];


var title = $(".title");
var time = $(".time");
var fnumber = $(".fnumber");
var shutter = $(".shutter");
var ISO = $(".ISO");
var device = $(".device");

title.text(photo[index].title);
time.text(photo[index].time);
fnumber.text(photo[index].fnumber);
shutter.text(photo[index].shutter);
ISO.text(photo[index].ISO);
device.text(photo[index].device);


//滑动时切换img 的src 与Abox背景图片 (二者共用一个数组)
var img = $(".img");
var bgBox = $(".Abox")
// var Abox = $(".Abox"); Abox 已被声明在base.js中

var imgSrc = [
    "../img/photo/img1.jpg",
    "../img/photo/img2.jpg",
    "../img/photo/img3.jpg",
    "../img/photo/img4.jpg",
    "../img/photo/img5.jpg",
    "../img/photo/img6.jpg",
    "../img/photo/img7.jpg",
    "../img/photo/img8.jpg",
];

//不用AboxSrc

window.onload = function () {
    //监听鼠标滚轮事件
    document.onmousewheel = function (ev) {
        //判断滚轮方向
        if (ev.wheelDelta > 0) {
            //向上滚动
            index--;
            if (index < 0) {
                index = imgSrc.length - 1;
            }
            //修改css全局变量--imgPath
            document.documentElement.style.setProperty('--imgPath', "url(" + imgSrc[index] + ")");
            time.text(photo[index].time);
            fnumber.text(photo[index].fnumber);
            shutter.text(photo[index].shutter);
            ISO.text(photo[index].ISO);
            device.text(photo[index].device);
        } else {
            //向下滚动
            index++;
            if (index > imgSrc.length - 1) {
                index = 0;
            }
            document.documentElement.style.setProperty('--imgPath', "url(" + imgSrc[index] + ")");
            time.text(photo[index].time);
            fnumber.text(photo[index].fnumber);
            shutter.text(photo[index].shutter);
            ISO.text(photo[index].ISO);
            device.text(photo[index].device);
        }
    }
}
