<template>
  <div class="navBar">
    <NavBar />
  </div>
  <div class="Container">
    <div class="header">
      <h1>Send a new message</h1>
    </div>
    <div class="titleName" :class="{ color: active.length > 2 }">Title</div>
    <div class="inputTitle">
      <newInput v-model:InputText="InputText" :active="active" />
    </div>
    <div class="textTitle" :class="{ color: active.length > 2 }">
      Please enter the title
    </div>
    <div class="titleMessage">Message</div>
    <div class="inputTextArea">
      <NewTextArea v-model:TextAreaInput="TextAreaInput" />
    </div>
    <div class="titleMessage">Character</div>
    <div class="dropDownMenu">
      <SelectCharactersComponent @ItemList="getCharactersList" />
    </div>
    <div class="inputCheckBox">
      <div class="inputCheckBox__check">
        <InputCheckBox />
      </div>
      <span class="inputCheckBox__text"
        >I want to use InterGalaxy QuickPost&#x2122;
      </span>
    </div>
    <div class="sendButton">
      <SendButton @click="getData" />
    </div>
    <div></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import newInput from "../components/newInput";
import NewTextArea from "../components/NewTextArea";
import SendButton from "../components/SendButton";
import InputCheckBox from "../components/InputCheckBox";
import SelectCharactersComponent from "../components/SelectCharactersComponent";
import NavBar from "../components/NavBar";
import InputsValue from "../Store/Store";
import moment from "moment";

export default {
  name: "FirstPage",
  components: {
    newInput,
    NewTextArea,
    SendButton,
    InputCheckBox,
    NavBar,
    SelectCharactersComponent,
  },

  setup() {
    const {
      InputText,
      TextAreaInput,
      CharactersValue,
      FinalValue,
      FetchedData,
      checked,
      fetchData,
      listCharacters,
      ClickedCharacter,
    } = InputsValue();

    onMounted(() => {
      fetchData();
    });

    function getCharactersList(item) {
      ClickedCharacter.value = item.name;
      listCharacters.value = item;
    }

    function getData() {
      if (
        InputText.value.length > 2 &&
        TextAreaInput.value.length > 2 &&
        Object.entries(listCharacters.value).length > 0
      ) {
        FinalValue.value.push({
          title: InputText.value,
          message: TextAreaInput.value,
          characters: listCharacters.value,
          date: moment(new Date()).format("DD.MM.YYYY"),
          time: moment(new Date()).format("HH:mm"),
          checked: checked.value,
        });

        InputText.value = "";
        TextAreaInput.value = "";
        ClickedCharacter.value = "Pick a character";
        checked.value = false;
      }
    }

    const active = ref(InputText);

    return {
      InputText,
      TextAreaInput,
      CharactersValue,
      FinalValue,
      FetchedData,
      checked,
      getData,
      active,
      getCharactersList,
      listCharacters,
      ClickedCharacter,
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

.navBar {
  top: 0;
}

.Container {
  margin: auto;
  max-width: 460px;
  max-height: 100vh;
  margin-top: 75px;
  display: grid;
  grid-template-rows: repeat(auto-fit, repeat(320px, 1fr));

  @media (width: 375px) {
    margin-left: 12.5px;
  }

  @media (width: 425px) {
    margin-left: 35px;
  }

  @media (width: 320px) {
    margin-left: 5px;
  }

  .header {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    color: rgba(50, 75, 114, 1);

    @media (max-width: 425px) {
      display: flex;
      justify-content: flex-start;
      margin-top: 24px;
    }

    h1 {
      font-weight: 200;

      @media (max-width: 425px) {
        width: 175px;
        height: 54px;
        font-size: 24px;
        font-weight: 300;
      }
    }
  }

  .titleName {
    font-size: 16px;
    width: 30px;
    height: 20px;
    color: #de212b;
    margin-bottom: 10px;
    margin-top: 32px;
  }

  .textTitle {
    width: 147px;
    height: 10px;
    font-size: 12px;
    color: #de212b;
    margin-top: 8px;
  }

  .color {
    color: #324b72;
  }

  .titleMessage {
    font-size: 16px;
    max-width: 460px;
    height: 11px;
    color: #324b72;
    margin-top: 14px;
  }
  .inputTextArea {
    margin-top: 14px;

    @media (width: 375px), (width: 425px) {
      width: 350px;
    }
    @media (width: 320px) {
      width: 310px;
    }
  }

  .inputTitle {
    @media (width: 375px), (width: 425px) {
      width: 350px;
    }
    @media (width: 320px) {
      width: 310px;
    }
  }

  .dropDownMenu {
    max-width: 460px;
    margin-top: 13px;

    @media (width: 375px) {
      width: 350px;
    }
  }

  .inputCheckBox {
    display: grid;
    grid-auto-columns: 30px auto;
    grid-template-areas: "check text";
    margin-top: 204px;

    &__check {
      grid-area: check;
    }

    &__text {
      grid-area: text;
      display: flex;
      align-items: center;
      color: #324b72;
      font-size: 14px;
      font-weight: 600;
      line-height: 10px;
    }
  }
  .sendButton {
    max-width: 460px;
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;

    @media (width: 375px) {
      width: 350px;
    }

    @media (width: 320px) {
      width: 310px;
    }

    @media (width: 425px) {
      width: 349px;
    }
  }
}
</style>
