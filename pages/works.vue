<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2 class="title">Works</h2>
        <div>
          <div class="card" v-for="work in works" :key="work.id">
            <div class="card-content ">
              <h3 class="title is-4">{{ work.title }}</h3>
              <div>
                <span class="tag" v-for="tag in work.tags" :key="tag">{{ tag }}</span>
              </div>
              <p>{{ work.description }}</p>
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
.tag {
  background-color: var(--white);
  border: 1px solid var(--sub);
}
.tag:not(:first-child) {
  margin-left: .5rem;
}
</style>

<script>
import { graphQLClient, gql } from "../api"

export default {
  async asyncData ({ params }) {
    const query = gql`
      {
        works {
          id
          title
          description
          tags
        }
      }
    `
    const { works } = await graphQLClient.request(query)

    return {
      works: works
    }
  }
}
</script>
