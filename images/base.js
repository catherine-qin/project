// hover事件延迟处理(√)
(function($){
    $.fn.hoverDelay = function(options){
        var defaults = {
            hoverDuring: 150,
            outDuring: 150,
            hoverEvent: function(){
                $.noop();
            },
            outEvent: function(){
                $.noop();    
            }
        };
        var sets = $.extend(defaults,options || {});
        var hoverTimer, outTimer;
        return $(this).each(function(){
            $(this).hover(function(){
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
            },function(){
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });    
        });
    }      
})(jQuery);
//下拉菜单选值(√)
$(".cti-select").on("change", function() {
    var o;
    var opt = $(this).find('option');
    opt.each(function(i) {
        if (opt[i].selected == true) {
            o = opt[i].innerHTML;
        }
    })
    $(this).find('label').html(o);
});
var highText = [
    [
        "<strong>LED前照明组——</strong>远近光全LED灯组，带转向灯、LED转向辅助照明灯及LED日间行车灯，高亮度低功耗，匠心独具，成就尊贵气质。",
        "<strong>灯带式LED后尾灯——</strong>快速点亮耀目独到。高雅与科技结合，安全与型格共呈。",
        "<strong>Stylish型男前脸——</strong>镀铬饰条塑造出大面积盾型格栅，优雅俊毅，彰显翩翩风度。",
        "<strong>全系标配双侧电动滑门——</strong>通过车钥匙遥控、主驾控制台按键和拉动门把手三种形式均可控制电动滑门开启或关闭。开合随心，尽显绅士风范。"
    ],
    [
        // "<strong>前排座椅大型中央扶手——</strong>人性化多角度调节中央扶手设计，周到考虑每一分舒适乘坐体验。",
        "<strong>尊享第二排独立头等舱座椅——</strong>可横向、纵向方位调节，实现多样空间变化；可电动调节椅背和腿托角度，手动调节肩部角度，从容享受舒适坐姿。更带多角度调节扶手、内置小桌板，满足多种使用需求。",
        "<strong>灵动座椅组合——</strong>多种座椅组合模式，满足多种出行空间需求。"
    ],
    [
        "全系标配尊享电动双天窗——前天窗电动开闭；后天窗电动开闭遮阳帘。",
        "<strong>尊享后排天窗氛围灯——</strong>隐藏式LED天窗氛围灯，流光熠世尊荣优越。",
        "<strong>顶置式前排中央控制系统——</strong>集成天窗、灯光控制、阅读灯开关和太阳镜收纳盒于一体；便捷控制，轻松拥有。",
        "<strong>后排中央触控系统——</strong>集成后排空调控制、灯光控制和后天窗遮阳帘开合的触摸控制系统。随心调节，尊贵之享。",
        "<strong>大型中央中控台——</strong>人性化典雅中控，驾控从容自在，拥抱智能生活。",
        "<strong>智能仪表盘——</strong>高对比度光源仪表盘，带液晶行车电脑显示屏，车辆信息一目了然，完美驾驭最佳行驶状态。",
        "<strong>触控式控制屏——</strong>前排空调触摸式控制面板，现代化触控屏，轻触间获取舒适感受。",
        "<strong>智能导航系统——</strong>领先科技，集合导航信息、影音播放等功能，带给您一触即发的智能体验。"
    ],
    [
        "<strong>Honda SENSING（安全超感）——</strong>Honda SENSING系统融合了毫米波雷达和单目摄像头的感应功能，根据车辆感知到的外界信息来提供驾驶辅助，是帮助驾驶者避开事故的先进安全技术，实现安全惬意的驾驶。",
        "<strong>主动巡航控制系统（ACC）——</strong>通过摄像头、毫米波雷达，保持车辆在高速公路行车时设置的同一车道内的安全行车距离，并进行加减速控制。",
        "<strong>碰撞缓解制动系统（CMBS）——</strong>通过摄像头与毫米波雷达探测前方同向行驶的车辆，可能发生碰撞危险时，进行提示或发出报警，必要时车辆会自动刹车，防止碰撞。",
        "<strong>车道保持辅助系统（LKAS）——</strong>在高速公路行驶时，通过摄像头对车道的识别，保持车辆在车道内行驶。",
        "<strong>车道偏移抑制系统（RDM）——</strong>通过摄像头对车道的识别，当车辆发生偏离车道行为时，进行报警提示和方向盘震动提示，同时进行转向辅助车辆回归车道。",
        "<strong>自动泊车辅助系统（PA）——</strong>通过摄像头自动探测停车位白线，并且自动控制方向盘，辅助停车的功能。",
        "<strong>后视动态提醒系统（CTM）——</strong>倒车时，如果后方两侧盲区有车辆接近，显示屏上会有双箭头显示，并有报警音。",
        "<strong>360°全景影像系统（MVCS）——</strong>显示驾驶员视角看不到的区域，提供「多样的视野」，辅助安全驾驶。",
        "<strong>盲区监测系统——</strong>系统会进行侧后方盲区监测，如果有车辆靠近，会对驾驶员进行警告提示。"
    ],
    [
        "<strong>动力与节能，齐头并进——</strong>EARTH DREAMS TECHNOLOGY 地球梦科技 i-VTEC直列4缸16气门直喷发动机，大幅提升功率，搭配平顺直接的CVT无级变速器，带来强劲动力并保持低油耗。绅士之态，动静自如。",
        "<strong>2.4Li-VTEC——</strong>最大功率：137kw/6400rpm；最大扭矩：243N·m/3900rpm。"
    ]
];
// var imgNum = 0;
// var images = [];
// var imn = 16;
// var ifLoad = false;
// 预加载相关图片
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/big0.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/big1.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/big2.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/big3.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/big4.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/big5.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/big6.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/big7.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/tit_0.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/tit_1.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/tit_2.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/tit_3.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/tit_4.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/tit_5.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/tit_6.png");
// images.push("http://test.cloud-top.com.cn/1512_elysion.new/images/selling/3/tit_7.png");

// function preLoadImg() {
//     $.imgpreload(images, {
//         each: function() {
//         },
//         all: function() {
//             // $(".loading").hide();
//         }
//     });
// };