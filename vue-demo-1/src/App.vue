<template>
  <div>
    <div>胜利者是:{{ result }}</div>
    <div class="row">
      <Cell v-on:click="onClickCell(0, $event)" v-bind:n="n" />
      <Cell v-on:click="onClickCell(1, $event)" v-bind:n="n" />
      <Cell v-on:click="onClickCell(2, $event)" v-bind:n="n" />
    </div>
    <div class="row">
      <Cell v-on:click="onClickCell(3, $event)" v-bind:n="n" />
      <Cell v-on:click="onClickCell(4, $event)" v-bind:n="n" />
      <Cell v-on:click="onClickCell(5, $event)" v-bind:n="n" />
    </div>
    <div class="row">
      <Cell v-on:click="onClickCell(6, $event)" v-bind:n="n" />
      <Cell v-on:click="onClickCell(7, $event)" v-bind:n="n" />
      <Cell v-on:click="onClickCell(8, $event)" v-bind:n="n" />
    </div>
  </div>
</template>

<script>
import Cell from "./Cell.vue";
export default {
  data() {
    return {
      n: 0,
      map: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      result: "",
      winValue: 3,
      bar: 3,
    };
  },
  components: { Cell },
  methods: {
    onClickCell(i, text) {
      console.log(`${i}号被点了, 内容是: ${text}`);
      let x = Math.floor(i / 3);
      let y = i % 3;
      this.map[x][y] = text;
      this.n = this.n + 1;
      console.log(x, y, text);
      if (this.checkH(x, y, text) == true) {
        this.result = text;
      } else if (this.checkV(x, y, text) == true) {
        this.result = text;
      } else if (this.checkS(x, y, text) == true) {
        this.result = text;
      }
    },
    checkH(x, y, text) {
      const map = this.map;
      var value = 1;
      for (var offset = x - 1; offset >= 0; offset--) {
        if (map[offset][y] == text) {
          value += 1;
        } else {
          break;
        }
      }
      for (var offset = x + 1; offset < this.bar; offset++) {
        if (map[offset][y] == text) {
          value += 1;
        } else {
          break;
        }
      }
      console.log(`checkH:${value}`);
      return value >= this.winValue;
    },
    checkV(x, y, text) {
      const map = this.map;
      var value = 1;
      for (var offset = y - 1; offset >= 0; offset--) {
        if (map[x][offset] == text) {
          value += 1;
        } else {
          break;
        }
      }
      for (var offset = y + 1; offset < this.bar; offset++) {
        if (map[x][offset] == text) {
          value += 1;
        } else {
          break;
        }
      }
      console.log(`checkV:${value}`);
      return value >= this.winValue;
    },
    checkS(x, y, text) {
      const map = this.map;
      var value = 1;
      var offsetX = x - 1;
      var offsetY = y - 1;
      for (; offsetX >= 0 && offsetY >= 0; ) {
        if (map[offsetX][offsetY] == text) {
          value += 1;
          offsetX -= 1;
          offsetY -= 1;
        } else {
          break;
        }
      }
      console.log(`checkS1:${value}`);
      if (value >= this.winValue == true) {
        return true;
      }
      offsetX = x + 1;
      offsetY = y + 1;
      for (; offsetX < this.bar && offsetY < this.bar; ) {
        if (map[offsetX][offsetY] == text) {
          value += 1;
          offsetX += 1;
          offsetY += 1;
        } else {
          break;
        }
      }
      console.log(`checkS2:${value}`);
      return value >= this.winValue;
    },
  },
};
</script>

<style>
.row {
  display: flex;
}
</style>
