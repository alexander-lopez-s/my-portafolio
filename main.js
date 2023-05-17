let image = document.getElementById("my-photos");
let images = [
  "./public/slide1.png",
  "./public/slide2.png",
  "./public/slide3.png",
  "./public/slide4.png",
];

setInterval(function () {
  let random = Math.floor(Math.random() * 4);
  image.src = images[random];
}, 4000);
