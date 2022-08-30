<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: "NewAge-Commercial",
      // all titles will be injected into this template
      titleTemplate:
        "%s | New Age Commercial | Portal"
    };
  },
  methods: {
    getRouterParams() {
      // console.log(this.$router.currentRoute.query);
    }
  },
  created() {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", e => {
      console.log(mq);
      this.$vuetify.theme.dark = e.matches;
    });
    this.getRouterParams();
  }
};
</script>
