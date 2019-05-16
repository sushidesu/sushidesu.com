import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

export const fetchEntries = content_type => client.getEntries({ content_type })
