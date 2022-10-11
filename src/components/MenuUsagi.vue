<template>
  <canvas ref="canvas" width="40" height="40" />
</template>

<script lang="ts" setup>
import { makeUsagi } from "~/zdog/usagi.js"
import { useAnimalSync } from "~/hooks/useAnimal"

const props = defineProps<{ zoom?: number }>()
const zoom = props.zoom ?? 1

const app = useNuxtApp()
const canvas = ref()

const maker = () => makeUsagi(canvas.value, 0.14 * zoom, true)
useAnimalSync(maker, () => app.$rotate)
</script>
