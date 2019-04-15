$(document).ready(function() {
  const LA_CROIX_NAMES = [
    {title: "Apricot", src: "horoscope_images/apricot.jpg"},
    {title: "Peach - Pear", src: "horoscope_images/peach-pear.jpg"},
    {title: "Ni Cola", src: "horoscope_images/nicola.jpg"},
    {title: "Mure Pepino", src: "horoscope_images/mure-pepino.jpg"},
    {title: "Melon Pomelo", src: "horoscope_images/melon-pomelo.jpg"},
    {title: "Pure", src: "horoscope_images/pure.jpg"},
    {title: "Tangerine", src: "horoscope_images/tangerine.jpg"},
    {title: "Lemon", src: "horoscope_images/lemon.jpg"},
    {title: "Kiwi Sandia", src: "horoscope_images/kiwi-sandia.jpg"},
    {title: "Cerise Limon", src: "horoscope_images/cerise-limon.jpg"},
    {title: "Berry", src: "horoscope_images/berry.jpg"},
    {title: "Pamplemousse", src: "horoscope_images/pamplemousse.jpg"},
  ]

  var $double_butts = $("#double_butts");
  $double_butts.on("submit", function(e) {
    e.preventDefault();

    $("#results").addClass("hidden");
    $("#result-title").text("");

    var sum = 0;
    $("input:checked").each(function(x) {
      var valuez = parseInt(this.value);
      sum += valuez;
    });

    var flavor = LA_CROIX_NAMES[sum % LA_CROIX_NAMES.length];
    $("#result-title").text(flavor.title);
    $("#results img").attr("src", flavor.src);
    $("#results").removeClass("hidden", function() {
      $("#result_image").focus();
      );
    });
  });
});
