<template>
  <div>
    <!-- <input v-model="text" v-on:input="$emit('change-in-input', text)" > -->
    <input class="form__imp" v-model="text" :placeholder="placeholder" :type="type" v-on:input="$emit('change-in-input', text)" >
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
  placeholder: String,
  type: String,
  class: String,
  },
  data() {
    return {
      text: '',
    }
  }
}
</script>

<style scoped>
.form__imp {
  width: 100%;
  height: 40px;
  margin: 25px 0 0 0;
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
.form__imp-half {
  display: inline-block;
  width: 48%;
  margin: 25px 7px 0 0;
}
@media (max-width: 768px) {
  .form__imp-half {
    min-width: 100%;
  }
}
.form__imp:focus {
  outline: 0;
  border-left: 2px solid #002396;
}
</style>
