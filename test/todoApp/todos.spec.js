'use strict';

const expect = require('expect');
const deepFreeze = require('deep-freeze');

const todos = require('./../../app/todoApp/todos.js');


describe('todoApp', () => {

  describe('todos', () => {

    it('returns current state for unknown actions', () => {
      const state = 'current state'
      const action = {}

      expect(
        todos(state, action)
      ).toEqual(state)
    })

    it('returns default state', () => {
      const state = undefined
      const action = {}
      const defaultState = []

      expect(
        todos(state, action)
      ).toEqual(defaultState)
    })

    it('adds todo', () => {
      const stateBefore = []
      const action = { type: 'ADD_TODO', id: 1, text: 'my todo 1' }
      const stateAfter = [
        { id: 1, text: 'my todo 1', completed: false }
      ]

      deepFreeze(stateBefore)
      deepFreeze(action)

      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter)
    })

    it('toggles todo', () => {
      const stateBefore = [
        { id: 0, text: 'todo0', completed: false },
        { id: 1, text: 'todo1', completed: false },
        { id: 2, text: 'todo2', completed: true }
      ]
      const action = { type: 'TOGGLE_TODO', id: 1 }
      const stateAfter = [
        { id: 0, text: 'todo0', completed: false },
        { id: 1, text: 'todo1', completed: true },
        { id: 2, text: 'todo2', completed: true }
      ]

      deepFreeze(stateBefore)
      deepFreeze(action)

      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter)
    })

  }) // reducer todos


})
