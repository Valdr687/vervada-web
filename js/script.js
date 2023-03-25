//Variables
NombreImage = 7;
ConfigImage = [];
AltImage = {
  '1': "Some blocks using custom models : fletching tower, crafting table, chest, end portal and more. ",
  '2': "Main presentation of the Vervada, depicting a medieval village with a river.",
  '3': "All the pieces of wood, including bushy leaves, 3D door and trapdoors and custom textures.",
  '4': "Hobbit village built with The Vervada",
  '5': "Rails and tnt minecart, rails have 3D models.",
  '6': "Enchanting table surrounded by bookshelves with a torch and a flower in a pot.",
  '7': "A cave with ores and a torch, ores and the torch have 3D models."
};

// Carousel
for (let i = 0; i < NombreImage; i++) {
  ConfigImage.push(i + 1)
}

function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}

function agencement(tab, alt) {
  $("#img1").attr("src", "./images/illustration/" + tab[0] + ".png");
  $("#img1").attr("alt", alt[tab[0]]);
  $("#img2").attr("src", "./images/illustration/" + tab[1] + ".png");
  $("#img2").attr("alt", alt[tab[1]]);
  $("#img3").attr("src", "./images/illustration/" + tab[2] + ".png");
}

$(document).ready(function () {
  $(".next").click(function () {
    ConfigImage = arrayRotate(ConfigImage)
    agencement(ConfigImage, AltImage)
  });
});

$(document).ready(function () {
  $(".prev").click(function () {
    ConfigImage = arrayRotate(ConfigImage, true)
    agencement(ConfigImage, AltImage)
  });
});

//Menu
$(document).ready(function () {
  $("#ham-btn").click(function () {
    $('header').toggleClass("open");
  });
}); 