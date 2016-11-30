function loadthis() {
    //加载默认的城市
    go_to("1-1-1");
}
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
//初始化坐标函数
function initPointer(dealer_data) {
    //清空操作
    var ci = $("#city").find("option:selected").text();
    var _arr_info = [];
    var infoBox = $('.pos-result-box');
    infoBox.empty();
    map.clearOverlays();
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.centerAndZoom(ci, 11);
    var htmllist = '';
    $.each(dealer_data, function(i, n) {
        //放入百度地图
        _arr_info.push(i);
        var l = _arr_info.length - 1;
        var xy = [];
        xy = n.dealer_xy.split(",");
        var pt = new BMap.Point(xy[0], xy[1]);
        var myIcon = new BMap.Icon("images/map/icon_" + l + ".png", new BMap.Size(34, 40));
        var marker = new BMap.Marker(pt, {
            icon: myIcon
        }); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_DROP);
        var opts = {
            width: 300, // 信息窗口宽度
            height: 110, // 信息窗口高度
            title: n.dealer_name, // 信息窗口标题
            enableMessage: true //设置允许信息窗发送短息
                // message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
        }
        var infoWindow = new BMap.InfoWindow("地址：" + n.dealer_adr + "<br />销售热线: " + n.dealer_tel_1 + "<br />销售热线: " + n.dealer_tel_2 + "", opts); // 创建信息窗口对象 
        marker.addEventListener("onmouseover", function() {
            map.openInfoWindow(infoWindow, pt); //开启信息窗口
        });
        //创建右侧列表
        htmllist += '<li><img src="images/map/m_' + l + '.png" />';
        htmllist += '<h5>' + n.dealer_name + '</h5>';
        htmllist += '<div class="info-box"><p style="line-height:16px">' + n.dealer_adr + '</p>';
        htmllist += '<p>销售热线：' + n.dealer_tel_1 + '</p>';
        htmllist += '<p>售后热线：' + n.dealer_tel_2 + '</p></div></li>';
    });
    //存入html中
    $(".pos-result-box").html(htmllist);
    //设置分页
    $("div.holder").jPages({
        containerID: "itemContainer",
        perPage: 2,
        previous: false,
        next: false
    });
}

//切换省
function go_to(id) {
    $.ajax({
            url: 'http://www.civic.com.cn/index.php/rv_iframenewcivic/rv_dealer_greiz/' + id,
            type: 'get',
            dataType: 'jsonp',
            data: '',
        })
        .done(function(data) {

            initPointer(data.dealer_info);
        })
        .fail(function() {
     
        })
        .always(function() {
        
        });
}
