import { User } from './models/User'

const user = new User({ name: 'myName', age: 36  })

user.on('change', () => {})
user.on('change', () => {})
user.on('randomManIndustries', () => {})

console.log(user)