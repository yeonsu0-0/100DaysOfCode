// 큰따옴표, 작은따옴표 중 무엇을 써도 상관 없지만, 하나를 정하면 일관되게 사용해야 한다
// 따옴표는 시작과 끝을 명시해주는 역할을 하기 때문에, 문자열 안에서 출력해 사용하고 싶다면 역슬래시를 사용하면 된다

// 📌 value
// alert('"안녕하세요 저는 김연수입니다"'); //내장된 자바스크립트 명렁어, alert를 브라우저에게 전송
// alert(24);

// 📌 variable
let greeting = "Hi, I'm Bonny🐰";
// alert(greeting);

let age = 24;
// alert(age);

// 📌 array[]
let hobbies = ["Sports", "Cooking", "Reading"];
// alert(hobbies[1]); //index 번호로 접근

// 📌 객체 object(lable: value)
// 객체란 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 키와 값으로 구성된다
// 프로퍼티는 줄바꿈을 해주는 것이 좋다
let job = {
  title: "developer",
  location: "Seoul",
};

// 자바스크립트는 객체를 생성하기 위해 클래스를 먼저 정의하고 생성자를 호출할 필요 없이 리터럴로 객체를 생성할 수 있다!

// 역슬래시로 문자열을 쓰는 경우 마음대로 줄바꿈을 할 수 있다
let myName = `yeon
su`;

// 객체 속성에 액세스하기 .(dot)
// alert(job.title);

let adultYears = age - 18; // 미국 성인 나이 계산
// alert(adultYears);

// 📌 사용자 정의 함수(function)
// 장점: on demand 필요할 때 바로 호출해서 사용할 수 있다
function calculateAdultYears() {
  adultYears = age - 18;

  // let realYears = age; //함수 내부에서 정의된 변수는 밖에서 사용할 수 없다!
}

age = 27;
calculateAdultYears();
// alert(adultYears);

//alert(realYears); //Uncaught ReferenceError: realYears is not defined

// 값 반환
// 함수를 호출해서 값을 얻을 수 있다
// return을 사용하면 함수 내에서 변수에 값을 직접 저장하는 것보다 재사용에 용이해진다
function returnAdultYears() {
  return age - 18;
}

let resultAdultYears = returnAdultYears();
// alert(resultAdultYears);

// 매개변수
// age를 매번 재정의 하지 않아도 된다

function userAge(usersAge) {
  return usersAge - 18;
}

// console.log(userAge(30));
// console.log(userAge(24));

// 📌 객체에 메서드 추가
// 자바스크립트의 함수는 일급 객체라서 함수를 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다
let person = {
  name: "Yeonsu", // 프로퍼티

  // 메서드(매개변수, return값X)
  // 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라 부른다
  greet() {
    console.log("Hello!");
  },
};

//객체의 메서드에 접근
person.greet();
