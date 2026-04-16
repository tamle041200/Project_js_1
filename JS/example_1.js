/**
 * Đầu vào : nhập luongNgay và ngayLam
 * xử lý:
 * tạo biến luongNgay và nhập luongNgay
 * tạo biến ngayLam và nhập ngayLam
 * tạo biến và tính luong = luongNgay*ngayLam
 * Đầu ra: in kết quả ra
 */
let btnLuong = document.getElementById("btnLuong");
btnLuong.onclick = function () {
  let luongNgay = document.getElementById("luongNgay").value;
  luongNgay = Number(luongNgay);
  let ngayLam = document.getElementById("ngayLam").value;
  ngayLam = Number(ngayLam);

  let luong = luongNgay * ngayLam;
  let rs = " Tiền lương nhân viên : " + luong;

  let pInfo_1 = document.getElementById("pInfo_1");
  pInfo_1.innerHTML = rs;
  pInfo_1.classList.add("showInfo");
};
