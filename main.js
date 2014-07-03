var displayDate = function () {
	var date = new Date();
	var index = $(this).closest('.appointment-day').index();
	date = date.setDate(date.getDate() + (index-1));
	date = new Date(date);
	var displayDate = date.toLocaleDateString();
	return displayDate;
}

// var findNextDay = function () {
// 	var nextDay = 
// }

$(document).on('ready', function() {
  $('.current-date').html(displayDate);
});