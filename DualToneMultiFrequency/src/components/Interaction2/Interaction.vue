<template>
  <div class="container text-center">
    <table class="mx-auto my-5">
      <tr v-for="row in datatable" :key="row.row[0]">
        <td
          v-for="el in row.row"
          :class="{ inactive: !el && el != '0' }"
          :key="el[0]"
          @click="click(el)"
        >
          {{ el > 9 ? el * 2 : el }}
        </td>
        <td>{{ row.freq * 2 }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["datatable"],
  data() {
    return {
      lastClick: undefined,
    };
  },
  methods: {
    click(value) {
      let currentTime = Date.now();
      if (
        (!this.lastClick || currentTime - this.lastClick >= 400) &&
        value !== ""
      ) {
        this.$emit("wasClicked", value);
        this.lastClick = currentTime;
      }
    },
  },
};
</script>

<style lang="scss">
table {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  tr {
    td {
      width: 100px;
      height: 50px;
      border: 1px solid rgb(0, 46, 88);
    }
    &:not(:last-child) {
      td {
        &:not(:last-child):not(.inactive) {
          &:hover,
          &:active {
            color: white;
          }
          &:hover {
            background-color: rgb(0, 69, 134);
          }
          &:active {
            background-color: rgb(0, 29, 56);
          }
        }

        &:last-child {
          background-color: rgb(0, 132, 255);
          &::after {
            content: " Гц";
          }
        }
      }
    }

    &:last-child {
      td {
        background-color: rgb(0, 132, 255);

        &::after {
          content: " Гц";
        }
        &:last-child {
          background-color: transparent;
          &::after {
            content: "";
          }
        }
      }
    }
  }
}
</style>