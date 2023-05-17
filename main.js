let image = document.getElementById("my-photos");
let images = [
  "./public/slide1.png",
  "./public/slide2.png",
  "./public/slide3.png",
];

setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
}, 4000);
