import Service from "@/utils/service"

export default {
  name: "auth",
  data() {
    return {
      apiUrl: process.env.VUE_APP_API_BASE_URL,
      registerForm: {
        active: false,
        username: "",
        email: "",
        password: "",
      },
      loginForm: {
        email: "",
        password: "",
      },
      emptyFields: false,
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    login() {
      try {
        if (this.loginForm.email && this.loginForm.password) {
          let body = {
            email: this.loginForm.email,
            password: this.loginForm.email,
          };

          console.log("==========================");
          Service.login(body).then((response) => {
            console.log("In View", response);
          })
        }
      } catch (err) {
        console.error("Error logging in:", err);
      }
    },

    doRegister() {
      if (
        this.register.email === "" ||
        this.register.username === "" ||
        this.register.password === ""
      ) {
        this.emptyFields = true;
      } else {
        alert("You are now registered");
      }
    },
  },
};
