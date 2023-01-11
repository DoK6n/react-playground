/**
 * @typedef { import("../../types").CounterState } CounterState
 * @typedef { import("../../types").SET_DIFF } SET_DIFF
 * @typedef { import("../../types").INCREASE } INCREASE
 * @typedef { import("../../types").DECREASE } DECREASE
 * @typedef { import("../../types").SetDiffAction } SetDiffAction
 * @typedef { import("../../types").IncreaseAction } IncreaseAction
 * @typedef { import("../../types").DecreaseAction } DecreaseAction
 * @typedef { import("../../types").SetDiffCreateAction } SetDiffCreateAction
 * @typedef { import("../../types").IncreaseCreateAction } IncreaseCreateAction
 * @typedef { import("../../types").DecreaseCreateAction } DecreaseCreateAction
 * @typedef { import("../../types").CounterAction } CounterAction
 * @typedef { import("../../types").CounterReducer } CounterReducer
 */

/** @type {SET_DIFF} */
const SET_DIFF = 'counter/SET_DIFF';
/** @type {INCREASE} */
const INCREASE = 'counter/INCREASE';
/** @type {DECREASE} */
const DECREASE = 'counter/DECREASE';

// 액션 생성함수 만들기
/** @type {SetDiffCreateAction} */
export const setDiff = (diff) => ({ type: SET_DIFF, diff });

/** @type {IncreaseCreateAction} */
export const increase = () => ({ type: INCREASE });

/** @type {DecreaseCreateAction} */
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};

// 초기 상태 선언
/** @type {CounterState} */
const initialState = {
  number: 0,
  diff: 1,
};

// 리듀서 선언
/** @type {CounterReducer} */
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
