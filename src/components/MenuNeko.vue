<template>
  <canvas ref="canvas" width="40" height="40" />
</template>

<script lang="ts" setup>
import { makeNeko } from "~/zdog/neko.js"
import { useAnimalSync } from "~/hooks/useAnimal"

const props = defineProps<{ zoom?: number }>()
const zoom = props.zoom ?? 1

const app = useNuxtApp()
const canvas = ref()

const maker = () => makeNeko(canvas.value, 0.14 * zoom, true)
useAnimalSync(maker, () => app.$rotate)
</script>
