// 小喇叭轮播
var oUl = document.querySelector('#gg');
var oUllis = document.querySelectorAll('#gg li');
console.log(oUl,oUllis);
var index = 1;
var time = 0;
var looptime = 0;
var bool = '原始数值';
function move(ele , obj , callback){
    // 循环参数2,根据参数2的信息,执行运动属性
    for(var type in obj){
        // 1,获取标签对象原始位置数值
        var oldVal = parseInt(window.getComputedStyle(ele)[type]);
        // 2,定义定时器,来逐步执行定位改变效果
        time = setInterval(function(){
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
        } ,50)
    }
}
function copyLi(){
    var liF = oUllis[0];
    var liL = oUllis[ oUllis.length-1 ];
    // console.log(liF,liL);
    var first = liF.cloneNode(true);
    var last = liL.cloneNode(true);
    oUl.appendChild(first);
    oUl.insertBefore(last,liF);
    oUl.style.top = -1 * 50 + 'px';
}
function autoLoop(){
    loopTime = setInterval(function(){
        index++;
        move( oUl , { top : -index*50} , function(){
            loopEnd();
        } )
    } , 2000)
}
function loopEnd(){
    bool = '原始数值'
    if(index == oUllis.length+1){
        index = 1;
        oUl.style.top = (-index * 50) + 'px';
    }else if(index == 0){
        index = oUllis.length;
        oUl.style.top = (-index * 50) + 'px';
    }
}
function hidden(){
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
copyLi();
autoLoop();
hidden();
//  // 导航动画出现下拉菜单
  $("#xz_nav ul li.chufa").hover(function() {
     $(this).addClass('cur').siblings().removeClass('cur');
     $(".nav").stop().animate({"height": 200}, 1000);
     $(".nav .navl #nav li .clothes").stop().fadeIn(500);
     $(this).siblings().find('.clothes').css('display', 'none');
        }, function() {
    // // 返回 <ul> 后代中所有的 <span> 元素：
    // $(document).ready(function(){
    // $("ul").find("span").css({"color":"red","border":"2px solid red"});
    // });
     $(this).find('.clothes').css('display', 'none');
     $(".nav").stop().animate({"height": 100}, 500);
     $(this).find('.clothes').css('display', 'none');
  });
 // 滚动显示  
  $(window).scroll(function() {
     if($(window).scrollTop() > 300){
         $('div.fix_search').slideDown();
         $("#return_top").slideDown();
     }else{
         $("div.fix_search").slideUp();
         $("#return_top").slideUp();
     }
 })
//  返回顶部  点击返回s
   $("#return_top").click(function(){
     // 动画的方式
       $('html,body').animate({scrollTop: 0}, 500);
       console.log("执行了");
  })
    // 购物车显示隐藏
    $("#sp_cart").hover(function() {
        $("#goods").fadeIn();
    }, function() {
        $("#goods").hover(function() {
        }, function() {
            $("#goods").fadeOut();
        });
    });
      // 手机二维码动画出现
  $("#code").hover(function() {
    $(this).find('.code').slideDown(400);
  }, function() {
    $(this).find('.code').slideUp(400);
  });
  // 购物车动画出现显示
  $("#sp_cart").hover(function() {
      $(this).find('#goods').slideDown(400);
  }, function() {
     $(this).find('#goods').slideUp(400);
  });
    // 轮播图部分
	var pic=$("#lbt li").first().clone();
    $("#lbt").append(pic);
     var a=$("#lbt li").length;
     var j=0;
     // 给第一个小圆点设置样式
     $("#circle li").first().addClass('on');
      // 自动轮播
      var lb=setInterval(moveL, 2000);
     // 鼠标滑过小圆点切换图片
    $("#circle li").hover(function() {
    	var index=$(this).index();
    	i=index;
		$("#lbt").stop().animate({left:-index*1200}, 500)
    	$(this).addClass('on').siblings().removeClass('on');
    }, function() {
    	/* Stuff to do when the mouse leaves the element */
    });
    $("#zdlb").hover(function() {
		// $("#active").fadeIn();
		clearInterval(lb);
	}, function() {
		 
	   lb= setInterval(moveL, 2000);
		/* Stuff to do when the mouse leaves the element */
	});
     function moveL(){
          j++;
         if (j==a) {
         	 $("#lbt").stop().css('left', '0');
         	 j=1;
         };
          $("#lbt").stop().animate({"left":-j*1200}, 500);
          if(j==a-1){
          	 $("#circle li").eq(0).addClass('on').siblings().removeClass('on');
          	}else{
          		 $("#circle li").eq(j).addClass('on').siblings().removeClass('on');
          	};
     }
     function moveR(){
          j--;
          if(j<0){
          	j=a-2;
             $("#lbt").stop().css('left', -(j+1)*1200);
          	 // $("#lbt").stop().animate({left:-j*1200}, 500);
          }
          $("#lbt").stop().animate({left:-j*1200}, 500);
           $("#circle li").eq(j).addClass('on').siblings().removeClass('on');
     }
     $("#active1").click(function(){
     	moveL();
     })
     $("#active2").click(function(){
     	moveR();
     })

// 轮播图
// 面向对象,封装class类
/*class SetLoop{
    // 定义数据参数
    // 参数是 父级标签div
    constructor(ele){
        // 存储参数,也就是div标签对象
        this.ele = ele;
        // 获取设定需要的数据参数

        // 获取的标签对象
        this.oUl = ele.querySelector('ul.clear');
        this.oOl = ele.querySelector('.lb ol');
        //  此处 oDiv  就是参数ele
        this.oD = ele.querySelector('div');
        this.oUllis = ele.querySelectorAll('ul.clear li');

        // 定义参数   在构造函数中，都是this.   其余是let
        this.index = 1;
        // 存储自动轮播定时器变量
        this.loopTime = 0;
        // li的默认宽度
        this.oLiwidth = parseInt(window.getComputedStyle(this.oUllis[0]).width );
        // 定义开关变量,防止点击过快
        this.bool = '原始数值';
    }

    // 定义方法1 , 运动函数 在其他的方法中调用
    move(ele, obj, callback) {
        // 1,循环
        for (let type in obj) {
            // 获取原始定位数据
            let oldVal = parseInt(window.getComputedStyle(ele)[type]);
            // 定义定时器
            let time = setInterval(function () {
                // 计算步长
                let val = (obj[type] - oldVal) / 5;
                // 判断正负,取整
                val = val > 0 ? Math.ceil(val) : Math.floor(val);
                // 执行步长
                oldVal += val;
                // 执行定位
                ele.style[type] = oldVal + 'px';
                // 到达目标位置,终止定时器
                if (oldVal == obj[type]) {
                    // 终止定时器
                    clearInterval(time);
                    // 调用函数
                    callback()
                }
            }, 50)
        }
    }


    // 定义方法2 , 设定焦点
    setLi() {
        // 定义变量,存储生成的li标签
        let str = '';
        // 根据原始轮播图,生成焦点按钮
        this.oUllis.forEach(function (item, key) {
            if (key == 0) {
                str += `<li index="${key + 1}" class="active"></li>`;
            } else {
                str += `<li index="${key + 1}" ></li>`;
            }
        });
        // 写入标签
        this.oOl.innerHTML = str;
    }

    // 定义方法3 , 复制标签
    copyLi() {
        // 1,获取需要复制的标签对象
        let liF = this.oUllis[0];
        let liL = this.oUllis[this.oUllis.length - 1];
    
        // 2,复制标签
        let first = liF.cloneNode(true);
        let last = liL.cloneNode(true);
    
        // 3,写入标签
        this.oUl.appendChild(first);
        this.oUl.insertBefore(last, liF);
    
        // 4,定义ul宽度
        this.oUl.style.width = ((this.oUllis.length + 2) * this.oLiwidth) + 'px';
    
        // 5,定义ul位移
        this.oUl.style.left = -this.oLiwidth + 'px';
    }


    // 定义方法4,自动轮播
    // 此时,所有的this,指向的都是构造函数中的参数所表示的this
    // 也就是实例化对象,都要改成箭头函数
    autoLoop() {
        // 改成箭头函数
        this.loopTime = setInterval( ()=> {
            // 记录轮播次数变量++
            this.index++;

            // 执行运动函数,改成箭头函数
            this.move(this.oUl, { left: -this.index * this.oLiwidth },  ()=>{
                // 虽然写在class中的方法,可以省略function关键词
                // 但是定义的还是一个函数,class语法,会自动添加 function关键词
                // 有了 function关键词 就可以提前调用函数方法
                // 调用时,通过 this.函数方法名称() 来调用
                this.stopLoop();
            })
        }, 2000);
    }

    // 定义方法5 , 运动终止时,执行的函数
    stopLoop() {
        // 1,给开关变量,赋值初始值
        this.bool = '原始数值';
    
        // 2,判断idnex数值,并且给ul做定位
        // 如果是最后一个img1
        if (this.index == this.oUllis.length + 1) {
            // 改变index数值
            this.index = 1;
            // 瞬间切换图片
            this.oUl.style.left = (-this.index * this.oLiwidth) + 'px';
        // 如果是第一个img5
        } else if (this.index == 0) {
            // 改变index数值
            this.index = this.oUllis.length;
            // 瞬间切换图片
            this.oUl.style.left = (-this.index * this.oLiwidth) + 'px';
        }
    
        // 3,设定焦点按钮样式,后动
        // 获取ol中的li,在生成焦点之后生成
        // 在 this.ele 也就是 oDiv中 获取 ol中的li
        let oOllis = this.ele.querySelectorAll('ol li');
        // 循环遍历
        // 使用 this.index 必须改成箭头函数
        oOllis.forEach( (item) => {
            // 清除所有的样式
            item.className = '';
            // 给点击的li,添加样式
            if (item.getAttribute('index') == this.index) {
                item.className = 'active';
            }
        })
    }

    // 定义方法6 , 鼠标移入移出
    overOut () {
        // 给父级div添加事件 oDiv改成 this.ele
    
        // 移入清除定时器,终止函数
        this.ele.addEventListener('mouseover',  () =>{
            clearInterval(this.loopTime)
        });
        // 移出,再次执行函数
        this.ele.addEventListener('mouseout',  () =>{
            this.autoLoop();
        });
    }

    // 定义方法7,焦点按钮切换
    focus(){
        // 给ol添加事件
        this.oOl.addEventListener('click' , (e)=>{
            // 如果点击的是li标签
            if(e.target.tagName == 'LI'){
                // 防止点击过快
                if(this.bool !== '原始数值'){
                    return;
                }
                this.bool = '非原始数值';
                // 获取点击标签,index的属性,赋值给变量
                this.index = e.target.getAttribute('index')-0;
                // 一定要用move()运动函数,这样才可以再次点击
                this.move(this.oUl, { left: -this.index * this.oLiwidth },  ()=> {
                    this.stopLoop();
                })
            }
        })
    }

    // 定义方法8 , 左右切换
    
    leftRight() {
        this.oD.addEventListener('click',  (e)=> {
            // 如果点击的是左切换
            if (e.target.getAttribute('name') == 'left') {
                // 防止过快
                if(this.bool !== '原始数值'){
                    return;
                }
                this.bool = '非原始数值';
                // index数值--
                this.index--;
                // 一定要用move()运动函数,这样才可以再次点击
                this.move(this.oUl, { left: -this.index * this.oLiwidth },  ()=> {
                    this.stopLoop();
                })
            }else if(e.target.getAttribute('name') == 'right'){
                // 防止过快
                if(this.bool !== '原始数值'){
                    return;
                }
                this.bool = '非原始数值';
                // index数值++
                this.index++;
                // 一定要用move()运动函数,这样才可以再次点击
                this.move(this.oUl, { left: -this.index * this.oLiwidth },  ()=> {
                    this.stopLoop();
                })
            }
        })
    }
    // 定义方法9 , 页面隐藏
    hidden(){
        // 当 页面显示变化时
        // 此处是特殊的页面显示状态事件,必须是document,不能改的
        document.addEventListener('visibilitychange' , ()=>{
            // 如果隐藏,清除定时器,不执行自动轮播
            if(document.visibilityState === 'hidden'){
                clearInterval(this.loopTime);
            // 如果显示,继续执行自动轮播
            }else if(document.visibilityState === 'visible'){
                this.autoLoop();
            }
        })
    }
}
const oDiv = document.querySelector('.lb');
        // 创建实例化对象
        const setLoop = new SetLoop(oDiv);
        // 调用生成焦点方法
        setLoop.setLi();
        // 调用复制标签方法
        setLoop.copyLi();
        // 调用自动轮播方法
        setLoop.autoLoop();
        // 调用鼠标移入移出方法
        setLoop.overOut();
        // 调用焦点切换方法
        setLoop.focus();
        // 调用左右切换方法
        setLoop.leftRight();
        //调用解决页面隐藏的方法
        setLoop.hidden();*/
