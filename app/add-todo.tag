<add-todo>

  <form onsubmit={ add }>
    <input name="input" onkeyup={ edit }>
    <button disabled={ !text }>Add #{ items.filter(whatShow).length + 1 }</button>
  </form>

  <script>

    this.edit = (e) => {
      this.text = e.target.value
    }

    this.idCounter = 1
    this.add = (e) => {
      if (this.text) {
        this.store.dispatch({ type: 'ADD_TODO', text: this.text, id: this.idCounter++ })
        this.text = this.input.value = ''
      }
    }

    this.mixin('store')
  </script>
</add-todo>
