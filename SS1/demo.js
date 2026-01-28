console.log("Hello world");
// Khai báo biên: var, let, const
var userName = "Nguyễn Văn A";

console.log("userName trước khi khai báo lại =" userName);

// Khả năng khai báo lại giá trị 

var userName = "Lê Văn B";
console.log("userName sau khi khai báo lại = ", userName);

// Gán lại giá trị
userName = "Nguyễn Văn C";
console.log("username sai khi gán lại giá trị: ", userName );

// Phạm vi (toàn cục)

// Hoisting (sử dụng biến trước khi khai báo, tuy nhiên giá trị là undefined)
age = 10;
console.log("age: ", age);
var age = 30;

// Nhược điểm: code khó bảo trì, khó kiểm soát đc biển, khó phát hiện lỗi

// Từ 2015, JS phát hành phiên bản ES6 (thêm 2 từ khóa let và const)
let studentName = "Nguyễn Minh Nam";
console.log(studentName);

// Khai báo lại (không)
// let studentName = "Lê Văn A";

// Gán lại giá trị
studentName = "Lê Văn B";
console.log("studentname sau khi gán lại: ", studentName);

// Phạm vi (block) {}

// Hoisting (Có) TDZ
// console.log(studentCode);
// let studentCode = "SV001";

// Từ khóa const
const PI = 3.14;

// Khai báo lại (không)

// Gán lại giấ trị (không)

// Phạm vi (block)

// Hoisting (có và tươn tự như let)

// Các kiểu dữ liệu cơ bản
// 1. Kiểu số: 
const firstNumber = 20;
const secondNumber = 30;

console.log("firstnumber = ",firstNumber);
console.log("secondnumber = ",secondNumber);
console.log("Kiểu dữ liệu của biến firstnumber: ", typeof firstNumber);

console.log(firstNumber + " + " + secondNumber + " = ", firstNumber + secondNumber);
console.log(firstNumber + " - " + secondNumber + " = ", firstNumber - secondNumber);
console.log(firstNumber + " * " + secondNumber + " = ", firstNumber * secondNumber);
console.log(firstNumber + " / " + secondNumber + " = ", firstNumber / secondNumber);
console.log(firstNumber + " % " + secondNumber + " = ", firstNumber % secondNumber);

// 2. Kiểu chuỗi
const email = "nva@gmail.com";
const address = "Thanh Xuân, Hà Nội";

// 1. Thao tác nối chuỗi 
console.log("Email = " + email + " - " + "Địa chỉ: " + address);
// Template string (``)
console.log(`Email = ${email}, Address = ${address}`);

// 3. Kiểu Boolean (true/falese)
console.log(false);

// 4. Kiểu undefined 
let gender;
console.log("gender: ", gender);

// 5. Kiểu null: khi khai báo một biến, nếu chúng ta "chưa muốn hoặc không xác định
// trước được giá trị của biến đó" thì mặc định có thể gán là null
const user = null;

// 6. Kiểu NaN
console.log("Kiểu dữ liệu của NaN: ", typeof NaN);
console.log("Result: ", 10 / "abc");

// Chuyển đổi dữ liệu 
const mathScore = 10;
const historyScore = "8";

// 1. Chuyển đổi từ 1 chuỗi thành số 

// - console.log(Number(historyScore));
// - console.log(parseInt(historyScore));
// - console.log(+historyScore);

// 2. Chuyển đổi từ 1 số sang chuỗi

// console.log(String(mathScore));
// console.log(mathScore.toString());

// 3. Chuyển đổi Boolean
console.log(Boolean(1)); // True
console.log(Boolean(0)); // False
console.log(Boolean("")); // False 
console.log(Boolean(false)); // False 
console.log(Boolean(null)); // False 
console.log(Boolean(undefined)); // False 
console.log(Boolean(NaN)); // False 

// Cơ chế nhập trong JS
// const myName = prompt("Nhập tên của bạn"): // Kiểu dữ liệu String hoặc null
// const myAge = +prompt("Nhập tuổi của bạn: ");

// // console.log("myName = ", myName);
// // console.log("myage = ", myAge);

// // Cơ chế xuất trong JS
// alert(myName);
// alert(myAge);

// Cơ chế lựa chọn
const isConfirm = confirm("Bạn có xác nhận đăng xuất!"); 
console.log("isConfirm: ", isConfirm);