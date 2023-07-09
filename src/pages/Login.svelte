<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const moveToHome = () => {
    window.location.hash = "/";
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      user$.set(user);
      localStorage.setItem("token", token);
      moveToHome();
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div class="wrapper">
  <span class="title">Log In</span>
  <div>
    <button class="login-btn" on:click={loginWithGoogle}>
      <img
        class="google-logo"
        src="https://img.freepik.com/free-icon/search_318-265146.jpg"
        alt="Login using Google"
      />
      <span>Google로 로그인하기</span>
    </button>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: start;
    align-items: center;
    gap: 10%;
    margin-top: 20%;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    color: rgba(254, 111, 15, 0.8);
    text-shadow: 2px 2px 2px rgba(254, 111, 15, 0.2);
  }

  .login-btn {
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5px;
    padding: 7px;
    border: 1px solid lightgray;
    background-color: white;
    border-radius: 5px;
  }

  .google-logo {
    width: 20px;
  }
</style>
