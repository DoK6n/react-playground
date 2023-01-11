/**
  store - 리덕스 스토어 인스턴스. 이 안에 dispatch, getState, subscribe 내장함수들이 존재.  
  next - 액션을 다음 미들웨어에게 전달하는 함수. next(action) 이런 형태로 사용. 만약 다음 미들웨어가 없다면 리듀서에게 액션을 전달. 만약에 next 를 호출하지 않게 된다면 액션이 무시처리되어 리듀서에게로 전달되지 않음.  
  action - 현재 처리하고 있는 액션 객체.
 * @type {import("redux").Middleware}
 */
const logger = (store) => (next) => (action) => {
  // 미들웨어 기본 구조
  const prevState = store.getState();
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달합니다.
  // next 함수를 쓰지 않으면 리듀서에게 전달이 되지 않기 때문에 액션이 무시 됨
  // next 함수를 기준으로 이전이 이전 상태, 이후가 다음 상태
  const nextState = store.getState();

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    fractionalSecondDigits: 3,
    hour12: false,
    timeZone: 'Asia/Seoul',
  };

  const now = new Intl.DateTimeFormat('en-US', options).format(new Date());

  console.group(
    `%caction %c${action && action.type} %c${now}`,
    'color: #4c475f;',
    'color: #b8bdf2;',
    'color: #4c475f;',
  ); // 액션 타입을 그룹명으로 설정
  console.log(' %cprev state', 'color: #4c475f; font-weight: bold;', prevState);
  console.log(' %caction    ', 'color: #7b86be; font-weight: bold;', action);
  console.log(' %cnext state', 'color: #aa9ae1; font-weight: bold;', nextState);
  console.groupEnd(); // 그룹 끝

  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined

  // return typeof action === 'function'
  //   ? action(store.dispatch, store.getState)
  //   : next(action)
};

export default logger;
