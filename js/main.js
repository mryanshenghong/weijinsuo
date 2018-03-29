$(function(){
	//onload
	
	function resize(){
		//get window width
		var windowWidth = $(window).width();

		var isSm = windowWidth<768;

		//for loop dom object 
		$('#main_ad  .carousel-inner   .item').each(function(i,item){

			var $item = $(item); //DOM、转换成jquery对象
			var imageSrc = isSm ? $item.data('image-xs') : $item.data('image-lg');

			
			// $item.css('backgroundImage', 'url("'+imageSrc+'")');
			//需要小图时图片等比例缩放 使用img方式展现更好
			if(isSm){
				$item.css('backgroundImage', 'none');
				$item.html('<img src="'+imageSrc+'" alt="" />');
			}else{
				$item.empty();
				$item.css('backgroundImage', 'url("'+imageSrc+'")');
			}

		});
	}

	
	$(window).on('resize',resize).trigger('resize');
});