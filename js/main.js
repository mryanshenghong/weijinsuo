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


	$('[data-toggle="tooltip"]').tooltip();
	

	$(window).on('resize',resize).trigger('resize');


	// 控制标签页ul>li的宽度
	var $ulContainer = $('.nav-tabs');
	// 获取所有li宽度的和
	var liWidth = 20; //初始化设置20px因为 nav-tabs 本来又一个 padding-left = 20px的值
	$ulContainer.children('li').each(function(index,element){
		// 原生js更加高效
		liWidth += element.clientWidth;
	});

	// 拿到所有li和传给承载ul容器
	// 判断当前ul的宽度是否超出了屏幕，超出就设置横向滚动
	if(liWidth>$(window).width()){
		$ulContainer.css('width',liWidth);
	}

	//news a标签注册点击事件
  // a点击注册事件
  var $newTitle = $('.news-title');
  $('#news .nav-pills a').on('click', function() {
    // 获取当前点击元素
    var $this = $(this);
    // 获取对应的title值
    var title = $this.data('titile');
    // 将title设置到相应的位置
    $newTitle.text(title);
  });
	

 // 轮播图手势滑动

 // $('#main_ad').carousel('prev');
 // $('#main_ad').carousel('next');
 	var $carousels = $('.carousel');
 	var startX;
 	var moveX;
	 $carousels.on('touchstart',function(e){
	 	startX=e.originalEvent.touches[0].clientX;
	 })

	 $carousels.on('touchmove',function(e){
	 	moveX=e.originalEvent.touches[0].clientX;
	 })

	 $carousels.on('touchend',function(e){
		 	// 触摸结束比大小
		 	var distance = startX-moveX;
		 	if(distance>60){
		 		$(this).carousel('next');
		 	}else if(distance<-60){
		 		$(this).carousel('prev');
		 	}else{

		 	}
	 })
});