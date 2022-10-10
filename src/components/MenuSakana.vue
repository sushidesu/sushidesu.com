<template>
  <canvas ref="canvas" width="40" height="40" />
</template>

<script setup>
import { makeSakana } from "~/zdog/sakana.js"

const app = useNuxtApp()
const canvas = ref()
const sakana = ref()

watchEffect(() => {
  if (sakana.value) {
    sakana.value.rotate.set(app.$rotate)
    sakana.value.updateRenderGraph()
  }
})

onMounted(() => {
  sakana.value = makeSakana(canvas.value, 0.14, true)
})
</script>
