<template>
  <div class="container">
    <div class="header__content">
      <div class="header__logo">
        <img src="../public/img/Group.svg" alt="logo"/>
        <span>&nbsp;</span>
        <img src="../public/img/Group81.svg" alt="logo text"/>
      </div>
      <div class="header__login">Back to
        <!-- <button class="header__btn">Sign in</button> -->
        <CustomButton title="Sign in" />
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
import CustomButton from '../components/controllers/button';

export default {
  name: 'SignIn3',
  components: {
    CustomButton,
  },
  data() {
    return { SignIn3: [] }
  },

  beforeCreate() {
    apiService.get('/SignIn3')
      .then((res) => {
        console.log(res);
        this.SignIn3 = res.data.SignIn3
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  background-color: #f9fafc;
}
.header__logo {
  margin: 20px 0 0 140px;
  white-space: nowrap;
}
@media (max-width: 960px) {
  .header__logo {
    margin: 20px 0 0 100px;
  }
}
@media (max-width: 768px) {
  .header__logo {
    margin: 20px 15px 0 60px;
  }
}
@media (max-width: 460px) {
  .header__logo {
    margin: 10px 5px 0 10px;
  }
}
.header__login {
  margin: 20px 140px 0 0;
  white-space: nowrap;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.28px;
  color: #222428;
  text-align: end;
}
@media (max-width: 960px) {
  .header__login {
    margin: 20px 100px 0 0;
  }
}
@media (max-width: 768px) {
  .header__login {
    margin: 20px 60px 0 15px;
  }
}
@media (max-width: 460px) {
  .header__login {
    margin: 10px 10px 0 5px;
    white-space: pre-line;
  }
}
.header__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header__btn {
  background-color: #f9fafc;
  border: none;
  border-radius: 15px;
  color: #2a74db;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.28px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.4s;
  padding: 5px;
}
.header__btn:hover {
  background-color: #2a74db;
  color: #fff;
}
.form__main {
  margin: 0 auto;
  background-color: #f9fafc;
  padding: 150px 200px;
}
@media (max-width: 960px) {
  .form__main {
    padding: 150px 100px;
  }
}
@media (max-width: 768px) {
  .form__main {
    padding: 100px 0;
  }
}
@media (max-width: 460px) {
  .form__main {
    padding: 50px 5px;
  }
}
.form__content {
  margin: 0 auto;
  padding: 75px 115px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 5px 40px rgba(0, 45, 113, 0.06);
  border-radius: 10px;
  z-index: 10;
}
@media (max-width: 768px) {
  .form__content {
    max-width: 100%;
    padding: 60px 55px;
  }
}
@media (max-width: 460px) {
  .form__content {
    padding: 60px 40px;
  }
}
.form__title {
  font-family: "Exo 2", sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.4px;
  color: #002396;
}
@media (max-width: 460px) {
  .form__title {
    font-size: 24px;
  }
}
.form__imp {
  width: 98%;
  height: 40px;
  margin-top: 25px;
  display: block;
  padding-left: 15px;
  border: 1px solid #f2f2f2;
}
@media (max-width: 768px) {
  .form__imp {
    min-width: 96%;
  }
}
@media (max-width: 460px) {
  .form__imp {
    min-width: 94%;
  }
}
.form__imp:focus {
  outline: 0;
  border-left: 2px solid #002396;
}
.form__text {
  color: #222428;
  text-align: end;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.28px;
  padding: 15px 0;
}
.form__btn {
  margin-left: auto;
  width: 190px;
  height: 40px;
  background-color: #0ad69c;
  border: none;
  border-radius: 2px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  display: block;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.4px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.form__btn:hover {
  background-color: #fff;
  outline: solid 1px #0ad69c;
  color: #222428;
}
.form__email {
  max-width: 100%;
  margin: 0 auto;
  padding: 240px 0;
  position: relative;
  z-index: 1;
}
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