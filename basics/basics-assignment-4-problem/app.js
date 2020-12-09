const app = Vue.createApp({
  data() {
    return {
      input: "",
      pVisible: true,
      secondInput: "",
    };
  },
  computed: {
    inputClasses() {
      if (this.input === "user1") {
        return { user1: true };
      } else if (this.input === "user2") {
        return { user2: true };
      }
    },
    visible() {
      if (this.pVisible) {
        return { visible: true };
      } else {
        return { hidden: true };
      }
    },
    inlineStyleParagraph() {
      return { backgroundColor: this.secondInput };
    },
  },
  methods: {
    toggleParagraph() {
      this.pVisible = !this.pVisible;
    },
  },
});

app.mount("#assignment");
