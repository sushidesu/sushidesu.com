import { GraphQLClient } from "graphql-request"
export { gql } from "graphql-request"

export const graphQLClient = () => {
  const config = useRuntimeConfig()

  if (!config.public.hygraphEndpoint) {
    throw new Error("Please set HYGRAPH_ENDPOINT to runtime config")
  }
  return new GraphQLClient(config.public.hygraphEndpoint)
}
