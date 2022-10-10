<template>
  <canvas ref="canvas" width="40" height="40" />
</template>

<script lang="ts" setup>
import { makeSakana } from "~/zdog/sakana.js"

const props = defineProps<{ zoom?: number }>()
const zoom = props.zoom ?? 1

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
  sakana.value = makeSakana(canvas.value, 0.14 * zoom, true)
})
</script>
