$(document).ready(function () {
  $("#testbtn").click(function () {
    // alert("Your Funtion Will Be Work...");
    // $('.box').hide();
    $(".box").fadeToggle(1000);
  });

  $(".box").mouseenter(function () {
    $(this).css({ "background-color": "red" });
  });

  $(".box").mouseleave(function () {
    $(this).css({ "background-color": "blue" });
  });

  $("#name").blur(function () {
    var userInput = $(this).val();
    
    if (userInput.length < 3) {
      $(".error").show();
    }
  });
});
