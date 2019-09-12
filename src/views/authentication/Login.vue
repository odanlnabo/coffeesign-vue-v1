<template>
  <b-container fluid class="auth-page login pb-5">
    <!-- <error></error> -->

    <b-row class="container header">
      <b-col md="12">
        <AuthHeader />
      </b-col>
    </b-row>

    <b-row class="auth-form">
      <b-col lg="5" md="8" offset-md="2" class="wrapper">
        <b-form @submit.prevent="onLogin">
          <h3 class="form-title">Welcome Back!</h3>
          <span class="form-subtitle text-gray">New in CoffeeSign? <b-link href="javascript:;" @click="toSignup" class="text-coffee-light link">Create an account</b-link></span>
          <b-form-group id="grpEmail"
            :class="{
              'form-group-withicon': true,
              'form-group-focus': validator.email.focus && !validator.email.error && (!validator.email.blured || validEmail(form.email)),
              'form-group-invalid': !validEmail(form.email) && validator.email.blured,
              'form-group-valid': validator.email.blured && (validEmail(form.email) && !validator.email.error)
            }">
            <b-form-input id="email"
              :class="{
                'form-control-coffee': true,
                'input-invalid': !validEmail(form.email) && validator.email.blured,
                'input-valid': validator.email.blured && (validEmail(form.email) && !validator.email.error)
              }"
              @blur="validator.email.blured = true, validator.email.focus = false"
              @focus="validator.email.focus = true"
              type="email"
              v-model="form.email"
              placeholder="Your email address">
            </b-form-input>
            <font-awesome-icon icon="envelope-open" />
            <p class="validation-error" v-if="!validEmail(form.email) && validator.email.blured">{{ validator.email.text }}</p>
          </b-form-group>
          <b-form-group id="grpPassword"
            :class="{
              'form-group-withicon': true,
              'form-group-focus': validator.password.focus && !validator.password.error && (!validator.password.blured || validPassword(form.password)),
              'form-group-password': true,
              'form-group-invalid': validator.password.blured && !validPassword(form.password),
              'form-group-valid': validator.password.blured && (validPassword(form.password) && !validator.password.error)
            }">
            <b-form-input id="password"
              :class="{
                'form-control-coffee': true,
                'password': true,
                'input-valid': validator.password.blured && (validPassword(form.password) && !validator.password.error),
                'input-invalid': !validPassword(form.password) && validator.password.blured
              }"
              @blur="validator.password.blured = true, validator.password.focus = false"
              @focus="validator.password.focus = true"
              :type="isShowPassword?'text':'password'"
              v-model="form.password"
              placeholder="Password">
            </b-form-input>
            <div class="eye" @click="onShowPassword"><font-awesome-icon icon="eye-slash" v-if="isShowPassword" /><font-awesome-icon icon="eye" v-else /></div>
            <font-awesome-icon icon="lock" />
            <p class="validation-error" v-if="!validPassword(form.password) && validator.password.blured">{{ validator.password.text }}</p>
          </b-form-group>
          <b-form-group id="remember">
            <b-form-checkbox id="remember_me"
              class="form-checkbox-coffee pull-left"
              v-model="form.remember_me">Remember Me
            </b-form-checkbox>
            <b-link href="javascript:;" @click="toPassword" class="text-coffee-light link pull-right">Forgot Password?</b-link>
          </b-form-group>
          <input type="submit" class="btn btn-block btn-md btn-coffee" value="Sign In"/>
        </b-form>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import AuthHeader from './AuthHeader';
import Error from '../../components/common/Error.modal'
import axios from 'axios'

export default {
  name: "Login",
  components: {
    AuthHeader, Error
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember_me: false,
      },
      sform: {
        email: '',
        password: '',
        password_confirmation: '',
        remember_me: false,
        provider_name: ''
      },
      validator: {
        email: {
          valid: true,
          focus: false,
          blured: false,
          text: 'Please input a valid Email',
          error: false,
          last: ''
        },
        password: {
          valid: true,
          focus: false,
          blured: false,
          text: 'Password must be 6 ~ 12 length characters',
          error: false,
          last: ''
        },
      },
      isLoginFailed: false,
      isShowPassword: false,
    }
  },
  mounted() {

  },
  methods: {
    onLogin() {
      this.$store.dispatch('retrieveToken', {
        email: this.form.email,
        password: this.form.password,
        remember_me: this.form.remember_me
      })
        .then(response => {
          this.$router.push({ name: 'LandingPage' })
        }) 
    },
    onShowPassword() {
      if (this.isShowPassword) {
        this.isShowPassword = false
      } else {
        this.isShowPassword = true
      }
    },
    validate() {
      var vm = this

      vm.validator.email.blured = true
      vm.validator.password.blured = true

      if (vm.validEmail(vm.form.email) && vm.validPassword(vm.form.password)) {
        return true
      }
      else {
        return false
      }
    },
    validEmail(email) {
      var vm = this

      if (email == vm.validator.email.last) {
        return
      }

      vm.validator.email.error = false
      vm.validator.email.last = ''

      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      vm.validator.email.valid = re.test(email)

      var isValid = re.test(email)
      if (isValid) {
        return true
      } else {
        vm.validator.email.valid = false
        vm.validator.email.text = 'Please input a valid Email'
        return false
      }
    },
    validPassword(password) {
      var vm = this

      if (password == vm.validator.password.last) {
        return
      }

      vm.validator.password.error = false
      vm.validator.password.last = ''

      if (password.length < 6 || password.length > 12) {
        vm.validator.password.valid = false
        vm.validator.password.text = 'Password must be 6 ~ 12 length characters'
        return false
      } else if (!(/[a-z]/.test(password))) {
        vm.validator.password.valid = false
        vm.validator.password.text = 'Password must contain at least 1 lower case letter'
        return false
      } else if (!(/[A-Z]/.test(password))) {
        vm.validator.password.valid = false
        vm.validator.password.text = 'Password must contain at least 1 capital letter'
        return false
      } else if (!(/[0-9]/.test(password))) {
        vm.validator.password.valid = false
        vm.validator.password.text = 'Password must contain at least 1 number'
        return false
      } else if (!(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password))) {
        vm.validator.password.valid = false
        vm.validator.password.text = 'Password must contain at least 1 special character'
        return false
      }

      return true
    },
    toSignup() {
      this.$router.push({ name: 'Signup' })
    },
    toPassword() {
      this.$router.push({ name: 'ForgotPassword' })
    },
    toHome() {
      this.$router.push({ name: 'LandingPage' })
    },
    toUpload() {
          
    },
    clearSForm() {
      var vm = this
      vm.sform.email = ''
      vm.sform.password = ''
      vm.sform.remember_me = false
      vm.sform.provider_name = ''
    }
  }
}
</script>

<style lang="scss">
  @import "./Login.scss";
</style>