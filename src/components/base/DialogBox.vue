<template>
  <v-dialog v-model="data.visiblity" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        {{ data.name }}
      </v-card-title>
      <v-card-text><slot /></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="$emit('cancelWarning', !data.visiblity)"
        >
          Cancel
        </v-btn>
        <v-btn
          color="red darken-1"
          text
          @click="$emit('deleteSelected', deleteSelected(data))"
        >
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DialogBox",

  data() {
    return {
      dialog: true,
    };
  },
  models: {
    prop: "data",
  },
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  computed: {},
  methods: {
    deleteSelected(data) {
      if (data.type == "service") {
        try{

          this.$store.dispatch("deleteService", data);
          this.$emit('cancelWarning',!data.visiblity);
        }
        catch(e){
          console.log(e, "Cant delete something went wrong");
        }

      }
    },
  },
};
</script>
