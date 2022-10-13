<template>
  <nav class="navbar is-spaced">
    <div class="navbar-brand items-center">
      <div class="navbar-item">
        <Logo v-once />
        <NuxtLink to="/">
          <span class="subtitle">sushidesu.com</span>
        </NuxtLink>
      </div>
      <Menu v-if="!isHome">
        <MenuButton class="navbar-burger dropdown is-right">
          <div class="icon is-medium i-fluent-emoji-flat-hamburger" />
        </MenuButton>
        <MenuItems class="dropdown-menu dropdown-content">
          <MenuItem v-slot="{ close }">
            <NuxtLink class="dropdown-item" to="/" @click="close">
              <MenuNekoLight :zoom="0.8" />
              <p>Home</p>
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ close }">
            <NuxtLink class="dropdown-item" to="/about" @click="close">
              <MenuKumaLight :zoom="0.8" />
              <p>About</p>
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ close }">
            <NuxtLink class="dropdown-item" to="/works" @click="close">
              <MenuUsagiLight :zoom="0.8" />
              <p>Works</p>
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ close }">
            <NuxtLink class="dropdown-item" to="/contact" @click="close">
              <MenuSakanaLight :zoom="0.8" />
              <p>Contact</p>
            </NuxtLink>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
    <div v-if="!isHome" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="flex gap-2">
            <MenuLink text="Home" path="/">
              <MenuNekoLight />
            </MenuLink>
            <MenuLink text="About" path="/about">
              <MenuKumaLight />
            </MenuLink>
            <MenuLink text="Works" path="/works">
              <MenuUsagiLight />
            </MenuLink>
            <MenuLink text="Contact" path="/contact">
              <MenuSakanaLight />
            </MenuLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"

const route = useRoute()
const isHome = computed(() => route.path === "/")
</script>

<style scoped>
.navbar-burger {
  border-radius: 14px;
  margin-right: 0.8rem;
}
.dropdown-menu {
  left: auto;
  right: 0;
  display: block;
}
.dropdown-item {
  display: flex;
  text-align: left;
  align-items: center;
  column-gap: 0.25rem;
}
</style>
