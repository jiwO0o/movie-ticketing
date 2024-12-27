const movieInfo = localStorage.getItem('movieInfo');
document.getElementById('movieInfo').innerHTML += movieInfo;

const whenInfo = localStorage.getItem('whenInfo');
document.getElementById('whenInfo').innerHTML += whenInfo;

const timeInfo = localStorage.getItem('timeInfo');
document.getElementById('timeInfo').innerHTML += timeInfo;

const theaterInfo = localStorage.getItem('theaterInfo');
document.getElementById('theaterInfo').innerHTML += theaterInfo;

const seatInfo = localStorage.getItem('seatInfo');
document.getElementById('seatInfo').innerHTML += seatInfo;

let seatNum = localStorage.getItem('seatNum');
let price = seatNum * 14000;
let sale = 0;

document.getElementById('seatPrice').innerHTML += `(${seatNum}매)` + '<br>' + `${price}`;
document.getElementById('discount').innerHTML += '<br>' +`-${sale}`;
document.getElementById('finalPrice').innerHTML += '<br>' + `<b>${price - sale}원`;

function gotoPayment() {
    let card = document.getElementById('card').value;

    if (card === "none") {
        alert("결제할 카드를 선택해주세요.");
        return;
    }
    
    location.href="payment.html";
}