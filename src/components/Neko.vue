<template>
  <div>
    <canvas ref="canvas" width="320" height="320" class="neko-canvas" />
  </div>
</template>
<script lang="ts" setup>
import { makeNeko } from "~/zdog/neko.js"
import { useAnimal } from "~/hooks/useAnimal"

const app = useNuxtApp()

const canvas = ref()
const maker = () => makeNeko(canvas.value, 1, true)

useAnimal(maker, (r) => app.$guriguri(r))
</script>

<style scoped>
.neko-canvas {
  cursor: move;
}
</style>
