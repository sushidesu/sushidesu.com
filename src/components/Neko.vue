<template>
  <div>
    <canvas ref="canvas" width="320" height="320" class="neko-canvas" />
    <!-- <input v-model="neko.rotate.x" /> -->
  </div>
</template>
<script setup>
import { makeNeko } from "~/zdog/neko.js"

const app = useNuxtApp()

const canvas = ref()
const neko = ref()

watch(
  neko,
  (neko) => {
    app.$guriguri(neko.rotate)
  },
  {
    deep: true,
  }
)

onMounted(() => {
  neko.value = makeNeko(canvas.value, 1, true)
  const animate = () => {
    neko.value.updateRenderGraph()
    requestAnimationFrame(animate)
  }
  animate()
})
</script>

<style scoped>
.neko-canvas {
  cursor: move;
}
</style>
