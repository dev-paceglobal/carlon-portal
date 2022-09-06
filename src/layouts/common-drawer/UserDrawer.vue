<template>
  <vue-perfect-scrollbar
    :settings="{ suppressScrollX: true, wheelPropagation: false }"
    class="h-100 rtl-ps-none ps scroll"
    style="height: 100%"
  >
    <div class="pa-5 relative">
      <v-app-bar
        :color="$vuetify.theme.dark ? 'dark' : 'grey lighten-4'"
        :dark="$vuetify.theme.dark"
        class="pt-1"
        fixed
        flat
      >
        <div class="d-flex justify-space-between align-center w-full">
          <h6 class="ma-0">My Account</h6>
          <slot name="userDrawerCloseButton"></slot>
        </div>
      </v-app-bar>
    </div>

    <div class="pa-5 mt-10">
      <div class="heading-label pa-0 mb-4">Profile</div>
      <div class="d-flex align-center mb-10">
        <v-avatar size="56" class="mr-2">
          <img width="70" height="70" :src="StateUser.user_details.image" alt="" />
        </v-avatar>
        <div>
          <a href="profile" class="link-alt">
            <p class="font-weight-medium ma-0">
              {{
                StateUser.user_details.first_name + " " + StateUser.user_details.last_name
              }}
            </p>
          </a>
          <p class="body-2 text--disabled mb-2"> Administrator</p>
          <!-- <p class="body-2 text--disabled mb-2">Administrator</p> -->
        </div>
      </div>

      <!-- <div class="heading-label pa-0 mb-4">Skills</div> -->
    </div>
  </vue-perfect-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserDrawer",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["StateUser"]),
  },
  methods: {},
};
</script>

<style scoped></style>
