<template>
  <canvas width="60" height="60" class="logo-canvas" />
</template>

<script>
import { makeNeko } from "~/zdog/neko.js"

export default {
  mounted() {
    const _neko = makeNeko(".logo-canvas", 0.2, true)
//    const animate = () => {
//      neko.updateRenderGraph()
//      requestAnimationFrame(animate)
//    }
//    animate()
//    neko.rotate.y -= 0.2
//    neko.rotate.x -= 0.2
  },
}
</script>
