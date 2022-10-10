<template>
  <div class="site-all">
    <NavBar class="nav-bar" />
    <main class="main">
      <slot />
    </main>
    <MenuBar v-if="router.path === '/'" class="menu-bar" />
  </div>
</template>

<script lang="ts" setup>
const router = useRoute()
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.menu-bar {
  padding: 20px;
  margin: 0;
}

.columns:last-child {
  margin-bottom: 0;
}

html {
  background-color: var(--main);
}
</style>

<style scoped>
.site-all {
  background-color: var(--white);
  min-height: calc(100vh - 16px);
  min-height: calc(100dvh - 16px);
  margin: 8px 10px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
}

.nav-bar {
  background-color: transparent;
}

.main {
  flex: 1;
}

.menu-bar {
  position: sticky;
  bottom: 0;
}
</style>
