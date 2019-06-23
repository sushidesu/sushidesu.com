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
    const neko = makeNeko('.neko-canvas', 1, true)
    const animate = () => {
      neko.updateRenderGraph()
      requestAnimationFrame(animate)
    }
    animate()
}
}
</script>
