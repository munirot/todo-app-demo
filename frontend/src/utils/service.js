import axios from "axios";
const apiUrl = process.env.VUE_APP_API_BASE_URL;

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2RmZjRiZmVlNGQ0NjUxNTBhNWQxMSIsImlhdCI6MTczMjEyMzQzNiwiZXhwIjoxNzMyMzgyNjM2fQ.A_tkA4Yl6TDSt1ier6Tmd3SmECsD1ZPPgDOdZW3NM-4";
const api = {
  login: apiUrl + "/auth/login",
  todoList: apiUrl + "/todo",
};
const service = {};

service.headerWithoutToken = function () {
  let header = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return header;
};

service.validateError = function (error) {
  let httpCode = error.response.status;
  console.log(httpCode);
  switch (httpCode) {
    case 401:
      if (error.response.data.statusCode == "4410") {
        return error.response.data;
      }
      break;
    default:
      return error.response.data;
  }
};

//login
service.login = async function (body) {
  return await axios
    .post(api.login, body, service.headerWithoutToken())
    .then((response) => {
      console.log("In service", response);
      return response.data;
    })
    .catch(function (error) {
      return service.validateError(error);
    });
};

//get todo list
service.todoList = async function () {
  let header = {
    "Content-Type": "application/json",
    authorization: "Bearer " + token,
  };

  console.log("Header =>>>>", header);
  return await axios.get(api.todoList, header).then((response) => {
    console.log(response);
  });
};
export default service;
