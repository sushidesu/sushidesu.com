<template>
  <nav class="navbar is-spaced">
    <div class="navbar-brand items-center">
      <div class="navbar-item">
        <Logo class="logo" />
        <NuxtLink to="/">
          <span class="subtitle">sushidesu.com</span>
        </NuxtLink>
      </div>
      <button
        v-if="!isHome"
        class="navbar-burger is-right dropdown"
        :class="menuClass"
        @click="toggle"
      >
        <div class="icon is-medium i-fluent-emoji-flat-hamburger" />
        <div class="dropdown-menu">
          <div v-if="!isHome" class="dropdown-content">
            <NuxtLink class="dropdown-item" to="/">
              <MenuNeko :zoom="0.8" />
              <p>Home</p>
            </NuxtLink>
            <NuxtLink class="dropdown-item" to="/about">
              <MenuKuma :zoom="0.8" />
              <p>About</p>
            </NuxtLink>
            <NuxtLink class="dropdown-item" to="/works">
              <MenuUsagi :zoom="0.8" />
              <p>Works</p>
            </NuxtLink>
            <NuxtLink class="dropdown-item" to="/contact">
              <MenuSakana :zoom="0.8" />
              <p>Contact</p>
            </NuxtLink>
          </div>
        </div>
      </button>
    </div>
    <div v-if="!isHome" class="navbar-menu">
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
const isHome = computed(() => route.path === "/")

const isOpen = ref(false)
const menuClass = computed(() => ({
  "is-active": isOpen.value,
}))
function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.logo {
  cursor: pointer;
}
.navbar-burger {
  border-radius: 14px;
  margin-right: 0.8rem;
}
.dropdown-item {
  display: flex;
  text-align: left;
  align-items: center;
  column-gap: 0.25rem;
}
</style>
