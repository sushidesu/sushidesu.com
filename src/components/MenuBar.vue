<template>
  <div class="level is-mobile">
    <div class="level-item has-text-centered">
      <NuxtLink to="/" class="item button is-primary is-outlined">
        <MenuNeko />
        <span
          class="lnk"
          >Home</span
        >
      </NuxtLink>
    </div>
    <div class="level-item">
      <NuxtLink to="/about" class="item button is-primary is-outlined">
        <MenuKuma />
        <span
          class="lnk"
          >About</span
        >
      </NuxtLink>
    </div>

    <div class="level-item">
      <NuxtLink to="/works" class="item button is-primary is-outlined">
        <MenuUsagi />
        <span
          class="lnk"
          >Works</span
        >
      </NuxtLink>
    </div>
    <div class="level-item">
      <NuxtLink to="/contact" class="item button is-primary is-outlined">
        <MenuSakana />
        <span
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
