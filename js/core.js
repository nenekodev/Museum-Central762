Zepto(function($) {
	$(window).resize(function(){
		if(document.body.clientWidth >= 980){
			$('#foot').stickUp();
		}else{
			$('#foot').removeClass('stuckMenu');
			$('#foot').removeClass('isStuck');
			$('#foot').css({"position":'','top':''});
		}
	});
});

function GetLinkArgs()
{
	var reg = new RegExp("(^|&)([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
	if(r != null)return  unescape(r[2]); return null;
}
var currentArti = GetLinkArgs();

