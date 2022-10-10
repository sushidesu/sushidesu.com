<template>
  <canvas ref="canvas" width="40" height="40" />
</template>

<script lang="ts" setup>
import { makeUsagi } from "~/zdog/usagi.js"

const props = defineProps<{ zoom?: number }>()
const zoom = props.zoom ?? 1

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
  usagi.value = makeUsagi(canvas.value, 0.14 * zoom, true)
})
</script>
