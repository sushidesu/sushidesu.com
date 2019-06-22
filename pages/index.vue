<template>
  <div>
    <neko  class="main" />
  </div>
</template>

<style scoped>
  .main {
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
</style>


<script>
import Neko from '~/components/Neko.vue'

export default {
  components: {
    Neko
  },
  layout: 'toppage'
}
</script>
