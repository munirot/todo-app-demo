import TodoList from "@/components/todo/list";
import CreateTodo from "@/components/todo/create";
import Navbar from "@/components/navbar";

export default {
  name: "todo",
  data() {
    return {};
  },
  components: {
    Navbar,
    TodoList,
    CreateTodo,
  },
  created() {},
  mounted() {},
  methods: {
    addTodoToList(newTodo) {
      this.$refs.todoList.todos.unshift(newTodo); // get value from the child component and add it to the 'todos' array
    },
  },
};
