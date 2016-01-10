require('./todo-app.tag')

const Redux = require('redux')

const todoApp = require('./todoApp/todoApp.js')
const todoAppStore = Redux.createStore(todoApp)

const StoreMixin = {
  store: todoAppStore
}

riot.mixin('store', StoreMixin)

riot.mount('todo-app', {
  title: 'I want to believe!'
});
