import service from "@/utils/service";

export default {
  name: "nav-bar",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    logout() {
      service.logout();
    },
  },
};
