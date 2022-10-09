<template>
  <canvas
    width="60"
    height="60"
    class="logo-canvas"
  />
</template>

<script setup>
import { makeNeko } from "~/zdog/neko.js"

const neko = ref()

onMounted(() => {
  neko.value = makeNeko(".logo-canvas", 0.2, true)
  const animate = () => {
    neko.value.updateRenderGraph()
    requestAnimationFrame(animate)
  }
  neko.value.rotate.y -= 0.2
  neko.value.rotate.x -= 0.2
  animate()
})
</script>
