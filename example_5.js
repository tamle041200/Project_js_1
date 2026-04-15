/**
 * Đầu vào : nhập số có 2 chữ số
 * xử lý
 *  b1: nhập số có 2 chử số number
 *  b2: tạo biến và tính số hàng đơn vị = number%10
 *  b3: tạo biến và tinh số hàng chục = number/10
 *  b4: làm tròn hàng chục = math.flood(hangchuc)
 *  b5: tạo biến và tính tổng của số hàng chục và hàng đơn vị
 * đầu ra : in kết quả tổng ra
 */
let btnTong = document.getElementById("btnTong");
btnTong.onclick = function () {
  let number = document.getElementById("number").value;
  number = Number(number);
  let soChuc = Math.floor(number / 10);
  let soDonVi = number % 10;
  let tong = soChuc + soDonVi;
  let rs = " Tổng của 2 ký tự là : " + tong;
  let pInfo_5 = document.getElementById("pInfo_5");
  pInfo_5.innerHTML = rs;
  pInfo_5.classList.add("showInfo");
};
