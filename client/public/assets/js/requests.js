$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();

    var minionId = $('.minion-id')[0].value;
    var dayOfWeek = $('.day-of-week')[0].value;

    $.ajax({
      method: "POST",
      url: "/minion",
      data: { 
        minionID: minionId,
        day: dayOfWeek 
      },
    })
      .success(function(mealPlan){
        $('.minion-text-callback').text(mealPlan);
      })
      .error(function(error){
        $('.minion-text-callback').text(error.responseText);
        console.log("An error happened", error);
      });
  });
});