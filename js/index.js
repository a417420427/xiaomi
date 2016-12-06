$(function(){
	var obj = {
		mainNav:$('.main-nav'),
		tapList:$('.head-tap .hd-tap-list'),
		targetLi:$('.main-nav>li'),
		headTap:$('.head-tap'),
		init:function(){
			this.taps();
			this.leav();
			
		},
		taps:function(){
			var that=this ;
			this.targetLi.mouseenter(function(){
				var index = $(this).index();
				if(index<that.tapList.length){
					that.tapList.eq(index).show().siblings().hide().parents('.head-tap').slideDown();
				}
			})
		},
		leav:function(){
			var that = this ;
			this.tapList.mouseleave(function(){
				var tnow = $(this) ;
				that.headTap.slideUp(function(){
					tnow.hide();
				})
			})
		}
	}
	obj.init()
})