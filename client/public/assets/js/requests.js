$(document).ready(function(){

  $('.loading').hide();

  $('form').on('submit', function(event){
    event.preventDefault();

    var minionId = $('.minion-id')[0].value;
    var dayOfWeek = $('.day-of-week')[0].value;

    $('.loading').show();
    $('.message').hide();

    $.ajax({
      method: "POST",
      url: "/minion",
      data: { 
        minionID: minionId,
        day: dayOfWeek 
      },
    })
      .success(function(mealPlan){
        $('.loading').hide();
        $('.message').show();
        $('.minion-text-callback').text(mealPlan);
      })
      .error(function(error){
        $('.loading').hide();

        $('.message').css({color:"red"});
        $('.minion-text-callback').show();
        $('.minion-text-callback').text(error.responseText);
      });
  });
});