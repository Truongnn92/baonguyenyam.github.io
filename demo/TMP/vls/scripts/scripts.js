// JavaScript Document
$(document).ready(function(){
	// Banner Home Page
	var listSlide = $(".banner .imgs img");
	
	var desc = $(".banner .desc");
	var listDesc = desc.find(".item");
	
	var currentSlide = 0;
	
	$(listSlide[currentSlide]).show();
	$(listDesc[currentSlide]).show();
	
	slideTimeout = setInterval(function(){runSlide();}, 4000);
	
	function runSlide() {
		$(listSlide[currentSlide]).fadeOut(700);
		$(listDesc[currentSlide]).fadeOut(700);
		desc.hide();
		desc.css({'bottom': "-60px"});
		currentSlide += 1;
		if(currentSlide > listSlide.length - 1) {
			currentSlide = 0;
		}
		$(listSlide[currentSlide]).fadeIn(700);
		desc.fadeIn();
		$(listDesc[currentSlide]).show();
		desc.animate({"bottom": "0px"},700);
	}
	
	slideContent.init('.home_list .slide',5000);
});

var slideContent = {
	el : '',
	index : 0,
	
	init : function(element,autotime){
		el = $(element);
		el.find('.item:first').addClass('active').show();
		el.find('.item:first .desc .box div').css({'left':0});
		
		el.find('.next').click(function(){
			slideContent.next();
		});
		
		el.find('.back').click(function(){
			slideContent.back();
		});
		
		setInterval(function(){slideContent.auto();},autotime);
	},
	
	next : function(){
		if(el.find('.next').is('.disabled'))
			return ;
		
		el.find('.back').removeClass('disabled');
		
		var i = slideContent.getIndex() + 1;
		
		if(i == (slideContent.getTotal() - 1)){
			el.find('.next').addClass('disabled');
		}
		
		slideContent.effect(i);
	},
	
	back : function(){
		if(el.find('.back').is('.disabled'))
			return ;
		
		el.find('.next').removeClass('disabled');
		
		var i = slideContent.getIndex() - 1;
		
		if(i == 0){
			el.find('.back').addClass('disabled');
		}
		
		slideContent.effect(i);
	},
	
	getIndex : function(){
		return el.find('.item').index(el.find('.item.active'));
	},
	
	getTotal : function(){
		return el.find('.item').size();
	},
	
	effect : function(index){
		var activeItem = el.find('.item.active');
		activeItem.find('img').fadeOut(500);
		activeItem.find('.desc .box div').animate({'left': "-" + (activeItem.find('.desc .box div').width() + 10) + "px" },"fast",function(){
			$(this).css({'left':(activeItem.find('.desc .box div').width() + 10) + "px"});
			activeItem.hide();
		});
		activeItem.removeClass('active');
		
		var newItem = el.find('.item').eq(index);
		newItem.addClass('active');
		newItem.fadeIn(500);
		newItem.find('img').fadeIn(500);
		newItem.find('.desc .box div').animate({'left': "-0px" });
		
	},
	
	auto : function(){

		slideContent.index = slideContent.getIndex() + 1;
		
		if(slideContent.index >= slideContent.getTotal()){
			slideContent.index = 0;
		}
		
		if(slideContent.index == 0 ){
			el.find('.back').addClass('disabled');
		} else {
			el.find('.back').removeClass('disabled');
		}
		
		if(slideContent.index < (slideContent.getTotal() - 1)){
			el.find('.next').removeClass('disabled');
		} else {
			el.find('.next').addClass('disabled');
		}
		
		slideContent.effect(slideContent.index);
	}
	
}