$(window).ready(function() {
				var index = 0;//计数用来轮播图片
			myShow();
			var isclick = false;
			
			$(".progress-bar-ol ul li").click(function() {
					
					clearInterval();
					isclick = true;
//					
					$(this).eq(index).addClass("li-a-circle-red").siblings().removeClass("li-a-circle-red").addClass("li-a-circle-black");	
					$(".rollBody ul li").eq($(this).index()-1).slideUp(100,function() {
						clearInterval();
						index = $(this).index();
						isclick = false;
					})
					setInterval('change()',8000);
			})
//			$(".progress-bar-ol ul li").on("click", function() {
//				clearInterval();
//				isclick = true;
//				$(this).eq(index).addClass("li-a-circle-red").siblings().removeClass("li-a-circle-red").addClass("li-a-circle-black");
//				$(".rollBody ul li").eq($(this).index()).fadeIn(function(){
//					clearInterval();
//					index = $(this).index();
//				}), function() {
//					isclick = false;
//					setInterval('change()',8000);
//				}
//			})
			function myShow(){
			
//				使图片每隔1秒淡出一张图片
				$(".rollBody ul li").eq(index).fadeTo(1000,0.9).siblings().fadeOut();
			}
			setInterval("change()",8000);//每隔8秒调用一次change()函数
			
			//循环函数
			function change(){	
				if(!isclick){
					
					index++; //下标加一   加载下一张图片
					//判断index是否和图片数相等   如果相等index=0；				
					if(index == $(".rollBody ul li").size()){
						index = 0;				
					}
					//根据index使小标签实现相应的效果
					$(".progress-bar-ol ul li").eq(index).addClass("li-a-circle-red").siblings().removeClass("li-a-circle-red").addClass("li-a-circle-black");	
					myShow();
					//点击小标签   控制图片显示
				}else{
					clearInterval();
				}
				
			}
			//划过图片显示图标
////			var isMouseover = false;
			$(".rollBody,ul,li,.progress-bar-ol,ul,li").on("mouseover", function() {
//				isMouseover = true;
//			
				$(".pagechange-ol .prev").animate({left:40},200).mouseover(function() {
					$(this).addClass("actionp");
					$(this).click(function() {
						if(index==0)
						{
							index = 7;
						}
						
						index--;
						console.log(index);
						$(".progress-bar-ol ul li").eq(index).addClass("li-a-circle-red").siblings().removeClass("li-a-circle-red").addClass("li-a-circle-black");
					})
					
				});
				$(".pagechange-ol .next").animate({right:83},200).mouseover(function() {
					$(this).addClass("actionn");
					
				});
				
//				isMouseover = false;
//			}, function() {
////				isMouseover = false;
//				$(".pagechange-ol .prev").on("mouseover", function() {
//					$(this).css("background","url(../img/lunbo/bg_direction_nav.png) 0 70");
//				} ,function(){
//					$(this).click(function(){
//						clearInterval();
//						index--;
//						if(index == 0){
//							index = 7;
//						}
//						setInterval("change()",8000);
//						
//					})
//				});
//				$(".pagechange-ol .next").animate({right:83,display:'block'},200);
			})
			
				$(".rollBody ul li").mouseout(function() {
					$(".pagechange-ol .prev").animate({left:-40,display:'none'},200);
					$(".pagechange-ol .next").animate({right:0,display:'none'},200);
				})
})
