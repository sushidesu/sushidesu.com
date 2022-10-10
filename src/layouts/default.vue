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
  border-radius: 0 0px 14px 14px;
  background-color: rgba(242, 255, 252, 0.94);
  border-top: 1px solid var(--main);
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
  border-radius: 14px;
  margin: 8px 14px;
  padding-bottom: 2px;
  min-height: 98vh;
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
