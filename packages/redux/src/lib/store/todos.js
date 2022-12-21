/**
 * 타입 정의
 *
 * @typedef {'todos/ADD_TODO'} ADD_TODO
 * @typedef {'todos/TOGGLE_TODO'} TOGGLE_TODO
 *
 * @typedef {{id: number, text: string, done: boolean}} TodoState
 *
 * @typedef {{type: ADD_TODO, todo: {id: number, text: string}}} AddTodo
 * @typedef {{type: TOGGLE_TODO, id: number}} ToogleTodo
 *
 * @typedef {AddTodo | ToogleTodo} Action
 *
 * @typedef {(text: string) => AddTodo} AddTodoAction
 * @typedef {(id: number) => ToogleTodo} ToggleTodoAction
 *
 * @typedef {(state: TodoState[], action: Action) => TodoState[]} TodosReducer
 */

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1; // todo 데이터에서 사용 할 고유 id\

/** @type {AddTodoAction} */
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    text
  }
});
/** @type {ToggleTodoAction} */
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

/** @type {TodoState[]} */
const initialState = [];

/** @type {TodosReducer} */
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
