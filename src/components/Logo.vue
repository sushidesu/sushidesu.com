<template>
  <canvas ref="canvas" width="60" height="60" />
</template>

<script lang="ts" setup>
import { makeNeko } from "~/zdog/neko.js"
import { useAnimal } from "~/hooks/useAnimal"

const canvas = ref()

const maker = () => {
  const neko = makeNeko(canvas.value, 0.2, true)
  neko.rotate.y -= 0.2
  neko.rotate.x -= 0.2
  return neko
}

useAnimal(maker)
</script>
