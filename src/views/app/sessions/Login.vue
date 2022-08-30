<template>
    <div class="page-wrap">
        <div class="session-form-hold">
            <base-card>
                <v-card-text class="text-center">
                    <v-avatar size="200" tile class="mb-4">
                        <img
                            src="@/assets/images/illustrations/breaking_barriers.svg"
                            alt=""
                        />
                    </v-avatar>

                    <h6 class="text--disabled font-weight-medium mb-10">
                        Log in to your account
                    </h6>
                    <v-text-field label="Email" :rules="emailRules" name="email" v-model="credentials.email" />

                    <v-text-field
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Password"
                        :rules="passwordRules"
                        v-model="credentials.password"
                        @click:append="show = !show"
                    ></v-text-field>

                    <v-btn 
                      class="mb-4"
                      block 
                      color="primary"
                      @click="formSubmit"
                      dark>
                      Login
                    </v-btn>
                    <div class="d-flex justify-between flex-wrap">
                        <h6 class="">Don't Remember ?</h6>
                        <v-btn text small color="primary" class="mb-2 "
                            >Forgot Password</v-btn
                        >
                    </div>
                </v-card-text>
            </base-card>
        </div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex';
export default {
    name: 'Login',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Login'
    },
    data() {
        return {
            show: false,
            credentials: {
              email: '',
              password:'',
            },
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
              v => !!v || 'Password is required',
              v => (v && v.length >= 8) || 'Password must be more than 8 characters'
            ]
           
        }
    },
    computed: {
    ...mapGetters(['loggedInUser', 'error'])
  },
  created() {
      if(this.$store.getters.isAuthenticated){
        this.$router.push({name:'Services'})
      }
  },
  methods: {
    formSubmit() {
      this.$store.dispatch('LogIn',this.credentials);
    }
  }
}
</script>
<style lang="scss" scoped>
.page-wrap {
    background-color: #242939 !important;
    display: flex;
    align-items: center;
    padding: 40px 1rem;
    height: 100%;
    min-height: 100vh;
}
.session-form-hold {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}
</style>
