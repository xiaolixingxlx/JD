
//建议  以模块的方式进行开发   -->把某一个功能放到一个方法中，方便以后调用 




// 搜索框改变背景色
// 获取header元素
var search = document.getElementsByClassName('header')[0];
// 获取图片区域
var banner = document.getElementsByClassName('loop')[0];

// 获取banner卷去的高度
var height = banner.offsetHeight;
window.onscroll = function(){
    // 当滚动高度大于banner卷去高度时颜色不变
    // 首先应该获取banner滚动高度
    // 之后做判断

    var  top = document.documentElement.scrollTop;

    if(top>height){
        search.style.background = 'rgba(201,21,35,0.85)';
    }else{
        // 只是降低透明度
        var opacty = top/this.height*0.85;
        search.style.background = 'rgba(201,21,35,'+opacty+")";
    }
   
}



// 倒计时功能
function secondKill(){
    // 第一步：获取所有的数字
    // 第二步：做倒计时计算设置时分秒
    // 第三步：把时分秒添加到页面上
 var str_time = document.getElementsByClassName('str_time')[0];

//  拿到需要添加内容的元素 
 var str_num = document.getElementsByClassName('num');
 console.log(str_num.length)


 var times = 5 * 60 * 60;
 var timer = setInterval(function(){
  
    times--;
    var hours = Math.floor(times/(60*60));
    // console.log(h);
    var minutes = Math.floor(times/60%60);
    // console.log(m);
    var seconds =times%60;
    // console.log(s);
  
    str_num[0].innerHTML = hours > 10 ? Math.floor(hours/10) : 0;
    str_num[1].innerHTML = hours % 10;

    str_num[2].innerHTML = minutes > 10 ? Math.floor(minutes/10) : 0;
    str_num[3].innerHTML = minutes % 10;

    str_num[4].innerHTML = seconds > 10 ? Math.floor(seconds/10) : 0;
    str_num[5].innerHTML = seconds % 10;

 },1000)



}

