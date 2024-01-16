$(document).ready(function () {
  function checkWindowSize() {
    if ($(window).width() <= 767) {
      $("#myId").addClass("hide-sub-card");
      

    } else {
      $("#myId").removeClass("hide-sub-card");
   

    }
  }

  // Call the function on page load
  checkWindowSize();

  // Call the function on window resize
  $(window).resize(function () {
    checkWindowSize();
  });
});
