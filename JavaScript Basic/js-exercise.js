// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 3개의 새로운 변수 선언하기
var course = "daysOfCode";
var price = "0";
var goals = ["Being a Developer", "Have Fun!", "Have a great grade"];

// 2) Output ("alert") the three variable values
//변수 출력하기
alert(course);
alert(price);
alert(goals);

// 3) Try "grouping" the three variables together and still output their values thereafter
//변수들을 그룹핑한 후 출력하기

var onlineCourse = {
  name: "daysOfCode",
  onlineCoursePrice: "0",
  onlineCourseGoals: "Being a Developer",
};

alert(onlineCourse.name);
alert(onlineCourse.onlineCoursePrice);
alert(onlineCourse.onlineCourseGoals);

// 4) Also output the second element in your "main goals" variable
//두 번째 인덱스 요소 출력하기
alert(introCourse.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function getListItem(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}

// 6) Execute your custom command from (5) and output ("alert") the result
let myGoal = getListItem(onlineCourse.onlineCourseGoals, 0);
alert(myGoal);
