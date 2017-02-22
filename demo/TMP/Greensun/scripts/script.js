document.createElement("article");
document.createElement("footer");
document.createElement("header");
document.createElement("nav");
document.createElement("aside");
document.createElement("section");

ddsmoothmenu.init({mainmenuid: "header_nav",orientation: 'h',classname: 'ddsmoothmenu',contentsource: "markup"});

$(document).ready(function(){
	
	slideContent.init('.hot_news .items',5000);
	slidePartners.init('.partners',5000);
	slideBanners.init('.banner',5000);
});

var slideContent = {
	el : '',
	index : 0,
	
	init : function(element,autotime){
		slideContent.el = $(element);
		slideContent.el.find('li:first').addClass('active').css({'top':0}).show();
		
		if(slideContent.getTotal() > 1) {
			slideContent.el.parents('.hot_news').find('.next').click(function(){
				slideContent.next();
			});
			
			slideContent.el.parents('.hot_news').find('.prev').click(function(){
				slideContent.back();
			});
			
			setInterval(function(){slideContent.auto();},autotime);
		} else {
			slideContent.el.parents('.hot_news').find('.prev').addClass('disabled');
			slideContent.el.parents('.hot_news').find('.next').addClass('disabled');
		}
	},
	
	next : function(){
		if(slideContent.el.parents('.hot_news').find('.next').is('.disabled'))
			return ;
		
	
		slideContent.el.parents('.hot_news').find('.prev').removeClass('disabled');
		
		var i = slideContent.getIndex() + 1;
		
		if(i == (slideContent.getTotal() - 1)){
			slideContent.el.parents('.hot_news').find('.next').addClass('disabled');
		}
		
		slideContent.effect(i,'next');
	},
	
	back : function(){
		if(slideContent.el.parents('.hot_news').find('.prev').is('.disabled'))
			return ;
		
		slideContent.el.parents('.hot_news').find('.next').removeClass('disabled');
		
		var i = slideContent.getIndex() - 1;
		
		if(i == 0){
			slideContent.el.parents('.hot_news').find('.prev').addClass('disabled');
		}
		
		slideContent.effect(i,'back');
	},
	
	getIndex : function(){
		return slideContent.el.find('li').index(slideContent.el.find('li.active'));
	},
	
	getTotal : function(){
		return slideContent.el.find('li').size();
	},
	
	effect : function(index,type){
		if(type == 'next') {
			var activeItem = slideContent.el.find('li.active');
			activeItem.animate({top: '-29px'},500,function(){});
			activeItem.removeClass('active');
			
			var newItem = slideContent.el.find('li').eq(index);
			newItem.css({top: '29px'});
			newItem.animate({top: '0px'},500);
			newItem.addClass('active');
		} else {
			var activeItem = slideContent.el.find('li.active');
			activeItem.animate({top: '29px'},500,function(){});
			activeItem.removeClass('active');
			
			var newItem = slideContent.el.find('li').eq(index);
			newItem.css({top: '-29px'});
			newItem.animate({top: '0px'},500);
			newItem.addClass('active');
		}
		
	},
	
	auto : function(){
	
		slideContent.index = slideContent.getIndex() + 1;
	
		if(slideContent.index >= slideContent.getTotal()){
			slideContent.index = 0;
		}
		
		if(slideContent.index == 0 ){
			slideContent.el.parents('.hot_news').find('.prev').addClass('disabled');
		} else {
			slideContent.el.parents('.hot_news').find('.prev').removeClass('disabled');
		}
		
		if(slideContent.index < (slideContent.getTotal() - 1)){
			slideContent.el.parents('.hot_news').find('.next').removeClass('disabled');
		} else {
			slideContent.el.parents('.hot_news').find('.next').addClass('disabled');
		}
		
		slideContent.effect(slideContent.index,'next');
		
	}
	
};

var slidePartners = {
	el : '',
	index : 0,
	
	init : function(element,autotime){
		slidePartners.el = $(element);
		slidePartners.el.find('.item:first').addClass('active').css({'top':0}).show();

		if(slidePartners.getTotal() > 1) {
			slidePartners.el.find('.next').click(function(){
				slidePartners.next();
			});
			
			slidePartners.el.find('.prev').click(function(){
				slidePartners.back();
			});
			
			setInterval(function(){slidePartners.auto();},autotime);
		} else {
			slidePartners.el.find('.prev').addClass('disabled');
			slidePartners.el.find('.next').addClass('disabled');
		}
	},
	
	next : function(){
		if(slidePartners.el.find('.next').is('.disabled'))
			return ;
		
	
		slidePartners.el.find('.prev').removeClass('disabled');
		
		var i = slidePartners.getIndex() + 1;
		
		if(i == (slidePartners.getTotal() - 1)){
			slidePartners.el.find('.next').addClass('disabled');
		}
		
		slidePartners.effect(i,'next');
	},
	
	back : function(){
		if(slidePartners.el.find('.prev').is('.disabled'))
			return ;
		
		slidePartners.el.find('.next').removeClass('disabled');
		
		var i = slidePartners.getIndex() - 1;
		
		if(i == 0){
			slidePartners.el.find('.prev').addClass('disabled');
		}
		
		slidePartners.effect(i,'back');
	},
	
	getIndex : function(){
		return slidePartners.el.find('.item').index(slidePartners.el.find('.item.active'));
	},
	
	getTotal : function(){
		return slidePartners.el.find('.item').size();
	},
	
	effect : function(index,type){
		if(type == 'next') {
			var activeItem = slidePartners.el.find('.item.active');
			activeItem.animate({top: '-85px'},500,function(){});
			activeItem.removeClass('active');
			
			var newItem = slidePartners.el.find('.item').eq(index);
			newItem.css({top: '85px'});
			newItem.animate({top: '0px'},500);
			newItem.addClass('active');
		} else {
			var activeItem = slidePartners.el.find('.item.active');
			activeItem.animate({top: '85px'},500,function(){});
			activeItem.removeClass('active');
			
			var newItem = slidePartners.el.find('.item').eq(index);
			newItem.css({top: '-85px'});
			newItem.animate({top: '0px'},500);
			newItem.addClass('active');
		}
		
	},
	
	auto : function(){

		slidePartners.index = slidePartners.getIndex() + 1;
	
		if(slidePartners.index >= slidePartners.getTotal()){
			slidePartners.index = 0;
		}
		
		if(slidePartners.index == 0 ){
			slidePartners.el.find('.prev').addClass('disabled');
		} else {
			slidePartners.el.find('.prev').removeClass('disabled');
		}
		
		if(slidePartners.index < (slidePartners.getTotal() - 1)){
			slidePartners.el.find('.next').removeClass('disabled');
		} else {
			slidePartners.el.find('.next').addClass('disabled');
		}

		slidePartners.effect(slidePartners.index,'next');
		
	}
	
};

var slideBanners = {
	el : '',
	index : 0,
	
	init : function(element,autotime){
		slideBanners.el = $(element);
		slideBanners.el.find('.item:first').addClass('active').show();
		slideBanners.el.find('.d-item:first').addClass('active').show();
		
		if(slideBanners.getTotal() > 1) {
			slideBanners.el.parent().find('.next').click(function(){
				slideBanners.next();
			});
			
			slideBanners.el.parent().find('.prev').click(function(){
				slideBanners.back();
			});
			
			setInterval(function(){slideBanners.auto();},autotime);
		} else {
			slideBanners.el.parent().find('.prev').addClass('disabled');
			slideBanners.el.parent().find('.next').addClass('disabled');
		}
	},
	
	next : function(){
		if(slideBanners.el.parent().find('.next').is('.disabled'))
			return ;
		
	
		slideBanners.el.parent().find('.prev').removeClass('disabled');
		
		var i = slideBanners.getIndex() + 1;
		
		if(i == (slideBanners.getTotal() - 1)){
			slideBanners.el.parent().find('.next').addClass('disabled');
		}
		
		slideBanners.effect(i,'next');
	},
	
	back : function(){
		if(slideBanners.el.parent().find('.prev').is('.disabled'))
			return ;
		
		slideBanners.el.parent().find('.next').removeClass('disabled');
		
		var i = slideBanners.getIndex() - 1;
		
		if(i == 0){
			slideBanners.el.parent().find('.prev').addClass('disabled');
		}
		
		slideBanners.effect(i,'back');
	},
	
	getIndex : function(){
		return slideBanners.el.find('.item').index(slideBanners.el.find('.item.active'));
	},
	
	getTotal : function(){
		return slideBanners.el.find('.item').size();
	},
	
	effect : function(index,type){
			
			var activeItem = slideBanners.el.find('.item.active');
			activeItem.fadeOut(1000);
			activeItem.removeClass('active');
			var activeDescItem = slideBanners.el.find('.d-item.active');
			activeDescItem.fadeOut(1000);
			activeDescItem.removeClass('active');
			
			var newItem = slideBanners.el.find('.item').eq(index);
			newItem.fadeIn(1000);
			newItem.addClass('active');
			var newDescItem = slideBanners.el.find('.d-item').eq(index);
			newDescItem.fadeIn(1000);
			newDescItem.addClass('active');
		
	},
	
	auto : function(){
	
		slideBanners.index = slideBanners.getIndex() + 1;
	
		if(slideBanners.index >= slideBanners.getTotal()){
			slideBanners.index = 0;
		}
		
		if(slideBanners.index == 0 ){
			slideBanners.el.parent().find('.prev').addClass('disabled');
		} else {
			slideBanners.el.parent().find('.prev').removeClass('disabled');
		}
		
		if(slideBanners.index < (slideBanners.getTotal() - 1)){
			slideBanners.el.parent().find('.next').removeClass('disabled');
		} else {
			slideBanners.el.parent().find('.next').addClass('disabled');
		}
	
		slideBanners.effect(slideBanners.index,'next');
		
	}
	
};

