<template>
  <div>
    <div class="navBars">
      <NavBar />
    </div>
    <div class="container">
      <div class="message" v-if="showMessage">
        Message sent succesfully
        <span class="material-icons">
          check
        </span>
      </div>
      <h1 :class="{ 'h1--hide': showMessage == false }" class="h1">
        Message History
      </h1>
      <div class="containerLoop">
        <div
          class="containerLoop__characterItems"
          v-for="(item, index) in FinalValue"
          :key="item.id"
          :value="item"
        >
          <div class="containerLoop__titleBar">
            <div
              :class="{
                first: index == 0,
                last: index == FinalValue.length - 1,
              }"
              class="containerLoop__titleBar__title"
            >
              <span v-if="!index == 0 && index + 1 != FinalValue.length"
                >{{ item.title }}
              </span>
            </div>
            <div class="containerLoop__titleBar__button">
              <span
                @click="ClickedArrow(item)"
                :class="[
                  ShowHideMessage(item)
                    ? 'containerLoop__titleBar__button--up'
                    : 'containerLoop__titleBar__button--down',
                ]"
              >
              </span>
            </div>
          </div>
          <span
            class="containerLoop__characterItems__showHide"
            :class="[
              ShowHideMessage(item)
                ? 'containerLoop__characterItems__showHide--show'
                : 'containerLoop__characterItems__showHide--hide',
            ]"
          >
            <div class="dataBar">
              <div class="dataBar__stick"></div>
              <div class="dataBar__image">
                <img class="dataBar__image_img" :src="item.characters.image" />
              </div>
              <div class="dataBar__data">
                <div class="dataBar__data__row">
                  <span class="dataBar__data__row__sentTo">
                    Sent to: {{ item.characters.name }}
                  </span>
                  <div
                    class="dataBar__data__row__reciveQuickPost"
                    v-if="item.checked == true"
                  >
                    <span class="dataBar__data__row__reciveQuickPost__icon">
                      <span class="material-icons">
                        check
                      </span></span
                    >
                    <span class="dataBar__data__row__reciveQuickPost__message"
                      >Using QuickPost&#x2122;</span
                    >
                  </div>
                </div>
                <div class="dataBar__data__day">Date: {{ item.date }}</div>
                <div class="dataBar__data__hour">At: {{ item.time }}</div>
              </div>
            </div>
            <div class="messageBar_message">
              {{ item.message }}
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputsValue from "../Store/Store";
import NavBar from "../components/NavBar";
import { ref } from "vue";

export default {
  name: "SecandPage",

  components: {
    NavBar,
  },

  setup() {
    const { FinalValue, checked } = InputsValue();
    const changeArrow = ref(true);
    const clickedArrow = ref([]);
    const showMessage = ref(false);

    function ClickedArrow(item) {
      if (item.checked == true) {
        showMessage.value = false;
      }

      if (clickedArrow.value.includes(item.characters.id)) {
        const findNum = clickedArrow.value.findIndex(
          (elem) => elem == item.characters.id
        );
        clickedArrow.value.splice(findNum, 1);
      } else {
        clickedArrow.value.push(item.characters.id);

        if (item.checked == true || showMessage.value == true) {
          showMessage.value = true;
        } else {
          showMessage.value = false;
        }
      }
    }

    function ShowHideMessage(item) {
      return clickedArrow.value.includes(item.characters.id);
    }

    return {
      FinalValue,
      changeArrow,
      ClickedArrow,
      checked,
      clickedArrow,
      ShowHideMessage,
      showMessage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Source Sans Pro";
}

.container {
  margin: auto;
  color: #324b72;
  max-width: 460px;

  .message {
    margin-top: 114px;
    color: #50c878;
    width: 339px;
    height: 24px;
    font-size: 24px;
    font-weight: 300;

    @media (width: 375px), (width: 425px) {
      margin-left: 12.5px;
    }

    @media (width: 320px) {
      margin-left: 5px;
    }

    .material-icons {
      font-size: 24px;
      font-weight: 1000;
      color: #50c878;
    }
  }

  .h1 {
    display: flex;
    justify-content: center;
    align-content: center;
    font-family: "Source Sans Pro" !important;
    font-weight: 200;
    margin-top: 13px;

    &--hide {
      margin-top: 112px;
    }

    @media (width: 375px), (width: 425px) {
      display: flex;
      justify-content: flex-start;
      margin-left: 12.5px;
    }

    @media (width: 320px) {
      display: flex;
      justify-content: flex-start;
      margin-left: 5px;
    }
  }

  .containerLoop {
    max-width: 460px;
    height: auto;
    margin-top: 32px;

    &__characterItems {
      &__showHide {
        &--hide {
          display: none;
        }
        &--show {
          display: block;
        }
      }
    }

    &__titleBar {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 460px));
      grid-template-areas: "title button";
      border-bottom: 1px solid #e0e0e0;
      height: 50px;

      @media (width: 375px), (width: 425px) {
        width: 350px;
        margin-left: 12.5px;
      }

      @media (width: 320px) {
        width: 310px;
        margin-left: 5px;
        grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      }

      &__title {
        grid-area: title;
        max-width: 460px;
        height: 10px;
        font-size: 14px;
        font-weight: bold;
        margin-top: 18px;
      }

      &__button {
        grid-area: button;
        margin-top: 18px;
        color: #7b8ba5;
        font-size: 24px;

        &:hover {
          cursor: pointer;
        }

        &--down {
          &::before {
            font-family: "Material Icons";
            content: "expand_more";
            margin-right: -4px;
          }
        }

        &--up {
          &::before {
            font-family: "Material Icons";
            content: "expand_less";
            margin-right: -4px;
          }
        }
      }
    }

    .dataBar {
      margin-top: 15px;
      max-width: 460px;
      height: 48px;
      display: grid;
      grid-template-columns: 3px 48px auto;
      gap: 3px;
      font-size: 14px;

      @media (max-width: 425px) {
        width: 350px;
        margin-left: 12.5px;
      }

      @media (width: 320px) {
        width: 320px;
        margin-left: 5px;
      }

      &__stick {
        height: 48px;
        border-left: solid 1px #c4c4c4;
      }

      &__image_img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .dataBar__data {
        &__row {
          display: grid;
          grid-template-columns: 1fr;

          grid-template-areas: "sentTo reciveQuickPost";
          margin-top: -3px;

          &__sentTo {
            grid-area: sentTo;
          }

          &__reciveQuickPost {
            grid-area: reciveQuickPost;
            display: flex;
            justify-content: flex-end;
            color: #50c878;

            @media (width: 320px) {
              margin-right: 12px !important;
            }

            &__message {
              @media (max-width: 425px) {
                font-size: 14px;
              }
            }

            &__icon {
              margin-right: 5px;

              .material-icons {
                font-size: 14px;
                font-weight: 1000;
              }
            }
          }
        }
      }
    }

    .messageBar_message {
      font-size: 16px;
      margin-top: 20px;
      border-bottom: 1px solid #e0e0e0;
      padding: 15px;

      @media (max-width: 425px) {
        width: 350px;
        margin-left: 12.5px;
      }

      @media (width: 320px) {
        width: 310px;
        margin-left: 5px;
        //   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
    }
  }

  .first {
    &:before {
      content: "My first message ";
    }
  }

  .last {
    &:before {
      content: "My latest message";
    }
  }
}
</style>
