// Khai báo các biến cần thiết 
let bookName = "Lập trình web với javascript";
let authorName = "Nguyễn Văn A";
let pulish = 2022;
let price = 100000;
let quantity = 100; 

// Chuẩn hóa dữ liệu
// Tên sách: Loại bỏ khoảng trắng thừa ở 2 đầu (trim) và chuyển tất cả thành chữ in hoa 
bookName.trim(); // Loại bỏ khoảng trắng ở đầu và cuối
bookName.toUpperCase();
console.log("Chuỗi sau khi loại bỏ khoảng trắng và chuyển thành in hoa" bookName.toUpperCase().trim());

// Têm tác giả: Chuyển thành chữ in hao 
console.log("Tên tác giả sau khi chuyển thành chữ in hoa: ", authorName.toUpperCase);

// Tạo mã định danh (BookID): 
// - Mã sách đc tạo tự động theo công thức: 3 ký tự đầu tiên của Tên tác giả + 
// Năm xuất bản + một số ngẫu nhiên từ 1 đến 1000
// Lấy ra 3 ký tự đầu tiên của tên tác giả
console.log("3 ký từ đầu tên tác giả: ",authorName.slice(0, 3));
console.log("Năm xuất bản: ", pulish);
console.log("Số ngẫu nhiên từ 1 đến 1000: ",Math.ceil(Math.random() * 1000));

let bookCode = `${authorName(0, 3)}${pulish}-${Math.ceil(Math.random() * 1000)}`
console.log("Mã sách: ",bookCode);

// Tính tán số liệu: 
// - Tuổi của sách: Tính xem sách đã xuất bản được bao nhiều năm
// (Lấy năm hiện tại là 2026 trừ đi năm xuất bản)
// - Tổng giá trị nhập kho: Giá tiền x Số lượng 

console.log("THời gian hiện tại: ", new Date());

// Lấy ra năm 
let year = new Date().getFullYear;
let month = new Date().getMonth;
let day = new Date().getDate;
let hour = new Date().getHours;
let minute = new Date().getMinutes;
let second = new Date().getSeconds;
let milisecond = new Date().getMilliseconds;

console.log("Năm hiện tại: ", year);
console.log("Tháng hiện tại: ", month);

// Tính tuổi sách
let bookAge = year - pulish;
console.log("Tuổi của sách: ", bookAge);

// Tính tổng giá trị
let totalPrice = price * quantity;
console.log("Tổng giá trị của kho sách: ", totalPrice);

// In ra phiếu nhập kho
console.log(`
    --- PHIẾU NHẬP KHO ---
    Mã sách: ${bookCode}
    Tên sách: ${bookName.trim().toUpperCase()}
    Tác giả: ${authorName.toUpperCase()}
    Năm xuất bản: ${pulish}
    Tuổi sách: ${bookAge} năm
    Tổng giá trị: ${totalPrice} VND
    Ngăn kệ gợi ý: Kệ số ${Math.ceil(Math.random() * 10)} (Số ngẫu nhiên từ 1-10 tạo ra bằng Math Object)    
`);

