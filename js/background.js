const images = ["img1.png", "img2.png", "img3.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${chosenImage}`;

document.body.style.backgroundImage = "url('" + image.src + "')";
