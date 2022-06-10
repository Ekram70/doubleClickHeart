const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

// creating custom double click event
loveMe.addEventListener("click", (e) => {
  if (clickTime == 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
  const heart = document.createElement("i");
  heart.classList = "fas fa-heart";

  // getting the coordinates
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  loveMe.appendChild(heart);
  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
}
