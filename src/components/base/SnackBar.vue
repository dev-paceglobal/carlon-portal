<template>
  <v-snackbar :color="options.color" v-model="options.visiblity">
    {{ options.text }}

    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="removeSnackBar"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "snackbar",

  models: {
    prop: "options",
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          text: "",
          visiblity: false,
          color: "success",
        };
      },
      require: true,
    },
  },
  computed: {
    ...mapMutations(["setSnackBar"]),
  },
  methods: {
    removeSnackBar() {
      const options = {
        text: "",
        visiblity: false,
        color: "success",
      };
      this.setSnackBar("", options);
    },
  },
};
</script>
