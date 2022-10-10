<template>
  <canvas ref="canvas" width="40" height="40" />
</template>

<script setup>
import { makeUsagi } from "~/zdog/usagi.js"

const app = useNuxtApp()
const canvas = ref()
const usagi = ref()

watchEffect(() => {
  if (usagi.value) {
    usagi.value.rotate.set(app.$rotate)
    usagi.value.updateRenderGraph()
  }
})

onMounted(() => {
  usagi.value = makeUsagi(canvas.value, 0.14, true)
})
</script>
