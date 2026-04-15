/**
 * Đầu vào : nhập số USD
 * xử lý:
 * tạo biến và nhập số tienDo cần đổi
 * tạo biến và tính tienViet = tienDo*23500
 * Đầu ra: in kết quả ra
 */
let btnTien = document.getElementById("btnTien");
btnTien.onclick = function () {
  let giaTri = document.getElementById("giaTri").value;
  giaTri = Number(giaTri);
  let tienDo = document.getElementById("tienDo").value;
  tienDo = Number(tienDo);
  let tienViet = tienDo * giaTri;
  let rs = " Số tiền quy đổi : " + tienViet + " VNĐ";
  let pInfo_3 = document.getElementById("pInfo_3");
  pInfo_3.innerHTML = rs;
  pInfo_3.classList.add("showInfo");
};
