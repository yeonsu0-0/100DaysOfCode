// 큰따옴표, 작은따옴표 중 무엇을 써도 상관 없지만, 하나를 정하면 일관되게 사용해야 한다
// 따옴표는 시작과 끝을 명시해주는 역할을 하기 때문에, 문자열 안에서 출력해 사용하고 싶다면 역슬래시를 사용하면 된다

//value
alert('"안녕하세요 저는 김연수입니다"'); //내장된 자바스크립트 명렁어, alert를 브라우저에게 전송
alert(24);

//variable
let greeting = "Hi, I'm Bonny🐰";
// alert(greeting);

let age = 24;
// alert(age);

// array[]
let hobbies = ["Sports", "Cooking", "Reading"];
// alert(hobbies[1]); //index 번호로 접근

// object(lable: value)
// 키와 값으로 이루어진 요소들은 줄바꿈을 해주는 것이 좋다
let job = {
  title: "developer",
  location: "Seoul",
};

// 역슬래시로 문자열을 쓰는 경우 마음대로 줄바꿈을 할 수 있다
let myName = `yeon
su`;

// 객체 속성에 액세스하기 .(dot)
// alert(job.title);

let adultYears = age - 18; // 미국 성인 나이 계산
// alert(adultYears);

// 사용자 정의 함수
// 장점: on demand 필요할 때 바로 호출해서 사용할 수 있다
function calculateAdultYears() {
  adultYears = age - 18;

  let realYears = age; //함수 내부에서 정의된 변수는 밖에서 사용할 수 없다!
}

age = 35;
calculateAdultYears();
// alert(adultYears);

//alert(realYears); //Uncaught ReferenceError: realYears is not defined

// 값 반환
function returnAdultYears() {
  return age - 18;
}

returnAdultYears();
