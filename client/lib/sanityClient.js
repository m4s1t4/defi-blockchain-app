import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ymibiio2',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skPI53trwVfw5Ex0dzioGJMclqjo0au6QmY2zcksVe4SajHBp0JartC4PCt0YABdVmBxYFg5mwtbAdGkexh2VgQ766HzoIE1Ie7L4l26MZ7NZ5bHTM1AyM8jAMNBmTtQ4sRZhswbHKDEuS5cTgPnnih6WzhlA2221Y8lZawh2aWg0gWsw11y',
  useCdn: false,
})
