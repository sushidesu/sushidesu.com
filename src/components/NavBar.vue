<template>
  <nav class="navbar is-spaced">
    <div class="navbar-brand items-center">
      <div class="navbar-item">
        <Logo class="logo" />
        <NuxtLink to="/">
          <span class="subtitle">sushidesu.com</span>
        </NuxtLink>
      </div>
      <button class="navbar-burger button is-medium" v-if="route.path !== '/'">
        <div class="icon i-fluent-emoji-flat-hamburger" />
      </button>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button">Home</button>
            <button class="button">About</button>
            <button class="button">Works</button>
            <button class="button">Contact</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style scoped>
.logo {
  cursor: pointer;
}
.navbar-burger {
  border-radius: 14px;
  margin-right: .8rem;
}
</style>
