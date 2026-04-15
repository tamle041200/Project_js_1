/**
 * Đầu vào : nhập 5 số thực
 * xử lý
 * Tạo biến và nhập số thực number_1
 * Tạo biến và nhập số thực number_2
 * Tạo biến và nhập số thực number_3
 * Tạo biến và nhập số thực number_4
 * Tạo biến và nhập số thực number_5
 * Tạo biến và tính trungBinh=(number_1 + number_2 + number_3 + number_4 + number_5)/5
 * Đầu ra : in kết quả
 */
let btnTrungBinh = document.getElementById("btnTrungBinh");
btnTrungBinh.onclick = function () {
  let number_1 = document.getElementById("number_1").value;
  number_1 = Number(number_1);
  let number_2 = document.getElementById("number_2").value;
  number_2 = Number(number_2);
  let number_3 = document.getElementById("number_3").value;
  number_3 = Number(number_3);
  let number_4 = document.getElementById("number_4").value;
  number_4 = Number(number_4);
  let number_5 = document.getElementById("number_5").value;
  number_5 = Number(number_5);
  let trungBinh = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;
  let rs = "Tổng trung bình của 5 số thực : " + trungBinh;
  let pInfo_2 = document.getElementById("pInfo_2");
  pInfo_2.innerHTML = rs;
  pInfo_2.classList.add("showInfo");
};
