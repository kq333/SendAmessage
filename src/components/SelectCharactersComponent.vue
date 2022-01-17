<template>
  <div class="container">
    <div class="table" :class="{ 'table--clickedBtn': active }">
      <div class="table__select">
        <div class="table__select__name">{{ ClickedCharacter }}</div>
        <div @click="active = !active" class="table__select__btn">
          <span v-if="!active" class="material-icons">
            expand_less
          </span>
          <span v-else class="material-icons">
            expand_more
          </span>
        </div>
      </div>
      <div class="table__characters" v-if="active">
        <div class="table__characters__select">
          <div
            class="table__characters__select__list"
            v-for="(item, index) in FetchedData.results"
            :key="index"
            :value="JSON.stringify(item)"
          >
            <p @click="getData(item)">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputsValue from "../Store/Store";
import { ref } from "vue";

export default {
  name: "SelectCharactersComponent",

  setup(props, { emit }) {
    const { FetchedData, ClickedCharacter } = InputsValue();

    const active = ref(false);

    function getData(item) {
      active.value = false;
      emit("ItemList", item);
    }

    return { FetchedData, active, getData, ClickedCharacter };
  },
};
</script>

<style scoped lang="scss">
@mixin scrollbars($size, $front-color, $back-color) {
  &::-webkit-scrollbar {
    width: $size;
    height: $size;
  }

  &::-webkit-scrollbar-thumb {
    background: $front-color;
    border-radius: 2px;
    background: #c4c4c4;
    border-right: 4px #ffffff solid;
  }

  &::-webkit-scrollbar-track {
    background: $back-color;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

.container {
  max-width: 460px;

  .table {
    max-width: 460px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    height: 34px;
    box-sizing: border-box;

    @media (width: 425px) {
      width: 350px;
    }

    @media (width: 320px) {
      width: 310px;
    }

    &--clickedBtn {
      border-radius: 0;
      border: 1px solid #e0e0e0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    &__select {
      display: grid;
      grid-template-columns: 418px 42px;
      position: relative;

      @media (width: 375px), (width: 425px) {
        grid-template-columns: 308px 42px;
      }

      @media (width: 320px) {
        grid-template-columns: 258px 52px;
      }

      &__name {
        display: flex;
        align-items: center;
        margin-left: 16px;
        font-size: 14px;
        line-height: 18px;
        color: #324b72;
        max-width: 443px;

        @media (width: 375px) {
          width: 330px;
        }

        @media (width: 320px) {
          width: 190px;
        }
      }

      &__btn {
        padding: 4px;
        color: #7b8ba5;

        @media (width: 320px) {
          display: flex;
          justify-content: flex-end;
        }

        @media (width: 375px), (width: 425px) {
          display: flex;
          justify-content: flex-end;
        }

        .material-icons {
          &:hover {
            cursor: pointer;
          }
        }
      }
    }

    &__characters {
      position: absolute;
      height: 136px;
      max-width: 460px;
      overflow-y: auto;
      overflow-x: hidden;
      margin-top: -3px;
      margin-left: -1px;
      border-left: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      @include scrollbars(8px, #e0e0e0, #ffffff);

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-template-areas: "select lists";

      @media (width: 375px) {
        width: 348px;
      }

      @media (width: 320px) {
        width: 308px !important;
      }
      @media (max-width: 425px) {
        width: 348px;
      }

      &__select {
        width: 450px;
        height: 136px;
        grid-area: select;

        @media (width: 375px) {
          width: 348px;
        }

        &__list {
          width: 443px;
          display: flex;
          align-items: center;
          font-size: 14px;
          line-height: 18px;
          color: #324b72;
          height: 34px;
          grid-area: lists;

          @media (max-width: 375px) {
            &:hover {
              background: rgba(244, 244, 244, 1) !important;
              border: #e5e5e5 0px solid !important;
              filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0)) !important;
            }
          }

          p {
            margin-left: 16px;

            &:hover {
              cursor: pointer;
            }
          }

          &:hover {
            background: #e5e5e5;
            border: solid #000000 1px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          }
        }
      }
    }
  }
}
</style>
