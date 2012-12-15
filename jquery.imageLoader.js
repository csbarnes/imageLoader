(function($){
	$.fn.imageLoader = function(options) {
		var settings = {
			altText: "",
			format: ".jpg",
			html5: false,
			imageTotal: 10,
			minDigits: 1,
			namespace: "imageLoader",
			path: "images/",	//from containing page
			prefixText: "",
			postfixText: "",
			startingIndex: 1,
			wrap:true
		};

		settings = $.extend(settings, options);
		settings.pathStart = settings.path + settings.prefixText;
		settings.pathEnd = settings.postfixText + settings.format;
	
		return this.each(function() {
			obj = $(this);
		
			for(var i = settings.startingIndex; i <= settings.imageTotal; i++){
				var toAppend;
				
				toAppend = '<img alt="' + settings.altText + '" class="';
				
				//if first image add current class
				if(i == settings.startingIndex){
					toAppend += settings.namespace + '-current ';
				}
				
				toAppend += settings.namespace + '-thumb" src="' + settings.pathStart + 
					padZeros(i, settings.minDigits) + settings.pathEnd + '"';
				
				//end image tag for html5 or 4.01 strict
				if(settings.html5){
					toAppend += " />";
				}else{
					toAppend += '>';
				}
				
				//wrap images in li tag if enabled
				if(settings.wrap){
					toAppend = "<li>" + toAppend + "</li>";
				}
				obj.append(toAppend);
			}
		});
	};
})(jQuery);

//Add '0' before num until it is >= len 
function padZeros(num, len){
	var result = '' + num;

	while(result.length < len){
		result = '0' + result;
	}

	return result;
}
