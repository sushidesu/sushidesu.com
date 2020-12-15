<template>
  <div>
  <canvas width="320" height="320" class='neko-canvas'></canvas>
  <!-- <input v-model="neko.rotate.x" /> -->
  </div>
</template>

<style scoped>
.neko-canvas {
  cursor: move;
}
</style>


<script>
import { makeNeko } from '~/zdog/neko.js'

export default {
  data: () => ({
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    }
  }),
  mounted() {
    this.neko = makeNeko('.neko-canvas', 1, true)
    this.rotate = this.neko.rotate
    const animate = () => {
      this.neko.updateRenderGraph()
      requestAnimationFrame(animate)
    }
    animate()
  },
  watch: {
    rotate: {
      handler: function() {
        this.$nuxt.$emit("drag", this.rotate)
      },
      deep: true,
    }
  }
}
</script>
