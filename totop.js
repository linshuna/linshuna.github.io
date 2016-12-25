$("#totop").find("a").on("click",function(){
	var t = 30;
	var winH = $(window).Height();
	var timer = setInterval(function(){
		t--;
		if (t>=0) {
			clearInterval(timer);
		}
		$(document).css("top",50*t);
	},200)	
})