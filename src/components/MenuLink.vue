<template>
  <div class="level-item has-text-centered">
    <NuxtLink :to="props.path" class="item button is-primary is-outlined">
      <slot />
      <span class="lnk">{{ props.text }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string
  path: string
}>()
</script>

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
