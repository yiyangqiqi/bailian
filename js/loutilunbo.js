			var index1 = 0//计数用来轮播图片
//			var isclick = false;
			myShow1();
			function myShow1(){
				//使图片从右边划过
				if(index1>0){
					
					$(".floor_slidew ul li").eq(index1-1).animate({left:-304},500);
				
				}
				
				$(".floor_slidew ul li").eq(index1).animate({left:0},500);
//				console.log(index);
				
			}
			setInterval("change1()",1500);
			function change1(){
				index++;
//				
				if(index1 == $(".floor_slidew ul li").size())
				{
					index1 = 0;
				}
//				if(index>0){
					$(".floor_slidew ul li").eq(index1-1).siblings().css({left:304});
//				}
				myShow1();
				
			}
			