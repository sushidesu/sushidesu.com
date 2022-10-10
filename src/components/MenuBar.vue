<template>
  <div class="level is-mobile">
    <div class="level-item has-text-centered">
      <NuxtLink to="/" class="item button is-primary is-outlined">
        <canvas ref="canvasNeko" class="neko" width="40" height="40" /><span
          class="lnk"
          >Home</span
        >
      </NuxtLink>
    </div>
    <div class="level-item">
      <NuxtLink to="/about" class="item button is-primary is-outlined">
        <canvas ref="canvasKuma" class="kuma" width="40" height="40" /><span
          class="lnk"
          >About</span
        >
      </NuxtLink>
    </div>

    <div class="level-item">
      <NuxtLink to="/works" class="item button is-primary is-outlined">
        <canvas ref="canvasUsagi" class="usagi" width="40" height="40" /><span
          class="lnk"
          >Works</span
        >
      </NuxtLink>
    </div>
    <div class="level-item">
      <NuxtLink to="/contact" class="item button is-primary is-outlined">
        <canvas ref="canvasSakana" class="sakana" width="40" height="40" /><span
          class="lnk"
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

const app = useNuxtApp()

const canvasNeko = ref()
const neko = ref()
const canvasKuma = ref()
const kuma = ref()
const canvasUsagi = ref()
const usagi = ref()
const canvasSakana = ref()
const sakana = ref()

watchEffect(() => {
  if (neko.value) {
    neko.value.rotate.set(app.$rotate)
    neko.value.updateRenderGraph()
  }
  if (kuma.value) {
    kuma.value.rotate.set(app.$rotate)
    kuma.value.updateRenderGraph()
  }
  if (usagi.value) {
    usagi.value.rotate.set(app.$rotate)
    usagi.value.updateRenderGraph()
  }
  if (sakana.value) {
    sakana.value.rotate.set(app.$rotate)
    sakana.value.updateRenderGraph()
  }
})

onMounted(() => {
  neko.value = makeNeko(canvasNeko.value, 0.14, true)
  kuma.value = makeKuma(canvasKuma.value, 0.14, true)
  usagi.value = makeUsagi(canvasUsagi.value, 0.14, true)
  sakana.value = makeSakana(canvasSakana.value, 0.14, true)
})
</script>
