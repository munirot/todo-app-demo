import Service from "@/utils/service";

export default {
  name: "todo-list",
  data() {
    return {
      todos: [],
    };
  },
  components: {},
  created() {
    this.getTodos(); // fetching initial required data
  },
  mounted() {},
  methods: {
    getTodos() {
      try {
        Service.todoList().then((response) => {
          if (response.status == 200) {
            this.todos = response.data;
            this.todos.reverse();
          }
        });
      } catch (err) {
        console.error("Error get todo in:", err);
      }
    },

    updateTodo(todo) {
      try {
        let body = {
          completed: !todo.completed,
        };

        Service.updateTodo(todo._id, body).then((response) => {
          if (response.status == 200) {
            todo.completed = !todo.completed;
          }
        });
      } catch (error) {
        console.error("Error toggling todo:", error);
      }
    },

    deleteTodo(id, index) {
      try {
        Service.deleteTodo(id).then((response) => {
          if (response.status == 200) {
            this.todos.splice(index, 1);
          } else this.$toast.warning(response.data.message);
        });
      } catch (error) {
        console.error("Error delete todo:", error);
      }
    },
  },
};
