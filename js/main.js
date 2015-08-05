

/// SPACE BG

var strength1 = 20;
var strength2 = 50;
$("html").mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 6);
    var pageY = e.pageY - ($(window).height() / 6);
    var newvalueX = 3* pageX * -1;
    var newvalueY = 3* pageY * -1;
    $('#colour').css("background-position", (strength1 / $(window).width() * pageX * -1)+"px "+(strength1  / $(window).height() * pageY * -1)+"px");
    $('#dots').css("background-position", (strength2 / $(window).width() * pageX * -1)+"px "+(strength2  / $(window).height() * pageY * -1)+"px");
});