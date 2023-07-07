<script>
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{minute}</div>
    <div class="info-bar__icons">
      <img src="./assets/chart-bar.svg" alt="chart-bar" />
      <img src="./assets/wi-fi.svg" alt="wi-fi" />
      <img src="./assets/battery.svg" alt="battery" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      <div>역삼1동</div>
      <div class="menu-bar__location-icon">
        <img src="./assets/arrow.svg" alt="arrow" />
      </div>
    </div>
    <div class="menu-bar__icons">
      <img src="./assets/search.svg" alt="search" />
      <img src="./assets/menu.svg" alt="menu" />
      <img src="./assets/alert.svg" alt="alert" />
    </div>
  </div>
</header>

<main>
  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<footer>
  <div class="footer-block">
    <div class="footer-icon">
      <img class="footer-icons__img" src="./assets/home.svg" alt="" />
      <div class="footer-icons__desc">
        <span>홈</span>
      </div>
    </div>
  </div>
  <div class="footer-block">
    <div class="footer-icon">
      <img class="footer-icons__img" src="./assets/document.svg" alt="" />
      <div class="footer-icons__desc">
        <span>동네생활</span>
      </div>
    </div>
  </div>
  <div class="footer-block">
    <div class="footer-icon">
      <img class="footer-icons__img" src="./assets/location.svg" alt="" />
      <div class="footer-icons__desc">
        <span>근처</span>
      </div>
    </div>
  </div>
  <div class="footer-block">
    <div class="footer-icon">
      <img class="footer-icons__img" src="./assets/chat.svg" alt="" />
      <div class="footer-icons__desc">
        <span>채팅</span>
      </div>
    </div>
  </div>
  <div class="footer-block">
    <div class="footer-icon">
      <img class="footer-icons__img" src="./assets/user.svg" alt="" />
      <div class="footer-icons__desc">
        <span>나의 당근</span>
      </div>
    </div>
  </div>
</footer>
<div class="media-info-msg">화면 크기를 줄여주세요!</div>
