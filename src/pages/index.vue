<template>
  <div>
    <Neko class="main-neko" />
    <div class="background" />
  </div>
</template>

<style scoped>
.main-neko {
  width: 320px;
  height: 320px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
}
.background {
  background-color: transparent;
  height: 100%;
}
</style>
