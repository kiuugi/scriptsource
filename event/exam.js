document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const criteria = document.querySelector("#criteria");
  const search = document.querySelector("#search");
  console.log(criteria.value);
  if (!criteria.value) {
    alert("select 박스를 선택해주세요");
    criteria.focus();
    return;
  } else if (criteria.value == "code") {
    if (!search.value || search.value.length != 4 || isNaN(search.value)) {
      alert("code 값이 비어 있거나 숫자 4자리가 아닙니다.");
      search.focus();
      return;
    }
  } else if (criteria.value == "writer") {
    if (!search.value) {
      alert("작가 이름을 기입해주세요");
      search.focus();
      return;
    }
  }
  e.target.submit();
});
