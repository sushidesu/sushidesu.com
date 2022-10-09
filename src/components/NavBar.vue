<template>
  <nav class="navbar is-spaced">
    <div class="navbar-brand">
      <div class="navbar-item">
        <logo class="logo" />
        <NuxtLink to="/">
          <span class="subtitle">sushidesu.com</span>
        </NuxtLink>
      </div>
    </div>
    <div class="navbar-menu" />
  </nav>
</template>

<style scoped>
.logo {
  cursor: pointer;
}
</style>

<script>
import Logo from "~/components/Logo.vue"

export default {
  components: {
    Logo,
  },
}
</script>
