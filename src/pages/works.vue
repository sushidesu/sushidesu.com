<template>
  <section class="section">
    <div class="container">
      <div class="titles">
        <h2 class="title">Works</h2>
        <p class="subtitle is-6 has-text-grey">つくったもの</p>
      </div>

      <div class="view-switch">
        <button
          type="button"
          class="view-button"
          :class="{ 'is-active': view === 'card' }"
          :aria-pressed="view === 'card'"
          @click="view = 'card'"
        >
          カード
        </button>
        <button
          type="button"
          class="view-button"
          :class="{ 'is-active': view === 'timeline' }"
          :aria-pressed="view === 'timeline'"
          @click="view = 'timeline'"
        >
          タイムライン
        </button>
      </div>

      <ul v-if="view === 'card'" class="works works--card">
        <li v-for="app in apps" v-once :key="app.id" class="h-full">
          <article class="work">
            <div class="image-wrapper">
              <img :src="app.screenshots[0].url" />
            </div>
            <div class="content">
              <h3 v-if="app.link" class="title is-5">
                <a target="_blank" rel="nofollow noopener" :href="app.link">
                  <span>{{ app.title }}</span>
                  <span
                    class="i-fa-solid-external-link-alt inline-block icon mt"
                  />
                </a>
              </h3>
              <h3 v-else class="title is-5">
                {{ app.title }}
              </h3>
              <div class="tags">
                <span
                  v-for="tag in app.tags"
                  :key="tag.id"
                  class="hashtag flex items-center"
                >
                  <span class="i-fa-solid-hashtag" />
                  <span>{{ tag.title }}</span>
                </span>
              </div>
              <p>{{ app.description }}</p>
              <a
                v-if="app.source"
                class="tag github-tag"
                :href="app.source"
                target="_blank"
                rel="nofollow noopener"
              >
                <span class="icon">
                  <div class="i-fa-brands-github" />
                </span>
                <span>GitHub</span>
              </a>
            </div>
          </article>
        </li>
      </ul>

      <ul v-else class="works works--timeline">
        <li
          v-for="app in sortedApps"
          v-once
          :key="app.id"
          class="timeline-item"
        >
          <div class="timeline-rail">
            <span class="timeline-dot" />
            <span class="timeline-line" />
          </div>
          <div class="timeline-content">
            <div class="timeline-meta">
              {{ formatDate(app.createdAt) }}
            </div>
            <article class="work work--timeline">
              <div class="timeline-entry">
                <div class="timeline-thumb">
                  <img :src="app.screenshots[0].url" />
                </div>
                <div class="timeline-body">
                  <h3 v-if="app.link" class="title is-6">
                    <a target="_blank" rel="nofollow noopener" :href="app.link">
                      <span>{{ app.title }}</span>
                      <span
                        class="i-fa-solid-external-link-alt inline-block icon"
                      />
                    </a>
                  </h3>
                  <h3 v-else class="title is-6">
                    {{ app.title }}
                  </h3>
                </div>
                <a
                  v-if="app.source"
                  class="tag github-tag github-tag--timeline"
                  :href="app.source"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <span class="icon">
                    <div class="i-fa-brands-github" />
                  </span>
                </a>
              </div>
            </article>
            <p v-if="app.description" class="timeline-description">
              {{ app.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { graphQLClient, gql } from "../api"

type Asset = {
  id: string
  url: string
}

type Tag = {
  id: string
  title: string
}

type App = {
  id: string
  title: string
  tags: Tag[]
  description: string
  link: string
  source: string
  screenshots: Asset[]
  createdAt: string
}

const client = graphQLClient()
const view = ref<"card" | "timeline">("card")

const formatDate = (value: string) => {
  if (!value) return ""
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ""
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "short",
  }).format(date)
}

const { data: apps } = await useAsyncData(async () => {
  const query = gql`
    {
      apps {
        id
        title
        createdAt
        tags {
          id
          title
        }
        screenshots {
          id
          url
        }
        description
        link
        source
      }
    }
  `
  const { apps } = await client.request<{ apps: App[] }>(query)
  return apps
})

const sortedApps = computed(() => {
  const items = apps.value ?? []
  const getTime = (value: string) => {
    const time = Date.parse(value)
    return Number.isNaN(time) ? 0 : time
  }
  return [...items].sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt))
})
</script>

<style scoped>
.titles {
  display: flex;
  align-items: baseline;
}
.titles > .subtitle {
  margin-left: 0.5rem;
}
.works {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}
.works--card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  row-gap: 32px;
  column-gap: 32px;
}
.works--timeline {
  --timeline-item-gap: 28px;
  display: flex;
  flex-direction: column;
  gap: var(--timeline-item-gap);
}
.view-switch {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.25rem;
}
.view-button {
  border: 1px solid var(--sub);
  background-color: #fff;
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
  font-size: 0.85rem;
  color: #555;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease;
}
.view-button.is-active {
  background-color: var(--sub);
  color: #fff;
  border-color: var(--sub);
}
.work {
  position: relative;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 10px var(--main-shadow);
  overflow: hidden;
}
.work .content {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 1rem 1rem 2.5rem;
}
.timeline-item {
  --timeline-dot-size: 10px;
  --timeline-gap: 8px;
  --timeline-meta-height: 0.75rem;
  --timeline-meta-gap: 0.45rem;
  --timeline-dot-offset: calc(
    (var(--timeline-meta-height) - var(--timeline-dot-size)) / 2
  );
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  column-gap: 16px;
  align-items: start;
  position: relative;
}
.timeline-rail {
  position: relative;
  align-self: stretch;
}
.timeline-dot {
  position: absolute;
  top: var(--timeline-dot-offset);
  left: 50%;
  transform: translateX(-50%);
  width: var(--timeline-dot-size);
  height: var(--timeline-dot-size);
  border-radius: 999px;
  background-color: var(--sub);
}
.timeline-line {
  position: absolute;
  top: calc(
    var(--timeline-dot-offset) + var(--timeline-dot-size) + var(--timeline-gap)
  );
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  bottom: calc(
    -1 * (var(--timeline-item-gap) + var(--timeline-dot-offset) -
          var(--timeline-gap))
  );
  background-color: rgba(0, 0, 0, 0.08);
}
.timeline-item:last-child .timeline-line {
  display: none;
}
.timeline-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.work--timeline {
  padding: 0.9rem 1rem;
}
.timeline-meta {
  font-size: 0.75rem;
  line-height: 1;
  color: #888;
  margin-bottom: var(--timeline-meta-gap);
  height: var(--timeline-meta-height);
}
.timeline-entry {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr) auto;
  align-items: start;
  gap: 0.9rem;
}
.timeline-thumb {
  width: 56px;
  height: 56px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.04);
  flex-shrink: 0;
}
.timeline-thumb > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.timeline-body {
  min-width: 0;
}
.timeline-body .title {
  word-break: break-word;
}
.timeline-description {
  margin-top: 0;
  font-size: 0.85rem;
  color: #888;
}
.github-tag--timeline {
  box-shadow: none;
  font-size: 0.75rem;
  padding: 0.2rem 0.4rem;
}
.tags {
  margin: -1.2rem 0 1rem;
}
.hashtag {
  font-size: 0.9rem;
  color: #777;
}
.hashtag {
  margin-top: 0.25rem;
  margin-right: 0.4rem;
}
.hashtag > span:first-child {
  margin-right: 0.1rem;
  color: var(--sub);
}

.image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: calc(100% * 9 / 20);
}
.image-wrapper > img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.icon {
  font-size: 16px;
  height: 20px;
  margin-left: 0.5em;
}
.github-tag {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.08);
}

@media (max-width: 720px) {
  .works--card {
    grid-template-columns: 1fr;
  }
  .timeline-item {
    grid-template-columns: 18px minmax(0, 1fr);
    column-gap: 12px;
  }
  .works--timeline {
    --timeline-item-gap: 24px;
  }
  .view-switch {
    flex-wrap: wrap;
  }
  .timeline-thumb {
    width: 48px;
    height: 48px;
  }
  .timeline-entry {
    grid-template-columns: 48px minmax(0, 1fr);
  }
  .github-tag--timeline {
    justify-self: start;
  }
}
</style>
