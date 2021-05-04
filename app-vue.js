Vue.createApp({
  data() {
    return {
      inputValue: "",
      items: [],
    };
  },
  methods: {
    addItems() {
      this.items.push(this.inputValue);
      this.inputValue = "";
    },
  },
}).mount("#app");
