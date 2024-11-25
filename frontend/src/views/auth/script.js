import Service from "@/utils/service";

export default {
  name: "auth",
  data() {
    return {
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
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    login() {
      try {
        if (!this.loginForm.email || !this.loginForm.password) {
          this.$toast.warning("Fields cannot be empty");
        } else {
          let body = {
            email: this.loginForm.email,
            password: this.loginForm.password,
          };

          Service.login(body).then((response) => {
            console.log(response);
            if (response && response.status === 200) {
              this.$cookies.set("accessToken", response.data.token);
              this.$router.push({
                name: "home",
                params: { title: "Home" },
              }); // redirect the page after login successfully
            } else if (response && response.status == 401) {
              this.$toast.warning(response.data.message);
            } else this.$toast.warning("Something went wrong!");
          });
        }
      } catch (err) {
        console.error("Error logging in:", err);
      }
    },

    register() {
      try {
        if (
          !this.registerForm.email ||
          !this.registerForm.username ||
          !this.registerForm.password
        ) {
          this.$toast.warning("Fields cannot be empty");
        } else {
          let body = {
            username: this.registerForm.username,
            email: this.registerForm.email,
            password: this.registerForm.password,
          };

          Service.register(body).then((response) => {
            if (
              response &&
              (response.status == 200 || response.status == 201)
            ) {
              this.$toast.success("Register successfully!");
              this.registerForm = {
                email: "",
                username: "",
                password: "",
                active: false,
              }; // clear the input after register successfully and active form login
            } else if (response && response.status == 400) {
              this.$toast.warning(response.data.message);
            } else this.$toast.warning("Something went wrong!");
          });
        }
      } catch (err) {
        console.error("Error logging in:", err);
      }
    },
  },
};
