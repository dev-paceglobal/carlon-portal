<template>
  <v-row>
    <v-col cols="4"> 
      <base-card>
      <v-card-title>Profile Picture</v-card-title>
          <v-avatar
            circle
            class="mx-4 my-2"
            size="500">
            <img
                   
                    alt="Avatar"
                    :src="StateUser.user_details.image"
                  >
          <!-- {{StateUser.user_details.first_name + ' ' + StateUser.user_details.last_name}} -->
          </v-avatar>
      
          <v-card-text>
            <v-divider class="mt-2" />
          <v-card-actions>
            <v-file-input
            label="upload image"
            ></v-file-input>
            <v-spacer />
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon class="my-0" v-bind="attrs" @click="resetForm" v-on="on">
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" text @click="submit"> Update </v-btn>
          </v-card-actions>
          </v-card-text>
      
       </base-card>
    </v-col>
    <v-col cols="8">
      <base-card ref="form">
        <v-card-title>Personal Details</v-card-title>
        <v-card-text>
          <v-card-text>
            <v-text-field
              ref="fname"
              v-model="fname"
              :rules="basicRules"
              :error-messages="errorMessages"
              label="First Name"
              placeholder="Your firstname please."
              required
            />
          </v-card-text>
          <v-card-text>
            <v-text-field
              ref="lname"
              v-model="lname"
              :rules="basicRules"
              :error-messages="errorMessages"
              label="Last Name"
              placeholder="Your lastname please."
              required
            />
          </v-card-text>
          <v-card-text>
            <v-text-field
              ref="email"
              v-model="email"
              :rules="basicRules"
              :error-messages="errorMessages"
              label="Email"
              placeholder="Your valid email please."
              required
            />
          </v-card-text>
          <div class="ml-5">
          <v-chip
            color="green"
            label
            outlined
          >Administrator</v-chip>
          </div>
          <v-divider class="mt-12" />
          <v-card-actions>
            <v-btn text> Cancel </v-btn>
            <v-spacer />
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon class="my-0" v-bind="attrs" @click="resetForm" v-on="on">
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" text @click="submit"> Update </v-btn>
          </v-card-actions>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Account Details",
  },
  data: () => ({
    basicRules: [(v) => !!v || " Above field is required"],
    model: "I'm a text field",
    label: "Hey!",
    hint: "Customize me!",
    placeholder: "",
    shaped: false,
    outlined: false,
    rounded: false,
    solo: false,
    singleLine: false,
    filled: false,
    clearable: false,
    persistentHint: false,
    loading: false,
    flat: false,
    counterEn: false,
    counter: 0,
    dense: false,
    first: "John",
    last: "Doe",
    message1: "Hey!",
    message2: "Hey!",
    message3: "Hey!",
    message4: "Hey!",
    title: "Preliminary report",
    description: "California is a state in the western United States",
    rules: [(v) => v.length <= 25 || "Max 25 characters"],
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "Password",
    rulesTwo: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match",
    },
    // form validations

    errorMessages: "",
    fname: "",
    lname: "",
    email: "",
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false,
  }),
  computed: {
    ...mapGetters(["StateUser"]),

    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  created() {
    this.fname = this.StateUser.user_details.first_name;
    this.lname = this.StateUser.user_details.last_name;
    this.email = this.StateUser.user_details.email;
  },
  methods: {
    addressCheck() {
      this.errorMessages = this.address && !this.name ? "Hey! I'm required" : "";

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    },
  },
};
</script>
