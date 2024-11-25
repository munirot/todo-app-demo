import Service from "@/utils/service";

export default {
  name: "todo-create",
  data() {
    return {
      title: "",
      list: [],
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    addItem() {
      if (!this.title.trim()) return;
      try {
        let body = {
          title: this.title,
        };

        Service.createTodo(body).then((response) => {
          this.$emit("todo-added", response); // pass custom event from child component to parent
          this.title = "";
        });
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    },
  },
};