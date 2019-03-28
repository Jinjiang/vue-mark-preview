<template>
  <mark-display
    ref="main"
    :markdown="markdown"
    :src="src"
    @title="setTitle"
    keyboard-ctrl
    url-hash-ctrl
    auto-font-size
    auto-blank-target
    auto-base-url
    support-preview
  ></mark-display>
</template>

<script>
import MarkDisplay from "vue-mark-display";
import Hammer from "hammerjs";

export default {
  components: { MarkDisplay },
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
  },
  mounted() {
    const mc = new Hammer(this.$el);
    const main = this.$refs.main;
    mc.on("swipe", event => {
      if (event.pointerType === "mouse") {
        return;
      }
      switch (event.direction) {
        case Hammer.DIRECTION_LEFT:
          main.goNext();
          return;
        case Hammer.DIRECTION_RIGHT:
          main.goPrev();
          return;
      }
    });
  }
};
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>
