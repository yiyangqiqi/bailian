$("input").focus(function(){
	$(this).css("border"," 2px solid #7FCBFE");
})
$(".nameUser").blur(function(){
	if($(this).val() == "" ){
	   $(this).css("border"," 2px solid #F77799");
	  }else{
	  	$(this).css("border","1px solid #999999");
	  	//正则表达式 判断用户名
	  	var test_name = /^[a-z0-9_-]{3,15}$/;
	  	var nameuser = $(".nameUser").val();
	  	if(!test_name.test(nameuser)){
	  		 $(this).css("border"," 2px solid #F77799");
	  		 alert("worry");
	  		 
	  		
	  	}else
	  	{
//	  		$
	  	}
	}
})
	//正则表达式 判断密码
$(".password").blur(function(){
	if($(this).val() == "" ){
	   $(this).css("border"," 2px solid #F77799");
	  }else{
	  	$(this).css("border","1px solid #999999");
	  	//正则表达式 判断用户名
		 var test_pd = /^[a-z0-9_-]{6,18}$/;
		var pd = $(".password").val();
		if(!test_pd.test(pd)){
			
		}else{
			
		}
	
	}
})
//断两次密码是否相等
$(".pspassword").blur(function(){
	if($(this).val() == "" ){
	   $(this).css("border"," 2px solid #F77799");
	  }else{
	  	$(this).css("border","1px solid #999999");
	  	//正则表达式 判断用户名
		var ppd = $(".pspassword").val();
		if(ppd == pd){
			
		}else{
			
		}
		
	}
})
	
	//判断邮箱是否符合规则
	$(".e-mail").blur(function(){
	if($(this).val() == "" ){
	   $(this).css("border"," 2px solid #F77799");
	  }else{
	  	$(this).css("border","1px solid #999999");
	  	//正则表达式 判断用户名
		var email= $(".e-mail").val();
		var test_email = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/
	 	if(!test_email.test(email)){
	 		alert("zhu");
		}else{
	 	

	 	}
		
	}
})
	
	 
