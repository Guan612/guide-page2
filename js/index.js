
var win_width = $(window).innerWidth();
//获取浏览器高度
var win_height = $(window).innerHeight();
//var r_win_width = win_width*0.8;
//将浏览器高度的90%划入中心区
var r_win_height = win_height*0.9;
var t_win_height = win_height*0.08;
$(".center").ready().css({"height":r_win_height+"px"});
$(document).ready(function(){
    if(win_width < 600)
    {
        $("#left_dock").hide();
        $("#right_app").prepend("<div id='open_dock'>点我展开dock</div>");
    }
});//当宽度小于600自动隐藏
$("#open_dock").click(function(){
    $("#left_dock").show();
    $(this).val("点我折叠");
});

// $(".top").css({"height":t_win_height+"px"});
// $(".bottom").css({"height":t_win_height+"px"});

$("#add_app").click(function(){
    var div_app = $('</div>').html('<div class="q_app" href="javascript:;">删除</div>');
    $('#add_app').prepend(div_app);
});
function dragFunc(time) {
    var Drag = document.getElementById(time);
    Drag.onmousedown = function(event) {
        var ev = event || window.event;
        event.stopPropagation();
        var disX = ev.clientX - Drag.offsetLeft;
        var disY = ev.clientY - Drag.offsetTop;
        document.onmousemove = function(event) {
            var ev = event || window.event;
            Drag.style.left = ev.clientX - disX + "px";
            Drag.style.top = ev.clientY - disY + "px";
            Drag.style.cursor = "move";
        };
    };
    Drag.onmouseup = function() {
        document.onmousemove = null;
        this.style.cursor = "default";
    };
};
$("body").bind("contextmenu", function (e) {
    return false;
});
//禁止右键



