// Math operations

console.log(10 + 4); // 14 (integer)
console.log(10 - 4); // 6 (integer)
console.log(10 * 4); // 40 (integer)
console.log(10 / 4); // 2.5 (float)
console.log(10 % 4); // 모듈러스(modulus) 연산자 -> 나머지 게산

// 축약 계산식
let result = 10 * 4; //40
result++;
result--;

result += 5;
result -= 5;

console.log(result);

console.log("My name is " + "yeonsu");
// console.log("My name is" - "is"); 문자열을 빼는 것은 불가능

let userName = "yeonsu";
console.log(userName.length); // 문자열 길이 알려주는 속성
console.log(userName.toUpperCase()); // 대문자로 바꿔주는 속성
