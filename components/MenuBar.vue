<template>
  <div class="columns parent">
    <div class="column parent">
      <div class="columns is-mobile">
        <div class="column">
          <nuxt-link to="/" class="item button is-primary is-outlined">
            <canvas class="icon neko" width="40" height="40"></canvas><span class="lnk">Home</span>
          </nuxt-link>
        </div>
        <div class="column">
          <nuxt-link to="/about" class="item button is-primary is-outlined">
            <canvas class="icon kuma" width="40" height="40"></canvas><span class="lnk">About</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="column parent">
      <div class="columns is-mobile">
        <div class="column">
          <nuxt-link to="/illustration" class="item button is-primary is-outlined">
            <canvas class="icon usagi" width="40" height="40"></canvas><span class="lnk">Illustration</span>
          </nuxt-link>
        </div>
        <div class="column">
          <nuxt-link to="/contact" class="item button is-primary is-outlined">
            <canvas class="icon sakana" width="40" height="40"></canvas><span class="lnk">Contact</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style css scoped>
.item {
  height: 60px;
  border-radius: 12px;
  width: 100%;
}

.column.parent {
  padding-bottom: 0;
}

.columns.parent {
  padding: 0.4rem 0.4rem 0.2rem 0.4rem;
}

.lnk {
  font-weight: bold;
  font-size: 0.8rem;
}

.icon {
  width: 40px;
  height: 40px;
}

@media all and (min-width: 1024px) {
  .lnk {
    font-size: 1rem;
  }
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
