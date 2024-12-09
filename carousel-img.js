// Асинхронное программирование с использованием API.

let usersImg = [];

function api() {
  const url = "https://randomuser.me/api/?&results=50&seed=abc";
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        usersImg = data.results;
        resolve(usersImg);
      });
  });
}

function carouselImg() {
  const carouselDiv = document.querySelector(".carousel");
  const img = document.createElement("img");
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");
  let currentImg = 0;
  api().then((data) => {
    let maxNumberImg = data.length - 1;
    img.src = data[currentImg].picture.large;

    leftButton.addEventListener("click", function () {
      if (currentImg <= 0) {
        currentImg = maxNumberImg;
        img.src = data[currentImg].picture.large;
      } else {
        img.src = data[--currentImg].picture.large;
      }
    });
    rightButton.addEventListener("click", function () {
      if (currentImg >= maxNumberImg) {
        currentImg = 0;
        img.src = data[currentImg].picture.large;
      } else {
        img.src = data[++currentImg].picture.large;
        console.log(currentImg);
      }
    });
    carouselDiv.append(img);
    setInterval(() => {
      if (currentImg >= maxNumberImg) {
        currentImg = 0;
        img.src = data[currentImg].picture.large;
      } else img.src = data[++currentImg].picture.large;
    }, 3000);
  });
}

carouselImg();
