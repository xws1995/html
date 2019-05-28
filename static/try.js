$(document).ready(function(){
	// 底部图标
	$(".footer-three-wrap a").mouseover(function(){
		var class_name = $(this).attr("class");
		var active_class_name = class_name+'-active';
		$(this).addClass(active_class_name);
	});
	$(".footer-three-wrap a").mouseout(function(){
		var class_name = $(this).attr("class");
		var new_class_name = class_name.split(" ");
		new_class_name = new_class_name.shift();
		console.log(new_class_name);
		$(this).attr("class",new_class_name);
	});
	// 文章按钮
	$(".article-but").mouseover(function(){
		$(".article-but").removeClass('article-but-active');
		$(this).addClass('article-but-active');
	});
	// 顶部栏
	$(".top-wrap-right-li").mouseover(function(){
		$(".top-wrap-right-li").removeClass('top-wrap-right-li-active');
		$(this).addClass('top-wrap-right-li-active');
	});
});