var win_width = $(window).innerWidth();
//获取浏览器高度
var win_height = $(window).innerHeight();
//var r_win_width = win_width*0.8;
//将浏览器高度的90%划入中心区
var r_win_height = win_height*0.9;
var t_win_height = win_height*0.08;
$(".center").css({"height":r_win_height+"px"});
// $(".top").css({"height":t_win_height+"px"});
// $(".bottom").css({"height":t_win_height+"px"});

