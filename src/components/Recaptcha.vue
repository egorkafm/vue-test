<template>
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
</template>

<script>
import vueRecaptcha from 'vue3-recaptcha2';

export default {
  name: 'vue-Recaptcha',
  components: {
	vueRecaptcha
  },
  data() {
	return { show: false }
  },
  methods: {
    recaptchaVerified(response) {
      console.log(response);
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {
      console.log(response);
    }
  }
};
</script>