import { GraphQLClient } from "graphql-request"
export { gql } from "graphql-request"

export const graphQLClient = () => {
  const config = useRuntimeConfig()

  if (!config.public.hygraphEndpoint) {
    throw new Error()
  }
  return new GraphQLClient(config.public.hygraphEndpoint)
}

