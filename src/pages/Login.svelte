<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      user$.set(user);
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div>
  <h3>로그인하기</h3>
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
