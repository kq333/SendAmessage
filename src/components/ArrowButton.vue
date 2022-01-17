<template>
  <div>
    <button class="btn">
      <span class="material-icons">
        {{ text }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ArrowButton",

  props: {
    text: {
      type: String,
      default: "expand_less",
    },
    changeArrow: {
      type: Boolean,
      default: false,
    },
  },

  setup() {},
};
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  background-color: transparent;
  color: #7b8ba5;

  &:hover {
    cursor: pointer;
  }

  &__icon {
    width: 12px;
    height: 6px;
  }
}
</style>
