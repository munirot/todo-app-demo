import Service from "@/utils/service";

export default {
  name: "todo-list",
  data() {
    return {
      todos: [],
    };
  },
  components: {},
  created() {},
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      try {
        console.log("==========================");
        Service.todoList().then((response) => {
          console.log("In View", response);
        });
      } catch (err) {
        console.error("Error logging in:", err);
      }
    },

    async toggleTodo(todo) {
      try {
        todo.status = !todo.status; // Toggle the status
        // await updateTodo(todo._id, { status: todo.status });
      } catch (error) {
        console.error("Error toggling todo:", error);
      }
    },

    removeTodo(index) {
      console.log(index);
    },
  },
};
