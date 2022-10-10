<template>
  <nav class="navbar is-spaced">
    <div class="navbar-brand items-center">
      <div class="navbar-item">
        <Logo class="logo" />
        <NuxtLink to="/">
          <span class="subtitle">sushidesu.com</span>
        </NuxtLink>
      </div>
      <button v-if="route.path !== '/'" class="navbar-burger button is-medium">
        <div class="icon i-fluent-emoji-flat-hamburger" />
      </button>
    </div>
    <div class="navbar-menu" v-if="route.path !== '/'">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="flex gap-2">
            <MenuItem text="Home" path="/">
              <MenuNeko />
            </MenuItem>
            <MenuItem text="About" path="/about">
              <MenuKuma />
            </MenuItem>
            <MenuItem text="Works" path="/works">
              <MenuUsagi />
            </MenuItem>
            <MenuItem text="Contact" path="/contact">
              <MenuSakana />
            </MenuItem>
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
  margin-right: 0.8rem;
}
</style>
