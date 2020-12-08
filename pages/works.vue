<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Works</h2>

      <ul class="works">
        <li class="work" v-for="app in apps" :key="app.id">
          <article>
            <div class="image-wrapper">
              <img v-bind:src="app.screenshots[0].url" />
            </div>
            <div class="content">
              <h3 class="title is-4">{{ app.title }}</h3>
              <div class="tags">
                <span class="tag" v-for="tag in app.tags" :key="tag.id">{{ tag.title }}</span>
              </div>
              <p>{{ app.description }}</p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.works {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 32px;
  column-gap: 32px;
}
@media screen and (min-width: 834px) {
  .works {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.work {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 10px var(--main-shadow);
  overflow: hidden;
}
.work .content {
  padding: 1rem;
}
.tags {
  margin: 1rem 0 .5rem;
}
.tag {
  background-color: var(--white);
  border: 1px solid var(--sub);
}
.tag:not(:first-child) {
  margin-left: .25rem;
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
</style>

<script lang="ts">
import Vue from 'vue'
import { Component } from "nuxt-property-decorator"
import { graphQLClient, gql } from "../api"

type App = {
  title: string
  tags: Tag[]
  description: string
  link: string
  source: string
  screenshots: Asset[]
}

type Asset = {
  id: string
  url: string
}

type Tag = {
  id: string
  title: string
}

@Component
export default class Works extends Vue {
  async asyncData(): Promise<{ apps: App[] }> {
    const query = gql`
      {
        apps {
          title
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
    const { apps } = await graphQLClient.request<{ apps: App[] }>(query)

    return {
      apps
    }
  }
}
</script>
