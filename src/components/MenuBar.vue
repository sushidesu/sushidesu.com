<template>
  <div class="level is-mobile">
    <div class="level-item has-text-centered">
      <NuxtLink to="/" class="item button is-primary is-outlined">
        <canvas ref="canvasNeko" class="neko" width="40" height="40" /><span class="lnk"
          >Home</span
        >
      </NuxtLink>
    </div>
    <div class="level-item">
      <NuxtLink to="/about" class="item button is-primary is-outlined">
        <canvas ref="canvasKuma" class="kuma" width="40" height="40" /><span class="lnk"
          >About</span
        >
      </NuxtLink>
    </div>

    <div class="level-item">
      <NuxtLink to="/works" class="item button is-primary is-outlined">
        <canvas ref="canvasUsagi" class="usagi" width="40" height="40" /><span class="lnk"
          >Works</span
        >
      </NuxtLink>
    </div>
    <div class="level-item">
      <NuxtLink to="/contact" class="item button is-primary is-outlined">
        <canvas ref="canvasSakana" class="sakana" width="40" height="40" /><span class="lnk"
          >Contact</span
        >
      </NuxtLink>
    </div>
  </div>
</template>

<style css scoped>
.item {
  height: 60px;
  border-radius: 12px;
  width: 100%;
}

.lnk {
  font-weight: bold;
  font-size: 0.6rem;
}

.icon {
  width: 40px;
  height: 40px;
}
@media all and (max-width: 768px) {
  .level-item .item.button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .level.is-mobile .level-item:not(:last-child) {
    margin-right: 0.2rem;
  }

  .menu-bar {
    padding: 10px 4px;
  }
}

@media all and (min-width: 769px) {
  .lnk {
    font-size: 1rem;
  }
}
</style>

<script setup>
import { makeNeko } from "~/zdog/neko.js"
import { makeKuma } from "~/zdog/kuma.js"
import { makeUsagi } from "~/zdog/usagi.js"
import { makeSakana } from "~/zdog/sakana.js"

const canvasNeko = ref()
const canvasKuma = ref()
const canvasUsagi = ref()
const canvasSakana = ref()

onMounted(() => {
  const _neko = makeNeko(canvasNeko.value, 0.14, true)
  const _kuma = makeKuma(canvasKuma.value, 0.18, true)
  const _usagi = makeUsagi(canvasUsagi.value, 0.14, true)
  const _sakana = makeSakana(canvasSakana.value, 0.14, true)

//  const animate = () => {
//    if (this.rotate) {
//      neko.rotate.set(this.rotate)
//      kuma.rotate.set(this.rotate)
//      usagi.rotate.set(this.rotate)
//      sakana.rotate.set(this.rotate)
//    }
//
//    neko.updateRenderGraph()
//    kuma.updateRenderGraph()
//    usagi.updateRenderGraph()
//    sakana.updateRenderGraph()
//    requestAnimationFrame(animate)
//  }
//  animate()
})


// export default {
//   created() {
//     this.setListener()
//   },
//   methods: {
//     setListener() {
//       this.$nuxt.$on("drag", this.onNekoDrag)
//     },
//     onNekoDrag(rotate) {
//       this.rotate = rotate
//     },
//   },
// }
</script>
