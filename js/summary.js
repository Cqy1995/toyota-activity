var mySwiper = new Swiper('.swiper-container', {
    hashNavigation: true,
    mousewheelControl: true,
    onSlideChangeEnd: function(swiper) {
        clearskip();
        if (swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3 || swiper.activeIndex == 4) {
            $("#skip").show();
            watch20s();
        } else {
            $("#skip").hide();
        }
    }
})
var intervalid;

function watch20s() {
    $('.swiper-container').addClass("swiper-no-swiping");
    var i = 20;
    intervalid = setInterval(fun, 1000);
    function fun() {
        let timeBox = $("#time")
        if (i == 0) {
            $("#skip").hide();
            clearskip();
        }
        timeBox.text(i);
        i--;
    }
}
watch20s();

function clearskip() {
    $("#time").text("");
    $('.swiper-container').removeClass("swiper-no-swiping");
    clearInterval(intervalid);
}
// $("#skip").click(function() {
//     $(this).hide();
//     clearskip();
// });
/*暖心视频*/
//设置中文
videojs.addLanguage('zh-CN', {
    "Play": "播放",
    "Pause": "暂停",
    "Current Time": "当前时间",
    "Duration": "时长",
    "Remaining Time": "剩余时间",
    "Stream Type": "媒体流类型",
    "LIVE": "直播",
    "Loaded": "加载完毕",
    "Progress": "进度",
    "Fullscreen": "全屏",
    "Non-Fullscreen": "退出全屏",
    "Mute": "静音",
    "Unmute": "取消静音",
    "Playback Rate": "播放速度",
    "Subtitles": "字幕",
    "subtitles off": "关闭字幕",
    "Captions": "内嵌字幕",
    "captions off": "关闭内嵌字幕",
    "Chapters": "节目段落",
    "Close Modal Dialog": "关闭弹窗",
    "Descriptions": "描述",
    "descriptions off": "关闭描述",
    "Audio Track": "音轨",
    "You aborted the media playback": "视频播放被终止",
    "A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
    "The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
    "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
    "No compatible source was found for this media.": "无法找到此视频兼容的源。",
    "The media is encrypted and we do not have the keys to decrypt it.": "视频已加密，无法解密。",
    "Play Video": "播放视频",
    "Close": "关闭",
    "Modal Window": "弹窗",
    "This is a modal window": "这是一个弹窗",
    "This modal can be closed by pressing the Escape key or activating the close button.": "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
    ", opens captions settings dialog": ", 开启标题设置弹窗",
    ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
    ", opens descriptions settings dialog": ", 开启描述设置弹窗",
    ", selected": ", 选择",
    "captions settings": "字幕设定",
    "Audio Player": "音频播放器",
    "Video Player": "视频播放器",
    "Replay": "重播",
    "Progress Bar": "进度小节",
    "Volume Level": "音量",
    "subtitles settings": "字幕设定",
    "descriptions settings": "描述设定",
    "Text": "文字",
    "White": "白",
    "Black": "黑",
    "Red": "红",
    "Green": "绿",
    "Blue": "蓝",
    "Yellow": "黄",
    "Magenta": "紫红",
    "Cyan": "青",
    "Background": "背景",
    "Window": "视窗",
    "Transparent": "透明",
    "Semi-Transparent": "半透明",
    "Opaque": "不透明",
    "Font Size": "字体尺寸",
    "Text Edge Style": "字体边缘样式",
    "None": "无",
    "Raised": "浮雕",
    "Depressed": "压低",
    "Uniform": "均匀",
    "Dropshadow": "下阴影",
    "Font Family": "字体库",
    "Proportional Sans-Serif": "比例无细体",
    "Monospace Sans-Serif": "单间隔无细体",
    "Proportional Serif": "比例细体",
    "Monospace Serif": "单间隔细体",
    "Casual": "舒适",
    "Script": "手写体",
    "Small Caps": "小型大写字体",
    "Reset": "重启",
    "restore all settings to the default values": "恢复全部设定至预设值",
    "Done": "完成",
    "Caption Settings Dialog": "字幕设定视窗",
    "Beginning of dialog window. Escape will cancel and close the window.": "开始对话视窗。离开会取消及关闭视窗",
    "End of dialog window.": "结束对话视窗"
});
var myPlayer = videojs('my-video');
videojs("my-video").ready(function() {
    var myPlayer = this;
    myPlayer.play();
});
var myPlayer = videojs('my-video1');
videojs("my-video1").ready(function() {
    var myPlayer = this;
    myPlayer.play();
});
$(".videoButton").click(function() {
    mySwiper.slideTo(4);
});
/*调查问卷*/
$("#dcwj .dcwjBoxMain-b label").click(function() {

})


$("#dcwjBtn").click(function() {
        let wantdata = []
        
        $("input:radio:checked").each(function(index, item) {
            //操作
            let name = item.name
            let itemdata = {
                name: item.value
            }
            wantdata.push(itemdata)
        });
        console.log(wantdata);
        mySwiper.slideTo(5);
    })
    /*课后作业*/
var myTip1 = {
    title: "提示",
    msg: "输入值不能为空",
    button: {
        ok: "是",
        // "cancle": "否",
        okEvent: function() {
            // alert("点击ok");
        },
        cancleEvent: function() {
            // alert("点击cancle");
        }
    }
};
var myTip2 = {
    title: "提示",
    msg: "输入值不能小于10",
    button: {
        ok: "是",
        // "cancle": "否",
        okEvent: function() {
            // alert("点击ok");
        },
        cancleEvent: function() {
            // alert("点击cancle");
        }
    }
};
var myTip3 = {
    title: "提示",
    msg: "输入值不能大于100",
    button: {
        ok: "是",
        // "cancle": "否",
        okEvent: function() {
            // alert("点击ok");
        },
        cancleEvent: function() {
            // alert("点击cancle");
        }
    }
};
$("#khworkBtn").click(function() {
    let khworkVal = $("#khworkBox").val();
    if (khworkVal.length == 0) {
        // alert("输入值不能为空")
        MyAlert(myTip1);
    } else if (khworkVal.length < 10) {
        // alert("输入值不能小于10")
        MyAlert(myTip2);
    } else if (khworkVal.length > 100) {
        // alert("输入值不能大于100")
        MyAlert(myTip3);
    } else {
        window.location.href = "./bill.html?" + encodeURI(khworkVal);
    }
    // window.location.href = "./bill.html";
})