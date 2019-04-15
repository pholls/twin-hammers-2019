$(document).ready(function() {
  const LA_CROIX_NAMES = ["berry", "mango", "coconut", "orange", "lime"];

  var $double_butts = $("#double_butts");
  $double_butts.on("submit", function(e) {
    e.preventDefault();

    var $results = $("#results");
    $results.addClass("hidden");
    $("#result-title").text("");

    var sum = 0;
    $("input:checked").each(function(x) {
      var valuez = parseInt(this.value);
      sum += valuez;
    });

    var flavor = LA_CROIX_NAMES[sum % LA_CROIX_NAMES.length];
    $results.removeClass("hidden");
    $("#result-title").text(flavor);

    // $("#results img").attr("src", "images/" + flavor + ".png");
    // console.log("images/" + flavor + ".png");
  });
});
