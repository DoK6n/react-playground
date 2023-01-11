// Todo Types

// 액션 상수
type ADD_TODO = 'todos/ADD_TODO';
type TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 상태값 타입
export interface TodoState {
  id: number;
  text: string;
  done: boolean;
}

// 액션 객체
export interface AddTodoAction {
  type: ADD_TODO;
  todo: { id: number; text: string };
}
export interface ToggleTodoAction {
  type: TOGGLE_TODO;
  id: number;
}

// 액션 생성 함수
export type AddTodoCreateAction = (text: string) => AddTodoAction;
export type ToggleTodoCreateAction = (id: number) => ToggleTodoAction;

export type TodoAction = AddTodoAction | ToggleTodoAction;

export type TodosReducer = (
  state: TodoState[],
  action: TodoAction,
) => TodoState[];

// Counter Types

// 액션 상수
export type SET_DIFF = 'counter/SET_DIFF';
export type INCREASE = 'counter/INCREASE';
export type DECREASE = 'counter/DECREASE';

// 상태값 타입
export interface CounterState {
  number: number;
  diff: number;
}

// 액션 객체
export interface SetDiffAction {
  type: SET_DIFF;
  diff: number;
}
export interface IncreaseAction {
  type: INCREASE;
}
export interface DecreaseAction {
  type: DECREASE;
}

// 액션 생성 함수
export type SetDiffCreateAction = (diff: number) => SetDiffAction;
export type IncreaseCreateAction = () => IncreaseAction;
export type DecreaseCreateAction = () => DecreaseAction;

export type CounterAction = SetDiffAction | IncreaseAction | DecreaseAction;

export type CounterReducer = (
  state: CounterState,
  action: CounterAction,
) => CounterState;
