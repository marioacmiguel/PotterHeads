
//Fonte https://stackoverflow.com/questions/17136513/how-to-make-a-navigation-which-disappears-while-scrolling-down-but-shows-up-by-s		
			
		$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
    
        $(".navbar-fixed-top").show();
    } else {
       
        $(".navbar-fixed-top").hide();
    }
    this.previousTop = currentTop;
});


//Fonte  https://www.codeproject.com/Questions/458556/how-to-put-play-and-pause-keys-in-same-button	
			
			
		 var playpause = true;	
			
		function setPlayPause()
		{
			playpause = !playpause;
		
			if(playpause)
			{
			
				document.getElementById("som").pause();
	
			}
			else
			{	
			
				document.getElementById("som").play();
		
			}
		
		}
				