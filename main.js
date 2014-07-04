var appointmentsList = [];

function ApplicationData(date,info) {
	this.date = date;
	this.appointment = info;
}

var displayDate = function () {
	var date = new Date();
	var index = $(this).closest('.appointment-day').index();
	date = date.setDate(date.getDate() + (index-1));
	date = new Date(date);
	var displayDate = date.toLocaleDateString();
	return displayDate;
}

var appointment-day = $('<div class="appointment-day"></div>');
var current-date = $('<span class="current-date"></span>');
var new-appointment = $('<textarea class="new-appointment" placeholder="Enter your appointment details here"></textarea>') 


$(document).on('ready', function() {
  // Displays date on each appointment day
  $('.current-date').html(displayDate);

  // Make button show/hide textarea and submit button
  $(document).on('click', '.add-button', function(event) {
	$(this).prev().prev('.new-appointment').slideToggle(1000);
	$(this).prev('.submit-button').slideToggle(1000);  
  });

// Adds appointment info to list and closes textarea on enter press
  $(document).on('keypress', '.new-appointment', function(event) {
  		var code = (event.keyCode ? event.keyCode : event.which);
  		if (code === 13) {
  			var info = $(this).val();
  			var date = $(this).prev('.current-date').html();
  			appointmentsList.push (new ApplicationData(date,info));
  			$(this).val('')
  			$(this).slideToggle(1000);
  			$(this).next('.submit-button').slideToggle(1000);
  		}
  });
  
  // Submit button works same as the Enter key
  $(document).on('click', '.submit-button', function() {
  	var info = $(this).prev('.new-appointment').val();
  	var date = $(this).prev().prev('.current-date').html();
  	appointmentsList.push(new ApplicationData(date,info));
  	$(this).prev('.new-appointment').val('');
  	$(this).prev('.new-appointment').slideToggle(1000);
  	$(this).slideToggle(1000);
  });

});  