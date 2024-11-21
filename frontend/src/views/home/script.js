import TodoList from '../../components/todo/list';
import CreateTodo from '../../components/todo/create';

export default {
  name: "todo",
  data() {
    return {
      
    };
  },
  components: {
    TodoList,
    CreateTodo
  },
  created() {},
  mounted() {},
  methods: {
    addTodoToList(newTodo) {
      console.log(newTodo);
      let todo = {
        'title': newTodo,
        'status': false
      }
      this.$refs.todoList.todos.push(todo);
    },
  },
};
