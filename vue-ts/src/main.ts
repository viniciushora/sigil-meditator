import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretLeft);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
