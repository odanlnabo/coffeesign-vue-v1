<template>
  <div>
    <b-modal id="modal-confirmed" class="modal-size-lg" size="lg" centered hide-header-close no-close-on-backdrop no-close-on-esc>
      <template slot="modal-header" slot-scope="{  }">
        <img src="img/logo_dark.svg"/>
      </template>
      <template slot="default">
        <img src="img/envelopes/envelope-check.png"/>
        <h3>Thank you for confirming your account.</h3>
        <button @click="toLogin" class="btn btn-md btn-coffee">Go to the Sign In page</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
