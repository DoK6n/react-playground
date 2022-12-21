/**
 * 타입 정의
 *
 * @typedef {'counter/SET_DIFF'} SET_DIFF
 * @typedef {'counter/INCREASE'} INCREASE
 * @typedef {'counter/DECREASE'} DECREASE
 *
 * @typedef {{number: number, diff: number}} State
 *
 * @typedef {{type: INCREASE}} Increase
 * @typedef {{type: DECREASE}} Decrease
 * @typedef {{type: SET_DIFF, diff: number}} SetDiff
 *
 * @typedef {Increase | Decrease | SetDiff} Action
 *
 * @typedef {(diff: number) => ChangeText} SetDiffAction
 * @typedef {() => INCREASE} IncreaseAction
 * @typedef {() => DECREASE} DecreaseAction
 *
 * @typedef {(state: State, action: Action) => State} CounterReducer
 */

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수 만들기
/** @type {SetDiffAction} */
export const setDiff = (diff) => ({ type: SET_DIFF, diff });

/** @type {Increase} */
export const increase = () => ({ type: INCREASE });

/** @type {Decrease} */
export const decrease = () => ({ type: DECREASE });

// 초기 상태 선언
/** @type {State} */
const initialState = {
  number: 0,
  diff: 1
};

// 리듀서 선언
/** @type {CounterReducer} */
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state;
  }
}
