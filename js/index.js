var ym = 'cbtwo.chuanmeiker.com:8082'; 
//var ym='localhost:8080/questionnaire';
var v_url = location.href.replace(/&/g, "-");

(function(){
//微信----------begin-----------------
	$.ajax({
		   type: "POST",
		   url: "http://"+ym+"/coreServlet?doAction=getSignatureYb&odUrl="+v_url,
		   dataType : 'jsonp',  
	       jsonp:"jsoncallback",
		   success: function(r){
		     if(r.success){
		    	 wx.config({

		    			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		    			appId: 'wxd93f576ce1cb605e', // 必填，公众号的唯一标识
		    			timestamp: r.timestamp, // 必填，生成签名的时间戳
		    			nonceStr: r.nonceStr, // 必填，生成签名的随机串
		    			signature: r.signature,// 必填，签名，见附录1
		    			 jsApiList: [ // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		    						'checkJsApi',
		    						'onMenuShareTimeline',
		    						'onMenuShareAppMessage',
		    						'openCard'
		    					  ]
		    		});
		    	  wx.ready(function(){								
		    	 	
		    	 	// 1 判断当前版本是否支持指定 JS 接口，支持批量判断
		    	 	  
		    	 		wx.checkJsApi({
		    	 		  jsApiList: [
		    	 			'getNetworkType',
		    	 			'previewImage',
		    	 			'onMenuShareTimeline',
		    	 			'onMenuShareAppMessage'
		    	 		  ],
		    	 		  success: function (res) {
		    	 		    //alert(JSON.stringify(res));
		    	 		  }
		    	 		});
		    	 	wx.onMenuShareAppMessage({
		    	 	  title: '影迷升级记',
		    	 	  desc: '想知道自己是不是真影迷？快来娱玩猜电影验明正身吧！',
		    	 	  link: r.share2FirendUrl,
		    	 	  imgUrl: 'http://yw.chuanmeike.com//images/wxlogo.png',
		    	 	  trigger: function (res) {
		    	 		// alert('用户点击发送给朋友');
		    	 	  },
		    	 	  success: function (res) {
		    	 		//alert('已分享');
		    	 	  },
		    	 	  cancel: function (res) {
		    	 		//alert('已取消');
		    	 	  },
		    	 	  fail: function (res) {
		    	 		// alert(JSON.stringify(res));
		    	 	  }
		    	 	});
		    	   // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
		    	 		wx.onMenuShareTimeline({
		    	 		  title: '影迷升级记',
				    	  desc: '想知道自己是不是真影迷？快来娱玩猜电影验明正身吧！',
		    	 		  link: r.share2FirendUrl,
		    	 		imgUrl: 'http://yw.chuanmeike.com//images/wxlogo.png',
		    	 		  trigger: function (res) {
		    	 		  },
		    	 		  success: function (res) {
		    	 		   // alert('已分享');
		    	 		  },
		    	 		  cancel: function (res) {
		    	 		  },
		    	 		  fail: function (res) {
		    	 		  }
		    	 		});
		    	 		wx.error(function(res){
		    	 		});
		    	 });
		    		
		     }
		   }
		});
//------------微信 end-------------
})();



