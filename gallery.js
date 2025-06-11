$(document).ready(function () {
  // Initialize Fancybox
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
  });

  // Image Zoom on Hover
  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});
