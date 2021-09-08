export const STRAPI_URL = process.env.STRAPI_URL || 'localhost:3000'
export const NEXT_PUBLIC_STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || 'localhost:3000'
export const NEXT_PUBLIC_HOST_URL =
  process.env.NEXT_PUBLIC_HOST_URL || 'localhost:3000'

export const STRAPI_USERNAME = process.env.STRAPI_USERNAME

export const STRAPI_PASSWORD = process.env.STRAPI_PASSWORD

export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY 

export const STRAPI_TOKEN = process.env.STRAPI_TOKEN 

console.log({
  STRAPI_URL,
  NEXT_PUBLIC_STRAPI_URL,
  NEXT_PUBLIC_HOST_URL,
  STRAPI_USERNAME,
  STRAPI_PASSWORD,
  STRIPE_SECRET_KEY,
  STRAPI_TOKEN,
})


