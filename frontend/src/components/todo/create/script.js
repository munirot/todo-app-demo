export default {
  name: "todo-create",
  data() {
    return {
      title: "",
      searchText: "",
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
        this.$emit('todo-added', this.title);
        this.title = '';
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    },
  },
};
