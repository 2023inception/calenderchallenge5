$(function () {
  // Event listener for save buttons
  $(".saveBtn").on("click", function() {
    // Get the id of the parent time-block
    var timeBlockId = $(this).closest(".time-block").attr("id");
    
    // Get the user input from the corresponding textarea
    var userInput = $(this).siblings(".description").val();
    
    // Save the user input in local storage using the time block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply past, present, or future classes to time blocks based on the current hour
  var currentHour = dayjs().hour();

  $(".time-block").each(function() {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Get user input from local storage and set textarea values
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var storedUserInput = localStorage.getItem(timeBlockId);

    if (storedUserInput) {
      $(this).find(".description").val(storedUserInput);
    }
  });

  // Display the current date in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
