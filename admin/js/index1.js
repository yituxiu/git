$(function (){
			var Times=null;
			var W=0;
				Times=setInterval(F_interval,60)	
			//$(window).resize(function (){  W=$(".parent_rolling").height(); })				
			var C=Math.ceil($(".rolling").children("div").eq(0).children().length/3);
				$(".rolling").children("div").eq(0).clone().appendTo(".rolling")
				$(".rolling").mouseover(function (){
					clearInterval(Times)	
				}).mouseout(function (){Times=setInterval(F_interval,70);})
			function F_interval(){W--;$(".rolling").css({"top":F_rolling(W)+"px"});}	
			function F_rolling(i){if(i<= -(28*C)){W=0}return i;}		
			//
			var num=250;
			var nums=250;
			var times=null;
			var time=null;
			//var _this=null;	
			var _this=$(".div_img").find("img");
			var _t=null;
			var flag=null;
			var times_disabled=null;
			var proto_src=null;
			$(".div_img").mouseenter(function (){
						$(this).find(".img_shadow").css({"background":"none"});
						 _t=$(this);
						setTimeout(function (){
						_t.find(".img_shadow").css({"background":"url(images/shadow.png)"});	
							},200)
						 clearInterval(times);  //首先关闭定时器
						 _this=$(this).find("img");//找到img对象
						
						 proto_src=_this.attr("src"); //保存禁用对象图片路径
						 ///禁用对象更换图片路径
						 flag=$(this).data("disabled");
						 if(flag==true){
						 _this=$(this).find("img").attr("src","images/no-power.png");
						 $(this).css({"cursor":"default"})
						 }
						 ///禁用对象更换图片路径
						 times=setInterval(function (){
						 num++;
						 _this.css({"transform":"rotateY("+F_rotate(num)+"deg)"});		
						 },3)
				
			}).mouseleave(function (){
						num=250;					
						if(flag==true){ _this=$(this).find("img").attr("src",proto_src);}  //翻转回原本的图片						
						clearInterval(times);
						_this.css({"transform":"rotateY(360deg)"})	;
							
			})

			function F_rotate(i){
					if(i>=360){num=250; clearInterval(times);}return i;}	
			
			
			
			
			
			
			
			$('.ou_li li').click(function (){
			$('.ou_li li').removeClass("active");	
			$('.ou_li li i').removeClass("active_i");	
			$(this).addClass("active").find("i").addClass("active_i")	;
			
			})
			
			//重置main_box margin
			var L=$(".div_img").find("img").eq(0).offset().left;
				$(".main_box").css({"margin":"auto "+L+"px"});
				//$(".rolling").css({"left":100+"px"});
				$(".yunzuo").css({"margin":"30px "+L+"px"});
				$(window).resize(function (){ 
				L=$(".div_img").find("img").eq(0).offset().left;
				$(".main_box").css({"margin":"auto "+L+"px"});
				$(".yunzuo").css({"margin":"30px "+L+"px"});
				})	
//			//重置main_box margin
})
