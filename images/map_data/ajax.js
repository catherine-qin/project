// JavaScript Document
var defaultProvId = 0,
    defaultCityId = 0;
var defaultParamFromUrl = window.location.href.match(/\/(\d+)-(\d+)-(\d+)$/);
if (defaultParamFromUrl != null && typeof defaultParamFromUrl.length == 'number' && defaultParamFromUrl.length == 4) {
    defaultProvId = defaultParamFromUrl[2];
    defaultCityId = defaultParamFromUrl[3];
}
var temp;
var ids = ['province', 'city', 'eare1']; //默认要操作的三个ID，注意先后顺序，不可颠倒。
// 参数说明:pid是关联 的id (第二个参数) 的父级,n表示是第几级,(如第一级，第二级，第三级),selected 默认被选中的选择的主键
function getList(pid, id, n, selected) {
    var list = document.getElementById(id);
    $.post('http://www.civic.com.cn/index.php/buy/ajax.html', {
        'pid': pid,
        'action': id
    }, function(data) {
        var temp1 = eval('(' + data + ')'); //把传过来的字符串转化成一个JSON对象。
        var leng = temp1.length;

        var n = (n > ids.length) ? ids.length : n;
        n = (n < 0) ? 0 : n;
        for (var j = n; j < ids.length; j++) {
            var t = 'temp' + j
            t = document.getElementById(ids[j]);
            t.options.length = 1;
            t.options[0] = new Option('请选择', '*');
        }

        if (leng > 0) {
            list.length = leng + 1;
            for (var i = 0; i < temp1.length; i++) {
                list.options[i + 1] = new Option(decodeURI(temp1[i].v_name), temp1[i].v_pid);
                if (temp1[i].region_id == selected) {
                    list.options[0].selected = 'selected';
                }
                if (selected && list.options[i + 1].value == selected) {
                    list.options[i + 1].selected = 'selected';
                }
                if(id == 'city' && typeof temp1[i].v_pid != 'undefined'){
                    var matchCity = temp1[i].v_pid.toString().match(/-(\d+)$/);
                    if(matchCity != null && matchCity.length == 2 && matchCity[1] == selected){
                        list.options[i + 1].selected = 'selected';
                    }
                }
            }
        }
        if (pid == '*') {
            switch (id) {
                case 'city':
                    t = document.getElementById('city');
                    t.options.length = 1;
                    t.options[0] = new Option('请选择', '*');
                    t = document.getElementById('eare1');
                    t.options.length = 1;
                    t.options[0] = new Option('请选择', '*');
                    break;
                case 'eare1':
                    t = document.getElementById('eare1');
                    t.options.length = 1;
                    t.options[0] = new Option('请选择', '*');
                    break;
            }
        }
        if (document.getElementById('city') && document.getElementById('city').value == '*') {
            t = document.getElementById('eare1');
            t.options.length = 1;
            t.options[0] = new Option('请选择', '*');
        }
    });
}
$(function() {
    getList('1', 'province', 1, defaultProvId);
    //三个都写是为了修改的时候，请三个框中默认的都有选中的值,一般增加的时候只写第一个就可以了。
    if(defaultCityId != 0){
        getList(defaultProvId, 'city', 1, defaultCityId);
    }
});

function url_to(url) {
    document.getElementById("iframe_id").src = 'http://www.civic.com.cn/index.php/drive/rv_dealer/' + url;
}
