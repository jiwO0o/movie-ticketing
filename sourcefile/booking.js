function gotoSeat() {
    let theater = document.getElementById('theater');
    let when = document.getElementById('when');
    let time = document.getElementById('time');

    if (theater.value === "none" || when.value === "none" || time.value === "none") {
        alert("모든 항목을 선택해주세요.");
        return;
    }

    localStorage.setItem('theaterInfo', theater.options[theater.selectedIndex].text);
    localStorage.setItem('whenInfo', when.options[when.selectedIndex].text);
    localStorage.setItem('timeInfo', time.options[time.selectedIndex].text);

    location.href = "seat.html";
}