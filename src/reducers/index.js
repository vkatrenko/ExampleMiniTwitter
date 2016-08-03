import { combineReducers } from 'redux'
import page from './page'
import user from './user'

export default combineReducers({
  page,
  user
})


//   user: [1, 2, 3],
//   userById: {
//     1: {
//       id: 1,
//       name: 'Theodore Roosevelt'
//     },
//     2: {
//       id: 2,
//       name: 'Abraham Lincoln'
//     },
//     3: {
//       id: 3,
//       name: 'George Washington'
//     }
//   }
// };

// export default function userstate(state = initialState) {
//   return state;
// }
