// import { createClient } from "contentful";
import { GraphQLClient } from "graphql-request"
export { gql } from "graphql-request"

if (!process.env.GRAPHCMS_ENDPOINT) {
  throw new Error()
}

export const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)
