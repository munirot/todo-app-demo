export default {
  name: "login",
  data() {
    return {
      show: false,
      body: {
        email: "",
        password: "",
      },
      isLogin: false,
    };
  },
  components: {
  },
  created() {},
  mounted() {},
  methods: {
    login() {
      this.isLogin = true;
      console.log("testing");
      
    },
  },
};
