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
        <div class="form__title">Complete your account</div>
        <form action="#" method="POST">
          <input class="form__imp" type="email" placeholder="Create a password"/>
          <div class="form__password-reloader">
            <img src="../public/img/Rectangle4.2.svg" alt="reloader">
            <img src="../public/img/Rectangle4.2.svg" alt="reloader">
            <img src="../public/img/Rectangle4.3.svg" alt="reloader">
          </div>
          <input class="form__imp" type="password" placeholder="Confirm password"/><br/>
          <input class="custom-checkbox" type="checkbox" id="checkbox5" name="checkbox5"/>
          <label for="checkbox5">I agree to the myFixer.com &nbsp;<a class="form__link" href="#" target="_blank">Terms of Service</a></label><br/>
          <input class="custom-checkbox" type="checkbox" id="checkbox6" name="checkbox6"/>
          <label for="checkbox6">I agree to the myFixer.com &nbsp;<a class="form__link" href="#" target="_blank">Privacy Policy</a></label>
        </form><br/>
        <br/>
        <button class="form__btn">Done!</button>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '../helpers/api';

export default {
  name: 'SignUp4',
  // components: {
  //   CustomButton,
  // },
  data() {
    return { SignUp4: [] }
  },

  beforeCreate() {
    apiService.get('/SignUp4')
      .then((res) => {
        console.log(res);
        this.SignUp4 = res.data.SignUp4
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
</script>

<style>
.form__password-reloader {
  width: 100%;
  text-align: center;
}
.form__password-reloader img {
  width: 32%;
}
</style>