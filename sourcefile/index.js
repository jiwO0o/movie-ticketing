window.onload = function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

        if (isLoggedIn === 'true') {
            // 로그인 상태: Login/Sign Up 버튼 숨기기, 마이페이지 버튼 보이기
            document.getElementById('login').style.display = 'none';
            document.getElementById('signup').style.display = 'none';
            document.getElementById('logout').style.display = 'inline-block';
            document.getElementById('mypage').style.display = 'inline-block';
        }
        else {
            // 비로그인 상태: Login/Sign Up 버튼 보이기, 마이페이지 버튼 숨기기
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

function gotomovie(clickedId) {
    location.href='movie.html?' + clickedId;
}