import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ymibiio2',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'PRIVATE_API_TOKEN',
  useCdn: false,
})
