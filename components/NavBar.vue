<template>
  <nav class="navbar is-spaced">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <logo />
        <span class="subtitle">sushidesu.com</span>
      </nuxt-link>
    </div>
    <div class="navbar-menu"></div>
  </nav>
</template>



<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
