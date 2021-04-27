<template>
  <button class="header__btn">{{ title }}</button>
  <!-- <button class="my-button" :class="{ isBlue: isRed }" @click="incriment" >{{ title }}: {{ count }}</button> -->
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    title: String,
    isRed: Boolean,
  },
  // data() {
  //   return {
  //     count: 1,
  //   }
  // },
  // methods: {
  //   incriment() {
  //     this.count += 1;
  //   }
  // }
}
</script>

<style>
.my-button {
  height: 30px;
  width: 100px;
  background-color: green;
  border-radius: 5px;
  opacity: 0.8;
  border: none;
  outline: none;
  margin: 10px;
}
.my-button:hover {
  opacity: 1; 
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
</style>
