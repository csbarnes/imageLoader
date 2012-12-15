(function($){
	$.fn.imageLoader = function(options) {
		var defaults = {
			digits: 3,
			format: ".png",
			numOfImages: 10,
			path: "images/",
			prefix: "",
			postfix: ""
		};

		var options = $.extend(defaults, options);
		options.path = options.path + options.prefix;
		options.postfix = options.postfix + options.format;
	
		return this.each(function() {
			var x = 1;
			obj = $(this);
		
			while(x <= options.numOfImages){
				if(x == 1)
					obj.append('<li><img alt="" class="current thumb" src="' + options.path + padZeros(x, options.digits) + options.postfix + '" /></li>');
				else
					obj.append('<li><img alt="" class="thumb" src="' + options.path + padZeros(x, options.digits) + options.postfix + '" /></li>');
					
				x++;
			}
		});
	};
})(jQuery);

(function($){
	$.fn.daPlugin2 = function(options) {
		var defaults = {
			digits: 3,
			format: ".png",
			numOfImages: 10,
			path: "images/",
			prefix: "",
			postfix: ""
		};

		var options = $.extend(defaults, options);
		options.path = options.path + options.prefix;
		options.postfix = options.postfix + options.format;
	
		return this.each(function() {
			var x = 1;
			obj = $(this);
		
			while(x <= options.numOfImages){
				if(x == 1)
					obj.append('<img alt="" src="' + options.path + padZeros(x, options.digits) + options.postfix + '" />');
				else
					obj.append('<img alt="" src="' + options.path + padZeros(x, options.digits) + options.postfix + '" />');
					
				x++;
			}
		});
	};
})(jQuery);

function padZeros(num, len){
	var result = '' + num;

	while(result.length < len){
		result = '0' + result;
	}

	return result;
}
