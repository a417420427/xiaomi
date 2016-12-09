
getUser = function(userN,passN){
	$(function(){
		var login = {
			user: $('.wrap-user'),
			pass: $('.wrap-pass'),
			erro: $('#login .error'),
			btn:$('#login .wrap-btn'),
			index:0,
			flag:true,
			init:function(){
				this.userTes();
				this.passTes();
				this.btnTes();
			},
			userTes:function(){
				var that = this ;
				var targe = this.user.find('.user') ;
				targe.on('input',function(){
					var value = $(this).val() ;
					for (i=0 ; i<userN.length ; i++) {
						if(value == userN[i]){
							$(this).next().html('');
							that.index = i ;
							that.flag=true ;
							return;
						}
						$(this).next().html('用户名不存在') ;
						that.flag = false ;
					}
				})
			},
			passTes(){
				var that = this ;
				var targe = this.pass.find('.passport') ;
				targe.blur(function(){
					var value = $(this).val() ;
					if(value == passN[that.index]){
						$(this).next().html('') ;
						that.flag=true ;
						return ;
					}
					$(this).next().html('密码错误') ;
					that.flag = false ;
				})
			},
			btnTes:function(){
				var that = this ;
				var targe = this.btn.find('.btn') ;
				targe.click(function(){
					var valUser = that.user.find('.user').val();
					var valPass = that.pass.find('.passport').val();
					console.log(valPass,valUser,that.flag) ;
					if(that.flag==false||(valUser=='')||(valPass=='') ){
						return ;
					}
					window.location.href="index.html";
					$.cookie(valUser,valPass,{path:'/',expires:30}) ;
				})
			}
		}
		login.init() ;
		
	})
	
	
	console.log(userN,passN)
}