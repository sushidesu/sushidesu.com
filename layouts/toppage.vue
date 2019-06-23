<template>
  <div class="site-all">
    <nav-bar class="nav-bar" />
    <nuxt />
    <div class="background"></div>
    <menu-bar class="menu-bar"/>
  </div>
</template>

<style scoped>

.site-all {
  margin: 8px 14px;
}

.nav-bar {
  background-color: transparent;
}

.section {
  position: relative;
  z-index: 2;
}

.background {
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 8px 14px;
  z-index: 0;
  border-radius: 14px;
  background-color: var(--white);
}

.menu-bar.level {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 8px 14px;
  z-index: 3;
}
</style>

<script>
import NavBar from '~/components/NavBar.vue';
import MenuBar from '~/components/MenuBar.vue';

export default {
  components: {
    NavBar,
    MenuBar
  }
}
</script>
