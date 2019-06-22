<template>
  <canvas width="320" height="320" class='neko-canvas'></canvas>
</template>

<style scoped>
.neko-canvas {
  cursor: move;
}
</style>


<script>
import { makeNeko } from '~/zdog/neko.js'

export default {
  mounted() {
    makeNeko('.neko-canvas', 1)
}
}
</script>
