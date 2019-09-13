<template>
  <b-container fluid class="signup auth-page">
    <confirm></confirm>
    <error></error>

    <b-row>
      <b-col xl="5" lg="6" md="12" sm="12" xs="12" class="signup-left">
        <b-row class="header">
          <b-col xl="7" offset-xl="3" lg="8" offset-lg="2" md="8" offset-md="2" class="wrapper">
            <AuthHeader />
          </b-col>
        </b-row>

        <b-row class="auth-form">
          <b-col xl="7" offset-xl="3" lg="8" offset-lg="2" md="8" offset-md="2" class="wrapper">
            <b-form @submit.prevent="onSignup">
              <h3 class="form-title text-left">Create an account</h3>
              <span class="form-subtitle text-gray text-left">Already have a CoffeeSign account? <b-link href="javascript:;" @click="toLogin" class="text-coffee-light link">Sign in</b-link></span>
              <b-form-group id="grpEmail"
                :class="{
                  'form-group-withicon': true,
                  'form-group-focus': validator.email.focus && !validator.email.error && (!validator.email.blured || validEmail(form.email)),
                  'form-group-invalid': validator.email.blured && (!validEmail(form.email) || validator.email.error),
                  'form-group-valid': validator.email.blured && (validEmail(form.email) && !validator.email.error)
                }">
                <b-form-input id="email"
                  :class="{
                    'form-control-coffee': true,
                    'input-invalid': validator.email.blured && (!validEmail(form.email) || validator.email.error),
                    'input-valid': validator.email.blured && (validEmail(form.email) && !validator.email.error)
                  }"
                  @blur="validator.email.blured = true, validator.email.focus = false"
                  @focus ="validator.email.focus = true"
                  type="email"
                  v-model="form.email"
                  placeholder="Your email address"> 
                </b-form-input>
                <font-awesome-icon icon="envelope-open" />
                <p class="validation-error" v-if="validator.email.blured && (!validEmail(form.email) || validator.email.error)">{{ validator.email.text }}</p>
              </b-form-group>
              <b-form-group id="grpPassword"
                :class="{
                  'form-group-withicon': true,
                  'form-group-focus': validator.password.focus && (!validator.password.blured || validPassword(form.password)),
                  'form-group-password': true,
                  'form-group-invalid': validator.password.blured && !validPassword(form.password),
                  'form-group-valid': validator.password.blured && validPassword(form.password)
                }">
                <b-form-input id="password"
                  :class="{
                    'form-control-coffee': true,
                    'password': true,
                    'input-valid': validator.password.blured && (validPassword(form.password)),
                    'input-invalid': !validPassword(form.password) && validator.password.blured
                  }"
                  @blur="validator.password.blured = true, validator.password.focus = false"
                  @focus="validator.password.focus = true"
                  :type="isShowPassword?'text':'password'"
                  v-model="form.password"
                  placeholder="Password">
                </b-form-input>
                <div class="eye" href="javascript:;" @click="onShowPassword"><font-awesome-icon icon="eye-slash" v-if="isShowPassword" /><font-awesome-icon icon="eye" v-else /></div>
                <font-awesome-icon icon="lock" />
                <p class="validation-error" v-if="!validPassword(form.password) && validator.password.blured">{{ validator.password.text }}</p>
              </b-form-group>
              <b-form-group id="grpPasswordConfirmation"
                :class="{
                  'form-group-withicon': true,
                  'form-group-focus': validator.password_confirmation.focus && (!validator.password_confirmation.blured || matchPassword(form.password, form.password_confirmation)),
                  'form-group-password': true,
                  'form-group-valid': validator.password_confirmation.blured && matchPassword(form.password, form.password_confirmation),
                  'form-group-invalid': !matchPassword(form.password, form.password_confirmation) && validator.password_confirmation.blured
                }">
                <b-form-input id="password_confirmation"
                  :class="{
                    'form-control-coffee': true,
                    'password': true,
                    'input-valid': validator.password_confirmation.blured && (matchPassword(form.password, form.password_confirmation)),
                    'input-invalid': !matchPassword(form.password, form.password_confirmation) && validator.password_confirmation.blured
                  }"
                  @blur="validator.password_confirmation.blured = true, validator.password_confirmation.focus = false"
                  @focus="validator.password_confirmation.focus = true"
                  :type="isShowPasswordConfirm?'text':'password'"
                  v-model="form.password_confirmation"
                  placeholder="Confirm password">
                </b-form-input>
                <div class="eye" href="javascript:;" @click="onShowPasswordConfirm"><font-awesome-icon icon="eye-slash" v-if="isShowPasswordConfirm" /><font-awesome-icon icon="eye" v-else /></div>
                <font-awesome-icon icon="lock" />
                <p class="validation-error" v-if="!matchPassword(form.password, form.password_confirmation) && validator.password_confirmation.blured">{{ validator.password_confirmation.text }}</p>
              </b-form-group>
              <input type="submit" class="btn btn-block btn-md btn-coffee" value="Sign Up and Get Started"/>

            </b-form>
            <span class="text-gray" style="display: block; margin-top: 20px;">By proceeding your agree to the <a href="javascript:;" class="text-coffee-light link"  @click="toTerms();" >Terms of Use</a> and <a href="javascript:;" class="text-coffee-light link" @click="toPolicy();">Privacy Policy</a></span>
          </b-col>
        </b-row>
      </b-col>

      <b-col xl="7" lg="6" class="signup-right pb-5">
        <h1>What is CoffeeSign?</h1>
        <p>CoffeeSign is a 3-step e-signature service that helps your business grow faster.</p>
        <p>Save your time and money with us.</p>

        <div class="carousel-container">
          <carousel :per-page="1" 
            :autoplay="true" 
            :mouse-drag="true" mouse-drag.boolean="false"
            :navigationEnabled="false"
            :paginationEnabled="true"
            :loop="false"
            :interval="8000"
            showControls
            :paginationColor="'rgba(255, 255, 255, 0.3)'"
            :paginationActiveColor="'rgba(255, 255, 255, 1)'"
            :paginationSize="7"
            :paginationPadding="3">
            <slide class="pos-rel">
              <a target="_blank">
                <img src="img/slides/slide01.png" class="img-responsive"/>
              </a>
            </slide>
            <slide class="pos-rel">
              <a target="_blank">
                <img src="img/slides/slide01.png" class="img-responsive"/>
              </a>
            </slide>
            <slide class="pos-rel">
              <a target="_blank">
                <img src="img/slides/slide01.png" class="img-responsive"/>
              </a>
            </slide>
            <slide class="pos-rel">
              <a target="_blank">
                <img src="img/slides/slide01.png" class="img-responsive"/>
              </a>
            </slide>
          </carousel>
        </div>
      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import AuthHeader from './AuthHeader'
import Confirm from '../../components/signup/Confirm.modal'
import Error from '../../components/common/Error.modal'

// import { authentication } from '../../mixins/authentication'
import axios from 'axios'
import { Promise } from 'q';

export default {
  name: "Signup",
  // mixins: [authentication],
  components: {
    Confirm, Error,
    Carousel,
    Slide,
    AuthHeader,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        password_confirmation: '',
        provider_name: ''
      },
      sform: {
        email: '',
        password: '',
        password_confirmation: '',
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
          text: ''
        },
        password_confirmation: {
          valid: true,
          focus: false,
          blured: false,
          text: 'Password does not match'
        }
      },
      isShowPassword: false,
      isShowPasswordConfirm: false,
    }
  },
  methods: {
    onSignup() {
      var vm = this
      vm.form.provider_name = ''

      if (!vm.validate()) {
        return
      }

      localStorage.setItem('signup-form', JSON.stringify(vm.form))

      return new Promise((resolve, reject) => {
        axios.post('auth/signup', vm.form)
          .then(resp => {
            vm.onSuccess()
          })
          .catch(err => {
            if (error.response.status == 422) {
              var errors = error.response.data.errors
                if (errors.email.length > 0) {
                  vm.validator.email.error = true
                  vm.validator.email.text = errors.email[0]
                  vm.validator.email.last = vm.form.email
                }
              } 
              else {
                vm.$store.dispatch('authError', ["Failed to sign up."])
                vm.$bvModal.show('modal-error')
              }                
          })
      })
    },
    onSuccess() {
      this.$bvModal.show('modal-confirm')
    },
    onFailed() {},
    onShowPassword() {
      if (this.isShowPassword) {
        this.isShowPassword = false
      } 
      else {
        this.isShowPassword = true
      }
    },
    onShowPasswordConfirm() {
      if (this.isShowPasswordConfirm) {
        this.isShowPasswordConfirm = false
      } else {
        this.isShowPasswordConfirm = true
      }
    },
    validate() {
      var vm = this

      vm.validator.email.blured = true
      vm.validator.password.blured = true
      vm.validator.password_confirmation.blured = true

      if (vm.validEmail(vm.form.email) && vm.validPassword(vm.form.password) && vm.matchPassword(vm.form.password, vm.form.password_confirmation)) {
        return true
      } else {
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
    matchPassword(password, password_confirmation) {
      var vm = this
      if (password_confirmation.length < 6 || password_confirmation.length > 12) {
        vm.validator.password_confirmation.valid = false
        vm.validator.password_confirmation.text = 'Password must be 6 ~ 12 length characters'
        return false
      } else if (!(/[a-z]/.test(password_confirmation))) {
        vm.validator.password_confirmation.valid = false
        vm.validator.password_confirmation.text = 'Password must contain at least 1 lower case letter'
        return false
      } else if (!(/[A-Z]/.test(password_confirmation))) {
        vm.validator.password_confirmation.valid = false
        vm.validator.password_confirmation.text = 'Password must contain at least 1 capital letter'
        return false
      } else if (!(/[0-9]/.test(password_confirmation))) {
        vm.validator.password_confirmation.valid = false
        vm.validator.password_confirmation.text = 'Password must contain at least 1 number'
        return false
      } else if (!(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password_confirmation))) {
        vm.validator.password_confirmation.valid = false
        vm.validator.password_confirmation.text = 'Password must contain at least 1 special character'
        return false
      } else if (password !== password_confirmation) {
        vm.validator.password_confirmation.valid = false;
        vm.validator.password_confirmation.text = "Password doesn't match"
        return false
      }

      return true
    },
    toLogin() {
      this.$router.push({ name: 'Login' })
    },
    toTerms() {
      this.$router.push({ name: 'Terms' })
    },
    toPolicy() {
      this.$router.push({ name: 'Privacy' })
    },
    toHome() {
      this.$router.push({ name: 'Home' })
    },
    clearSForm() {
      var vm = this
      vm.sform.provider_name = ''
      vm.sform.email = ''
      vm.sform.password = ''
      vm.sform.password_confirmation = ''
    }
  }
}
</script>

<style lang="scss">
  @import "./Login.scss";
</style>