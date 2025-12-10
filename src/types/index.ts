
export type T_ErrorHandler = (err: Error | unknown) => void;

type T_UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {lat: string, lng: string}
}

type T_UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type T_User = {
  id: number;
  name: string;
  username: string;
  address:T_UserAddress
  company: T_UserCompany
  email: string
  website: string
}

export type T_Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}