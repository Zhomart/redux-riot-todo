require('./todo-list.tag')
require('./add-todo.tag')
require('./footer.tag')


<todo-app>

  <h3>{ opts.title }</h3>

  <todo-list />

  <add-todo />

  <footer />

</todo-app>
