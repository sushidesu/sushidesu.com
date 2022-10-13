<template>
  <canvas ref="canvas" width="40" height="40" />
</template>

<script lang="ts" setup>
import { makeKuma } from "~/zdog/kuma.js"
import { useAnimalSyncOnce } from "~/hooks/useAnimal"

const props = defineProps<{ zoom?: number }>()
const zoom = props.zoom ?? 1

const app = useNuxtApp()
const canvas = ref()

const maker = () => makeKuma(canvas.value, 0.18 * zoom, true)
useAnimalSyncOnce(maker, () => app.$rotate)
</script>
