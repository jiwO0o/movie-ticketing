const seatContainer = document.querySelector('.seatContainer');
let mySeat = [];

seatContainer.addEventListener('click', (e) => {
    if (e.target.className === 'seat') {
        e.target.className = 'chosenSeat';
        if (!mySeat.includes(e.target.dataset.seat)) {
            mySeat.push(e.target.dataset.seat);
        }
    }
    else if (e.target.className === 'chosenSeat') {
        e.target.className = 'seat';
        mySeat = mySeat.filter((element) => element !== e.target.dataset.seat);
    }
    updateChosen();
});

function updateChosen() {
    let getChosen = document.getElementById("chosen");
    getChosen.innerHTML = `선택한 좌석: ${mySeat.length > 0 ? mySeat : "없음"}`;
}

function gotoConfirm() {
    if (mySeat.length == 0) {
        alert('좌석을 선택해주세요.');
        return;
    }
    
    localStorage.setItem('seatInfo', mySeat);
    localStorage.setItem('seatNum', mySeat.length);
    location.href = "confirm.html";
}