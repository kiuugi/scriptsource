// 폼 submit 일어나면 submit 중지 후
// required
// input value 가 들어 있는지 확인

// value 가 특정 조건을 만족하는지 확인
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  //   console.log(document.querySelector("#userid").value); // ""
  const userId = document.querySelector("#userid");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");

  const regId = /(?=^[A-z])(?=.+\d)[A-z\d]{6,12}$/;
  const regPwd = /(?=^[A-z])(?=.+\d)(?=.+[!@$%])[A-z\d!@$%]{8,15}$/;

  // true 자료 : 0 제외 숫자, '문자, [], {}
  // false 자료 : 0, '', null, undefined, NaN

  if (userId.value == "" || !regId.test(userId.value)) {
    document.querySelector("form div:nth-child(1) div").classList.add("show"); // nextElementSibling 으로 찾을 수 있음;
  } else {
    userId.nextElementSibling.classList.remove("show");
  }

  if (!password.value || !regPwd.test(password.value)) {
    // value 값이 있으면 true 로 인식함 : true 자료 : 0 제외 숫자, '문자, [], {}
    password.nextElementSibling.classList.add("show");
  } else {
    password.nextElementSibling.classList.remove("show");
  }

  if (!confirmPassword.value || !regPwd.test(confirmPassword.value)) {
    confirmPassword.nextElementSibling.classList.add("show");
  } else {
    confirmPassword.nextElementSibling.classList.remove("show");
  }

  // password != confirm-password
  // 이전 비밀번호와 다릅니다.
  if (confirmPassword.value != password.value) {
    confirmPassword.nextElementSibling.textContent = "입력한 비밀번호와 다릅니다.";
    confirmPassword.nextElementSibling.classList.add("show");
  } else {
    // password, confirm 둘다 입력 안된 경우 값이 동일하기 때문에 이 코드가 실행됨
    if (confirmPassword.value) {
      confirmPassword.nextElementSibling.classList.remove("show");
    }
  }
});
