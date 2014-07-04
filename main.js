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
// HTML for each appointment day area
var appointmentDay = $('<div class="appointment-day"></div>');
var currentDate = $('<span class="current-date"></span>');
var newAppointment = $('<textarea class="new-appointment" placeholder="Enter your appointment details here"></textarea>') 



// HTML for displaying a new appointment
var displayNewAppointment = $('<ul><li class="display-appointment"></li></ul>');


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
  			// Collect info about appointment add object to appointmentsList
        var info = $(this).val();
  			var date = $(this).prev('.current-date').html();
  			appointmentsList.push (new ApplicationData(date,info));
  			// Erase Data entered and add placeholder
        $(this).val('').attr('placeholder="Enter your appointment details here"');
  			
        // Display new appointment information
        $(this).find('.add-button')(displayNewAppointment);
        $(this).next().children().html(info);

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