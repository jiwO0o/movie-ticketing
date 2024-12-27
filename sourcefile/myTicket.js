let reservationString = localStorage.getItem('reservation');
let reservations = reservationString ? JSON.parse(reservationString) : [];
const infoContainer = document.querySelector('.info');

if (reservations.length === 0) {
    infoContainer.innerHTML = "<p>예매 내역이 없습니다.</p>";
}
else {
    reservations.forEach((reservation, index) => {
        const reservationDiv = document.createElement('div');
        reservationDiv.className = 'reservation';

        reservationDiv.innerHTML = `
            <div><strong>영화:</strong> ${reservation.movie}</div>
            <div><strong>관람일:</strong> ${reservation.when}</div>
            <div><strong>관람시간:</strong> ${reservation.time}</div>
            <div><strong>관람극장:</strong> ${reservation.theater}</div>
            <div><strong>관람좌석:</strong> ${reservation.seat}</div>
            <button id="cancelBtn" onclick="cancel(${index})">예매 취소</button>
            <br>
        `;

        infoContainer.appendChild(reservationDiv);
    });
}

function cancel(index) {
    reservations.splice(index, 1);
    localStorage.setItem('reservation', JSON.stringify(reservations));
    alert("예매가 취소되었습니다.");
    location.reload();
}