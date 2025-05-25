/**
 * Tạo biến arraySoNguyen chứa mảng rỗng để lưu số khi người dùng thêm vào
 * khi người dùng bấm thêm số thì sẽ push giá trị vào mảng và in ra
 */

function getEleID(id) {
    return document.getElementById(id);
}

let arraySoNguyen = [];

function addNumber() {
    let soNguyen = getEleID("arrayInput").value * 1;
    if(isNaN(soNguyen)) {
        return getEleID("inMang").innerHTML = "Mảng không hợp lệ. Vui lòng nhập lại";
    } else {
        arraySoNguyen.push(soNguyen);
        getEleID("inMang").innerHTML = `Các số trong mảng là: ${arraySoNguyen}`;
    }
    
}

//Tổng các số dương trong mảng
/**
 * tạo biến tongDuong = 0;
 * Tạo vòng lặp for từ 0 đến nhỏ hơn arraySoNguyen.length
 * kiểm tra nếu phần tử lớn hơn 0 thì biến tongDuong += arraySoNguyen[i]
 * in ra màn hình kết quả cuối cùng bằng innerHTML
 */

function tongDuong() {
    let tongDuong = 0;

    for (let i = 0; i < arraySoNguyen.length; i++) {
        if (arraySoNguyen[i] > 0) {
            tongDuong += arraySoNguyen[i];
        }
    }
    getEleID("inTongDuong").innerHTML = `Tổng các số dương là: ${tongDuong}`;
}

//Đếm các số dương trong mảng
/**
 * tạo biến count = 0 để lưu số lần đếm được
 * tạo vòng for i = 0 , i nhỏ hơn arraySoNguyen.length
 * kiểm tra nếu arraySoNguyen[i] > 0 thì count++ tăng 1 đơn vị
 * in kết quả ra màn hình
 */

getEleID("demDuong").onclick = function () {
    let count = 0;
    let content = "";

    for (let i = 0; i < arraySoNguyen.length; i++) {
        if (arraySoNguyen[i] > 0) {
            count++;
            content += arraySoNguyen[i] + " ";
        }
    }
    getEleID("inDemDuong").innerHTML = `Số dương trong mảng là: ${count} ( ${content})`;
}

//Tìm số nhỏ nhất trong Mảng
/**
 * Tạo biến min bằng giá trị đầu của mảng arraySoNguyen[0]
 * tạo vòng lặp for = 0, i nhỏ hơn arraySoNguyen.length
 * kiểm tra nếu min > arraySoNguyen[i] thì gán min = arraySoNguyen[i]
 * xuất kết quả ra màn hình
 */

getEleID("min").onclick = function () {
    let min = arraySoNguyen[0];
    for (let i = 0; i < arraySoNguyen.length; i++) {
        if (min > arraySoNguyen[i]) {
            min = arraySoNguyen[i];
        }
    }
    getEleID("inMin").innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;
}

//Tìm số dương nhỏ nhất trong mảng
/**
 * khai báo biến chứa mảng mới
 * kiểm tra điều kiện nếu có số dương thì thêm vào mảng mới
 * kiểm tra nếu trong mảng mới có số dương
 * + thì tạo biến min giữ giá trị đầu
 * + so sánh min với các giá trị trong mảng nếu biến trong mảng hơn min
 *      + thì gán lại cho min đến khi kết thúc mảng
 * + in kết quả ra màn hình
 * không có số dương
 * + in thông báo không có
 */

getEleID("minDuong").onclick = function () {
    let arrayMin = [];

    for (let i = 0; i < arraySoNguyen.length; i++) {
        if (arraySoNguyen[i] > 0) {
            arrayMin.push(arraySoNguyen[i]);
        }
    }

    if (arrayMin.length > 0) {
        let min = arrayMin[0];
        for (let i = 0; i < arrayMin.length; i++) {
            if (min > arrayMin[i]) {
                min = arrayMin[i];
            }
        }
        getEleID("inMinDuong").innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;

    } else {
        getEleID("inMinDuong").innerHTML = "Không có số dương trong mảng";
    }
}

//Tìm số chẵn cuối cùng trong mảng
/**
 * tạo biến soChan chứa giá trị đầu của mảng arraySoNguyen[0]
 * tạo vòng lặp for = 0, i nhỏ hơn arraySoNguyen.length
 * nếu phần tử tại vị trí đó arraySoNguyen[i] chia hết cho 2 ( % 2 === 0 )
 * + thì gán lại giá trị tại vị trí đó cho biến soChan
 * xuất kết quả ra màn hình
 */

getEleID("chanCuoi").onclick = function() {
    let soChan = arraySoNguyen[0];

    for(let i = 0; i < arraySoNguyen.length; i++) {
        if(arraySoNguyen[i] % 2 === 0) {
            soChan = arraySoNguyen[i];
        } else {
            return getEleID("inChanCuoi").innerHTML = -1;
        }
    }
    getEleID("inChanCuoi").innerHTML = `Số chẵn cuối cùng trong mảng là: ${soChan}`;
}

// Đổi chỗ 2 giá trị theo vị trí
/**
 * tạo 2 biến index để nhận giá trị người dùng nhập vào
 * kiểm tra xem nhập vào có hợp lệ với độ dài mảng không
 * + nếu có tạo biến temp nhận giá trị vị trí thứ 1 và hoán đổi với vị trí thứ 2 và in kết quả ra màn hình
 * + nếu không xuất thông báo không hợp lệ
 */

getEleID("doiCho").onclick = function() {
    let index1 = getEleID("viTri1").value * 1;
    let index2 = getEleID("viTri2").value * 1;

    if((index1 >= 0 && index1 < arraySoNguyen.length) && (index2 >= 0 && index2 < arraySoNguyen.length)) {
        let temp = arraySoNguyen[index1];
        arraySoNguyen[index1] = arraySoNguyen[index2];
        arraySoNguyen[index2] = temp;

        getEleID("inDoiCho").innerHTML = `Mảng sau khi đổi chỗ là: ${arraySoNguyen}`;
    } else {
        return getEleID("inDoiCho").innerHTML = "Vị trí không hợp lệ";
    }
}

// Sắp xếp tăng dần
/**
 * tạo vòng lặp for i = 0 và i < arraySoNguyen.length - 1
 * + tạo vòng for thứ 2 j = i + 1 và j < arraySoNguyen.length
 * kiểm tra nếu giá trị hiện tại lớn hơn giá trị so sánh thì đổi chỗ
 * + arraySoNguyen[i] > arraySoNguyen[j] thì tạo biến tạo và đổi vị trí
 * in kết quả ra màn hình
 */

getEleID("tangDan").onclick = function() {

    for(let i = 0; i < arraySoNguyen.length - 1; i++) {
        for(let j = i + 1; j < arraySoNguyen.length; j++) {
            if(arraySoNguyen[i] > arraySoNguyen[j]) {
                let temp = arraySoNguyen[i];
                arraySoNguyen[i] = arraySoNguyen[j];
                arraySoNguyen[j] = temp;
            }
        }
    }
    getEleID("inTangDan").innerHTML = `Sắp xếp tăng dần: ${arraySoNguyen}`;
}

// Số nguyên tố đầu tiên
/**
 * Số nguyên tố là số lớn hơn 1
 * Tạo hàm kiểm tra số nguyên tố trả về giá trị true hoặc false
 * Tạo vòng lặp for.
 * Kiểm tra điều kiện của hàm kiemtra 
 * + nếu là true thì in ra số nguyên tố đầu tiên và dừng lại
 * + false thì in ra không có số nguyên tố
 */

function kiemTra(num) {
    if(num <=1 ) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

getEleID("soNguyenTo").onclick = function() {
    for(let i = 0; i < arraySoNguyen.length; i++) {
        if(kiemTra(arraySoNguyen[i])) {
            getEleID("inSoNguyenTo").innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${arraySoNguyen[i]}`;
            return;
        }
    }
    getEleID("inSoNguyenTo").innerHTML = "Không có số nguyên tố";
}

/**
 * tạo biến count giá trị bằng 0
 * tạo vòng lặp for duyệt từ 0 đến < arraySoNguyen.lenght
 * kiểm tra điều kiện có phải là số nguyên không bằng Number.isInteger
 * + Nếu là true thì biến count sẽ tăng lên 1. lặp lại đến cuối mảng
 * in kết quả ra màn hình
 */

getEleID("demSoNguyen").onclick = () => {
    let count = 0;
    for(let i = 0; i < arraySoNguyen.length; i++) {
        if(Number.isInteger(arraySoNguyen[i]) === true) {
            count++;
        }
    }
    getEleID("inSoNguyen").innerHTML = `Số nguyên: ${count}`;
}

/**
 * tạo 2 biến soAm và soDuong giá trị ban đầu = 0
 * tạo vòng lặp for duyệt từ 0 đến < arraySoNguyen.lenght
 * kiểm tra điều kiện arraySoNguyen[i] < 0 thì biến soAm tăng lên 1
 *                    arraySoNguyen[i] > 0 thì biến soDuong tăng lên 1 
 * kiểm tra 3 điều kiện:
 * + nếu soAm < soDuong thì in ra So Am < So Duong
 * + nếu soAm > soDuong thì in ra So Am > So Duong
 * + nếu soAm = soDuong thì in ra So Am = So Duong
 */

getEleID("soSanh").onclick = () => {
    let soAm = 0;
    let soDuong = 0;

    for( let i = 0; i < arraySoNguyen.length; i++) {
        if(arraySoNguyen[i] < 0) {
            soAm++;
        } else if (arraySoNguyen[i] > 0){
            soDuong++;
        }
    }
    if(soAm > soDuong) {
        getEleID("inSoSanh").innerHTML = `Số âm > Số dương`;
    } else if( soAm < soDuong) {
        getEleID("inSoSanh").innerHTML = `Số âm < Số dương`;
    } else if( soAm = soDuong) {
        getEleID("inSoSanh").innerHTML = `Số âm = Số dương`;
    }
}