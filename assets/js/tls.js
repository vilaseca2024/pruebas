// Example function
var tls12Callback = function(json) {
	if ( json.tls12 === 1 ) {
		// For TLS1.2
	} else if ( json.tls12 === 0 ) {
		// For TLS1.0 or 1.1
		$(window).ready(function(){
			var alertTxt = 'The version of the browser you are currently using will no longer be supported on Rakuten’s web services.<span>For more information</span>';
			var alertHTML = '<a href="https://corp.rakuten.co.jp/notification/ssl/en/" id="tls-alert"><span class="alert-inner">'
				+ '<span class="rf-font-japanese alert-text">'+ alertTxt +'</span>'
				+ '<i aria-hidden="true" class="rcicon rc-i-angle-right rf-visible-sp"></i>'
				+ '</a>';
				// add alert
				$('header').prepend(alertHTML);
				var alertHeight = $('#tls-alert').height();
				$('header.rf-header .rf-header-inner').css('top', alertHeight);
				$('header.rf-header').css('padding-bottom', alertHeight);
				$('a#rf-header-menu').click(function() {
					var winHeight = $(window).height();
					if($('#rf-header-menu').hasClass('rf-header-menu-active')){
						$('#rf-header-nav').css({
							top: alertHeight+73,
							height: winHeight-(alertHeight+73)
						});
					}
				});
		});
	}
}