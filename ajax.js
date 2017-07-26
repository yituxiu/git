function ajax(url,success,fnFaild){
		if(window.XMLHttpRequest){
						var Ajax=new XMLHttpRequest();					
				}else{
						var Ajax=new ActiveXObject("Microsoft.XMLHTTP");
				}			
			Ajax.open("GET",url+"?t="+new Date().getTime(),true);		
			Ajax.send();
			Ajax.onreadystatechange=function (){
				if(Ajax.readyState==4){
					if(Ajax.status==200){
						success(Ajax.responseText)
					}else{
						if(fnFaild){
							fnFaild(Ajax.status)
						}
					}
				}
			}
	/*
			 0:（未初始化），还没有调用open方法；
			 1：（载入），已经调用send()方法，正在发送请求
			 2：（载入完成）send()方法完成，已经收到全部响应内容
			 3：（解析）正在解析响应内容
			 4：（完成）响应内容解析完成，可以在客户端调用了	
			 ajax("a.txt",function (res){console.log(res)},function (status){console.log(status)}) //使用方法
	*/	
}
