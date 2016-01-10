const Redux = require('redux')

const todos = require('./todos.js')
const visibilityFilter = require('./visibilityFilter.js')



const todoRx = Redux.combineReducers({
  todos,
  visibilityFilter
})

module.exports = todoRx
