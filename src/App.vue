<template>
  <v-mark-display
    :markdown="markdown"
    :src="src"
    @title="setTitle"
    keyboard-ctrl
    url-hash-ctrl
    auto-font-size
  ></v-mark-display>
</template>

<script>
import VMarkDisplay from "v-mark-display";

export default {
  components: { VMarkDisplay },
  data() {
    return { markdown: "" };
  },
  methods: {
    setTitle({ title }) {
      document.title = title;
    }
  },
  created() {
    const search = location.search;
    if (search.length > 1) {
      this.src = search.substr(1);
    }
  }
};
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>
