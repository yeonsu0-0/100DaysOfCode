
// 📌 EventListener
// <p>Click Me!</p> 를 누르면 text content를 Clicked로 바꾸고 싶음

let paragraphElement = document.querySelector('p');

function changeParagraphText(event) {
    paragraphElement.textContent = 'Clicked';
    console.log('Paragraph clicked!');  //텍스트를 누르면 동작은 한 번 뿐이지만 계속해서 log가 기록된다
    console.log(event);
}

// addEventListener의 두 번째 매개변수에는 함수 이름만 작성한다 (callback function)
paragraphElement.addEventListener('click', changeParagraphText);


let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;
    // let enteredText = event.data; => This is different!

    console.log(enteredText);
    console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);