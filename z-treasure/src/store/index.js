import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
Vue.use(Vuex);

const TOKEN_KEY = "z-treasure_key";

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

export function setToken(token) {
  return Cookies.set(TOKEN_KEY, token);
}

export function login(data) {
  return axios({
    url: "https://httpbin.org/post",
    method: "post",
    data,
  });
}

export default new Vuex.Store({
  state: {
    token: getToken(),
  },
  getters: {},
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password })
          .then((response) => {
            const { password, username } = response.data.json;
            if (username === "zaking" && password === "treasure") {
              const token = `${username}-${password}`;
              commit("SET_TOKEN", token);
              setToken(token);
              resolve();
            } else {
              reject("用户名或密码错误");
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  modules: {},
});
