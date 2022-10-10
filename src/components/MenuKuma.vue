<template>
  <canvas ref="canvas" width="40" height="40" />
</template>

<script lang="ts" setup>
import { makeKuma } from "~/zdog/kuma.js"

const props = defineProps<{ zoom?: number }>()
const zoom = props.zoom ?? 1

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
  kuma.value = makeKuma(canvas.value, 0.18 * zoom, true)
})
</script>
