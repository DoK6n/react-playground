export interface Geo {
  lat: string;
  lng: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

/*
첫번째 방법, Pick<UserInfo, keyof UserInfo>['id']를 사용하여 keyof UserInfo의 모든 속성을 선택한 다음 
통합 유형 구문(['id'])을 사용하여 해당 속성의 하위 집합을 선택합니다. 
이 구문은 조건에 따라 속성의 하위 집합을 선택하려는 경우 또는 속성의 이름을 미리 알지 못하는 경우에 유용합니다.

두번째 방법, Pick<UserInfo, 'id'>['id']는 유형에 포함할 속성('id') 을 직접 지정합니다.
이 구문은 포함하려는 속성의 이름을 알고 있고 선택하기 위해 어떤 조건도 사용할 필요가 없을 때 유용합니다.

두 방법 모두 일반적으로 사용되며 두 방법 중 선택은 특정 사용 사례와 개인 선호도에 따라 다릅니다. 
포함하려는 속성의 이름을 알고 있으면 두번째 방법이 간단하고 읽기 쉽습니다. 
조건에 따라 속성의 하위 집합을 선택해야 하는 경우 첫번째 방법이 더 적합할 수 있습니다.
 */
// export type UserId = Pick<UserInfo, 'id'>['id'];
export type UserId = Pick<UserInfo, keyof UserInfo>['id'];

export interface Post {
  userId: number;
  id: number | string;
  title: string;
  body: string;
}

export interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}
