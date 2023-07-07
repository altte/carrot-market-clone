<script>
  export let location;

  const moveToHome = () => {
    window.location.hash = "/";
  };
</script>

<footer>
  <div class="footer-block">
    <button class="footer-icon" on:click={moveToHome}>
      {#if location === "home"}
        <img class="footer-icons__img" src="./assets/home-solid.svg" alt="" />
      {:else}
        <img class="footer-icons__img" src="./assets/home.svg" alt="" />
      {/if}
      <div class="footer-icons__desc">
        <span>홈</span>
      </div>
    </button>
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
