const showButton = document.querySelectorAll(".plus-logo");
const hideButton = document.querySelectorAll(".minus-logo");

const answerBox = document.querySelectorAll(".answer");
const QuestionBox = document.querySelectorAll(".question-box");

showButton.forEach((button , index) => {
  button.addEventListener("click" , () => {
    answerBox[index].style.display = "block";
    showButton[index].style.display = "none";
    hideButton[index].style.display = "block";
  })
})

hideButton.forEach((button,index) => {
  button.addEventListener("click" , () => {
    answerBox[index].style.display = "none";
    showButton[index].style.display = "block";
    hideButton[index].style.display = "none";
  })
})

QuestionBox.forEach((box) => {
  const plusBtn = box.querySelector(".plus-logo");
  const minusBtn = box.querySelector(".minus-logo");
  const answer = box.querySelector(".answer");

  plusBtn.addEventListener("click", () => {
    // 1. Hide all answers first
    QuestionBox.forEach((b) => {
      b.querySelector(".answer").style.display = "none";
      b.querySelector(".plus-logo").style.display = "block";
      b.querySelector(".minus-logo").style.display = "none";
    });

    // 2. Show the clicked one
    answer.style.display = "block";
    plusBtn.style.display = "none";
    minusBtn.style.display = "block";
  });

  minusBtn.addEventListener("click", () => {
    answer.style.display = "none";
    plusBtn.style.display = "block";
    minusBtn.style.display = "none";
  });
})



alert("Hello! I am a simple FAQ page. Click on the plus sign to see the answer and the minus sign to hide it again.")