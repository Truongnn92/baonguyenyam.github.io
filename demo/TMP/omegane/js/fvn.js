// JavaScript Document
ddsmoothmenu.init({
	mainmenuid: "mainmenu", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'ddsmoothmenu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
});

$(document).ready(function(){
	/* Slideshow  */
	var $windowHeight = $(window).height() ;
	
	if($(window).width() < 1024){
		$('#prevslide,#nextslide').hide();
	}

	
	var height = $windowHeight ;
	if(height < 677) height = 677;
	height = height - 90;
	$('.section,.section .block_left,.section .block_right').height(height);
	
	/* Dummy page */
	$('#dummy .section').height($windowHeight);
	
	$(window).resize(function(){
		/* Home */
		height =  $windowHeight ;
		if(height < 677) height = 677;
		height = height - 90;
		$('.section,.section .block_left,.section .block_right').height(height);
		
		/* Dummy page */
		height = $windowHeight;
		if(height < 768) height = 768;
		$('#dummy .section').height(height);
		
		/* Button slide */
		if($(window).width() < 1024){
			$('#prevslide,#nextslide').hide();
		} else {
			$('#prevslide,#nextslide').show(); 
		}
	});

	
	
	/* Page child content auto height  */
	
	var pageHeight =$windowHeight ;
	if(pageHeight < 677){
			pageHeight = 677;
	}
	pageHeight = pageHeight - 210;
	$('#product .section .main').css({'height':pageHeight});
	$('#product .section .overlay_2,#product .section .content,#product .section #scrollbarthin').height(pageHeight-20);
	
	$(window).resize(function(){
		var pageHeight = $windowHeight ;
		if(pageHeight < 677){
			pageHeight = 677;
		}
		pageHeight = pageHeight - 210;
		$('#product .section .main').css({'height':pageHeight});
		$('#product .section .overlay_2,#product .section .content,#product .section #scrollbarthin').height(pageHeight-20);
	});
	
	/* Coupons */
	/*
	var pageHeight =$windowHeight ;
	if(pageHeight < 677){
			pageHeight = 677;
	}
	pageHeight = pageHeight - 210;
	$('#coupons .section .main').css({'height':pageHeight});
	$('#coupons .section .overlay_2,#coupons .section .content,#coupons .section #scrollbarthin').height(pageHeight-20);
	$(window).resize(function(){
		var pageHeight = $windowHeight ;
		if(pageHeight < 677){
			pageHeight = 677;
		}
		pageHeight = pageHeight - 210;
		$('#coupons .section .main').css({'height':pageHeight});
		$('#coupons .section .overlay_2,#coupons .section .content,#coupons .section #scrollbarthin').height(pageHeight-20);
	});
	*/
	$('#scrollbarthin').scrollbar();
	
	/* Map *//*
	var height = $windowHeight ;
	if(height < 677) height = 677;
	height = height - 210;
	$('#map').height(height);
	$('#map .content').height(height-20);
	$(window).resize(function(){
		height =  $windowHeight ;
		if(height < 677) height = 677;
		height = height - 210;
		$('#map').height(height);
		$('#map .content').height(height-20);
	});
	
	$(window).scroll(function () {
			var mapTop =  $('#map').position();
			console.log(mapTop);
			
	});
	*/
});

function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value + "; path=/";
}

function getCookie(c_name)
{
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1)
	  {
	  c_start = c_value.indexOf(c_name + "=");
	  }
	if (c_start == -1)
	  {
	  c_value = null;
	  }
	else
	  {
	  c_start = c_value.indexOf("=", c_start) + 1;
	  var c_end = c_value.indexOf(";", c_start);
	  if (c_end == -1)
	  {
	c_end = c_value.length;
	}
	c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}
