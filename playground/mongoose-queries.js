const { ObjectID } = require('mongodb');
const { moongoose } = require('../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '59555a3d620aa33429b1a483';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   return console.log('Todo By Id', todo);
// }).catch(e => console.log(e));

const id = '5953f5405efc05b034dd38a1';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('user not found');
  }
  return console.log('User by Id', user)
}).catch(e => console.log(e));
