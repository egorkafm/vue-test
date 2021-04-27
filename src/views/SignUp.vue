<template>
  <div>
    <h1>Sign Up</h1>
    <CustomInput v-on:change-in-input="getName"/>
    <CustomInput v-on:change-in-input="getSurname"/>
    <!-- <button class="my-button" @click="submit">Submit</button> -->
  </div>
</template>

<script>
import CustomInput from '../components/controllers/input';
import apiService from '../helpers/api';
import store from '../helpers/store';

export default {
  name: 'SignUp',
  store,
  apiService,
  components: {
    CustomInput
  },
  data() {
    return {
      dataForSubmit: {
        fname: '',
        lname: '',
        active: true,
      }
    }
  },
  methods: {
    async submit () {
      // await apiService.post('/user', this.dataForSubmit)
      //   .then(() => {
      //     this.$router.push('users');
      //   })
      //   .catch((err) => {
      //     alert(err.response.data)
      //   });
      // this.$store.state.count = 'sssss'
      // this.$store.commit('increment', 10);
      const user = {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiNmUzNzQwNjctZjIyZS00M2EyLTkyM2QtODUzN2Q1MWY3MTdmIiwidCI6MSwiaWF0IjoxNTk5NzUyMjA5LCJleHAiOjQxMDM5NTgxNTIyMDl9.SFUajvp8cSZgAphu661vVRpacSSloMi_dFZGiGh9pkE',
        name: 'My name',
      }
      window.localStorage.setItem('user', JSON.stringify(user));
      console.log(window.localStorage.getItem('user'));
    },
    getName(data) {
      this.dataForSubmit.fname = data
    },
    getSurname(data) {
      this.dataForSubmit.lname = data
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
