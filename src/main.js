import Vue from "vue";
import App from "./App.vue";

import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { setHighlighter } from "vue-mark-display";

setHighlighter(code => hljs.highlightAuto(code).value || code);

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
