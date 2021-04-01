$(document).ready(function() {
    fullHeight();
    
	

	$('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});


function fullHeight() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
