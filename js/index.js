/**
 * Created by Administrator on 2016/9/30.
 */
//�����̶�������
$(function () {
    var topnav = document.getElementById("topnav");
    var main = document.getElementById("main");
    var twobg = document.getElementById("twobg");
    document.onscroll = function () {
//ҳ�������ʱ���ж�ҳ������߶Ⱥ�main�ĸ߶�֮��Ĵ�С��ϵ
        //���û�г����ˣ���main����fixed����  ���й̶�
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
//�Ҳ�Ĺ̶���
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

//<!--�м������Ӵ�-->
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


//����video����
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

//΢������
$(function () {
    $(".weibo>img").mouseenter(function () {
        $(this).css("opacity", "0.4").siblings().css("opcity", "1");
    })
    $(".weibo>img").mouseleave(function () {
        $("img").css("opacity", "1");
    })
})

//΢�Ų���
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
//<!--�Ҳ�Ĺ̶���-->
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


//�ڶ�������ͼƬ
//��ɫ
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
//������ɫ
$(function(){

    //1.��ں���
    $(document).ready(function(){
//            2.����ĳ��li��ʱ�� ��ʾ��Ӧcenter��ͼƬ
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

//�رտ����촰����
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

    //��չ ���𲿷�
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


//��չ�ֲ�ͼ����
    var all=document.getElementById("all");
    var allboth=all.children[0]
    var screen=allboth.children[0];
    var divs=screen.children;
    var ol=all.children[1];

    //��ȡͼƬ��
    var imgWid = allboth.offsetWidth;
    //��һ���ǵ���²���С����

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

            //��screen���й���
            //��Ҫ������ǰli�����������ƶ�λ��
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
            //����һ��step��ֵ����step��������ȡ��
            step = leader > target ? Math.floor(step) : Math.ceil(step);
            //leader = leader +  step
            leader = leader + step;

            //���ø�leftֵ
            tag.style.left = leader + "px";
            if (leader == target) {
                clearInterval(tag.timer);
            }
        }, 17);
    }
})


//���ĸ�ҳ��
$(function(){
    var box=document.getElementById("box");
    var list=box.children[0]
    var length=list.children[0];
    var divs=length.children;
    var centent=list.children[1];
    var neirong=centent.children[1];
    var spans=neirong.children;

//��ȡͼƬ��
    var imgWid = list.offsetWidth;

    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i;
        spans[i].onmouseover=function(){
            for (var i = 0; i < spans.length; i++) {
                spans[i].style.backgroundColor = "#18130E";
            }
            this.style.backgroundColor="#9C6B51";

            //��screen���й���
            //��Ҫ������ǰli�����������ƶ�λ��
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
            //����һ��step��ֵ����step��������ȡ��
            step = leader > target ? Math.floor(step) : Math.ceil(step);
            //leader = leader +  step
            leader = leader + step;

            //���ø�leftֵ
            tag.style.left = leader + "px";
            if (leader == target) {
                clearInterval(tag.timer);
            }
        }, 17);
    }
})

//�����ҳ��
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

//������ҳ��
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


