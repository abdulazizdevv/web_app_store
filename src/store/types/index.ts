export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface IRedux {
  auth: {
    user: IUser;
    access_token: string;
  };
}
