export interface IUser {
    name?: string,
    email: string,
    password: string,
}

export interface ISession {
    email: string;
    expiredAt: Date;
}

export type AuthContextType = {
    users: IUser[];
    session: ISession | null;
    createUser: (user: IUser) => void;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

export type AuthContextStorageType = {
    users: IUser[];
    session: ISession | null;
}

// Helper Type Function
export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        };
  };
  