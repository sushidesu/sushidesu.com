<template>
  <nav class="navbar is-spaced">
    <div class="navbar-brand">
      <div class="navbar-item">
        <logo class="logo" />
        <nuxt-link to="/">
          <span class="subtitle">sushidesu.com</span>
        </nuxt-link>
      </div>
    </div>
    <div class="navbar-menu"></div>
  </nav>
</template>

<style scoped>
.logo {
  cursor: pointer;
}
</style>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
