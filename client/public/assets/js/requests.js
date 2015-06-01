$(document).ready(function(){
  $('.callback-button').on('click', function(){

    $.ajax({
      method: "POST",
      url: "/minion",
      data: { 
        name: "Steve", 
        // boss: "The Monarch",
        // lair: "Evil Dennys", 
        // day: "Tuesday" 
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