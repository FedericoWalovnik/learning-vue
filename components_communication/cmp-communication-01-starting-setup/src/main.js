import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import newFriendContactForm from "./components/newFriendContactForm.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("new-friend-contact-form", newFriendContactForm);

app.mount("#app");
