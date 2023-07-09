<script>
  import Footer from "../components/Footer.svelte";
  import { user$ } from "../store";

  const logout = () => {
    user$.set(null);
    localStorage.removeItem("token");
  };

  console.log($user$);
</script>

<div class="wrapper">
  <div class="title">나의 당근</div>
  <div class="user-info">
    <div class="user-info__img">
      <img src={$user$.photoURL} alt="" />
    </div>
    <div>{$user$.displayName}</div>
    <div>{$user$.email}</div>
  </div>
  <button class="logout-btn" on:click={logout}>로그아웃</button>
</div>
<Footer location="my" />

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 10%;
    font-size: 25px;
    font-weight: 500;
  }

  .title {
    font-size: 23px;
    font-weight: bold;
    color: gray;
  }

  .user-info {
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: lighter;
    color: gray;
  }

  .user-info__img {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    overflow: hidden;
    display: table-cell;
    vertical-align: middle;
  }

  .user-info__img img {
    max-width: 70px;
    max-height: 70px;
  }

  .logout-btn {
    margin: 10px 0px;
    width: 150px;
    height: 50px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 25px;
    border: 1px solid rgba(254, 111, 15, 0.8);
    background-color: transparent;
    color: rgba(254, 111, 15, 0.8);
  }
</style>
