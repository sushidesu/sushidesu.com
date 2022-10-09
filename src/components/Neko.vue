<template>
  <div>
    <canvas ref="canvas" width="320" height="320" class="neko-canvas" />
    <!-- <input v-model="neko.rotate.x" /> -->
  </div>
</template>

<style scoped>
.neko-canvas {
  cursor: move;
}
</style>

<script setup>
import { makeNeko } from "~/zdog/neko.js"

const canvas = ref()
const neko = ref()
const rotate = ref({
  x: 0,
  y: 0,
  z: 0,
})

onMounted(() => {
  neko.value = makeNeko(canvas.value, 1, true)
  rotate.value = neko.value.rotate
  const animate = () => {
    neko.value.updateRenderGraph()
    requestAnimationFrame(animate)
  }
  animate()
})

//export default {
//  data: () => ({
//    rotate: {
//      x: 0,
//      y: 0,
//      z: 0,
//    },
//  }),
//  watch: {
//    rotate: {
//      handler: function () {
//        this.$nuxt.$emit("drag", this.rotate)
//      },
//      deep: true,
//    },
//  },
//  mounted() {
//    this.neko = makeNeko(".neko-canvas", 1, true)
//    this.rotate = this.neko.rotate
//    const animate = () => {
//      this.neko.updateRenderGraph()
//      requestAnimationFrame(animate)
//    }
//    animate()
//  },
//}
</script>
