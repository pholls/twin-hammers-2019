$(document).ready(function() {
  const LA_CROIX_NAMES = [
    {title: "Apricot", src: "images/horoscope_images/apricot.jpg"},
    {title: "Peach - Pear", src: "images/horoscope_images/peach-pear.jpg"},
    {title: "Ni Cola", src: "images/horoscope_images/nicola.jpg"},
    {title: "Mure Pepino", src: "images/horoscope_images/mure-pepino.jpg"},
    {title: "Melon Pomelo", src: "images/horoscope_images/melon-pomelo.jpg"},
    {title: "Pure", src: "images/horoscope_images/pure.jpg"},
    {title: "Tangerine", src: "images/horoscope_images/tangerine.jpg"},
    {title: "Lemon", src: "images/horoscope_images/lemon.jpg"},
    {title: "Kiwi Sandia", src: "images/horoscope_images/kiwi-sandia.jpg"},
    {title: "Cerise Limon", src: "images/horoscope_images/cerise-limon.jpg"},
    {title: "Berry", src: "images/horoscope_images/berry.jpg"},
    {title: "Pamplemousse", src: "images/horoscope_images/pamplemousse.jpg"},
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
      $("#results").focus();
    });
  });
});
