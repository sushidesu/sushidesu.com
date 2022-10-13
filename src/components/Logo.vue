<template>
  <canvas ref="canvas" class="cursor-pointer" width="60" height="60" />
</template>

<script lang="ts" setup>
import { makeNeko } from "~/zdog/neko.js"
const canvas = ref()

let neko
let req

onMounted(() => {
  neko = makeNeko(canvas.value, 0.2, true)
  neko.rotate.y -= 0.2
  neko.rotate.x -= 0.2
  neko.updateRenderGraph()
})

const animate = () => {
  neko.updateRenderGraph()
  req = requestAnimationFrame(animate)
}

onMounted(() => {
  req = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(req)
})
</script>
