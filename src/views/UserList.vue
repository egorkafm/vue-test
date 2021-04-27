<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>List User</h1>
    <p v-for="user in users" :key="user.id">
      <b>Fist Name</b>
      {{user.fname}}
      <b>Surname</b>
      {{user.lname}}
    </p>
  </div>
</template>

<script>
import apiService from '../helpers/api'
// @ is an alias to /src

export default {
  name: 'UserList',
  data() {
    return { users: [] }
  },

  beforeCreate() {
    apiService.get('/users')
      .then((res) => {
        console.log(res);
        this.users = res.data.users
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
</script>

