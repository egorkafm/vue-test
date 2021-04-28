<template>
  <div class="container">
    <div class="header__content">
      <div class="header__logo">
        <img src="../public/img/Group.svg" alt="logo"/>
        <span>&nbsp;</span>
        <img src="../public/img/Group81.svg" alt="logo text"/>
      </div>
      <div class="header__login">Already have an account? 
        <button class="header__btn">Log In</button>
      </div>
    </div>
    <div class="form__main">
      <div class="form__content">
        <div class="form__title">Sign up</div>
        <form action="#" method="POST">
          <CustomInput type="email" placeholder="sarah@" v-on:change-in-input="getName"/>
          <CustomInput type="password" placeholder="Password" v-on:change-in-input="getSurname"/>
          <button class="form__btn" @click="submit">Get started</button>
          <input class="form__imp form__imp-half" type="text" placeholder="First name"/>
          <input class="form__imp form__imp-half" type="text" placeholder="Last name"/>
          <input class="form__imp" type="text" placeholder="Username"/>
          <input class="form__imp" type="email" placeholder="E-mail"/>
        </form><br/><br/>
        <!-- <button class="form__btn" @click="submit">Get started</button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import apiService from '../helpers/api';
import CustomInput from '../components/controllers/input';

export default {
  name: 'SignUp1',
  components: {
    CustomInput,
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
      // await axios.get('http://localhost:3000/user/1').then((res) => console.log(res, 'res')).catch((err) => console.log(err, 'err'));
      // console.log(this.dataForSubmit);
      await apiService.post('/user', this.dataForSubmit)
        .then(() => {
          // console.log('okey');
          // console.log(res.data);
          this.$router.push('users');
        })
        .catch(err => {
          alert(err.response.message);
        });
    },
    getName(data) {
      this.dataForSubmit.fname = data
    },
    getSurname(data) {
      this.dataForSubmit.lname = data
    }
  },
  beforeCreate() {
    apiService.get('/SignUp1')
      .then((res) => {
        console.log(res);
        this.SignUp1 = res.data.SignUp1
      })
      .catch((err) => {
        console.log(err.response.data);
      })
  }
}

</script>

<style>
.form__imp-half {
  display: inline-block;
  width: 42%;
  margin: 25px 5px 0 5px;
}

</style>