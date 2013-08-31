$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});


$(document).ready(function(){
    $("#contactForm").submit( function () {    
      $.post(
       'mail.php',
        $(this).serialize(),
        function(data){
    	   alert(data);
        }
      );
      return false;   
    });   
});
