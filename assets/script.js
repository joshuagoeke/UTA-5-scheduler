
$(document).ready(function (){


  var currentDayTime = $("#current-Day-Time");
  currentDayTime.text(moment().format("dddd, MMM Do YYYY hh:mm:ss"));

  $(".time-block").each(function () {
    var hourBlock = $(this).attr("id").split("-")[1];
    // console.log(blockNumber);
    var savedToDo = localStorage.getItem(hourBlock);
    console.log(hourBlock);

    var toDoText = $(this).find(".description");
    toDoText.val(savedToDo);

    var currentTime = moment().hour();

      if (hourBlock < currentTime) {
        $(this).find(".description").removeClass("present");
        $(this).find(".description").removeClass("future");
        $(this).find(".description").addClass("past");
      } else if (hourBlock == currentTime) {
        $(this).find(".description").removeClass("past");
        $(this).find(".description").removeClass("future");
        $(this).find(".description").addClass("present");
      } else {
        $(this).find(".description").removeClass("past");
        $(this).find(".description").removeClass("present");
        $(this).find(".description").addClass("future");
      }
  
  
  })
  

  $(".saveBtn").on("click", function (event) {
    var hourBlock = $(this).parent().attr("id").split("-")[1];
    var thingToDo = $(this).parent().find(".description").val();
    localStorage.setItem(hourBlock, thingToDo);
    console.log(event);
  });
 
});
