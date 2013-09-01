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
    	   alertAndReset(data);
        }
      );
      return false;   
    });   
});

function alertAndReset(data)
{
	var message = data;
	var n=message.match(/Thank/g);
	if(n == "Thank")
	{
		alert(message);
		document.getElementById("contactForm").reset();
	}
	else
	{
		alert(message);
	}
}