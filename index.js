// BT1:
// input: nhập vào ngày/tháng/năm
// progress:
document.getElementById('tomorrow').onclick = function () {
    let day = +document.getElementById('day').value;
    let month = +document.getElementById('month').value;
    let year = +document.getElementById('year').value;

    let result = "";

    switch (month) {
        case 2:
            if (day === 28) {
                result = "01/03/" + year;
            } else {
                result = day + 1 + "/" + month + "/" + year;
            }
            break;
        case 12:
            if (day === 31) {
                result = "01/01/" + (year + 1);
            } else {
                result = day + 1 + "/" + month + "/" + year;
            }
            break;
        case 1: case 3: case 5: case 7: case 8: case 10:
            if (day === 31) {
                result = "01/" + (month + 1) + "/" + year;
            } else {
                result = day + 1 + "/" + month + "/" + year;
            }
        default:
            if (day === 30) {
                result = "01/" + (month + 1) + "/" + year;
            } else {
                result = day + 1 + "/" + month + "/" + year;
            }
            break;
    }
    document.getElementById('showTomorrow').innerHTML = result;
}

document.getElementById('yesterday').onclick = function () {
    let day = +document.getElementById('day').value;
    let month = +document.getElementById('month').value;
    let year = +document.getElementById('year').value;

    let result = "";

    switch (month) {
        case 1:
            if (day === 1) {
                result = "31/12/" + (year - 1);
            } else {
                result = (day - 1) + "/" + month + "/" + year;
            }
            break;
        case 3:
            if (day === 1) {
                result = "28/02/" + year;
            } else {
                result = (day - 1) + "/" + month + "/" + year;
            }
            break;
        case 5: case 7: case 8: case 10: case 12:
            if (day === 1) {
                result = "30/" + (month - 1) + "/" + year;
            } else {
                result = (day - 1) + "/" + month + "/" + year;
            }
            break;
        default:
            if (day === 1) {
                result = "31/" + (month - 1) + "/" + year;
            } else {
                result = (day - 1) + "/" + month + "/" + year;
            }

            break;
    }
    document.getElementById('showYesterday').innerHTML = result;
}
// output: show ra ngày/tháng/năm của ngày mai và ngày/tháng/năm của hôm qua

// BT2: 
// input: nhập vào ngày tháng năm
document.getElementById('total').onclick = function () {
    let month2 = +document.getElementById('month2').value;
    let year2 = +document.getElementById('year2').value;

    let result2 = "";
    // Năm nhuận là những năm chia hết cho 4 hoặc năm đó chia hết cho 100 và 400
    switch (month2) {
        case 2:
            if ((year2 % 100 === 0 && year2 % 400 === 0) ||
                (year2 % 4 === 0)) {
                result2 = "Đây là năm nhuận và có 29 ngày";
            } else {
                result2 = "28 ngày";
            }
            break;
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            result2 = "31 ngày";
            break;

        default:
            result2 = "30 ngày";
            break;
    }
    document.getElementById('showTotal').innerHTML = result2;
}

// BT3: Đọc số có 3 chữ số
// input: nhập vào dãy số có ba chữ số 253
document.getElementById('read').onclick = function () {
    let number = +document.getElementById('number').value;

    let hangDonVi = 0;
    let hangChuc = 0;
    let hangTram = 0;

    let cachDocHangTram = "";
    let cachDocHangChuc = "";
    let cachDocHangDonVi = "";

    hangDonVi = number % 10; //253 chia 10 = 25.3, % là lấy đc phần dư 3
    let temp = Math.floor(number / 10); // 253 / 10 = 25.3, lấy phần nguyên là 25
    hangChuc = temp % 10; // 25 % 10 = 2.5, lấy phần dư = 5
    hangTram = Math.floor(temp / 10); // 25 / 10 = 2.5, lấy phần nguyên = 2

    console.log(temp);
    switch (hangTram) {
        case 1:
            cachDocHangTram = "Một trăm";
            break;
        case 2:
            cachDocHangTram = "Hai trăm";
            break;
        case 3:
            cachDocHangTram = "Ba trăm";
            break;
        case 4:
            cachDocHangTram = "Bốn trăm";
            break;
        case 5:
            cachDocHangTram = "Năm trăm";
            break;
        case 6:
            cachDocHangTram = "Sáu trăm";
            break;
        case 7:
            cachDocHangTram = "Bảy trăm";
            break;
        case 8:
            cachDocHangTram = "Tám trăm";
            break;
        default:
            cachDocHangTram = "Chín trăm";
            break;
    }
    switch (hangChuc) {
        case 0:
            if (hangDonVi === 0) {
                cachDocHangChuc = "";
            } else {
                cachDocHangChuc = "lẻ";
            }
            break;
        case 1:
            cachDocHangChuc = "mười";
            break;
        case 2:
            cachDocHangChuc = "hai mươi";
            break;
        case 3:
            cachDocHangChuc = "ba mươi";
            break;
        case 4:
            cachDocHangChuc = "bốn mươi";
            break;
        case 5:
            cachDocHangChuc = "năm mươi";
            break;
        case 6:
            cachDocHangChuc = "sáu mươi";
            break;
        case 7:
            cachDocHangChuc = "bảy mươi";
            break;
        case 8:
            cachDocHangChuc = "tám mươi";
            break;
        default:
            cachDocHangChuc = "chín mươi";
            break;
    }
    switch (hangDonVi) {
        case 0:
            cachDocHangDonVi = "";
            break;
        case 1:
            if (hangChuc === 0 || hangChuc === 1) {
                cachDocHangDonVi = "một"
            } else {
                cachDocHangDonVi = "mốt";
            }
            break;
        case 2:
            cachDocHangDonVi = "hai";
            break;
        case 3:
            cachDocHangDonVi = "ba";
            break;
        case 4:
            cachDocHangDonVi = "bốn";
            break;
        case 5:
            if (hangChuc === 0) {
                cachDocHangDonVi = "năm";
            } else {
                cachDocHangDonVi = "lăm";
            }
            break;
        case 6:
            cachDocHangDonVi = "sáu";
            break;
        case 7:
            cachDocHangDonVi = "bảy";
            break;
        case 8:
            cachDocHangDonVi = "tám";
            break;
        default:
            cachDocHangDonVi = "chín";
            break;
    }

    document.getElementById('reading').innerHTML = cachDocHangTram + " " + cachDocHangChuc + " " + cachDocHangDonVi;
}

// BT4: 
document.getElementById('space').onclick = function () {
    let studentName1 = document.getElementById('studentName1').value;
    let studentName2 = document.getElementById('studentName2').value;
    let studentName3 = document.getElementById('studentName3').value;
    let x1 = +document.getElementById('x1').value;
    let x2 = +document.getElementById('x2').value;
    let x3 = +document.getElementById('x3').value;
    let y1 = +document.getElementById('y1').value;
    let y2 = +document.getElementById('y2').value;
    let y3 = +document.getElementById('y3').value;
    let xschool = +document.getElementById('xschool').value;
    let yschool = +document.getElementById('yschool').value;

    //Công thức tính khoảng cách giữa 2 điểm có tọa độ:
    // Căn bậc 2 của (xschool - x1)^2 + (yschool - y1)^2

    let space1 = Math.sqrt((xschool - x1) * (xschool - x1) + (yschool - y1) * (yschool - y1));
    let space2 = Math.sqrt((xschool - x2) * (xschool - x2) + (yschool - y2) * (yschool - y2));
    let space3 = Math.sqrt((xschool - x3) * (xschool - x3) + (yschool - y3) * (yschool - y3));

    let result = space1;
    let name = studentName1;

    if (result < space2) {
        result = space2;
        name = studentName2
    }
    if (result < space3) {
        result = space3;
        name = studentName3;
    }
    document.getElementById('showSpace').innerHTML = name;

}