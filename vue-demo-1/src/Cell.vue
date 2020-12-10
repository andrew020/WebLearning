<template>
  <div>
    {{ step }}
    <div class="cell" v-on:click="onClickSelf">
      <div v-if="a">{{ text }}</div>
      <div v-else v-on:click="a = true"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["n"],
  data() {
    // ES6 语法
    return { a: false, text: "", step: "0" };
  },
  methods: {
    onClickSelf() {
      if (this.text !== "") {
        return;
      }
      this.a = true;
      this.step = this.n;
      this.text = this.n % 2 == 0 ? "X" : "O";
      this.$emit("click", this.text);
    },
  },
};
</script>

<style>
.cell {
  color: red;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
}
</style>
