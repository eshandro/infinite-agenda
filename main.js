function ApplicationData(date,info) {
	this.date = date;
	this.info = info;
}

var displayDate = function () {
	var date = new Date();
	var index = $(this).closest('.appointment-day').index();
	date = date.setDate(date.getDate() + (index-1));
	date = new Date(date);
	var displayDate = date.toLocaleDateString();
	return displayDate;
}


$(document).on('ready', function() {
  // Displays date on each appointment day
  $('.current-date').html(displayDate);

  // Make button open and close appoint textarea
  $(document).on('click', '.add-button', function() {
  	$(this).prev('.new-appointment').slideToggle(1000);
  })

});