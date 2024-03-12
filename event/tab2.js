// tab.js 수정

const allLi = document.querySelectorAll(".tab-button");
const allDiv = document.querySelectorAll(".tab-content");

allLi.forEach((li, idx) => {
  // 모든 li 에 orange 클래스명 제거
  li.addEventListener("click", (e) => {
    allLi.forEach((li) => {
      // allLi는 배열이라 .classList를 못씀
      li.classList.remove("orange");
    });
    // 현재 이벤트가 일어난 li orange 클래스명 추가
    e.target.classList.add("orange");

    // 모든 div 의 show 제거
    allDiv.forEach((div) => {
      div.classList.remove("show");
    });
    // 현재 이벤트가 일어난 li 와 순서가 일치하는 div show 추가
    allDiv[idx].classList.add("show");
  });
});

// // 세 개의 li 찾기
// const firstLi = document.querySelector(".list li:first-child");
// const secondLi = document.querySelector(".list li:nth-child(2)");
// const thirdLi = document.querySelector(".list li:last-child");

// // div // .container의 첫번째 자식은 ul임;
// const firstDiv = document.querySelector(".container div:nth-child(2)");
// const secondDiv = document.querySelector(".container div:nth-child(3)");
// const thirdDiv = document.querySelector(".container div:nth-child(4)");

// firstLi.addEventListener("click", () => {
//   // 다른 li 에 orange 클래스명 제거
//   secondLi.classList.remove("orange");
//   thirdLi.classList.remove("orange");
//   // firstLi orange 클래스명 추가
//   firstLi.classList.add("orange");

//   // 다른 div 의 show 제거
//   secondDiv.classList.remove("show");
//   thirdDiv.classList.remove("show");
//   // 본인 div 의 show 추가
//   firstDiv.classList.add("show");
// });
// secondLi.addEventListener("click", () => {
//   // 다른 li 에 orange 클래스명 제거
//   firstLi.classList.remove("orange");
//   thirdLi.classList.remove("orange");
//   // secondLi orange 클래스명 추가
//   secondLi.classList.add("orange");

//   // 다른 div 의 show 제거
//   firstDiv.classList.remove("show");
//   thirdDiv.classList.remove("show");
//   // 본인 div 의 show 추가
//   secondDiv.classList.add("show");
// });
// thirdLi.addEventListener("click", () => {
//   // 다른 li 에 orange 클래스명 제거
//   firstLi.classList.remove("orange");
//   secondLi.classList.remove("orange");
//   // thirdLi orange 클래스명 추가
//   thirdLi.classList.add("orange");

//   // 다른 div 의 show 제거
//   secondDiv.classList.remove("show");
//   firstDiv.classList.remove("show");
//   // 본인 div 의 show 추가
//   thirdDiv.classList.add("show");
// });
