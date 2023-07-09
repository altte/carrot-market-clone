<script>
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Loading from "./pages/Loading.svelte";
  import MyPage from "./pages/MyPage.svelte";
  import Router from "svelte-spa-router";
  import "./css/style.css";
  import { user$ } from "./store";
  import { onMount } from "svelte";
  import {
    getAuth,
    GoogleAuthProvider,
    signInWithCredential,
  } from "firebase/auth";

  const auth = getAuth();
  let isLoading = true;

  const checkLogin = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return (isLoading = false);
      const credential = GoogleAuthProvider.credential(null, token);
      const result = await signInWithCredential(auth, credential);
      const user = result.user;
      user$.set(user);
      isLoading = false;
    } catch (e) {
      console.log(e);
      isLoading = false;
    }
  };

  const routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/write": Write,
    "/mypage": MyPage,
    "/*": NotFound,
  };

  onMount(() => {
    checkLogin();
  });
</script>

{#if isLoading}
  <Loading />
{:else if !$user$}
  <Login />
{:else}
  <Router {routes} />
{/if}
