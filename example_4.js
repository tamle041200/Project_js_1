/**
 * Đầu vào : nhập chieuDai và chieuRong
 * xử lý
 * Tạo biến và nhập chieuDai
 * tạo biến và nhập chieuRong
 * tạo biến và tính dienTich = chieuDai*chieuRong
 * tạo biến và tính chuVi = ( chieuDai + chieuRong)*2
 * Đầu ra : in kết quả
 */
let btnHCN = document.getElementById("btnHCN");
btnHCN.onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value;
  chieuDai = Number(chieuDai);
  let chieuRong = document.getElementById("chieuRong").value;
  chieuRong = Number(chieuRong);
  let dienTich = chieuDai * chieuRong;
  let chuVi = (chieuDai + chieuRong) * 2;
  let rs_1 = " Diện Tích là : " + dienTich;
  let rs_2 = " Chu vi là : " + chuVi;
  let pInfo_4a = document.getElementById("pInfo_4a");
  pInfo_4a.innerHTML = rs_1;
  pInfo_4a.classList.add("showInfo");
  let pInfo_4b = document.getElementById("pInfo_4b");
  pInfo_4b.innerHTML = rs_2;
  pInfo_4b.classList.add("showInfo");
};
