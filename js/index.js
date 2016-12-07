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
	obj.init() ;
	
	//banner区域选项卡
	
	var banTap = {
		sideNav:$('.banner .sd-nav-item'),
		childTap:$('.banner .child-tap'),
		tapWrap:$('.banner .ban-tap-wrap'),
		init:function(){
			this.sideTap();
			this.dispare();
			console.log()
		},
		sideTap:function(){
			var that = this ;
			this.sideNav.mouseenter(function(){
				var index = $(this).index();
				that.tapWrap.show();
				that.childTap.eq(index).show().siblings().hide();
			})
		},
		dispare:function(){
			var that = this ;
			this.childTap.mouseleave(function(){
				$(this).hide();
			})
		}
		
	}
	banTap.init();
	
	
	/*banner 区域轮播*/
	var banCaro = {
		caroList:$('.ban-carousel-list'),
		caroItem:$('.ban-carousel-item'),
		dotWrap:$('.ban-dot-wrap'),
		caroWrap:$('.ban-carousel-wrap'),
		wid:parseInt($('.ban-carousel-item').eq(0).css('width')),
		index:0,
		arrLeft:$('.ban-dot-arrL'),
		arrRight:$('.ban-dot-arrR'),
		timer:null,
		dotItem:null,
		init:function(){
			this.dot();
			this.create();
			this.move();
			this.stopC();
			this.dotClick();
			this.leftClick();
			this.rightClick();
			
		},
		create:function(){
			var itemNew = this.caroItem.eq(0).clone();
			this.caroList.append(itemNew);
			this.caroItem = $('.ban-carousel-item');
		},
		dot:function(){
			var len = this.caroItem.length;
			var content = '';
			for (i=0 ; i<len ; i++) {
				content += '<span></span>'
			}
			this.dotWrap.html(content);
			this.dotItem = this.dotWrap.find('span');
			this.dotItem.eq(0).addClass('current');
		},
		change:function(){
			var len = this.caroItem.length;
			
			var that = this;
			if(this.index>=len){
				this.index = 1 ;
				this.caroList.css({
					marginLeft:0
				})
				this.dotItem.eq(0).addClass('current').siblings().removeClass('current');
			}
			if(this.index<=-1){
				this.index = len-2
				this.caroList.css({
					marginLeft: -this.wid*(len-1)
				})
				this.dotItem.eq(len-2).addClass('current').siblings().removeClass('current');
			}
			
			this.caroList.stop(true).animate({
				marginLeft:-that.wid*that.index
			},function(){
				if(that.index==len-1){
					that.dotItem.eq(0).addClass('current').siblings().removeClass('current');
				}else{
					that.dotItem.eq(that.index).addClass('current').siblings().removeClass('current');
				}
				
			})
			
		},
		move:function(){
			var that = this ;
			this.timer = setInterval(function(){
				that.index++
				that.change() ;
			},1500)
		},
		stopC:function(){
			var that = this ;
			this.caroWrap.mouseenter(function(){
				clearInterval(that.timer);
			})
			this.caroWrap.mouseleave(function(){
				that.move();
			})
			
		},
		dotClick:function(){
			var that = this ;
			this.dotItem.click(function(){
				that.index = $(this).index();
				that.change();
			})
		},
		leftClick:function(){
			var that = this ;
			this.arrLeft.click(function(){
				that.index --  ;
				that.change();
			})
		},
		rightClick:function(){
			var that = this ;
			this.arrRight.click(function(){
				that.index ++ ;
				that.change();
			})
		}
	}
	banCaro.init();
	
	//购物车显示
	var cart = $('.tp-cart') ;
	var cartIn = $('.tp-ct-inner') ;
	var cartP = cartIn.find('p');
	cart.mouseenter(function(){
		cartIn.css({display:'block'}).animate({
			height:98,
			lineHeight:98
		},100,function(){
			cartP.css({display:'block'})
		})
	})
	cart.mouseleave(function(){
		cartP.css({display:'none'})
		cartIn.animate({
			height:0,
			lineHeight:0,
		},100)
	})
	
	//star 区域左右滚动
	var starRight = $('.star-rt');
	var starLeft = $('.star-lef') ;
	var starWrap = $('.sum-star-content>ul');
	starRight.click(function(){
		starWrap.animate({
			marginLeft:-1226
		})
		$(this).addClass('current').siblings().removeClass('current');
	})
	starLeft.click(function(){
		starWrap.animate({
			marginLeft:0
		})
		$(this).addClass('current').siblings().removeClass('current');
	})
	
	//顶部tip颜色
	var topTips = $('.top-tips') ;
	
	for (i=0 ; i<topTips.length ; i++) {
		if(topTips.eq(i).html()=="新品"){
			topTips.eq(i).css({
				background:'#83c44e'
			})
		}else if(topTips.eq(i).html()=="有赠品"){
			topTips.eq(i).css({
				background:'#2196f3'
			})
		}else if(topTips.eq(i).html()=="免邮费"){
			topTips.eq(i).css({
				background:'#f60'
			})
		}	
	}
	
	//match 区域选项卡
	var catItem = $('.cat-item') ;
	var matGoods = $('.mn-mat-content .right');
	
	catItem.mouseenter(function(){
		var index = $(this).index() ;
		$(this).addClass('current').siblings().removeClass('current') ;
		matGoods.eq(index).addClass('current').siblings().removeClass('current') ;
		console.log(index);
	})
	
	//recommand 区域左右滚动
	var comaRight = $('.com-rt');
	var comaLeft = $('.com-lef') ;
	var comaWrap = $('.mn-rcd-content>ul');
	comaRight.click(function(){
		comaWrap.animate({
			marginLeft:-1226
		})
		$(this).addClass('current').siblings().removeClass('current');
	})
	comaLeft.click(function(){
		comaWrap.animate({
			marginLeft:0
		})
		$(this).addClass('current').siblings().removeClass('current');
	})
	
	
	var otherCar = {
		book:{
			elem:$('.books.mn-oth-list'),
			index:0,
			dotItem:null,
			tapItem:null
			
		},
		app:{
			elem:$('.app.mn-oth-list'),
			index:0,
			dotItem:null,
			tapItem:null
		},
		theme:{
			elem:$('.theme.mn-oth-list'),
			index:0,
			dotItem:null,
			tapItem:null,
			index:0
		},
		game:{
			elem:$('.game.mn-oth-list'),
			index:0,
			dotItem:null,
			tapItem:null
		},
		dotItem:null,
		init:function(){
			this.createDot(this.book);
			this.createDot(this.app);
			this.createDot(this.theme);
			this.createDot(this.game);
			this.dotClick(this.app);
			this.dotClick(this.theme);
			this.dotClick(this.game);
			this.dotClick(this.book);
		},
		createDot:function(objL){
			var content = '' ;
			var dotwrap = objL.elem.find('.oth-dot-wrap') ;
			var themItem = objL.elem.find('.mn-oth-inner .to-obj-tap');
			for (i=0 ; i<themItem.length ; i++) {
				content += '<div class="item-wrap"><span class="oth-dot-item"></span></div>' ;
			}
			dotwrap.html(content);
			var dotItem = dotwrap.find('.item-wrap .oth-dot-item');
			dotItem.eq(0).addClass('current');
			
		},
		dotClick:function(objL){
			var that = this ;
			var mid = objL.elem ;
			var objN = objL;
			var lef = mid.find('.arr-small-lef');
			var dotItem = mid.find('.oth-dot-wrap .oth-dot-item');
			var rt = mid.find('.arr-small-rt');
			var length = mid.find('.mn-oth-inner .to-obj-tap').length ;
			var tapWrap = mid.find('.mn-oth-inner');
			
			mid.on('click','.oth-dot-wrap .item-wrap',function(){
				
				var index = $(this).index() ;
				tapWrap.animate({
					marginLeft:-296*index
				},function(){
					dotItem.eq(index).addClass('current').parent().siblings().find('.oth-dot-item').removeClass('current');
				})
			})
			if(objN.index==0){
				lef.addClass('default');
				rt.removeClass('default');
			}else if(objN.index==length-1){
				rt.addClass('default');
				lef.removeClass('default');
			}else{
				rt.removeClass('default');
				lef.removeClass('default');
				console.log(objN.index)
			}
			lef.click(function(){
				objN.index -- ;
				lef.removeClass('default');
				rt.removeClass('default');
				if(objN.index<=0){
					objN.index = 0 ;
					lef.addClass('default') ;
				}
				console.log(objN.index);
				tapWrap.animate({
					marginLeft:-296*objN.index
				},function(){
					dotItem.eq(objN.index).addClass('current').parent().siblings().find('.oth-dot-item').removeClass('current');
				})
			})
			rt.click(function(){
				lef.removeClass('default');
				rt.removeClass('default');
				objN.index ++ ;
				if(objN.index>=length){
					objN.index = length-1;
					rt.addClass('default') ;
				}
				console.log(objN.index);
				tapWrap.animate({
					marginLeft:-296*objN.index
				},function(){
					dotItem.eq(objN.index).addClass('current').parent().siblings().find('.oth-dot-item').removeClass('current');
				})
			})
			
		}
	}
	otherCar.init();
		
})


