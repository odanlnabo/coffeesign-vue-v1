<template>
  <div class="app align-items-center">
    <div class="container-fluid">
      <b-row>
        <b-col md="12" class="p-0">
          <AppHeader>
            <b-link class="navbar-brand header" to="/landing">
              <img
                class="navbar-brand-full"
                src="img/logo_dark.svg"
                width="125"
                height="41"
                alt="Coffee Sign"
              />
            </b-link>
          </AppHeader>
        </b-col>
      </b-row>
    </div>
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form action="#" @submit.prevent="login">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="email" class="form-control" name="username" id="username" placeholder="Username" autocomplete="username email" v-model="username" required />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" name="password" id="password" placeholder="Password" autocomplete="current-password" v-model="password" required />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none login-right" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button variant="primary" class="active mt-3" v-on:click="signup">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import {
  Header as AppHeader,
  HeaderDropdown as AppHeaderDropdown,
} from "@coreui/vue";
import AppLogoDark from "@/components/AppLogoDark";

export default {
  name: 'Login',
  components: {
    AppHeader,
    AppHeaderDropdown,
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retrieveToken', {
        username: this.username,
        password: this.password,
      })
        .then(response => {
          this.$router.push({ name: 'LandingPage' })
        })
    },
    signup() {
      this.$router.push({ name: 'Registration' })
    }
  }
}
</script>

<style scoped>
  .login-right {
    background-image: url(/img/add_doc/Group_71@3x.png);
    background-size: cover;
  }
</style>
