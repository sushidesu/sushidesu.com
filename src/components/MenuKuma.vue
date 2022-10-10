<template>
  <canvas ref="canvas" width="40" height="40" />
</template>

<script setup>
import { makeKuma } from "~/zdog/kuma.js"

const app = useNuxtApp()
const canvas = ref()
const kuma = ref()

watchEffect(() => {
  if (kuma.value) {
    kuma.value.rotate.set(app.$rotate)
    kuma.value.updateRenderGraph()
  }
})

onMounted(() => {
  kuma.value = makeKuma(canvas.value, 0.18, true)
})
</script>
