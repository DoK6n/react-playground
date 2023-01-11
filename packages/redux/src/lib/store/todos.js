// @ts-check
/**
 * @typedef { import("../../types").TodoState } TodoState
 * @typedef { import("../../types").ADD_TODO } ADD_TODO
 * @typedef { import("../../types").TOGGLE_TODO } TOGGLE_TODO
 * @typedef { import("../../types").AddTodoCreateAction } AddTodoCreateAction
 * @typedef { import("../../types").ToggleTodoCreateAction } ToggleTodoCreateAction
 * @typedef { import("../../types").AddTodoAction } AddTodoAction
 * @typedef { import("../../types").ToggleTodoAction } ToggleTodoAction
 * @typedef { import("../../types").TodoAction } TodoAction
 * @typedef { import("../../types").TodosReducer } TodosReducer
 */

/** @type {ADD_TODO} */
const ADD_TODO = 'todos/ADD_TODO';

/** @type {TOGGLE_TODO} */
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1; // todo 데이터에서 사용 할 고유 id\

/** @type {AddTodoCreateAction} */
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    text,
  },
});
/** @type {ToggleTodoCreateAction} */
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

/** @type {TodoState[] | []} */
const initialState = [];

/** @type {TodosReducer} */
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({ ...action.todo, done: false });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    default:
      return state;
  }
}
