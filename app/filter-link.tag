require('./active-link.tag')


<filter-link>

  <span style="border:1px solid red;">
    <active-link active={active} clicked={onclick} title={opts.filter}>
      <yield />
    </active-link>
  </span>


  <script>

    this.onclick = (e) => {
      this.store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: this.opts.filter })
    }

    this.on('update', () => {
      this.active = this.opts.filter !== this.store.getState().visibilityFilter
    })

    this.mixin('store')

    this.store.subscribe(() => {
      this.update()
    })
  </script>

</filter-link>
