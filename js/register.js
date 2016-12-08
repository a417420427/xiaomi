$(function(){
	var verify = {
		user:$('#register .form-user'),
		pass:$('#register .form-passport'),
		confirm:$('#register .form-confirm'),
		phone:$('#register .form-phone'),
		indentify:$('#register .form-indentify'),
		phonecode:$('#register .form-phonecode'),
		btn:$('#register .form-btn'),
		flag:true,
		init:function(){
			var regUser = /^[a-zA-Z]\w{5,15}$/ ;
			var contentUser = '用户名格式错误' ;
			var regPass = /^\w{7,16}$/ ;
			var contentPass = '密码格式错误';
			this.tipsC(this.user,contentUser,regUser);
			this.tipsC(this.pass,contentPass,regPass) ;
			this.confirmTes();
			this.codeClick();
			this.indentifyTes();
			//this.tipsC(this.);
			this.tipsC(this.indentify);
			this.tipsC(this.phone) ;
			//this.tipsC(this.phonecode);
			//this.userTes();
			this.btnTes();
			this.checkuser();
			
		},
		tipsC:function(select,content,reg){
			var thisN = this ;
			var that=select ;
			var length = arguments.length;
			var tesCont = select.find('input') ;
			tesCont.focus(function(){
				that.find('.inner').hide();
				that.next().find('.error').hide();
				that.next().find('.tips').show();
			})
			tesCont.blur(function(){
				var value = $(this).val();
				if(value.trim()==''){
					that.next().find('.tips').hide();
					that.next().find('.error').show();
					thisN.flag = false ;
					return ;
				}
				if(length==3){
					console.log(that) ;
					if(!reg.test(value)){
						that.next().find('.error').html('<i class="ic"></i>'+content).show();
						that.next().find('.tips').hide();
						thisN.flag = false ;
					}else{
						that.next().find('.tips').hide();
						thisN.flag = true ;
					}
					var ck = $.cookie('xiaomi') ;
					usN = JSON.parse(ck).user ;
					if(that.find('#user-al')!=undefined){
						if(value==usN){
							that.next().find('.error').html('<i class="ic"></i>用户名已存在').show();
						}
					}
				}
			})
		},
		checkuser:function(){
			
		},
		confirmTes:function(){
			this.tipsC(this.confirm);
			var thisN = this
			var vale = this.pass.find('.check-item');
			
			this.confirm.find('.check-item').blur(function(){
				var conf = $(this).val() ;
				val = vale.val();
				if(val != conf){
					thisN.confirm.next().find('.error').html('<i class="ic"></i>两次密码不一致').show();
					thisN.confirm.next().find('.tips').hide();
					thisN.flag = false ;
				}else{
					thisN.confirm.next().find('.error').hide();
					thisN.confirm.next().find('.tips').hide();
					thisN.flag = true ;
				}
			})
		},
		codeMake:function(){
			var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
			var content = '' ;
			for(i=1 ; i<=4 ; i++){
				var m = parseInt(Math.random()*str.length) ;
				content += str.substr(m,1);
			}
			return content ;
		},
		codeClick:function(){
			var that = this ;
			var inne = this.codeMake() ;
			var cd = this.indentify.find('.code') ;
			cd.html(inne) ;
			cd.click(function(){
				var inne = that.codeMake() ;
				var cd = that.indentify.find('.code') ;
				cd.html(inne) ;
			})
		},
		indentifyTes:function(){
			var that = this ;
			this.indentify.find('.check-item').blur(function(){
				var value = $(this).val().toUpperCase() ;
				var compare = that.indentify.find('.code').html() ;
				console.log(value,compare)
				if(value != compare){
					that.indentify.next().find('.error').html('<i class="ic"></i>验证码错误').show();
					that.indentify.next().find('.tips').hide();
					that.flag = false ;
				}else{
					that.indentify.next().find('.tips').hide();
					that.indentify.next().find('.error').hide();
					that.flag = true ;
				}
			})
		},
		btnTes:function(){
			var that = this ;
			this.btn.find('.btn-register').click(function(){
				var userN = that.user.find('.check-item').val() ;
				var passN = that.pass.find('.check-item').val() ;
				var phoneN = that.phone.find('.check-item').val() ;
				var confirmN = that.confirm.find('.check-item').val() ;
				var phonecodeN = that.phonecode.find('.check-item').val() ;
				var indentifyN = that.indentify.find('.check-item').val();
				if(!that.flag||passN==''||userN==''||phoneN==''||confirmN==''||phonecodeN==''||indentifyN==''){
					return false;
				}
				var obj = {
					user:userN,
					pass:passN,
					phone:phoneN
				}
				var objC = JSON.stringify(obj) ;
				$.cookie('xiaomi',objC,{path:'/',expires:365}) ;
			})
			
		},
		getCookie:function(){
			
		},
		setCookie:function(){
			
		}
		
	}
	verify.init();
	console.log($.cookie('xiaomi')) ;
	
	
})