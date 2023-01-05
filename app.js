//Two Methos/ways of doing this

//1. Traversing the DOM
// const questionBtns = document.querySelectorAll(".question-btn");

// questionBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (event) {
//     const question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

//2. Using selectors inside the element
const questions = document.querySelectorAll(".question");

//This will make the question section completely responsive i.e. if any user click on any part of the question including button than it will respond to it's click and show result. It is useful for mobile apps.

// questions.forEach(function (question) {
//   question.addEventListener("click", function (event) {
//     const showText = event.currentTarget.classList;
//     showText.toggle("show-text");
//   });
// });

questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector(".question-btn");
  //   console.log(btn);

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
