// 社区自动滚动
 var l=$("#shequ li").length;
 var f=0;
 var sq=setInterval(function(){
     f++;
     if (f==4) {
         $("#shequ").stop().css({left:0}, 500);
         f=0;
     };
     $("#shequ").stop().animate({left:-f*1200}, 500);
 }, 2000);

// 社区滚动
/*var oUl1 = document.querySelector('.shequ');
var oUllis1 = document.querySelectorAll('.shequ>li');
console.log(oUl1,oUllis1);
var index1 = 1;
var time1 = 0;
var looptime1 = 0;
var bool1 = '原始数值';
function move(ele , obj , callback){
    // 循环参数2,根据参数2的信息,执行运动属性
    for(var type in obj){
        // 1,获取标签对象原始位置数值
        var oldVal = parseInt(window.getComputedStyle(ele)[type]);
        // 2,定义定时器,来逐步执行定位改变效果
        time1 = setInterval(function(){
            // 1,计算步长   (目标位置-初始位置) / 次数
            var val = ( obj[type] - oldVal) / 5;
            // 2,根据步长的正负,来取整  确保每次执行是1   小数浮点数的话会有误差，精度溢出
            val = val > 0 ? Math.ceil(val) : Math.floor(val);
            // 3,从原始位置,赋值步长
            oldVal += val;
            // 4,将新的定位位置,赋值给标签
            ele.style[type] = oldVal + 'px';
            // 5,判断是否到达目标位置
            if( oldVal == obj[type] ){
                // 清除定时器,终止运动
                clearInterval(time);
                // 调用运动终止时,执行的函数
                callback();
            }
        } ,100)
    }
}
function copyLi1(){
    var liF = oUllis1[0];
    var liL = oUllis1[ oUllis1.length-1 ];
    // console.log(liF,liL);
    var first = liF.cloneNode(true);
    var last = liL.cloneNode(true);
    oUl1.appendChild(first);
    oUl1.insertBefore(last,liF);
    oUl1.style.left = -1 * 1200 + 'px';
}
function autoLoop1(){
    loopTime1 = setInterval(function(){
        index1++;
        move( oUl1 , { left : -index1*1200} , function(){
            loopEnd1();
        } )
    } , 3000)
}
function loopEnd1(){
    bool1 = '原始数值'
    if(index1 == oUllis1.length+1){
        index1 = 1;
        oUl1.style.left = (-index1 * 1200) + 'px';
    }else if(index1 == 0){
        index1 = oUllis1.length;
        oUl1.style.left = (-index1 * 1200) + 'px';
    }
}
function hidden1(){
    // 当 页面显示变化时
    document.addEventListener('visibilitychange' , function(){
        // 如果隐藏,清除定时器,不执行自动轮播
        if(document.visibilityState === 'hidden'){
            clearInterval(loopTime);
        // 如果显示,继续执行自动轮播
        }else if(document.visibilityState === 'visible'){
            autoLoop();
        }
    })
}
copyLi1();
autoLoop1();
hidden1();*/