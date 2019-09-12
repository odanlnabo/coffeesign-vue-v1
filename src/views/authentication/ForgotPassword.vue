<template>
  <b-container fluid class="auth-page reset-password">
    <!-- <instruction></instruction> -->

    <b-row class="container header">
      <b-col md="12">
        <AuthHeader />
      </b-col>
    </b-row>

    <b-row class="auth-form">
      <b-col lg="5" md="8" offset-md="2" class="wrapper">
        <b-form @submit.prevent="onRequest">
          <h3 class="form-title">Forgot your password?</h3>
          <span class="form-subtitle text-gray">Back to <b-link href="javascript:;" @click="toLogin" class="text-coffee-light link">Sign In</b-link></span>
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
          <input type="submit" class="btn btn-block btn-md btn-coffee" value="Submit"/>        
        </b-form>
        <span class="text-gray" style="display: block; margin-top: 20px; text-align: center;">You will receive a password reset link at your registered email address,<br/>which is valid for 10 minutes.</span>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import AuthHeader from './AuthHeader';

export default {
  name: "ForgotPassword",
  components: {
    AuthHeader,
  },
  data() {
    return {
      form: {
        email: ''
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
      },
      isRequestFailed: false
    }
  },
  methods: {
    onRequest() {},
    onSuccess() {},
    validate() {},
    validEmail(email) {},
    toLogin() {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss">
  @import "./Login.scss";
</style>