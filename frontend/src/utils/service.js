import axios from "axios";
import VueCookies from "vue-cookies";
const apiUrl = process.env.VUE_APP_API_BASE_URL;

const api = {
  register: apiUrl + "/auth/register",
  login: apiUrl + "/auth/login",
  todo: apiUrl + "/todo",
};

const service = {};

service.headers = function () {
  let token = VueCookies.get("accessToken");
  if (token) {
    let header = {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    };
    return header;
  } else {
    return service.logout();
  }
};

service.headerWithoutToken = function () {
  let header = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return header;
};

//register
service.register = async function (body) {
  return await axios
    .post(api.register, body, service.headerWithoutToken())
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

//login
service.login = async function (body) {
  return await axios
    .post(api.login, body, service.headerWithoutToken())
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

//logout
service.logout = function () {
  VueCookies.remove("accessToken");
  location.reload();
};

//get todo list
service.todoList = async function () {
  return await axios
    .get(api.todo, service.headers())
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

//create todo
service.createTodo = async function (body) {
  return await axios
    .post(api.todo, body, service.headers())
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error.response;
    });
};

//create todo
service.updateTodo = async function (id, body) {
  return await axios
    .put(api.todo + "/" + id, body, service.headers())
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

//delete todo by id
service.deleteTodo = async function (id) {
  return await axios
    .delete(api.todo + "/" + id, service.headers())
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export default service;
