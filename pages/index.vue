<template>
  <div>
    <h2>Test</h2>
    <ul>
      <li v-for="item in items" :key="item.sys.id">{{ item.fields.title }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchEntries } from "@/api";

export default {
  async asyncData() {
    return await fetchEntries('post')
  }
}
</script>
