const btns = document.querySelectorAll(".rate");
const submitButton = document.querySelector(".btn");
const rating = document.getElementById("show--rate");
const cardBack = document.querySelector(".card-back");
const cardFront = document.querySelector(".card-front");

// show appericiation card:

const showCard = function (userScore) {
  rating.textContent = `You selected ${userScore} out of 5`;
  submitButton.addEventListener("click", function () {
    cardFront.classList.add("hidden");
    cardBack.classList.remove("hidden");
    console.log("hello");
  });
};

//  add event listener to the button:

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let score = btns[i].textContent;
    showCard(score);
    btns[i].style.backgroundColor = " hsl(25, 97%, 53%)";
    btns[i].style.color = "white";
  });
}
