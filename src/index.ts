import { User } from './models/User'

const user = new User({ name: 'myName', age: 36  })

user.on('change', () => {
    console.log('Change number 1')
})
user.on('change', () => {
    console.log('Change number 2')
})
user.on('randomManIndustries', () => {
    console.log('You got a random job, we will solve it')
})

// user.trigger();