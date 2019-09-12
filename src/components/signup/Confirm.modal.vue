<template>
  <div>
    <b-modal id="modal-confirm" size="lg" centered>
      <template slot="modal-header" slot-scope=""></template>
      <template slot="default">
        <b-img src="img/envelopes/envelope.png"></b-img>
        <h3 style="white-space: pre-wrap;">{{message}}</h3>
        <span class="text-gray">If you cannot find your confirmation email, please check your spam folder,<br/>or <a class="text-coffee-light link" href="javascript:;" @click="onResend">click here to resend the confirmation email.</a></span>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ConfirmModal",
  data() {
    return {
      
    }
  }
}
</script>