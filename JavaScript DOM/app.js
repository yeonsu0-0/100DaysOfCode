
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




// =================================================================

// 📌 Add an element, HTML 새 요소 삽입

// 1. Create the new element
// 특정 이벤트가 발생했을 때 요소를 추가하고 싶은 경우
let newAnchorElement = document.createElement('a');
// 메모리에만 저장되어 있기 때문에 DOM에 요소를 저장하려면 2, 3단계까지 필요
newAnchorElement.href = 'http://google.com';
newAnchorElement.textContent = ' This link leads to Google!';

// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');
// 페이지의 첫 번째 단락 선택

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);



// 📌 Remove elements, HTML 요소 삭제

// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');

// 2. Remove it!
firstH1Element.remove();
// 옛날 브라우저에서도 작동: firstH1Element.parentElement.removeChild(firstH1Element);



// 📌 Move elements, HTML 요소 이동

// 1. 부모 요소 선택
firstParagraph.parentElement.append(firstParagraph);
