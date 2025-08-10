import { faker } from '@faker-js/faker'

export function generateUser() {
  const first = faker.person.firstName()
  const last = faker.person.lastName()
  const name = `${first} ${last}`
  const email = `test.${first.toLowerCase()}.${Date.now()}@example.com`
  return {
    name,
    email,
    password: 'Test@1234'
  }
}

export default { generateUser }