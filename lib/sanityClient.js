import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'df7o5xxk',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skaYIU4kgECQFxBLRE5LkFKS9LdilTQvdJyYRMj6QMBkUs3PImTp5QRPzjWoNydzWWUgFa6Isy8n6tUhzjfXx9VPJEr1SomC7iQdcuKXjLjJyjQjtvncW7Y7u3xFFXbxqpRbX6oaPTpMyZUmENv9hsSngszbHB881FjZFLBlfc92KPDnLsGp',
  useCdn: false,
})
