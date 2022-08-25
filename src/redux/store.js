import { createStore } from "redux";

const authState = {
  data: {
    name: "muhsin",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
};

// function/ reducer terminal memasukan state kedalam store
const authReducer = (state = authState) => {
  return state;
};

const store = createStore(authReducer);

export default store;
