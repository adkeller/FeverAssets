jQuery(function($){
	function addzeros(number, length) {
    	var num = '' + number;
    	while (num.length < length) {
       		num = '0' + num;
    	}
    	return num;
	}
	var numDigits = String($(".grid-item").length).length;
	var players = {'zoom' : 'Zoom Backgrounds', 'bha' : 'Breast Health Awareness', 'team' : 'Team', 'wheeler' : 'Erica Wheeler', 'dupree' : 'Candice Dupree', 'kmitchell' : 'Kelsey Mitchell', 'mccowan' : 'Teaira McCowan', 'achonwa' : 'Natalie Achonwa', 'cox' : 'Lauren Cox', 'burke' : 'Kennedy Burke', 'laney' : 'Betnijah Laney', 'tmitchell' : 'Tiffany Mitchell', 'mavunga' : 'Stephanie Mavunga', 'catchings' : 'Tamika Catchings'};
	$('.wallpaper-select').html('<select class="filters-select"><option value="*">Show All</option></select>');
	$.each(players, function(key, value) {
		$('.filters-select').append('<option value=".' + key + '">' + value + '</option>');
	});
	$('.grid-item').each(function(index) {
		$(this).attr("data-recent", addzeros(index, numDigits));
		$(this).attr("data-name", ($(this).attr('class').split(' ').slice(-1)));
	});
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
		getSortData: {
			recent: '[data-recent]',
			name: '[data-name]'
		},
		sortBy: 'recent',
  		sortAscending: true
	});
	// filter functions
	var filterFns = {
	};
	// bind filter on select change
	$('.filters-select').on( 'change', function() {
		if($(this).val() == '*' || $(this).val() == '.bha'){ 
			$('.wallpaper-sort > button').removeClass('disabled');
		} else {
			$('.wallpaper-sort > button').addClass('disabled');
		}
		// get filter value from option value
		var filterValue = this.value;
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
	
	$('.sort-by-button-group').on( 'click', 'button', function() {
		var sortByValue = $(this).attr('data-sort-by');
		$grid.isotope({ sortBy: sortByValue });
	});
	$('.button-group').each( function( i, buttonGroup ) {
	var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$( this ).removeClass('secondary').siblings().addClass('secondary');
		});
	});
});