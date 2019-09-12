<template>
  <div>
    <b-navbar toggleable="md" type="light">
      <b-navbar-brand href="#" style="width: auto;">
        <img src="img/logo_dark.svg" style="width: 125px; height: auto">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="onTerms">Terms</b-nav-item>
          <b-nav-item @click="onPrivacy">Privacy</b-nav-item>
        </b-navbar-nav>  

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button size="sm" class="btn btn-login my-2 my-sm-0 m-3" @click="onLogin">Sign In</b-button>
            <b-button size="sm" class="btn btn-signup my-2 my-sm-0" @click="onSignUp">Sign Up</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <img src="img/flags/uk.png" class="pr-1" />English
            </template>
            <b-dropdown-item>
              <img src="img/flags/uk.png" class="pr-1" />English
            </b-dropdown-item>
            <b-dropdown-item>
              <img src="img/flags/jp.png" class="pr-1" />日本語
            </b-dropdown-item>
            <b-dropdown-item>
              <img src="img/flags/kr.png" class="pr-1" />한국어
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>     
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "CmsHeader",
  methods: {
    onLogin() {
      this.$router.push({ name: 'Login' })
    },
    onSignUp() {
      this.$router.push({ name: 'Signup' })
    },
    onTerms() {
      this.$router.push({ name: 'Terms' })
    },
    onPrivacy() {
      this.$router.push({ name: 'Privacy' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-login{
    width: 100px;
    height: 35px;
    border-radius: 4px;
    border: solid 2px #ebebeb;
  }
  .btn-signup{
    width: 100px;
    height: 35px;
    border-radius: 4px;
    background-color: #775649;
    color: white;
  }
</style>