require('./todo.tag')


<todo-list>

  <ul>
    <li each={ todos }>
      <todo text={ text } completed={ completed } ontoggle={ toggleTodo } />
    </li>
  </ul>

  <style>
    todo .completed { text-decoration: line-through }
  </style>

  <script>

    const getVisibleTodos = (todos, filter) => {
      switch (filter) {
        case 'SHOW_ACTIVE':
          return todos.filter(t => !t.completed)
        case 'SHOW_COMPLETED':
          return todos.filter(t => t.completed)
        default:
          return todos
      }
    }

    this.toggleTodo = (e) => {
      var item = e.item
      this.store.dispatch({ type: 'TOGGLE_TODO', id: item.id })
    }

    this.on('update', () => {
      const { todos, visibilityFilter } = this.store.getState()
      this.todos = getVisibleTodos(todos, visibilityFilter)
    })

    this.mixin('store')

    this.unsubscribe = this.store.subscribe(() => {
      this.update()
    })
  </script>
</todo-list>
