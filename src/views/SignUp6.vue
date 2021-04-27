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
    <div class="form__email ta-c">
      <img src="../public/img/email-3.svg" width="150px" height="170px" alt="email pic"/>
      <div class="form__title">You are almost ready to go!</div>
      <p>Please check your email to reset your password</p>
      <div class="form__circle-small"> </div>
      <div class="form__circle-middle"></div>
      <div class="form__circle-big"></div>
    </div>
  </div>
</template>

<script>
import apiService from '../helpers/api';

export default {
  name: 'SignUp6',
  // components: {
  //   CustomButton,
  // },
  data() {
    return { SignUp6: [] }
  },

  beforeCreate() {
    apiService.get('/SignUp6')
      .then((res) => {
        console.log(res);
        this.SignUp6 = res.data.SignUp6
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
</script>

<style>
.form__email img {
  /* width: 18%;
  height: 18%; */
  width: 150px;
  height: 170px;
}
.form__email div {
  font-style: normal;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 0.4px;
}
@media (max-width: 460px) {
  .form__email div {
    font-size: 24px;
  }
}
.form__email p {
  font-size: 24px;
}
@media (max-width: 460px) {
  .form__email p {
    font-size: 15px;
  }
}
@media (max-width: 768px) {
  .form__email {
    padding: 110px 0;
  }
}
@media (max-width: 460px) {
  .form__email {
    padding: 80px 0;
  }
}
.form__circle-small {
  position: absolute;
  width: 437px;
  height: 437px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.54);
  border-radius: 50%;
  box-shadow: 0 0 42px rgba(231, 231, 231, 0.43);
  z-index: -1;
}
@media (max-width: 768px) {
  .form__circle-small {
    width: 280px;
    height: 280px;
  }
}
@media (max-width: 460px) {
  .form__circle-small {
    width: 155px;
    height: 155px;
  }
}
.form__circle-middle {
  position: absolute;
  width: 614px;
  height: 614px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(254, 254, 254, 0.54);
  border-radius: 50%;
  box-shadow: 0 0 42px rgba(231, 231, 231, 0.11);
  z-index: -2;
}
@media (max-width: 768px) {
  .form__circle-middle {
    width: 405px;
    height: 405px;
  }
}
@media (max-width: 460px) {
  .form__circle-middle {
    width: 280px;
    height: 280px;
  }
}
.form__circle-big {
  position: absolute;
  width: 700px;
  height: 700px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(254, 254, 254, 0.45);
  border-radius: 50%;
  box-shadow: 0 0 42px rgba(231, 231, 231, 0.36);
  z-index: -3;
}
@media (max-width: 768px) {
  .form__circle-big {
    width: 500px;
    height: 500px;
  }
}
@media (max-width: 460px) {
  .form__circle-big {
    display: none;
  }
}
</style>