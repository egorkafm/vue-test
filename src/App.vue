<template>
  <div id="nav">
    <router-link to="/">All Links</router-link> 
    <router-link to="/SignIn1">Sign In 1</router-link>
    <router-link to="/SignIn2">Sign In 2</router-link>
    <router-link to="/SignIn3">Sign In 3</router-link>
    <router-link to="/SignIn4">Sign In 4</router-link>
    <router-link to="/SignUp1">Sign up 1</router-link>
    <router-link to="/SignUp2">Sign up 2</router-link>
    <router-link to="/SignUp3">Sign up 3</router-link>
    <router-link to="/SignUp4">Sign up 4</router-link> 
    <router-link to="/SignUp5">Sign up 5</router-link>
    <router-link to="/SignUp6">Sign up 6</router-link>
    <router-link to="/ProfilePersonal">Profile Personal</router-link>
    <router-link to="/ProfileAccount">Profile Account</router-link>
    <router-link to="/SearchResults">Search Results</router-link>
    <router-link to="/SeachMap">Search Map</router-link>
    <router-link to="/AdminPage">Admin Page</router-link>
    <router-link to="/users">Users</router-link>
  </div>
  <!-- <Header /> -->
  <router-view />
  <!-- <CustomButton /> -->
  <!-- <SignIn1 />
  <SignIn2 /> -->
</template>
<script>

// import Header from '@/components/Header.vue';
// import SignIn1 from '@/views/SignIn1.vue';
// import SignIn2 from '@/views/SignIn2.vue';
// import CustomButton from './components/controllers/button.vue';

export default {
  components: {
    // Header,
    // CustomButton,
    // SignIn1,
    // SignIn2,
  },
  name: 'App'
}
</script>




<style >
* {
  margin:0;
  padding:0;
  text-decoration:none;
  font-family:Roboto,sans-serif;
}
.ta-c {
  text-align: center;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: block;
  padding: 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
