$(document).ready(function () {
  const LA_CROIX_NAMES = [
    { title: "Apricot", src: "images/horoscope_images/apricot.jpg", description: "Like Apricots, you make all the right decisions, right up until the moment when you ruin everything." },
    { title: "Peach - Pear", src: "images/horoscope_images/peach-pear.jpg", description: "You're a mystery wrapped in an enigma, like \"what's the meaning of life?\", \"what happens after we die?\" and \"shouldn't these two fruits rhyme?\"." },
    { title: "Ni Cola", src: "images/horoscope_images/nicola.jpg", description: "Confusion in a can. Like when you mean to be a soda, but end up being soda flavored soda water." },
    { title: "Mure Pepino", src: "images/horoscope_images/mure-pepino.jpg", description: "Smooth, crisp, and refreshing -- Mure Pepino, and you!" },
    { title: "Melon Pomelo", src: "images/horoscope_images/melon-pomelo.jpg", description: "You, like Melon Pomelo, are a palindrome (if you don't look too closely)." },
    { title: "Pure", src: "images/horoscope_images/pure.jpg", description: "Bold and original, like you, Pure was initially developed as a cologne fragrance before pivoting into a LaCroix flavor." },
    { title: "Tangerine", src: "images/horoscope_images/tangerine.jpg", description: "\"Tangerine\" is French for \"baby orange\"." },
    { title: "Lemon", src: "images/horoscope_images/lemon.jpg", description: "When life gives you lemons, say \"H*ck the lemons!\" and throw a hammer." },
    { title: "Kiwi Sandia", src: "images/horoscope_images/kiwi-sandia.jpg", description: "Kiwi is a bird. Sandia, or watermelon, is a fruit. What, do you play for Birdfruit or something?" },
    { title: "Cerise Limon", src: "images/horoscope_images/cerise-limon.jpg", description: "Cersei Limonnister, first of her name, Protector of the Seven Kingdoms." },
    { title: "Berry", src: "images/horoscope_images/berry.jpg", description: "You're quirky, like the kind of person who pronounces \"berry\" to rhyme with \"LaCroix\"." },
    { title: "Pamplemousse", src: "images/horoscope_images/pamplemousse.jpg", description: "Royalty in a can. You are the perfect complement to everything." },
  ]

  var $double_butts = $("#double_butts");
  $double_butts.on("submit", function (e) {
    e.preventDefault();

    $("#results").addClass("hidden");
    $("#result_title").text("");

    var sum = 0;
    $("input:checked").each(function (x) {
      var valuez = parseInt(this.value);
      sum += valuez;
    });

    var flavor = LA_CROIX_NAMES[sum % LA_CROIX_NAMES.length];
    $("#result_title").text(flavor.title);
    $("#results img").attr("src", flavor.src);
    $("#result_description").text(flavor.description);
    $("#results").removeClass("hidden", function () {
      $("#results").focus();
    });
  });
});
