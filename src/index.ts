import { User } from './models/User';

const user = new User({ name: 'new record', age: 42})

user.on('change', () =>{
    console.log('User was updated');
})

user.trigger('change')