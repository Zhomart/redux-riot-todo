// Available filters:
// - SHOW_ALL
// - SHOW_ACTIVE
// - SHOW_COMPLETED


const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}


module.exports = visibilityFilter
