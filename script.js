$(function () {

  $(".saveBtn").on("click", function() {

    var timeBlockId = $(this).closest(".time-block").attr("id");
    
  
    var userInput = $(this).siblings(".description").val();
    

    localStorage.setItem(timeBlockId, userInput);
  });


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


  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var storedUserInput = localStorage.getItem(timeBlockId);

    if (storedUserInput) {
      $(this).find(".description").val(storedUserInput);
    }
  });

  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
