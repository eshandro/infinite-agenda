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

// Add a new day to the page
var addADay = function () {
  var newDayList = [ appointmentDay, currentDate, newAppointment, submitButton, addButton];
  var newDay = $(appointmentDay);
  var newHtml = '';
  for (i=1; i < newDayList.length; i++) {
    newHtml += newDayList[i];
    }
    $(newDay).append(newHtml);
  return newDay; 
  }

// HTML for each appointment day area
var appointmentDay = '<div class="appointment-day" style="display: none"></div>';
var currentDate = '<span class="current-date"></span>';
var newAppointment = '<textarea class="new-appointment" placeholder="Enter your appointment details here"></textarea>';
var submitButton = '<button class="submit-button">Submit</button>';
var addButton = '<button class="add-button">Add</button>';



// HTML for displaying a new appointment
var displayNewAppointment = $('<ul class="display-appointment"></ul>');


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
  			
        // Erase Data entered 
        $(this).val('');
  			
        // Display new appointment information
        $(this).siblings('.add-button').after(displayNewAppointment);
        $(this).siblings('.add-button').next().append('<li>' + info + '</li>');



        // Closes the textarea and submit button
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
  	
    $(this).siblings('.add-button').after(displayNewAppointment);
    $(this).siblings('.add-button').next().append('<li>' + info + '</li>');

    $(this).prev('.new-appointment').slideToggle(1000);
  	$(this).slideToggle(1000);
  });

  $(window).scroll(function(){
    // Add a new day everytime user scrolls to bottom - infinite scroll
    if ($(window).scrollTop() === $(document).height() - $(window).height()){
      $('.main-content').append(addADay);

      $('.current-date').html(displayDate);

      $('.appointment-day:last').show('slow');

      $('.to-top').removeClass('is-hidden');
    }
  }); 

});  