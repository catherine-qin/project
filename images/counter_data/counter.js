var _a,//购车价格
	_b,//首付款(总价百分比算)
	_c,//贷款额(贷款额=购车价格 - 首付款)
	_d,//月付额度(银行贷款基准利率：1年期4.85%；2年期5.25%；3年期5.25%；4年期5.25%；5年期5.25%,_12: 0.04, _18: 0.06, _24: 0.08, _36: 0.12)
	_e,//首期付款额(首期付款总额=首付款+必要花费+商业保险)
	_f,//购置税(购置税＝购车款/(1+17%)×购置税率(10%))
	_g,//上牌费用(通常商家提供的一条龙服务收费约500元，个人办理约 373元，其中工商验证、出库150元、移动证30元、环保 卡3元、拓号费40元、行驶证相片20元、托盘费130元)
	_h,//车船使用税(各省不统一，以北京为例(单位/年)。1.0L(含)以下300元；1.0-1.6L(含)420元；1.6-2.0L(含)480元；2.0-2.5L(含)900元；2.5-3.0L(含)1920元；3.0-4.0L(含)3480元；4.0L以上5280元；不足一年按当年剩余月算。)
	_i,//交通事故责任强制保险(家用6座以下950元/年，家用6座及以上1100元/年)
	_j,//手续费
	_k,//分期比例
	_sum;//必要
	//i分期额百分比  m月利率 n分期数 x1.6L以上或以下 y车船使用税 z家用6座以上/以下
// 城市数据
var testDriveDealerData = window.testDriveDealerData || { p: {}, c: {} };
var $prov = $('#d_loan_prov');
var $city = $('#d_loan_city');
var provHtml = '';
$.each(testDriveDealerData.p, function (id, name) {
    provHtml += '<option value="' + id + '">' + name + '</option>';
});
$prov.append(provHtml).on('change', function () {
    var provId = $(this).val();
    var citys = testDriveDealerData.c[provId];
    var cityHtml = '<option value="">请选择城市</option>';
    $.each(citys, function (id, name) {
        cityHtml += '<option value="' + id + '">' + name + '</option>';
    });
    $city.html(cityHtml);
});



_k = parseFloat($("#d_loan_downpay_rate_check").find('.d-checked').parent("span").attr('data-value'));
_g = 500;
_h = parseInt($("#d_loan_y").find('.d-checked').parent("span").attr('data-value'));
_i = parseInt($("#d_loan_z").find('.d-checked').parent("span").attr('data-value'));
$("#d_loan_b").val(_g);
$("#d_loan_c").val(_h);
$("#d_loan_d").val(_i);
// 运算工厂
function counter(){
	$("#d_lian_price").val(_a);
	m = parseFloat($("#d_loan_stage").find('.d-checked').parent("span").attr('data-chargesrate')),
	n = parseInt($("#d_loan_stage").find('.d-checked').parent("span").attr('data-value')),
	_b = _a * _k;
	_c = _a - _b;
	_d = _c / n;
	_j = _c * m;
	_f = _a / (1+0.17)*0.1;//购置税
	_sum = _f+_g+_h+_i;
	$("#total").text(parseInt(_sum));
	$("#d_loan_downpay").val(parseInt(_b));
	$("#d_loan_loan").val(parseInt(_c));
	$("#d_loan_monthpay").val(parseInt(_d));
	$("#d_loan_charges").val(parseInt(_j));
	$("#d_loan_a").val(parseInt(_f));
}

// 价格选值
$("#d_loan_cartype").change(function(event) {
	var i = $(this).val();
	_a = parseInt(i);
	counter();
	hideVal(2);
});
// 价格手动输入
$("#d_lian_price").keyup(function(){
	var i = $(this).val();
	_a = parseInt(i);
	counter();
	hideVal(2);
})
//首付比例
$("#d_loan_downpay_rate_check").find('label').on('click', function(event) {
	event.preventDefault();
	$("#d_loan_downpay_rate_check").find('label').removeClass('d-checked');
	$(".cti-config-counter-custom").find('label').removeClass('d-checked');
	$('#d_loan_downpay_rate').attr("disabled","disabled"); 
	$(this).addClass('d-checked');
	var io = $(this).parent("span").attr('data-value');
	if ($("#d_lian_price").val()=='') {
		var i = $("#d_loan_cartype").val();
	}else{
		var i = $("#d_lian_price").val();
	};
	_a = parseInt(i);//价格
	_k = parseFloat(io);//首付比例
	counter();
	hideVal(2);
});

// 自定义首付比例
$(".cti-config-counter-custom").find('label').on('click', function(event) {
	event.preventDefault();
	$("#d_loan_downpay_rate_check").find('label').removeClass('d-checked');
	$(this).addClass('d-checked');
	$('#d_loan_downpay_rate').attr("disabled",false); 
});


// 还款期数
$("#d_loan_stage").find('label').on('click', function(event) {
	event.preventDefault();
	$("#d_loan_stage").find('label').removeClass('d-checked');
	$(this).addClass('d-checked');
	if ($("#d_lian_price").val()=='') {
		var i = $("#d_loan_cartype").val();
	}else{
		var i = $("#d_lian_price").val();
	};
	_a = parseInt(i);
	counter();
	hideVal(2);
});

// 自定义首付比例输入
$("#d_loan_downpay_rate").keyup(function(event) {
	var io = $(this).val();
	if ($("#d_lian_price").val()=='') {
		var i = $("#d_loan_cartype").val();
	}else{
		var i = $("#d_lian_price").val();
	};
	if (io>100||io<0) {
		alert("请输入正确的首付比例");
		$(this).val(0);
	};
	_a = parseInt(i)//价格变量
	_k = parseInt(io)*0.01;//首付比例
	counter();
	hideVal(2);
});
// 
$("#d_loan_b").keyup(function(event) {
	/* Act on the event */
	_g = parseInt($(this).val());
	counter();
	hideVal(2);
});

$("#d_loan_c").keyup(function(event) {
	/* Act on the event */
	_h = parseInt($(this).val());
	counter();
	hideVal(2);
});

$("#d_loan_y").find('label').on('click', function(event) {
	event.preventDefault();
	$("#d_loan_y").find('label').removeClass('d-checked');
	$(this).addClass('d-checked');
	var i = $(this).parent("span").attr('data-value');
	$("#d_loan_c").val(i);
	_h = parseInt(i);
	counter();
	hideVal(2);
});

$("#d_loan_z").find('label').on('click', function(event) {
	event.preventDefault();
	$("#d_loan_z").find('label').removeClass('d-checked');
	$(this).addClass('d-checked');
	var i = $(this).parent("span").attr('data-value');
	$("#d_loan_d").val(i);
	_i = parseInt(i);
	counter();
	hideVal(2);
});






// 等额本息

$("#d_loan_plan").change(function(event) {
	/* Act on the event */
	var i = $(this).val();
	palnGo(i)
});



function palnGo(val){
	switch (val){
		case "1":
			_k = 0.2;
			counter();
			hideVal(2);
			$("#d_loan_downpay_rate_check").find('label').removeClass('d-checked');
			$(".cti-config-counter-custom").find('label').removeClass('d-checked');
			$('#d_loan_downpay_rate').attr("disabled","disabled"); 
			$("#d_loan_downpay_rate_check").find('label').eq(1).addClass('d-checked');
		break;

		case "2":
			_k = 0.2;
			counter();
			hideVal(2);
			$("#d_loan_downpay_rate_check").find('label').removeClass('d-checked');
			$(".cti-config-counter-custom").find('label').removeClass('d-checked');
			$('#d_loan_downpay_rate').attr("disabled","disabled"); 
			$("#d_loan_downpay_rate_check").find('label').eq(1).addClass('d-checked');
		break;
		case "3":
			_k = 0.5;
			counter();
			hideVal(1);
			$("#d_loan_monthpay").val(0);
			$("#d_loan_tailpay").show();
			$("#d_loan_downpay_rate_check").find('label').removeClass('d-checked');
			$(".cti-config-counter-custom").find('label').removeClass('d-checked');
			$('#d_loan_downpay_rate').attr("disabled","disabled"); 
			$("#d_loan_downpay_rate_check").find('label').eq(4).addClass('d-checked');
		break;
		case "4":
			_k = 0;
			counter();
			hideVal(0);
			$("#d_loan_taxinput").show();
			$("#d_loan_taxinput").find('input').val(parseInt(_f));
			$("#d_loan_downpay_rate_check").find('label').removeClass('d-checked');
			$(".cti-config-counter-custom").find('label').removeClass('d-checked');
			$('#d_loan_downpay_rate').attr("disabled","disabled"); 
			$("#d_loan_downpay_rate_check").find('label').eq(0).addClass('d-checked');
		break;
	}
}


function hideVal(i){
	if (i==0) {
		$("#d_loan_tailpay").hide();
	}else if(i==1){
		$("#d_loan_taxinput").hide();
	}else{
		$("#d_loan_tailpay").hide();
		$("#d_loan_taxinput").hide();
	};
	
	
}