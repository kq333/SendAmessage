import { reactive, toRefs } from "vue";

const store = reactive({
  InputText: "",
  TextAreaInput: "",
  CharactersValue: "",
  FetchedData: [],
  FinalValue: [],
  checked: "",
  listCharacters: "",
  ClickedCharacter: "Pick a character",
});

export default function InputsValue() {
  const fetchData = async () => {
    const GetData = await (
      await fetch("https://rickandmortyapi.com/api/character")
    ).json();
    localStorage.setItem("setValue", JSON.stringify(GetData));
    const getLocalData = localStorage.getItem("setValue");
    store.FetchedData = JSON.parse(getLocalData);
  };

  return { ...toRefs(store), fetchData };
}
