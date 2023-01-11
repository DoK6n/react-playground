/**
 *
 * @example
 * ```js
 * const myThunk = () => (dispatch, getState) => {
 *   dispatch({ type: 'HELLO' });
 *   dispatch({ type: 'BYE' });
 * }
 * dispatch(myThunk());
 * ```
 * 
 * @type {import("redux").Middleware}
 */
const thunk = (store) => (next) => (action) =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);

export default thunk;