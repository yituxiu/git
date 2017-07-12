$(function (){
			var L=$(".div_img").find("img").eq(0).offset().left;
				$(".rolling").css({"left":L+"px"});
				$(window).resize(function (){ 
				L=$(".div_img").find("img").eq(0).offset().left;
				//console.log(M)
				$(".rolling").css({"left":L+"px"});
				})	
			var Times=null;
			var W=0;
				Times=setInterval(F_interval,60)	
			//$(window).resize(function (){  W=$(".parent_rolling").height(); })				
			var C=Math.ceil($(".rolling").children("div").eq(0).children().length/3);
				$(".rolling").children("div").eq(0).clone().appendTo(".rolling")
				$(".rolling").mouseover(function (){
					clearInterval(Times)	
				}).mouseout(function (){Times=setInterval(F_interval,60);})
			function F_interval(){W-=1;
				$(".rolling").css({"top":F_rolling(W)+"px"});		
				}	
				function F_rolling(i){
					if(i<= -(28*C)){
					W=0}
					return i		
				}	
			
			var num=220;
			var times=null;
			var time=null;
			var flag=true;
			var _this;			
			$(".div_img").mouseenter(function (){
				$(this).find("p").css({"color":"gray"})
				clearInterval(times);
				_this=$(this).find("img");
				times=setInterval(function (){
				num++;
				_this.css({"transform":"rotateX("+F_rotate(num)+"deg)"});						
				},3);					
				}).mouseleave(function (){
				num=260;
				$(this).find("p").css({"color":"#999"})
				_this.css({"transform":"rotateX(360deg)"})	;
				clearInterval(times);	
			})	
			function F_rotate(i){
					if(i>=360){num=0;
						clearInterval(times);
						}
						return i;}
			
//			
})
