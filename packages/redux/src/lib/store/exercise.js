import { createStore } from 'redux';

/**
 * 타입 정의
 *
 * @typedef {{counter: number, text: string, list: Array}} State
 * @typedef {{type: INCREASE}} Increase
 * @typedef {{type: DECREASE}} Decrease
 * @typedef {{type: CHANGE_TEXT, text: string}} ChangeText
 * @typedef {{type: ADD_TO_LIST, item: Array}} AddToList
 * @typedef {(text: string) => ChangeText} ChangeTextAction
 * @typedef {(item: string) => AddToList} AddToListAction
 * @typedef {() => Increase | Decrease} DefaultAction
 * @typedef {Increase | Decrease | ChangeText | AddToList} Action
 */

// 리덕스에서 관리 할 상태 정의
/** @type {State} */
const initialState = {
  counter: 0,
  text: '',
  list: []
};

// 액션 타입 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성함수 정의

/** @type {DefaultAction} */
const increase = () => ({
  type: INCREASE
});

/** @type {DefaultAction} */
const decrease = () => ({
  type: DECREASE
});

/** @type {ChangeTextAction} */
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text
});

/** @type {AddToListAction} */
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item
});

/** 리듀서
 * 위 액션 생성함수를 통해 만들어진 객체를 참조하여 새로운 상태를 만들고 관리하는 함수
 *
 * @param {initialState} state
 * @param {Action} action
 * @return {State}
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      };

    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log('listener', state);
};

// 구독을 해제하는 방법
const unsubscribe = store.subscribe(listener);

// 액션을 디스패치해서 상태값 업데이트
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));

console.log('스토어 상태값', store.getState());
