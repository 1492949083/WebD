//将每个图片的详细信息写在这里,实现切换图片同时切换详细信息,如光圈,快门速度,ISO等   图片1,图片2这样保存

var photo = [
    {   //图片1
        "title": "图片1",
        "time": "2021/7/8 19:44",
        "fnumber": "f/1.9",
        "shutter": "1/333",
        "ISO": "ISO50",
        "device": "Mi 10 Pro"
    },
];


var title = $(".title");
var time = $(".time");
var fnumber = $(".fnumber");
var shutter = $(".shutter");
var ISO = $(".ISO");
var device = $(".device");

title.text(photo[0].title);
time.text(photo[0].time);
fnumber.text(photo[0].fnumber);
shutter.text(photo[0].shutter);
ISO.text(photo[0].ISO);
device.text(photo[0].device);


//滑动时切换img 的src 与Abox背景图片 (二者共用一个数组)
var img = $(".img");
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

var index = 0;

//滚轮滚动两次才能切换一次图片
var scroll = 0;

//滚轮滚动时切换图片
$(window).on("mousewheel", function (e) {
    // console.log(e.originalEvent.wheelDelta);
    // console.log(scroll);
    if (e.originalEvent.wheelDelta < 0) {
        scroll++;
        if (scroll == 2) {
            scroll = 0;
            index++;
            if (index > imgSrc.length - 1) {
                index = 0;
            }
            img.attr("src", imgSrc[index]);
            Abox.css("background-image", "url(" + imgSrc[index] + ")");
            title.text(photo[index].title);
            time.text(photo[index].time);
            fnumber.text(photo[index].fnumber);
            shutter.text(photo[index].shutter);
            ISO.text(photo[index].ISO);
            device.text(photo[index].device);
        }
    } else {
        scroll--;
        if (scroll == -2) {
            scroll = 0;
            index--;
            if (index < 0) {
                index = imgSrc.length - 1;
            }
            img.attr("src", imgSrc[index]);
            Abox.css("background-image", "url(" + imgSrc[index] + ")");
            title.text(photo[index].title);
            time.text(photo[index].time);
            fnumber.text(photo[index].fnumber);
            shutter.text(photo[index].shutter);
            ISO.text(photo[index].ISO);
            device.text(photo[index].device);
        }
    }
});