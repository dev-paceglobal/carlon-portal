<template>
  <v-row class="user-page">
    <v-col cols="12">
      <base-card>
        <v-card-title>
          <div class="d-flex justify-space-between flex-wrap">
            <!-- <v-btn class="ma-2" dark color="danger">
                            <v-icon>mdi-plus</v-icon>
                            Add User
                        </v-btn> -->
          </div>
        </v-card-title>
        <v-card-title class="ml-5">
          Bookings List
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-data-table
          v-model="selected"
          :search="search"
          :headers="headers"
          :items="Bookings"
          item-key="first_name"
          show-select
          class="elevation-1 table-one"
          multi-sort
        >
          <template v-slot:item.name="{ item }">
            <div class="d-flex align-center">
              <!-- <v-avatar class="mr-2" size="26" dark>
                                <img :src="item.img" alt="" />
                            </v-avatar> -->
              <p class="ma-0 font-weight-medium">
                {{ item.id }}
              </p>
            </div>
          </template>
          <template v-slot:item.action="{ item }">
            <div class="d-flex">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="secondary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    icon
                    to="edit-user"
                  >
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                </template>
                <span>View in detail</span>
              </v-tooltip>
            </div>
          </template>
          <!-- <template v-slot:item.badge="{item}">
                        <template v-if="item.badge === 'Active'">
                            <v-chip
                                class=""
                                color="success"
                                label
                                small
                                text-color="white"
                            >
                                <v-icon small left>mdi-check</v-icon>
                                {{ item.badge }}
                            </v-chip>
                        </template>
                        <template v-else>
                            <v-chip
                                class=""
                                color="success"
                                label
                                small
                                text-color="white"
                            >
                                <v-icon small left>mdi-check</v-icon>
                                {{ item.badge }}
                            </v-chip>
                        </template>
                    </template> -->
        </v-data-table>
      </base-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Bookings Leads",
  },
  data() {
    return {
      search: "",
      selected: [],
      headers: [
        { text: "First Name", value: "first_name" },
        { text: "Last Name", value: "last_name" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Message", value: "message" },
        { text: "Service", value: "get_services.title" },
        { text: "Frequency", value: "get_frequency.title" },
        { text: "Date", value: "created_at" },
        { text: "Actions", value: "action" },
      ],
      desserts: [
        {
          img: require("@/assets/images/avatars/001-man.svg"),
          name: "Jhon Doe",
          calories: "john@gmail.com",
          fat: "+111 222 333",
          carbs: "Window Cleaning",
          protein: "One Month",
          new: "I want window cleaning service",
        },
        {
          img: require("@/assets/images/avatars/001-man.svg"),
          name: "Jhon Doe",
          calories: "john@gmail.com",
          fat: "+111 222 333",
          carbs: "Window Cleaning",
          protein: "One Month",
          new: "I want window cleaning service",
        },
        {
          img: require("@/assets/images/avatars/001-man.svg"),
          name: "Jhon Doe",
          calories: "john@gmail.com",
          fat: "+111 222 333",
          carbs: "Window Cleaning",
          protein: "One Month",
          new: "I want window cleaning service",
        },
        {
          img: require("@/assets/images/avatars/001-man.svg"),
          name: "Jhon Doe",
          calories: "john@gmail.com",
          fat: "+111 222 333",
          carbs: "Window Cleaning",
          protein: "One Month",
          new: "I want window cleaning service",
        },
        {
          img: require("@/assets/images/avatars/001-man.svg"),
          name: "Jhon Doe",
          calories: "john@gmail.com",
          fat: "+111 222 333",
          carbs: "Window Cleaning",
          protein: "One Month",
          new: "I want window cleaning service",
        },
        {
          img: require("@/assets/images/avatars/001-man.svg"),
          name: "Jhon Doe",
          calories: "john@gmail.com",
          fat: "+111 222 333",
          carbs: "Window Cleaning",
          protein: "One Month",
          new: "I want window cleaning service",
        },
        {
          img: require("@/assets/images/avatars/001-man.svg"),
          name: "Jhon Doe",
          calories: "john@gmail.com",
          fat: "+111 222 333",
          carbs: "Window Cleaning",
          protein: "One Month",
          new: "I want window cleaning service",
        },
      ],
    };
  },
  computed: {
    Bookings() {
      return this.$store.getters.Bookings;
    },
  },
  mounted() {
    this.$store.dispatch("Bookings");
  },
};
</script>
<style lang="scss" scoped>
::v-deep .table-one {
  thead.v-data-table-header {
    tr {
      &:hover {
        background-color: #f2f3f8;
      }
      th {
        span {
          font-size: 16px;
          color: #304156;
        }
      }
    }
    tr {
      td {
        padding-bottom: 20px;
        padding-top: 20px;
      }
    }
  }
  tbody {
    tr {
      &:hover {
        background-color: #f2f3f8 !important;
      }
    }
  }
}
</style>
<style>
.row.user-page .v-data-table__checkbox.v-simple-checkbox {
  display: none !important;
}
</style>
