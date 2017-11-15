$(document).ready(function(){
	
	//nav显示,右侧弹出去
	var top=document.querySelector(".top");//获取该类第一个
	var rightc = document.querySelector(".rightcountx");
	$(top).hide();
	$(rightc).hide();
	$(window).scroll(function(){
		if($(window).scrollTop()>70){
			$(top).slideDown(500);
			$(rightc).show(500);
}else{
			$(top).slideUp(500);
			$(rightc).hide(500);
		}
	})
})
