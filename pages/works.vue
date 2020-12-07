<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2 class="title">Works</h2>
        <div>
          <div class="card" v-for="app in apps" :key="app.id">
            <div class="card-content ">
              <h3 class="title is-4">{{ app.title }}</h3>
              <div class="image-wrapper">
                <img v-bind:src="app.screenshots[0].url" />
              </div>
              <div class="content">
                <div class="tags">
                  <span class="tag" v-for="tag in app.tags" :key="tag.id">{{ tag.title }}</span>
                </div>
                <p>{{ app.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card:not(:last-child) {
  margin-bottom: 1rem;
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
  padding-bottom: calc(100% * 3 / 4);
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
