<template>
  <v-footer
    tile
    height="80"
    class="font-weight-medium shadow-sm ma-4 rounded-lg"
    :color="$vuetify.theme.dark ? 'dark' : 'white'"
    :dark="$vuetify.theme.dark"
  >
    <v-col class="text-left" cols="12">
      <div class="d-flex flex-row justify-space-between align-center">
        <!-- <div>
          <v-btn
            href="/"
            target="_blank"
            depressed
            color="warning"
            >New Age Commercial</v-btn
          >
        </div> -->
        <div>
          <strong class="text--disabled">
            © New Age Commercial {{ new Date().getFullYear() }}-{{
              new Date().getFullYear() + 1
            }}
          </strong>
        </div>
      </div>
    </v-col>
  </v-footer>
</template>
