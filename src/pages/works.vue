<template>
  <section class="section">
    <div class="container">
      <div class="titles">
        <h2 class="title">Works</h2>
        <p class="subtitle is-6 has-text-grey">つくったもの</p>
      </div>

      <ul class="works">
        <li v-for="app in apps" :key="app.id" class="work">
          <article>
            <div class="image-wrapper">
              <img :src="app.screenshots[0].url" />
            </div>
            <div class="content">
              <h3 v-if="app.link" class="title is-4">
                <a target="_blank" rel="nofollow noopener" :href="app.link">
                  {{ app.title }}<fa class="icon" :icon="faLink" />
                </a>
              </h3>
              <h3 v-else class="title is-4">
                {{ app.title }}
              </h3>
              <div class="tags">
                <span v-for="tag in app.tags" :key="tag.id" class="hashtag">
                  <fa :icon="faHashtag" />{{ tag.title }}
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
                <span class="icon"><fa :icon="faGithub" /></span>
                <span>GitHub</span>
              </a>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.titles {
  display: flex;
  align-items: baseline;
}
.titles > .subtitle {
  margin-left: 0.5rem;
}
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
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 10px var(--main-shadow);
  overflow: hidden;
}
.work .content {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 1rem 1rem 2.5rem;
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
.hashtag > svg {
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
</style>

<script lang="ts">
import Vue from "vue"
import { Component } from "nuxt-property-decorator"
import { graphQLClient, gql } from "../api"
import { faHashtag, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"

type App = {
  id: string
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
  public faHashtag = faHashtag
  public faLink = faExternalLinkAlt
  public faGithub = faGithubSquare

  async asyncData(): Promise<{ apps: App[] }> {
    const query = gql`
      {
        apps {
          id
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
      apps,
    }
  }
}
</script>
