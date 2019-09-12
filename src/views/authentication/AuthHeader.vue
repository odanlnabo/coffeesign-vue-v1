<template>
  <div>
    <b-link href="javascript:;" class="logo"><img src="img/logo_dark.svg" style="width: 125px; height: auto"></b-link>
    <b-dropdown text="English" class="language-select">
      <b-dropdown-item>
        <img src="img/flags/uk.png" class="flag" />English
      </b-dropdown-item>
      <b-dropdown-item>
        <img src="img/flags/jp.png" class="flag" />日本語
      </b-dropdown-item>
      <b-dropdown-item>
        <img src="img/flags/kr.png" class="flag" />한국어
      </b-dropdown-item>
    </b-dropdown>
    <img src="img/flags/uk.png" class="flag" />
  </div>
</template>

<script>
export default {
  name: "AuthHeader",
}
</script>