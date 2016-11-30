/**
 * Created by Administrator on 2016/9/30.
 */
//顶部固定导航栏
$(function () {
    var topnav = document.getElementById("topnav");
    var main = document.getElementById("main");
    var twobg = document.getElementById("twobg");
    document.onscroll = function () {
//页面滚动的时候，判断页面卷曲高度和main的高度之间的大小关系
        //如果没有超过了，给main设置fixed类名  进行固定
        if (myScroll().top < main.offsetHeight) {
            topnav.className = "topnav fixeds";
        } else {
            topnav.className = "topnav";
            main.style.marginTop=topnav.offsetHeight+"px";
        }
        function myScroll() {
            return {
                top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
            };
        }
    }
})
//右侧的固定栏
//$(function(){
//    var rightfix=document.getElementById("rightfix");
//    document.onscroll=function(){}
//    if(myScroll().top>0){
//        rightfix.className="rightfix guding"
//        //rightfix.style.marginTop=150+"px";
//    }
//    function myScroll() {
//        return {
//            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
//            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
//        };
//    }
//})

//<!--中间悬浮视窗-->
$(function () {
    $(".btn-one").mouseenter(function () {
        $(this).children(1).show().parent().siblings().children("img").hide();

        $(".btn-one>img").animate({"left": "60px"}, 1000, "linear", function () {
            $(this).hide();
        })
    })
    $(".btn-one").mouseleave(function () {
        //$(".btn-one>img").hide();
        $(".btn-one>img").animate({"left": "40px"}, 1000);
    })
})


//下面video部分
$(function () {
    $(".video>.play").mouseenter(function () {
        $(this).animate({"height": "60px"}, 800, "linear")
        $(".video> .pic").animate({"width": "200px", "height": "62px"}, 800, "linear");
    })
    $(".video").mouseleave(function () {
        $(".play").animate({"height": "85px"}, 800, "linear");
        $(".video> .pic").animate({"width": "198px", "height": "60px"}, 800, "linear");
    })
})

//微博部分
$(function () {
    $(".weibo>img").mouseenter(function () {
        $(this).css("opacity", "0.4").siblings().css("opcity", "1");
    })
    $(".weibo>img").mouseleave(function () {
        $("img").css("opacity", "1");
    })
})

//微信部分
$(function () {
    $(".cont-one").mouseenter(function () {
        $(".pic-one").show();
        $(".pic-one").css("z-index", "1000");

    })
    $(".text").mouseleave(function () {
        $(".pic-one").hide();
    })
    $(".cont-two").mouseenter(function () {
        $(".pic-two").show();
        $(".pic-two").css("z-index", "1000")
    })
    $(".text").mouseleave(function () {
        $(".pic-two").hide();
    })
})
//<!--右侧的固定栏-->
$(function () {
    $(".right-fix>ul>li").mouseenter(function () {
        $(this).children(0).slideDown(400, function () {
            $(this).parents().siblings().children("span").hide();
        });
    })
    $(".right-fix>ul").mouseleave(function () {
        $("span").hide();
    })
})


//第二个背景图片
//变色
$(function () {
    var chose = document.getElementById("chose");
    var list = chose.children[0];
    var lis = list.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function () {

            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = "";
            }
            this.style.backgroundColor="#D79770";
        }
        lis[i].onmouseout=function(){
            this.style.backgroundColor="";
        }

    }

})
//汽车变色
$(function(){

    //1.入口函数
    $(document).ready(function(){
//            2.移入某个li的时候 显示对应center的图片
        $("#colorc>div").mouseenter(function(){
            var index=$(this).index();
            $("#colorcar>img").eq(index).show().siblings().hide();
            $(this).children("div").show(400,function(){
                $(".color-one>div").hide();
            });

        })
        $("#colorc>div").mouseleave(function(){
            $("#colorcar>img").eq(0).show().siblings().hide();
        })

        $("#lode>img").mouseenter(function(){
            $(".centerlode").animate({"width":"120px","height":"30px"},400,function(){
                //$(".leftlode").animate({"width":"50px","height":"10px"},400)
            })
        })
        $("#lode").mouseleave(function(){
            $(".centerlode").animate({"width":"103px","height":"21px"},400,function(){
                //$(".leftlode").animate({"width":"103px","height":"21px"},400)
            })
        })
    })

//关闭开启天窗部分
    $(function(){
        $(".openwindow>span").click(function(){
                $(".openwindow").hide(800,function(){
                    $(".openwindow-close").show(800,function(){
                        $(".openwindow-close>span").show();
                        $(".openwindow-close>span").animate({"height":"35px"});
                        $(".bgcar>.close").show();
                    });
                });
        })
        $(".openwindow-close>span").click(function(){
            $(".openwindow-close").hide(800,function(){
                $(".openwindow").show(800,function(){
                    $(".openwindow>span").show();
                    $(".openwindow>span").animate({"height":"35px"});
                    $(".bgcar>.close").hide();
                    $(".bgcar>.clo").show();
                })
            })
        })
    })

    //车展 收起部分
    $(function(){
        $(".openwindow>span").click(function(){
            $(".openwindow").hide(800,function(){
                $(".openwindow-close").show(800,function(){
                    $(".openwindow-close>span").show();
                    $(".openwindow-close>span").animate({"height":"35px"});
                    $(".chezhan>.clo").hide();
                    $(".chezhan>.close").show();
                });
            });
        })
        $(".openwindow-close>span").click(function(){
            $(".openwindow-close").hide(800,function(){
                $(".openwindow").show(800,function(){
                    $(".openwindow>span").show();
                    $(".openwindow>span").animate({"height":"35px"});
                    $(".chezhan>.close").hide();
                    $(".chezhan>.clo").show();
                })
            })
        })
    })


//车展轮播图部分
    var all=document.getElementById("all");
    var allboth=all.children[0]
    var screen=allboth.children[0];
    var divs=screen.children;
    var ol=all.children[1];

    //获取图片宽
    var imgWid = allboth.offsetWidth;
    //第一步是点击下部的小方块

    for (var i = 0; i < divs.length; i++) {
      var li=document.createElement("li");
        ol.appendChild(li);
    }
    var lisol = ol.children;
    lisol[0].className = "cc";

    for (var i = 0; i < lisol.length; i++) {
        lisol[i].index = i;
        lisol[i].onclick=function(){
            for (var i = 0; i < lisol.length; i++) {
                lisol[i].className = "";
            }
            this.className="cc";

            //让screen进行滚动
            //需要借助当前li的索引设置移动位置
            var target = -this.index * imgWid;
            animate(screen, target);
        }

    }

    function animate(tag, target) {
        clearInterval(tag.timer);
        tag.timer = setInterval(function () {
            var leader = tag.offsetLeft;
            //step = ( target - leader ) / 10
            var step = (target - leader) / 10;
            //处理一下step的值，对step进行向上取整
            step = leader > target ? Math.floor(step) : Math.ceil(step);
            //leader = leader +  step
            leader = leader + step;

            //设置给left值
            tag.style.left = leader + "px";
            if (leader == target) {
                clearInterval(tag.timer);
            }
        }, 17);
    }
})


//第四个页面
$(function(){
    var box=document.getElementById("box");
    var list=box.children[0]
    var length=list.children[0];
    var divs=length.children;
    var centent=list.children[1];
    var neirong=centent.children[1];
    var spans=neirong.children;

//获取图片宽
    var imgWid = list.offsetWidth;

    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i;
        spans[i].onmouseover=function(){
            for (var i = 0; i < spans.length; i++) {
                spans[i].style.backgroundColor = "#18130E";
            }
            this.style.backgroundColor="#9C6B51";

            //让screen进行滚动
            //需要借助当前li的索引设置移动位置
            var target = -this.index * imgWid;
            animate(length, target);
        }
        spans[i].onmouseout=function(){
            this.style.backgroundColor="";
        }
    }

    function animate(tag, target) {
        clearInterval(tag.timer);
        tag.timer = setInterval(function () {
            var leader = tag.offsetLeft;
            //step = ( target - leader ) / 10
            var step = (target - leader) / 10;
            //处理一下step的值，对step进行向上取整
            step = leader > target ? Math.floor(step) : Math.ceil(step);
            //leader = leader +  step
            leader = leader + step;

            //设置给left值
            tag.style.left = leader + "px";
            if (leader == target) {
                clearInterval(tag.timer);
            }
        }, 17);
    }
})

//第五个页面
$(function(){
    $(".cti-contrast-model").mouseenter(function(){
        $(".cti-contrast-model>p").css("color","white");
    })
    $(".cti-contrast-model").mouseleave(function(){
        $(".cti-contrast-model>p").css("color","");
    })
})



$(function(){
    $("#arrright").click(function(){
        $(".swiper-slide").hide();
            $(".swiner-slider").show();
        })
    $("#arrleft").click(function(){
        $(".swiner-slider").hide();
            $(".swiper-slide").show();
    })
})

//第六个页面
$(function(){
    $(".new-count").click(function(){
        $(".cont").hide(1000,function(){
            $(".topone").show();
        });
    })
    $(".new-count").click(function(){
        $(".topone").hide(1000,function(){
            $(".cont").show();
        });
    })
})


