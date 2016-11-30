var WinW, WinH, sellingSwiper, _interval;

var $pages, $otherPages = $(".cti-colorful-page");
// pad判断
function device() {
    if (/ipad/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}
var _ipad = device();
$(function() {
    //变量定义区域
    WinH = $(window).height(),
    WinW = $(window).width();
    $pages = $('.cti-home-page') //屏幕
    ,
    $pageStages = $('.cti-home-bg') //各个屏幕的舞台（绘图区域） 
    ,
    $pageTag = $(".page-tag"),
    $bgTag = $(".bg-tag"),
    $bgTag2 = $(".bg-tag2");
    //初始化页面
    //重置全局变量
    var fixWinHW = function() {
        WinH = $(window).height();
        WinW = $(window).width();
    }
    //自适应每一屏幕的高度
    var fixPageHeight = function() {
        if (WinW < 1000 && _ipad) {
            $pageTag.height(512);
        } else {
            $pages.height(WinH - 100);
        };
    }
    //自适应每一屏幕的舞台
    var fixPageBg = function() {
        var natQuotient = 1920 / 900 //naturalW/naturalH
        ,
        winQuotient = WinW / WinH;
        if (WinW < 1000 && _ipad) {
            $bgTag.css({
                "width": natQuotient * 512,
                "height": 512,
                "left": -(natQuotient * 512 - WinW) / 2
            });
            $bgTag2.css({
                "width": natQuotient * 512,
                "height": 512,
                "left": 0
            });
            $pageStages.css('top', 0);
            $bgTag.addClass('act-tag');
            $bgTag2.addClass('act-tag');
            $(".cti-high-tit").css({
                "left": (natQuotient * 512 - WinW) / 2,
                "bottom": 10+"%"
            });;
        } else {
            $bgTag.css('left', 0);
            $(".cti-high-tit").css('left', 0);
            if (winQuotient > natQuotient) {
                //屏幕宽高比大于img宽高比
                $pageStages.css({
                    'width': WinW,
                    'height': WinW / natQuotient
                });
                var fixTop = Math.round(WinH - $pageStages.height() >> 1);
                $pageStages.css({
                    'position': 'absolute',
                    'top': -65+"px",
                    'left': 0
                });
            } else if (winQuotient < natQuotient) {

                $pageStages.css({
                    'width': parseInt(WinH * natQuotient),
                    'height': WinH
                });
                var fixLeft = Math.round(WinW - $pageStages.width() >> 1);
                $pageStages.css({
                    'position': 'absolute',
                    'left': fixLeft,
                    'top': -65 + "px"
                });
            } else {
                $pageStages.css({
                    'width': WinW,
                    'height': WinH,
                    'position': 'absolute',
                    'left': 0,
                    'top': -65 + "px"
                });
            }
        };
    }
    $(window).on('resize',
    function() {
        if (window.screen.width < 1000) {
            $(".cti-hinit-rotation").fadeIn();
            setTimeout(function(){
                $(".cti-hinit-rotation").hide();
            },3000);
        } else {
            $(".cti-hinit-rotation").hide();
        };
        fixWinHW();
        fixPageHeight();
        fixPageBg();
    }).resize();

    ietest.init();

    page3Wrap();

    topHover();

    scrollEvent();

    rightWindow();

    changeColor();

    sellingPoint();

    eightPoint();

    fivePoint();

    testDrive();
})

// 第三屏三大卖点
function page3Wrap(){
    var _ani = false;// 控制动画次数1次
    var starIs = true; //控制星星模型
    var _sch = 1920 / 900;
    var sellArr = [['C09A01_全景双天窗','C09A01L00_O','2015p013'],['C09A02_第二排头等舱座椅','C09A02L00_O','2015p014'],['C09A03_honda sensing','C09A03L00_O','2015h0']];
    sellingSwiper = new Swiper('.cti-selling-point-warp', {
        calculateHeight: true,
        pagination: '.point-pagination',
        paginationClickable: true,
        updateOnImagesReady: true,
        onImagesReady: function(swiper){
            if (starIs&&!ietest.islowerversion) {
                star();
                _interval = setInterval(flash, 2000);
                starIs = false;
            };
        },
        onSlideChangeStart: function(swiper) {
            var i = swiper.activeIndex;
            if ($(".point-pagination .swiper-pagination-switch").eq(i).hasClass("swiper-active-switch")) {
                $(".point-pagination .swiper-pagination-switch").empty();
                $(".point-pagination .swiper-active-switch").html("<label/>");
            }
            if (i!=0&&!ietest.islowerversion) {
                starIs = true;
                $("#starTest").removeClass('star-add').empty();
                $("#starBody").find(".aa").remove();
            }else{
                if (starIs&&!ietest.islowerversion) {
                    star();
                    _interval = setInterval(flash, 2000);
                    starIs = false;
                };
            };
        },
        onSlideChangeEnd: function(swiper) {
            var i = swiper.activeIndex;
            ga('send', 'event', 'C09_Nav', sellArr[i][0], sellArr[i][1]);
            if (!_ipad) {
                doubleclickjc("uv", "2015100", sellArr[i][2]);
            };
            if (i == 2 && !_ani) {
                $(".point-three-car").addClass('fadeInLeft').show(50,
                function() {
                    setTimeout(function() {
                        $(".cti-point-line").addClass('fadeIn').show();
                        $(".cti-point-line-left").addClass('leida').show();
                        $(".cti-point-line-right").addClass('leida2').show();
                    },
                    1500)
                });
                _ani = true;
            } else if (_ani) {
                return;
            }

        }
    });
    $(".point-pagination").find('.swiper-active-switch').html("<label/>");
    $(".cti-high-slide").height(WinW / _sch);

    // swiper1配置表
    var configureSwiper = new Swiper('.cti-configure-wrap', {
        // calculateHeight : true
    });
    // 左右切换事件
    $('.arr-left').click(function() {
        configureSwiper.swipePrev();
    });
    $('.arr-right').click(function() {
        configureSwiper.swipeNext();
    })
    // swiper2新闻
    var newsSwiper = new Swiper('.cti-news-wrap', {
        calculateHeight: true,
        pagination: '.news-pagination',
        paginationClickable: true,
        onSlideChangeStart: function(swiper) {
            var i = swiper.activeIndex;
            if ($(".news-pagination .swiper-pagination-switch").eq(i).hasClass("swiper-active-switch")) {
                $(".news-pagination .swiper-pagination-switch").empty();
                $(".news-pagination .swiper-active-switch").html("<label/>");
            }
        }
    });
    $(".news-pagination").find('.swiper-active-switch').html("<label/>");
}

// 主导航悬浮
function topHover(){
    $(".top-menu-center .menu-more").mouseenter(function(event) {
        /* Act on the event */
        $(".menu-more-son").fadeIn();
    });

    $(".menu-one").mouseleave(function(event) {
        /* Act on the event */
        $(".menu-more-son").finish().fadeOut();
    });

    $(".menu-more-son").mouseleave(function(event) {
        /* Act on the event */
        $(".menu-more-son").finish().fadeOut();
    });
    // 车型配置快捷入口
    $(".entry-configure").on('click',
    function(event) {
        event.preventDefault();
        var contH = $pages.height();
        var otherH = $otherPages.height() * 3 + contH;
        $('html,body').animate({
            scrollTop: otherH
        },
        500);
    });
    // 经销商查询快捷入口
    $("#dealerCheck,.entry-map").on('click',
    function(event) {
        event.preventDefault();
        var contH = $pages.height();
        var otherH = $otherPages.height() * 5 + contH;
        $('html,body').animate({
            scrollTop: otherH
        },
        500);
    });
}

function scrollEvent(){
    //滚动条事件(√)
    var $actNav = $(".self-nav-p");
    $(window).on('scroll', function(event) {
        event.preventDefault();
        var hideTop = $(document).scrollTop();
        var contH = $pages.height();
        var otherH = $otherPages.height();
        var num = hideTop / contH;
        // 导航切换
        if (num >= 1) {
            $(".cti-self-nav").css({
                "position": 'fixed',
                "top": '0',
                "z-index": 99999999
            });
        } else {
            $(".cti-self-nav").css({
                "position": 'absolute',
                "top": contH + 50,
                "z-index": 9998,
            });
        };
        // 导航选中状态切换
        if (hideTop >= contH) {
            $actNav.removeClass('act-nav-p');
            $actNav.eq(0).addClass('act-nav-p');
            _pt_sp_2.push('setPVTag,/#page-1' );
        }
        if (hideTop >= contH + otherH) {
            $actNav.removeClass('act-nav-p');
            $actNav.eq(1).addClass('act-nav-p');
            _pt_sp_2.push('setPVTag,/#page-2' );
        };

        if (hideTop >= (contH + otherH * 3)) {
            $actNav.removeClass('act-nav-p');
            $actNav.eq(2).addClass('act-nav-p');
            _pt_sp_2.push('setPVTag,/#page-3' );
            clearInterval(_interval);
        };
        if (hideTop >= (contH + otherH * 4)) {
            $actNav.removeClass('act-nav-p');
            $actNav.eq(3).addClass('act-nav-p');
            _pt_sp_2.push('setPVTag,/#page-4' );
        };
        if (hideTop >= (contH + otherH * 5)) {
            $actNav.removeClass('act-nav-p');
            $actNav.eq(4).addClass('act-nav-p');
            _pt_sp_2.push('setPVTag,/#page-5' );
        };
    });
    // 自有导航页面跳转
    $(".cti-self-left").find('li').on('click',
    function(event) {
        event.preventDefault();
        var i = $(this).index();
        var contH = $pages.height();
        if (i <= 1) {
            var otherH = $otherPages.height() * i + contH;
        } else if (i > 1 && i < 5) {
            var otherH = $otherPages.height() * (i + 1) + contH;
        } else if (i == 5) {
            alert("敬请期待")
        };

        $('html,body').animate({
            scrollTop: otherH
        },
        500);
    });
}

// 快捷窗口
function rightWindow(){
    $(".cti-share-wrap5").hover(function() {
        $(".cti-share-wrap3").hide();
        $(".cti-share-wrap4").show();
    });

    $(".cti-share-wrap2").hover(function() {
        $(".cti-share-wrap4").hide();
        $(".cti-share-wrap3").show();
    });

    $(".cti-function-window").hover(function() {},
    function() {
        $(".cti-share-wrap4").hide();
        $(".cti-share-wrap3").hide();
    });
    //首页右侧视窗
    $(".cti-share-wrap4").find('span').hover(function() {
        var i = $(this).index();
        if (i == 0) {
            $(".cti-share-wrap4").find('img').attr('src', 'images/qrcode-ios.png');
            $(this).addClass('act-span').siblings().removeClass('act-span');
        } else {
            $(".cti-share-wrap4").find('img').attr('src', 'images/qrapp-android.png');
            $(this).addClass('act-span').siblings().removeClass('act-span');
        };
    },function() {});
}



// 星星模型
function star() {
    var _t = $('#f');
    var left = 0;
    var BOX_H = $(".cti-selling-bg").height() / 2;
    var BOX_W = $(".cti-selling-bg").width() * 0.9;

    var BOX_H2 = $(".cti-selling-bg").height() / 2;
    var BOX_W2 = $(".cti-selling-bg").width() * 0.3;

    var BOX_H3 = $(".cti-selling-bg").height() / 2;
    var BOX_W3 = $(".cti-selling-bg").width() * 0.6;
    // setInterval(function () {
    //     _t.css('background-position-x', left-=100);
    // }, 300);
    var count = 400;
    var oo = ''
    for (var i = count; i >= 0; i--) {
        var clone = _t.clone();
        var du = Math.floor(1 * Math.random() * 10) / 10 + 3;
        var de = Math.floor(5 * Math.random() * 10) / 10;
        var R = Math.floor(4 * Math.random());
        if (i > 200) {
            var left = Math.floor(BOX_W * Math.random());
            var top = Math.floor(BOX_H * Math.random());
            clone.css({
                width: R,
                height: R,
                left: left,
                top: top,
                'animation-delay': de + 's',
                'animation-duration': du + 's'
            });
        } else if (i < 200 && i > 100) {
            var left = Math.floor(BOX_W2 * Math.random());
            var top = Math.floor(BOX_H2 * Math.random());
            clone.css({
                width: R,
                height: R,
                left: left,
                top: top + $(".cti-selling-bg").height() / 2,
                'animation-delay': de + 's',
                'animation-duration': du + 's'
            });
        } else if (i < 100) {
            var left = Math.floor(BOX_W2 * Math.random());
            var top = Math.floor(BOX_H3 * Math.random());
            clone.css({
                width: R,
                height: R,
                left: left + $(".cti-selling-bg").width() * 0.6,
                top: top + $(".cti-selling-bg").height() / 2,
                'animation-delay': de + 's',
                'animation-duration': du + 's'
            });
        };
        $('#starTest').append(clone);
    };
    $("#starTest").addClass('star-add');
    // $('.one-selling').append(clone);
}
//流行模型
function flash() {
    var _t = $("#aa");
    var left = 0;
    var BOX_H = $(".cti-selling-bg").height();
    var BOX_W = $(".cti-selling-bg").width();
    // setInterval(function () {
    //     _t.css('background-position-x', left-=100);
    // }, 300);
    var count = 2;
    // for (var i = count; i >= 0; i--) {
        var clone = _t.clone();
        var du = (Math.floor(5 * Math.random() * 10) / 10);
        var de = Math.floor(5 * Math.random() * 10) / 10;
        var R = Math.floor(8 * Math.random());
        var left = Math.floor(BOX_W * Math.random());
        var top = BOX_H;
        clone.css({
            width: R + 30,
            // height:R+10,
            left: left,
            top: top,
            'animation-delay': de + 's',
            'animation-duration': (de + 3) + 's'
        });
        $('#starBody').append(clone);
    // };
}



// 车色切换
function changeColor(){
    var colorfulCar = $('.cti-colorful-car img');
    var highBg = $('.cti-high-slide');
    var colorArr = [['C07A01_铂雅棕','C07A01L00_O','2015p00y'],['C07A02_彩金黑','C07A02L00_O','2015p011'],['C07A01_银月灰','C07A03L00_O','2015p00_'],['C07A01_钛金银','C07A04L00_O','2015p01'],['C07A01_珍珠白','C07A05L00_O','2015p00w']];
    $('.cti-color-btn').each(function(index, el) {
        var that = $(this);
        that.hoverDelay({
            hoverEvent: function() {
                var _in = index;
                ga('send', 'event', 'C07_Nav', colorArr[_in][0], colorArr[_in][1]);
                doubleclickjc("uv", "2015100", colorArr[_in][2]);
                that.addClass('cti-active-color').siblings().removeClass('cti-active-color');
                colorfulCar.eq(_in).addClass('show-one').siblings().removeClass('show-one');
            }
        });
    });
    // 五大亮点
    $('.cti-highlight-box').find('p').each(function(index, el) {
        var that = $(this);
        that.hoverDelay({
            hoverEvent: function() {
                var _in = index;
                that.addClass('act-highlight-tit').siblings().removeClass('act-highlight-tit');
                if (highBg.eq(_in).hasClass('act-high-slide')) {
                    return;
                }
                highBg.eq(_in).css('z-index', 1).finish().show();
                highBg.filter('.act-high-slide').css('z-index', 3).finish().fadeOut('slow',
                function() {
                    $(this).removeClass('act-high-slide');
                    highBg.eq(_in).addClass('act-high-slide');
                    highBg.css('z-index', 2);
                });
            }
        });
    });
}

function sellingPoint(){
    // 三大卖点
    // 卖点一按钮
    var _point1 = false,_point2 = false,_point3 = false;
$(".point-one").find('.cti-selling-btn').on('click',
    function(event) {
        event.preventDefault();
        clearInterval(_interval);
        var i = $(this).index();
        if (!_point1) {
             _point1 = true;
            $(".point-one").fadeOut('400',
            function() {
                $(sellingSwiper.activeSlide()).find('.cti-point-cont').eq(1).css('z-index', 200).fadeIn(2000,
                function() {
                    $('#pointOneImg').attr('src', 'images/selling/1/selling_tit2.png');
                    $(".point-one").find('.cti-selling-btn').html('开启天窗');
                    starIs = true;
                    $("#starTest").removeClass('star-add').empty();
                    $("#starBody").find(".aa").remove();
                    $(sellingSwiper.activeSlide()).find('.cti-point-cont').eq(2).css('z-index', 300).fadeIn(2000);
                    setTimeout(function() {
                        $(".point-one").fadeIn();
                    },
                    2000);
                });
            });
            ga('send', 'event', 'C09_Nav', 'C09A05_OFF按钮', 'C09A05L00_O');
            if (!_ipad) {
                doubleclickjc("uv", "2015100", "2015o00");
            };
        } else{
            _point1 = false;
            $(".point-one").fadeOut('400',
            function() {
                $(sellingSwiper.activeSlide()).find('.cti-point-cont').eq(2).css('z-index', 200).fadeOut(1000,
                function() {
                    $('#pointOneImg').attr('src', 'images/selling/1/selling_tit1.png');
                    $(".point-one").find('.cti-selling-btn').html('关闭天窗');
                    if (starIs&&!ietest.islowerversion) {
                        star();
                        _interval = setInterval(flash, 2000);
                        starIs = false;
                    };
                    $(sellingSwiper.activeSlide()).find('.cti-point-cont').eq(1).css('z-index', 300).fadeOut(1000);
                    setTimeout(function() {
                        $(".point-one").fadeIn();
                    },
                    2000);
                });
            });
            ga('send', 'event', 'C09_Nav', 'C09A04_ON按钮', 'C09A04L00_O');
            if (!_ipad) {
                doubleclickjc("uv", "2015100", "2015o0");
            };
        };
    });
    // 卖点二按钮
    $(".point-two").find('.cti-selling-btn').on('click',
    function(event) {
        event.preventDefault();
        var i = $(this).index();
        if (!_point2) {
            _point2 = true;
            $(".point-two").fadeOut('400',
            function() {
                $(sellingSwiper.activeSlide()).find('.cti-point-cont').eq(1).css('z-index', 200).fadeIn(1000,
                function() {
                    $(".point-two").find('.cti-selling-btn').html('收起座椅');
                    $(sellingSwiper.activeSlide()).find('.cti-point-cont').eq(2).css('z-index', 300).fadeIn(1000,
                    function() {
                        $(sellingSwiper.activeSlide()).find('.cti-point-cont').eq(3).css('z-index', 400).fadeIn(1000);
                        setTimeout(function() {
                            $(".point-two").fadeIn();
                        },
                        2000);
                    });
                });
            });
            ga('send', 'event', 'C09_Nav', 'C09A04_ON按钮', 'C09A04L00_O');
            if (!_ipad) {
                doubleclickjc("uv", "2015100", "2015o0");
            };
        } else {
            _point2 = false;
            $(".point-two").fadeOut('400',
            function() {
                $(sellingSwiper.activeSlide()).find('.cti-point-cont').eq(3).fadeOut(1000,
                function() {
                    $(".point-two").find('.cti-selling-btn').html('展开座椅');
                    $(sellingSwiper.activeSlide()).find('.cti-point-cont').eq(2).css('z-index', 300).fadeOut(1000,
                    function() {
                        $(sellingSwiper.activeSlide()).find('.cti-point-cont').eq(1).css('z-index', 400).fadeOut(1000);
                        setTimeout(function() {
                            $(".point-two").fadeIn();
                        },
                        2000);
                    });
                });
            });
            ga('send', 'event', 'C09_Nav', 'C09A05_OFF按钮', 'C09A05L00_O');
            
            if (!_ipad) {
                doubleclickjc("uv", "2015100", "2015o00");
            };
        };
    });
    // 卖点三按钮
    $(".point-three-btn").find('.cti-selling-btn').on('click',
    function(event) {
        event.preventDefault();
        var i = $(this).index();
        $(this).addClass('act-selling-btn').siblings().removeClass('act-selling-btn');
        $(".point-three-btn").fadeOut();
        $(".eight-selling-point").fadeIn(2000);
        // ga('send', 'event', 'C09_Nav', 'C09A06_查看详情', 'C09A06L00_O');
    });

    // 八大卖点按钮
    $(".eight-selling-point").on('click',
    function(event) {
        if (_ipad) {
            event.preventDefault();
            var i = $(this).attr('data-value');
            $(".eight-selling-point").fadeOut();
            $(".cti-point-loading").show();
            var showImg = '<img class="point-show-car" src="images/selling/3/' + i + '.jpg">';
            $("#showPoint").append(showImg);
            $(".point-show-car").load(function() {
                $(".cti-point-loading").hide();
                $(".point-show-car").fadeIn(1000);
            });
            setTimeout(function() {
                $(".point-close").fadeIn();
            },
            1100);
        } else {
            return;
        };
    });
}

function eightPoint(){
    // 八大卖点悬浮
    $(".eight-selling-point").each(function(index, el) {
        var that = $(this);
        that.hoverDelay({
            hoverEvent: function() {
                var i = that.attr('data-value');
                $(".eight-selling-point").hide();
                $(".cti-point-loading").show();
                var showImg = '<img class="point-show-car" src="images/selling/3/' + i + '.jpg">';
                $("#showPoint").append(showImg);
                $(".point-show-car").load(function() {
                    $(".cti-point-loading").hide();
                    $(".point-show-car").fadeIn();
                });
            }
            // outEvent: function() {
            //     $(".point-show-car").hide();
            //     $(".point-show-car").remove();
            //     $(".eight-selling-point").css('opacity',1);
            //     // setTimeout(function() {
            //     //     $(".point-show-car,.point-show-tit").remove();
            //     //     $(".eight-selling-point").animate({
            //     //         "opacity": 1
            //     //     },
            //     //     300);
            //     // },
            //     // 600);
            // }
        });
    });

    $(".point-close").on('click',
    function(event) {
        event.preventDefault();
        $(".point-close").fadeOut();
        $(".point-show-car").fadeOut(500);
        setTimeout(function() {
            $(".point-show-car").remove();
            $(".eight-selling-point").fadeIn(700);
        },
        600);
    });
}

$("#showPoint").on("mouseover", function(e){
    $(document).one("click", function(){
        $(".point-show-car").hide();
        $(".point-show-car").remove();
        $(".eight-selling-point").fadeIn();
    });
    e.stopPropagation();
});
$("#showPoint").on("click", function(e){
    e.stopPropagation();
});




function fivePoint(){
    // 卖点按钮
    var $highPoint = $(".cti-highlight-box").find('p');
    var fiveArr = [['C10A01_外观','C10A01L00_O','2015p015'],['C10A02_舒适空间','C10A02L00_O','2015p016'],['C10A03_配置','C10A03L00_O','2015p017'],['C10A04_安全','C10A04L00_O','2015p018'],['C10A05_动力','C10A05L00_O','2015p019']];
    $highPoint.on('click',function(event) {
        event.preventDefault();
        var self = $(this);
        var i = self.index(); //图片路径
        var data = self.attr('data-value'); //循环个数
        highLayer(i, data);
        ga('send', 'event', 'C10_Nav', fiveArr[i][0], fiveArr[i][1]);
        doubleclickjc("uv", "2015100", fiveArr[i][2]);
        windowLimit(true);
    });
}

//卖点
//卖点
var highSwiper;
function highLayer(a, b) {
    var newSlide;
    var $textHigh = $("#thumbnailTitle");
    $textHigh.html(highText[a][0]);
    highSwiper = new Swiper('.cti-highlight-thumbnail-layer', {
        // calculateHeight : true,
        cssWidthAndHeight : "height",
        slidesPerView : 4,
        slidesPerGroup : 4,
        simulateTouch : true
        // offsetSlidesAfter : 2
    });
    for (var i = 0; i < b; i++) {
        if (i == 0) {
            newSlide = highSwiper.createSlide('<div data-value=' + i + ' data-index=' + a + ' class="cti-highlight-thumbnail-box"><img class="cti-highlight-thumbnail" src="images/highlight/' + a + '/little_' + i + '.jpg"><span class="cti-highlight-thumbnail-act"></span>', 'swiper-slide cti-thumbnail-fixed', 'div');
        } else {
            newSlide = highSwiper.createSlide('<div data-value=' + i + ' data-index=' + a + ' class="cti-highlight-thumbnail-box"><img class="cti-highlight-thumbnail" src="images/highlight/' + a + '/little_' + i + '.jpg"><span></span>', 'swiper-slide cti-thumbnail-fixed', 'div');
        };
        newSlide.append();
    };
    $(".cti-highlight-fullscreen").attr('src', 'images/highlight/' + a + '/big0.jpg');

    $(".cti-highlight-fullscreen").load(function() {
        /* Act on the event */
        $(".cti-highlight-loading").hide();
    });

    var _sc = 1920 / 900;

    if (WinW < 1000) {
        $(".cti-highlight-fullscreen").css({
            "height": 768 / _sc,
            "width": 768+"px",
            "top": (WinH -(768 / _sc)) / 2,
            "left": 0
        });
    } else if (WinW < 1025 && WinW > 1000) {
        $(".cti-highlight-fullscreen").css({
            "height": WinH,
            "width": WinH * _sc,
            "top": 0,
            "left": -((WinH * _sc) - WinW) / 2
        });
    } 
    if (b <= 4) {
        $(".high-btn").hide();
    } else {
        $(".high-btn").show();
        $(".thumbnail-left").on('click',
        function(event) {
            event.preventDefault();
            highSwiper.swipePrev();
        });
        $(".thumbnail-right").on('click',
        function(event) {
            event.preventDefault();
            highSwiper.swipeNext();
        });
    };
    $(".cti-highlight-layer").fadeIn(1000);
    highSwiper.resizeFix();
    // if (b<=4) {
    //     var _wrapWidth = $("#ctiAutoWidth").width();
    //     $textHigh.css('width', _wrapWidth-10);
    // }else{
    //     $textHigh.css('width', 98+"%");
    // };
    
}



// 缩略图点击事件
$("#ctiAutoWidth").on('click', '.cti-highlight-thumbnail-box',
function(event) {
    event.preventDefault();
    $(".cti-highlight-thumbnail-box span").removeClass('cti-highlight-thumbnail-act');
    $(this).find('span').addClass('cti-highlight-thumbnail-act');
    var i = $(this).attr('data-value');
    var idx = $(this).attr('data-index');
    var url = 'images/highlight/' + idx + '/big' + i + '.jpg';
    var $textHigh = $("#thumbnailTitle");
    $textHigh.html(highText[idx][i]);
    $(".cti-highlight-loading").show();
    $(".cti-highlight-fullscreen").load(function() {
        /* Act on the event */
        $(".cti-highlight-loading").hide();
    });
    $(".cti-highlight-fullscreen").attr('src', url);
});
// 关闭
$(".cti-hightlight-close").on('click',
function(event) {
    event.preventDefault();
    windowLimit(false);
    highSwiper.swipeTo(0, 100, false);
    
    highSwiper.removeAllSlides();
    highSwiper.destroy(true);
    $(".cti-highlight-layer").fadeOut();
    
});
// 弹出购车计算器
$(".cti-price-calculator,#counterBtn").on('click',
function(event) {
    event.preventDefault();
    // var html = '<img class="cti-counter-top" src="images/close2.png"><iframe class="counter-iframe" id="counterIframe" src="counter.html"></iframe>';
    windowLimit(true);
    $("#cti_counter_iframe").attr("src", "counter.html");
    $(".counter-wrap").css('background', "url('images/opacity_bg.png') repeat");
    $(".counter-wrap").fadeIn();
    $(".counter-page").css({
        "top": ($(window).height() - $(".counter-page").height()) / 4
    });
    ga('send', 'event', 'C11_Nav', 'C11A03_信贷费用计算器', 'C11A03L00_O');
    doubleclickjc("uv", "2015100", "2015p00l");
});
// 关闭购车计算器
$(".counter-return").on('click',
function(event) {
    event.preventDefault();
    windowLimit(false);
    $(".counter-wrap").fadeOut();
});
var myPlayer = videojs('myVideo');
var myPlayer2 = videojs('myVideo2');
// 视频弹层
$(".cti-video-wrap,.video-mini").on('click', function(event) {
    event.preventDefault();
    doubleclickjc("uv", "2015100", "2015p00a");
    windowLimit(true);
    $("#d_video").fadeIn();
    myPlayer.src([
        { type: "video/mp4", src: "video/1.mp4" }
    ]);
    setTimeout(function(){
        myPlayer.play();
    },1500);
});

$(".news-video").on('click', function(event) {
    event.preventDefault();
    var i = $(this).attr('data-video');
    $("#news_video").fadeIn();
    myPlayer2.src([
        { type: "video/mp4", src: "video/news"+i+".mp4" }
    ]);
    setTimeout(function(){
        myPlayer2.play();
    },1500);
});

// 视屏关闭
$(".video-close").on('click', function(event) {
    event.preventDefault();
    $("#d_video,#news_video").fadeOut();
    windowLimit(false);
    myPlayer.src([
        { type: "video/mp4", src: "" }
    ]);
    myPlayer2.src([
        { type: "video/mp4", src: "" }
    ]);
});

// 预约试驾
$(".cti-testdrive-btn,#testDriveBtn,.entry-testdrive").on('click',
function(event) {
    event.preventDefault();
    var h = $(window).height();
    windowLimit(true);
    $(".cti-testdrive-wrap").fadeIn();
});
// 预约试驾关闭
$(".cti-testdrive-close").on('click',
function(event) {
    event.preventDefault();
    windowLimit(false);
    $(".cti-testdrive-wrap").fadeOut();
});
// 车型对比参数（待修改）
var _contrast = false;
var $configureBottom = $(".cti-configure-bottom");
// 对比选项弹出
$(".cti-contrast-model img").on("click", function(e){
    if ($configureBottom.is(':visible')) {
        $configureBottom.hide();
        $(this).parent().next().fadeIn();
    } else {
        $(this).parent().next().fadeIn();
    };

    $(document).one("click", function(){
        $configureBottom.hide();
    });
    e.stopPropagation();
});
$configureBottom.on("click", function(e){
    e.stopPropagation();
});


// 对比弹层显示
$(".cti-configure-b").on('click',
function(event) {
    event.preventDefault();
    windowLimit(true);
    $(".config-wrap").css('background', "url('images/opacity_q.png') repeat");
    $(".config-wrap").fadeIn();
    var href = $(".cti-configure-wrap").data("diff") + "#left:" + $(this).data("value") + "|right:" + $(this).siblings('.cti-select').find('select').eq(0).val();
    $("#cti_config_diff_iframe").attr("src", href);
    $(".config-page").css({
        "top": ($(window).height() - $(".config-page").height()) / 4
    });
    ga('send', 'event', 'C11_Nav', 'C11A02_车型对比', 'C11A02L00_O');
    doubleclickjc("uv", "2015100", '2015100');
});
// 对比弹层关闭
$(".config-return").click(function(event) {
    windowLimit(false);
    $(".config-wrap").fadeOut();
    $(".bg-tag").removeClass('blur');
    $("#cti_config_diff_iframe").attr("src", "loading.html");
});

// 自有配置弹层
$(".cti-contrast-model").find('p').on('click',
function(event) {
    event.preventDefault();
    var i = $(this).attr('data-value');
    $(".config-wrap").css('background', "url('images/opacity_q.png') repeat");
    $(".config-wrap").fadeIn();
    $(".bg-tag").addClass('blur');
    $(".config-page").css({
        "top": ($(window).height() - $(".config-page").height()) / 4
    });
    $("#cti_config_diff_iframe").attr("src", "configuration" + i + ".html");
    ga('send', 'event', 'C11_Nav', 'C11A01_了解详情配置', 'C11A01L00_O');
    doubleclickjc("uv", "2015100", '201510');
    windowLimit(true);
});

// 新闻悬浮
$(".cti-news-cont").each(function(index, el) {
    var that = $(this);
    that.hoverDelay({
        hoverEvent: function() {
            that.find('.cti-news-pop').fadeIn('400',
            function() {
                that.find('.cti-news-light').addClass('animated' + ' zoomIn').show();
            });
        },
        outEvent: function() {
            that.find('.cti-news-pop').fadeOut();
            that.find('.cti-news-light').removeClass('animated' + ' zoomIn').hide();
        }
    });
});
// 限制滚动
function windowLimit(a) {
    // if (a) {
    //     $("html").css('overflow', 'hidden');
    //     $("body").css('padding-right',17);
    // } else {
    //     $("body").css('padding-right',0);
    //     $("html").css('overflow', 'auto');
    // }
}




// 预约试驾
function testDrive() {
    var html = "",
        $provinces = $("#cti-drive-provinces"),
        $city = $("#cti-drive-city"),
        $dealers = $("#cti-drive-dealers");
    var $uname = $("#cti-drive-name");
    var $phone = $("#cti-drive-phone");
    // 预约试驾 性别
    $(".cti-sex-box").find('p').on('click',
    function(event) {
        event.preventDefault();
        $(this).addClass('active-sex').siblings().removeClass('active-sex');
    });
    // 预约试驾
    $.ajax({
        url: 'http://www.wdhac.com.cn/category/siborui.php?a=getarea',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            pid: 0
        }
    }).done(function(data) {
        html = data.info;
        $provinces.html(html);
    });
    //省联动
    $provinces.change(function() {
        html = "";
        var p = $(this).val();
        $.ajax({
            url: 'http://www.wdhac.com.cn/category/siborui.php?a=getarea',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                pid: p
            }
        }).done(function(data) {
            html = data.info;
            $city.html(html);
        });

    });
    //城市联动
    $city.change(function() {
        html = "<option value=''>请选择经销商</option>";
        var cname = $(this).find("option:selected").text();
        $.ajax({
            url: 'http://www.wdhac.com.cn/category/siborui.php?a=getshops',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                cname: cname
            }
        }).done(function(data) {
            html = data.info;
            $dealers.html(html);
        });
    });
    $(".testdrive-sub").on('click',function(event) {
        event.preventDefault();
        ga('send', 'event', 'C05_Conversion', 'C05A01_预约试驾提交', 'C05A01L01');
        
        var $sex = $(".active-sex");
        
        var arg = {
            username: $uname.val().trim(),
            sex: $sex.attr('data-value'),
            mobile: $phone.val(),
            provname: $provinces.find("option:selected").text(),
            cityname: $city.find("option:selected").text(),
            dealername: $dealers.find("option:selected").text()
        }
        var obj = {
            name: arg.username,
            sex: arg.sex,
            phone: arg.mobile,
            province: arg.provname,
            city: arg.cityname,
            dealer: arg.dealername
        };
        doubleclicksubmit("pv", "2015100", "2015p00v", obj);
        doubleclicksubmit("uv", "2015100", "2015p00x", obj);
        if (arg.username == "") {
            alert("用户名不能为空");
            return;
        }

        if (arg.mobile == "" || arg.mobile.length != 11) {
            alert("电话号码格式有误");
            return;
        }

        if (arg.provname == "请选择" || arg.provname == "") {
            alert("请选择省");
            return;
        }
        if (arg.cityname == "请选择" || arg.cityname == "") {
            alert("请选城市");
            return;
        }
        if (arg.dealername == "请选择" || arg.dealername == "") {
            alert("请选经销商");
            return;
        }

        try {
            _dcv.push(['_setVar', 'customer', '东风本田']);
            _dcv.push(['_setVar', 'form_name', '']);
            _dcv.push(['_setVar', 'car_type', '艾力绅']);
            _dcv.push(['_setVar', 'name', arg.username]);

            _dcv.push(['_setVar', 'sex', arg.sex]);
            _dcv.push(['_setVar', 'mobile', arg.mobile]);
            _dcv.push(['_setVar', 'dealer_province', arg.provname]);
            _dcv.push(['_setVar', 'dealer_city', arg.cityname]);
            _dcv.push(['_setVar', 'media', '']);
            _dcv.push(['_setVar', 'dealer_name', arg.dealername]);
            _dcv.push(['_setVar', 'way', '试驾']);
            _dcv.push(['_setVar', 'channel', '艾力绅官网']);
            _dcv.push(['_setVar', 'activity', '艾力绅产品站']);
            _dcv.push(['_trackVar']);
            ga('send', 'pageview', '/VP/PC/activitytestdrivesubmit', {'dimension1':  arg.username+ '_'  +arg.sex + '_'  +arg.mobile + '_'  +arg.provname + '_' + arg.cityname + '_' + arg.dealername});
            
            
            alert("您的信息提交成功！后续会有专员与您联系！");
            //重置表单
            setTimeout(function(){
                doubleclicksubmit("pv", "2015100", "2015p00z", obj);
                doubleclicksubmit("uv", "2015100", "2015p010", obj);
            },500);
            $("#cti_testdrive_forms")[0].reset();
            $("#select-provinces").text("请选择省");
            $("#select-city").text("请选择城市");
            $("#select-dealers").text("请选择经销商");
            //关闭窗口
            windowLimit(false);
            $(".cti-testdrive-wrap").fadeOut();
            //检测代码
        } catch(e) {}
    });
}


// 回滚到顶部
$('.cti-return-top,.cti-elysion-logo').on('click',
function(event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    },
    500);
});
/*ie测试*/
var ietest = {
    init: function() {
        this.ieversion = this.getversion(); //当前ie版本
        this.islowerversion = false; //是否为低版本
        if (this.ieversion == "ie8" || this.ieversion == "ie9" || this.ieversion == "ie7" || this.ieversion == "ie6") {
            this.islowerversion = true;
        }
    },
    getversion: function() {
        var ie_v = "";
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i) == "7.") {
            ie_v = "ie7";
        } else
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i) == "8.") {
            ie_v = "ie8";
        } else if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i) == "9.") {
            ie_v = "ie9";
        } else if (navigator.appName == "Microsoft Internet Explorer") {
            ie_v = "ie6";
        }
        return ie_v;
    }
}

