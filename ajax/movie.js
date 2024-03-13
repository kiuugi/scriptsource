const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");
// 어제 날짜 구하기

const init = () => {
  // 오늘날짜 구하기
  const today = new Date();
  console.log(today);
  // 년, 월, 일 변수에 담기
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 월 0부터 시작
  // 일 -1
  const day = today.getDate() - 1;

  // 화면에 보여주기
  // 요소 찾은 후 value 변경
  txtYear.value = year;
  // selMon.value = month; / 앞에서 value에 자리값을 맞추려고 1자리에 0 일 붙여서 2자리수로 만듬
  // 1~9월: "0"+month => 01,02..
  // 1~9dlf: "0"+month => 01,02..

  // if (month < 10) {
  //   month = "0" + month;
  // }
  // if (day < 10) {
  //   day = "0" + day;
  // }
  // selMon.value = month;
  // selDay.value = day;

  selMon.value = month < 10 ? "0" + month : month;

  selDay.value = day < 10 ? "0" + day : day;
};

init();

function show(movieCd) {
  console.log(movieCd);

  url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";
  url += movieCd;

  // 영화한글제목 : movieNm
  // 영화영어제목 : movieNmEn
  // 상영시간 : showTm
  // 감독 : directors
  // 배우이름 : actors.name
  // box2 - ul - li
  let aResult = ``;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      const movieInfo = data.movieInfoResult.movieInfo;
      aResult += `<ul>`;
      aResult += `<li>영화제목 : ${movieInfo.movieNm}</li>`;
      aResult += `<li>영어제목 : ${movieInfo.movieNmEn}</li>`;
      aResult += `<li>상영시간 : ${movieInfo.showTm}분</li>`;
      movieInfo.directors.forEach((director) => {
        aResult += `<li>감독 : ${director.peopleNm}</li>`;
      });

      aResult += `<li>출연배우 :`;
      movieInfo.actors.forEach((aActor) => {
        aResult += ` ${aActor.peopleNm},`;
      });
      aResult += `</li></ul>`;
      document.querySelector(".box2").innerHTML = aResult;
    })
    .catch(() => {
      console.log("주소확인");
    });
}

document.querySelector("button").addEventListener("click", () => {
  // 영화진흥위원회 사용자가 선택한 날짜의 박스 오피스 가져오기
  let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
  url += txtYear.value + selMon.value + selDay.value;

  console.log(url);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let boxofficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(boxofficeList);

      let result = ``;
      boxofficeList.forEach((movie) => {
        // 순위 1(▲ 1 증감표시▼) : 영화 제목
        let rankInten = movie.rankInten;
        result += `${movie.rank} 위`;
        if (rankInten > 0) {
          result += `(▲${rankInten})`;
        } else if (rankInten < 0) {
          result += `(▼${rankInten})`;
        } else {
          result += `(0)`;
        }
        result += ` : <a href="#" onclick='javascript:show(${movie.movieCd})'>${movie.movieNm}</a>`;
        if (movie.rankOldAndNew == "NEW") {
          result += ` (NEW)<br>`;
        } else if (movie.rankOldAndNew == "OLD") {
          result += ` (OLD)<br>`;
        }
      });
      document.querySelector("#msg").innerHTML = result;
    })
    .catch(() => {
      console.log("주소확인");
    });
});
