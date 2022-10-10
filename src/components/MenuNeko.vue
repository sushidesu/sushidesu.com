<template>
  <canvas ref="canvas" width="40" height="40" />
</template>

<script setup>
import { makeNeko } from "~/zdog/neko.js"

const app = useNuxtApp()
const canvas = ref()
const neko = ref()

watchEffect(() => {
  if (neko.value) {
    neko.value.rotate.set(app.$rotate)
    neko.value.updateRenderGraph()
  }
})

onMounted(() => {
  neko.value = makeNeko(canvas.value, 0.14, true)
})
</script>
