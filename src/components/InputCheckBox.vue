<template>
  <div>
    <div
      class="input"
      :class="{ 'input--background': active }"
      @click="(active = !active), checkedInput()"
    >
      <span v-if="active" class="material-icons">
        check
      </span>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import InputsValue from "../Store/Store";

export default {
  name: "InputCheckBox",

  setup() {
    const { checked } = InputsValue();
    const active = ref(false);

    watch(checked, (num) => {
      if (num == false) {
        active.value = false;
      }
    });

    function checkedInput() {
      if (active.value == true) {
        checked.value = true;
      } else {
        checked.value = false;
      }
    }

    return { active, checked, checkedInput };
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 24px;
  height: 24px;
  border: solid 1px #d6dbe4;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }

  &--background {
    background: #4eadc5;
  }

  .material-icons {
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
    margin-left: 2px;
  }
}
</style>
