<template>
  <nav class="navbar is-spaced">
    <div class="navbar-brand items-center">
      <div class="navbar-item">
        <Logo class="logo" />
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
              <MenuNeko :zoom="0.8" />
              <p>Home</p>
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ close }">
            <NuxtLink class="dropdown-item" to="/about" @click="close">
              <MenuKuma :zoom="0.8" />
              <p>About</p>
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ close }">
            <NuxtLink class="dropdown-item" to="/works" @click="close">
              <MenuUsagi :zoom="0.8" />
              <p>Works</p>
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ close }">
            <NuxtLink class="dropdown-item" to="/contact" @click="close">
              <MenuSakana :zoom="0.8" />
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
              <MenuNeko />
            </MenuLink>
            <MenuLink text="About" path="/about">
              <MenuKuma />
            </MenuLink>
            <MenuLink text="Works" path="/works">
              <MenuUsagi />
            </MenuLink>
            <MenuLink text="Contact" path="/contact">
              <MenuSakana />
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
.logo {
  cursor: pointer;
}
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
