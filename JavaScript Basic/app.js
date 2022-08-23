// 큰따옴표, 작은따옴표 중 무엇을 써도 상관 없지만, 하나를 정하면 일관되게 사용해야 한다
// 따옴표는 시작과 끝을 명시해주는 역할을 하기 때문에, 문자열 안에서 출력해 사용하고 싶다면 역슬래시를 사용하면 된다

//value
alert('"안녕하세요 저는 김연수입니다"'); //내장된 자바스크립트 명렁어, alert를 브라우저에게 전송
alert(24);

//variable
let greeting = "Hi, I'm Bonny🐰";
alert(greeting);

let age = 24;
alert(age);

// array[]
let hobbies = ["Sports", "Cooking", "Reading"];
alert(hobbies[1]); //index 번호로 접근

// object(lable: value)
let job = { title: "developer", location: "Seoul" };
