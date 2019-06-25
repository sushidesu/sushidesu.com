<template>
  <div class="level is-mobile">

        <div class="level-item has-text-centered">
          <nuxt-link to="/" class="item button is-primary is-outlined">
            <canvas class="neko" width="40" height="40"></canvas><span class="lnk">Home</span>
          </nuxt-link>
        </div>
        <div class="level-item">
          <nuxt-link to="/about" class="item button is-primary is-outlined">
            <canvas class="kuma" width="40" height="40"></canvas><span class="lnk">About</span>
          </nuxt-link>
        </div>

        <div class="level-item">
          <nuxt-link to="/illustration" class="item button is-primary is-outlined">
            <canvas class="usagi" width="40" height="40"></canvas><span class="lnk">Illust<span class="is-hidden-tablet">.</span><span class="is-hidden-mobile">ration</span></span>
          </nuxt-link>
        </div>
        <div class="level-item">
          <nuxt-link to="/contact" class="item button is-primary is-outlined">
            <canvas class="sakana" width="40" height="40"></canvas><span class="lnk">Contact</span>
          </nuxt-link>
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
  .level-item .item.button{
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

<script>
import { makeNeko } from '~/zdog/neko.js'
import { makeKuma } from '~/zdog/kuma.js'
import { makeUsagi } from '~/zdog/usagi.js'
import { makeSakana } from '~/zdog/sakana.js'

export default {
  mounted() {
    makeNeko('.neko', 0.14, false)
    makeKuma('.kuma', 0.18, false)
    makeUsagi('.usagi', 0.14, false)
    makeSakana('.sakana', 0.14, false)
  }
}
</script>
