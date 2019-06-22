<template>
  <div class="level is-mobile">
    <nuxt-link to="/" class="level-item item button is-primary is-outlined">
      <canvas class="icon neko" width="40" height="40"></canvas><span class="lnk">Home</span>
    </nuxt-link>
    <nuxt-link to="/about" class="level-item item button is-primary is-outlined">
      <canvas class="icon kuma" width="40" height="40"></canvas><span class="lnk">About</span>
    </nuxt-link>
    <nuxt-link to="/illustration" class="level-item item button is-primary is-outlined">
      <canvas class="icon usagi" width="40" height="40"></canvas><span class="lnk">Illustration</span>
    </nuxt-link>
    <nuxt-link to="/contact" class="level-item item button is-primary is-outlined">
      <canvas class="icon sakana" width="40" height="40"></canvas><span class="lnk">Contact</span>
    </nuxt-link>
  </div>
</template>

<style css scoped>
.item {
  height: 60px;
  border-radius: 12px;
  margin-left: 4px;
  margin-right: 4px;
}

.lnk {
  font-weight: bold;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>

<script>
import { makeNeko } from '~/zdog/neko.js'
import { makeKuma} from '~/zdog/kuma.js'
import { makeUsagi } from '~/zdog/usagi.js'
import { makeSakana } from '~/zdog/sakana.js'

export default {
  mounted() {
    makeNeko('.neko', 0.14)
    makeKuma('.kuma', 0.18)
    makeUsagi('.usagi', 0.14)
    makeSakana('.sakana', 0.14)
  }
}
</script>
