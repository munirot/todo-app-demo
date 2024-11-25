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

    enableEdit(todo) {
      todo.isEditing = true;
      todo.editTitle = todo.title;
    },

    cancelEdit(todo) {
      todo.isEditing = false;
    },

    updateTodo(type, todo, index) {
      try {
        let body = {};

        if (type === "status") {
          body = {
            completed: !todo.completed,
          };
        } else {
          if (!todo.title.trim()) {
            this.$toast.warning("Title cannot be empty!");
            return;
          } else if (todo.title === todo.editTitle) {
            todo.isEditing = false;
            return;
          }

          todo.isEditing = false;
          body = {
            title: todo.editTitle,
          };
        }

        Service.updateTodo(todo._id, body).then((response) => {
          if (response.status == 200) {
            if (type === "status") {
              todo.completed = !todo.completed;
            } else todo.title = todo.editTitle;
            todo.isEditing = false;
          }
        });
      } catch (error) {
        console.error("Error toggling todo:", error);
      }
    },

    deleteTodo(todoId, index) {
      try {
        Service.deleteTodo(todoId).then((response) => {
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