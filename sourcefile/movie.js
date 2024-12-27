window.onload = function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('signup').style.display = 'none';
        document.getElementById('logout').style.display = 'inline-block';
        document.getElementById('mypage').style.display = 'inline-block';
    }
    else {
        document.getElementById('login').style.display = 'inline-block';
        document.getElementById('signup').style.display = 'inline-block';
        document.getElementById('logout').style.display = 'none';
        document.getElementById('mypage').style.display = 'none';
    }
};

function logout() {
    sessionStorage.clear();
    location.reload();
}

let posters = ["cheongseol.jpg", "firefighter.jpg", "moana.jpg"];
let titles = ["청설", "소방관", "모아나2"];
let genres = ["드라마", "드라마", "애니메이션"];
let directors = ["조선호", "곽경택", "데이브 데릭 주니어"];
let actors = [
    "홍경, 노윤서, 김민주",
    "주원, 곽도원, 유재명, 이유영, 김민재, 오대환, 이준혁, 장영남",
    "아우이 크라발호, 드웨인 존슨"];
let releases = ["2024.11.06", "2024.12.04", "2024.11.27"];

let temp = location.href.split("?");
let index = temp[1];

let getPoster = document.getElementById("poster");
getPoster.src = posters[index];
let getTitle = document.getElementById("title");
getTitle.innerHTML += titles[index];
let getGenre = document.getElementById("genre");
getGenre.innerHTML += genres[index];
let getDirector = document.getElementById("director");
getDirector.innerHTML += directors[index];
let getActor = document.getElementById("actor");
getActor.innerHTML += actors[index];
let getRelease = document.getElementById("release");
getRelease.innerHTML += releases[index];

function gotoBooking() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
        alert('예매하려면 로그인이 필요합니다.');
        location.href = "login.html";
    }
    else {
        localStorage.setItem('movieInfo', titles[index]);
        location.href = "booking.html";
    }
}