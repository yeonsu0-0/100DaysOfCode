
// window object
// console.log(window);

/*
alert();
window.alert();
*/


// document object
// console.log(document);


// 📌 Js에서 HTML 요소 선택한 뒤 변경
// <body> -> <p> -> <a> -> href 태그 순으로 접근
// document.body.children[1].children[0].href = "http://www.google.com"

// 이렇게 작성하면 오류 발생! Uncaught TypeError: Cannot read properties of null (reading 'children')
// 에러가 뜨는 이유: 코드를 너무 빨리 실행했기 때문에(자바스크립트는 브라우저보다 먼저 실행되고, HTML 요소를 분석하고, DOM 탐색까지 한다)
// 해결방법(스크립트를 올바르게 로드하는 방법): (1) <script></script>태그를 </body> 바로 위에 추가한다. (2) <script src " " defer> 요소 추가


let anchor = document.getElementById("external-link");
anchor.href = "http://naver.com";

anchor = document.querySelector("p a");
anchor.href = "http://google.com";