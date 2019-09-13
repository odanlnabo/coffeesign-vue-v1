<template>
  <div class="w-100">
    <hr class="seperate-bar logout-seperate-bar" />
    <b-button block variant="trans" class="text-left" v-on:click="logout">
      <UserIcon icon="logout_header.svg" class="mr-3"></UserIcon>Logout
    </b-button>
  </div>
</template>

<script>
import UserIcon from "./UserIcon";
export default {
  name: "Logout",
  components: {
    UserIcon
  },
  methods: {
    logout: function() {      
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
};
</script>
<style lang="scss">
.logout-seperate-bar {
  margin-bottom: 5px !important;
}
</style>
