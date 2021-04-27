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
          <input class="form__imp" type="password" placeholder="Confirm password"/><br/>
          <input class="custom-checkbox" type="checkbox" id="checkbox1" name="checkbox1"/>
          <label for="checkbox1">I agree to the myFixer.com &nbsp;<a class="form__link" href="#" target="_blank">Terms of Service</a></label><br/>
          <input class="custom-checkbox" type="checkbox" id="checkbox2" name="checkbox2"/>
          <label for="checkbox2">I agree to the myFixer.com &nbsp;<a class="form__link" href="#" target="_blank">Privacy Policy</a></label>
        </form>
        <br/>
        <br/>
        <div class="g-recaptcha">
          <vue-recaptcha siteKey="6Lf4FrwaAAAAAMNWzcBtP_hWTb_do-ONG57iNojR" 
            :show="show" 
            size="normal" 
            theme="light"
            :tabindex="0"
            @verify="recaptchaVerified"
            @expire="recaptchaExpired"
            @fail="recaptchaFailed"
            ref="vueRecaptcha">
          </vue-recaptcha>
        </div>
        <button class="form__btn">Done!</button>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '../helpers/api';
import vueRecaptcha from 'vue3-recaptcha2';

export default {
  name: 'SignUp2',
  components: {
    vueRecaptcha,
  },
  data() {
    return { 
      SignUp2: [],
      show: true, 
    }
  },

  beforeCreate() {
    apiService.get('/SignUp2')
      .then((res) => {
        console.log(res);
        this.SignUp2 = res.data.SignUp2
      })
      .catch((err) => {
        console.log(err);
      })
  },
  // recaptchaVerified(response) {
  //   console.log(response);
  // },
  // recaptchaExpired() {
  //   this.$refs.vueRecaptcha.reset();
  // },
  // recaptchaFailed() {
  //   console.log(response);
  // }
}
</script>

<style scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #b3d7ff;
}
.custom-checkbox:not(:disabled):active + label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
.custom-checkbox:focus + label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.custom-checkbox:focus:not(:checked) + label::before {
  border-color: #80bdff;
}
.custom-checkbox:checked + label::before {
  border-color: #f2f2f2;
  background-color: rgba(245, 247, 250, 0.5);
  background-image: url(../public/img/Vector.svg);
  background-size: contain;
}
.custom-checkbox:disabled + label::before {
  background-color: #e9ecef;
}
.checkbox {
  margin-bottom: 1em;
}
</style>