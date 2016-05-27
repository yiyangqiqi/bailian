$("input").focus(function(){
	$(this).css("box-shadow","0 0 5px #7FCBFE");
})
$("input").blur(function(){
	if($(this).val() == "" ){
	   $(this).css("box-shadow","0 0 5px #F77799");
	  }else{
	  	$(this).css("box-shadow","0 0")
	
	  }
})

	if ($.cookie("userName")) {
		$("#loginId").val($.cookie("userName"));
		$("#password").val($.cookie("password"))
	}
	$(".login").click(function() {
		
		var userName = $("#loginId").val();
		var password = $("#password").val();
		$.cookie("userName", userName, {
			expires: 7,
			path: '/'
		});
//		if ($("#check").is(':checked')) {
//			$.cookie("password", password, {
//				expires: 7,
//				path: '/'
//			});
//		}
		alert($.cookie("userName"));
	})

